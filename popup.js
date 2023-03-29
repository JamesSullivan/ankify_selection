const injectFile = document.getElementById('inject-file');
const injectFunction = document.getElementById('inject-function');

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

injectFile.addEventListener('click', async () => {
  const tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});


function showAlert_original(givenName) {
  alert(`Hello, ${givenName}  ${window.getSelection().toString()}`);
}

function translationTab(givenName) {
  target = window.getSelection().toString();
  target_url = "https://translate.google.com/?sl=ja&tl=en&op=translate&text=" +　encodeURIComponent(target);
  // chrome.tabs.create({url: target_url, selected: false, active: false});
  console.log(target_url);
  window.open(target_url, "_blank");
  async () => {
    const tab = await getCurrentTab();
    alert(`Hello, ${givenName}  ${window.getSelection().toString()}`);
  }
}

injectFunction.addEventListener('click', async () => {
  const tab = await getCurrentTab();

  const name = 'Translation Tab';
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: translationTab,
    args: [name]
  });
});

// chrome.tabs.create({url: target_url, selected: false, active: false});