// ==UserScript==
// @name            "ポストをクリア"ボタンを非表示
// @namespace       https://github.com/hitohorobe/better-xpro
// @version         1.0.0
// @description     Hide button with aria-label="ポストをクリア" on pro.x.com decks pages
// @author          hitohorobe
// @match           https://pro.twitter.com/*
// @match           https://pro.x.com/*
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    function hideClearPostButtons() {
        const buttons = document.querySelectorAll('button[aria-label="ポストをクリア"]');
        buttons.forEach(btn => {
            btn.style.display = 'none';
        });
    }

    // 初回実行
    hideClearPostButtons();

    // 動的に変化する場合も考慮して監視
    const observer = new MutationObserver(() => {
        hideClearPostButtons();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
