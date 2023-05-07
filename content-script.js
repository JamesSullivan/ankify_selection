
// Parse Text in Googled Translation Page
// https://translate.google.com/?sl=ja&tl=en&op=translate&text=%E4%BA%8B%E6%A5%AD
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const text = urlParams.get('text')
const doc = window.document;
const reading = doc.querySelector('div.kO6q6e').textContent;
const meaning1 = doc.querySelector('span.ryNqvb').textContent;
const possibleSpan = doc.querySelector("tbody.U87jab");
let meaning2 = "";
if (possibleSpan) {
  meaning2 = possibleSpan.innerText;
}

// Generate Anki Import File and save it to disk (Downloads folder)
// Requires Anki 2.1.55 or later
// https://docs.ankiweb.net/importing.html
content = "#separator:Comma\r\n#html:true\r\n#notetype column:1\r\n"
content =  content + 'Japanese-Front,<div class="hidden" style="visibility: hidden;">' + text + '</div>, ' + text + '<br>' +  reading + '<br>' + meaning1 + '<br>' + meaning2.replace(/,/gi,';') + '\r\n';
content = content + 'Japanese-Back,' + text + '<br><br>{{c1::' + text + '}}<br>,' + reading + '<br>' + meaning1 + '<br>' + meaning2.replace(/,/gi,';');

const downloadFile = (content) => {
  const link = document.createElement("a");
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  fileName = reading.replace('\'', '') + ".txt"
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
};
downloadFile(content);