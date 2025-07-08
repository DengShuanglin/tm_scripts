// ==UserScript==
// @name         Remove Bilibili Adblock Tip
// @namespace    http://tampermonkey.net/
// @version      2025-07-08
// @description  移除哔哩哔哩网站的广告屏蔽提示
// @author       Thorin
// @match        https://www.bilibili.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  // 该脚本用于移除哔哩哔哩网站的广告屏蔽提示
  // div的class是adblock-tips
  const adblockTip = document.querySelector(".adblock-tips");
  if (adblockTip) {
    adblockTip.remove();
  }
})();

