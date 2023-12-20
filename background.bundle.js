/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


console.log("connected...");

let prompt = "";

// On Message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "setPrompt") {
        prompt = request.prompt;
    } else if (request.message === "getPrompt") {
        sendResponse({ prompt: prompt });
        prompt = ""; // Reset prompt
    }
});
/******/ })()
;
//# sourceMappingURL=background.bundle.js.map