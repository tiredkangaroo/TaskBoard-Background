// ==UserScript==
// @name         Tasksboard Background
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tasksboard.com/app
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("domcontentloaded", () => {
        document.body.style.background = "url(https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg)"
    })
})();
