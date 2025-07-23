// ==UserScript==
// @name            "ポストを作成"カラムを開いたままにする
// @namespace       https://github.com/hitohorobe/better-xpro
// @version         1.0.0
// @description     「ポストを作成」ボタンを自動クリック（無効な場合は除外）
// @author          hitohorobe
// @match           https://pro.twitter.com/*
// @match           https://pro.x.com/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    function clickPostButton() {
        const button = document.querySelector('button[aria-label="ポストを作成"]');
        if (button && button.getAttribute('aria-disabled') !== 'true') {
            console.log('Clicking "ポストを作成" button...');
            button.click();
        }
    }

    // 初期ロード時に実行
    clickPostButton();

    // DOMの変化を監視（動的に生成されるボタンに対応）
    const observer = new MutationObserver(() => {
        clickPostButton();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
