// ==UserScript==
// @name         Remove disable adblock tip
// @namespace    http://tampermonkey.net/
// @version      2025-07-23
// @description  移除所有在网页上提示禁用Adblock的元素
// @author       Thorin
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const classNameList = [
    "adblock-tips", // bilibili
    "ArchonLayout_stickyFooterAd", // Archon
  ];
  classNameList.forEach((className) => {
    // 使用属性选择器来匹配包含指定类名的元素（处理hash值的情况）
    const elements = document.querySelectorAll(`[class*="${className}"]`);
    console.log(elements);
    elements.forEach((element) => {
      element.remove();
    });
  });
})();

