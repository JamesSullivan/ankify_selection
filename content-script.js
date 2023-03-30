
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const text = urlParams.get('text')
const doc = window.document;
const reading = doc.querySelector('div.kO6q6e').textContent;
const meaning1 = doc.querySelector('span.ryNqvb').textContent;
// const possibleSpan = doc.querySelector("span.kgnlhe");
const possibleSpan = doc.querySelector("tbody.U87jab");
let meaning2 = "";
if (possibleSpan) {
  meaning2 = possibleSpan.innerText;
}
navigator.clipboard.writeText(text + '\r\n ' + reading + '\r\n ' + meaning1)
  .then(() => {
    console.log(`Text copied to clipboard: ${text}`);
  })
  .catch((err) => {
    console.error(`Failed to copy text: ${err}`);
  });
content = '[sound:' + reading + '.mp3], "' + text + '<br>' + reading + '<br>' + meaning1 + '<br>' + meaning2 + '"<br>[sound:' + reading + '.mp3]\r\n';
content = content + text + ', "' + text + '<br>' + reading + '<br>' + meaning1 + '<br>' + meaning2 + '"<br>[sound:' + reading + '.mp3]\r\n';
// alert('File test alert ' + text + ' ' + reading + ' ' + meaning1 + ' ' );

const downloadFile = (content) => {
  const link = document.createElement("a");
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = reading + ".txt";
  link.click();
  URL.revokeObjectURL(link.href);
};
downloadFile(content);