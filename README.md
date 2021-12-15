## Book My Show Parser
### what will this do
Based on the inputs, this script keeps on reloading the webpage until all the conditions specified were met and then plays an audio.<br />
The script's url is given such that it is available for any movie that is listed in the site. Better enable this script only when required.<br />
Else it will try to reload the page/play the music according to the inputs.<br />

### How to use it?
In the very first lines, the date, theatre, interval and the audio link should be updated according to the use case.
1) Date: a required field, indicates the date for which the movie tickets should be checked for.
2) Theatre: You need to enter the theatres you are looking for here, in the same format you see in the javascript file. You can enter as many as you want
3) Interval: a required field, indicates the time period (in sec) between consecutive page reloads.
4) Audio link: also required field, indicates the audio file to be played when the tickets are available for the given date and theatre.

### known issues:
- The device shouldnt go to sleep/locked state while running the script.
- Autoplay should be enabled in the bookmyshow website before using this.
- The browser tab should be left open for this extension to work.

#### Note: This script was tested on Edge Version 96.0.1054.57 (64-bit) and 
