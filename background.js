// Chrome Extension related JS


// Google Translate URL - change this to for other languages
const GTranslateURL = "https://translate.google.com/?sl=ja&tl=en&op=translate&text="

// Helper function to open the new tab with Google Translate
function newTab(info,tab)
{
  const { menuItemId } = info

  if (menuItemId === 'ankify'){
    chrome.tabs.create({
      url: GTranslateURL +　encodeURIComponent(info.selectionText.trim())
    });

  }
};

// Set up the right click context menu Option,  the 'on click' command is no longer valid in manifest version 3
chrome.contextMenus.create({
  title: "Ankify selection",
  id: "ankify",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(newTab);


// Helper function to get tab in use
async function getCurrentTab() {
	const queryOptions = { active: true, lastFocusedWindow: true };
	const [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}
    
// When the page is loaded activate the content-script.js
chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
	if (!url.startsWith(GTranslateURL)) return;
	const { options } = await chrome.storage.local.get('options');

	const tab = await getCurrentTab();
	setTimeout(function() {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ['content-script.js']
		});
	      
	}, 2000);
});