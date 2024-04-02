// ==UserScript==
// @name         Google URL Resolver
// @namespace    http://tampermonkey.net/
// @version      2024-04-02
// @description  Gets rid of Google URL redirect links.
// @downloadURL  https://raw.githubusercontent.com/RyanThePinkHacker/tampermonkey-scripts/main/google_url.js
// @updateURL    https://raw.githubusercontent.com/RyanThePinkHacker/tampermonkey-scripts/main/google_url.js
// @author       You
// @match        https://*/*
// @icon         https://icons.duckduckgo.com/ip2/mozilla.org.ico
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// @grant        none
// ==/UserScript==

"use strict";
const $ = window.jQuery;

function onLoad() {
    document.querySelectorAll("a").forEach((element) => {
        if (!element.href) return;

        let url = new URL(element.href);

        if (!url.protocol.startsWith("http")) return;
        if (url.hostname != "www.google.com") return;
        if (url.pathname != "/url") return;

        let redirect = url.searchParams.get("q");

        if (redirect == null) return;

        element.href = redirect;
    });
}

window.addEventListener("load", onLoad);
$(document).ready(onLoad);

