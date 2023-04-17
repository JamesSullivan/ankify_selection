# ankify_selection

Requires [Anki 2.1.55](https://apps.ankiweb.net/) or later

Chrome extension to quickly get English translations of foreign language words and create a file that can be imported into Anki. The code is set up for Japanese to English but the parameters for the translate.google.com url in the background.js file can be easily modified forother languages. Two questions are created, the first prompting with the pronunciation of the word, while the second question has the word to be read. 

## Installation
Ensure that [this folder has been installed as a Chrome extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).

For speech you need to install the [HyperTTS](https://ankiweb.net/shared/info/111623432) addon to Anki. You also need to create two Note Types in Anki:

'Japanese-Front' from Basic with Card Type -> Front Template

<code>{{Front}}

{{tts ja_JP hypertts_preset=Front_realtime_1 voices=HyperTTS:Front}}</code>

and 

'Japanese-Back' from Cloze with Card Type -> Back Template

<code>{{cloze:Text}}<br>
{{Extra}}

{{tts ja_JP hypertts_preset=Back_realtime_5 voices=HyperTTS:cloze-only:Text}}</code>

## Usage
While using Chrome select any word and then right click and select `Ankify Selection` from the menu. 

This will open the Google Translation Tab and save a file named after the word selected to the Downloads folder. This file can then be imported into Anki using File -> Import.

<video src="https://github.com/JamesSullivan/ankify_selection/usage.mov" controls="controls" style="max-width: 730px;"></video>

## References
- [https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)

- [https://developer.chrome.com/docs/extensions/reference/contextMenus/](https://developer.chrome.com/docs/extensions/reference/contextMenus/)
