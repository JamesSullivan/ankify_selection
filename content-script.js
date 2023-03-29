
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const text = urlParams.get('text')

alert('File test alert ' + text);
