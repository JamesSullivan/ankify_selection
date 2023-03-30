
//Setting up the function to open the new tab
function newTab(info,tab)
{
  const { menuItemId } = info

  if (menuItemId === 'ankify'){
    chrome.tabs.create({
      url: "https://translate.google.com/?sl=ja&tl=en&op=translate&text=" +　encodeURIComponent(info.selectionText.trim())
    });

  }
};

//create context menu options.  the 'on click' command is no longer valid in manifest version 3

chrome.contextMenus.create({
  title: "Japanese to English",
  id: "ankify",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(newTab);

async function getCurrentTab() {
	const queryOptions = { active: true, lastFocusedWindow: true };
	const [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}
    

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
	if (!url.startsWith("https://translate.google.com/?sl=ja&tl=en&op=translate&text=")) return;
	const { options } = await chrome.storage.local.get('options');

	const tab = await getCurrentTab();
	setTimeout(function() {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ['content-script.js']
		});
	      
	}, 2000);

	// var imgurl = "https://www.google.com.hk/images/srpr/logo11w.png";
	// chrome.downloads.download({url:imgurl},function(downloadId){
	//     console.log("download begin, the downId is:" + downloadId);
	// });
 });
      



