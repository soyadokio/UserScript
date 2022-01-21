// ==UserScript==
// @name              中烟新商盟小助手
// @version           0.0.1
// @author            SoyaDokio
// @icon              http://hb.xinshangmeng.com:82/favicon.ico
// @description       摸鱼时页面显示与工作不相关的图片未免有些明目张胆，这时候就需要一键隐藏全图了。

// @match             *://*.xinshangmeng.com/*

// @grant             GM_addStyle
// @grant             GM_getValue
// @grant             GM_setValue

// @run-at            document-end

// @license           MIT
// @namespace         https://greasyfork.org/scripts/xxxxxx
// @supportURL        https://github.com/sdokio/UserScript
// @namespace         https://github.com/sdokio/UserScript
// ==/UserScript==

(function() {
    "use strict";

    run();

    function run() {
        if (document.location.host.indexOf('xinshangmeng.com') > -1) {
            if (document.location.pathname === '/eciop/orderForCC/cgtListForCC.htm') {
                appendButtons();
            }
        }
    }

    // 添加按钮
    function appendButtons() {
        // 先添加的按钮靠左
        appendButtonSetAllReq();
        appendButtonRemoveAll();
    }

    // 添加按钮：一键全订1.5倍可用量（限收收藏）
    function appendButtonSetAllReq() {
        // 获取加入购物车按钮
        let smt = document.querySelector('#smt');
        if (!smt) return;
        let eleParent = smt.parentElement;
        if (!eleParent) return;
        // 添加一键全订按钮
        let btnSetAllReq = document.createElement('input');
        btnSetAllReq.class = 'xsm-order-check-box-input';
        btnSetAllReq.type = 'button';
        btnSetAllReq.value = '一键全订';
        btnSetAllReq.onclick = setAllReqWithThreeSecondTimesOfKyl();
        eleParent.insertBefore(btnSetAllReq, eleParent.firstChild);
    }

    // 添加按钮：一键全删订购量为0商品
    function appendButtonRemoveAll() {
        // 获取加入购物车按钮
        let smt = document.querySelector('#smt');
        if (!smt) return;
        // 添加一键全删按钮
        let _html = '<input class="xsm-order-check-box-input" type="button" value="一键全删" onclick="removeAllWithKylZero()">';
        smt.insertAdjacentHTML('beforebegin', _html);
    }

    // 一键全订1.5倍可用量（限收收藏）
    function setAllReqWithThreeSecondTimesOfKyl() {
        let times = 1.5;
        setAllReqWithSpecificTimesOfKyl(times);
    }

    // 设定可用量的指定倍数的需求量（仅限已收藏商品）（若含小数则个位进1）
    // 例：商品1的可用量为1时，将订购量设为1x[指定倍数]
    //     商品1的可用量为5时，将订购量设为5x[指定倍数]
    function setAllReqWithSpecificTimesOfKyl(times) {
        // 若尚未勾选“仅显示收藏”则勾选它
        let chkIsFav = document.querySelector('#isFav');
        if (chkIsFav && !chkIsFav.checked) {
            chkIsFav.click();
        }
        // 把每行需求量的“+”号都点一下
        let rows = document.querySelector('#newul').querySelectorAll('li');// 每个商品是一行
        for (let row of rows) {
            let reqQty = row.querySelector('.cgt-col-req-qty');// 可编辑的需求量
            if (reqQty.style.display != 'none') {
                reqQty.querySelector('.adda').click();
            }
        }
        // 随便点一下好让最后一个输入框失焦
        rows.click();// 这行似乎无效，且当总行数只有1行时下面代码会失效
        // 把每行的订购量都设定为该行可用量的指定倍数
        for (let row of rows) {
            let qtlLmt = row.querySelector('.cgt-col-qtl-lmt');// 可用量
            qtlLmt = parseInt(qtlLmt.innerText.trim());
            let req = 1;
            if (qtlLmt > 0) {
                req = Math.ceil(qtlLmt * times);
            }
            if (req > 1) {
                let ordQty = row.querySelector('.cgt-col-ord-qty');// 可编辑的订购量
                ordQty.querySelector('input[name="ord_qty"]').value = req;
            }
        }
    }

    // 一键全删订购量为0商品
    function removeAllWithKylZero() {
        let ord = '0';
        removeAllWithKyl(ord);
    }

    // 删除订购量为指定值的所有商品
    function removeAllWithKyl(ord) {
        // 依次点击每一个可用量为0的行的删除按钮
        var rows = document.getElementById('uladd').children;
        for (var i = rows.length - 1; i >= 0; i--) {
            var spans = rows[i].getElementsByTagName('span');
            for (var span of spans) {
                if (span.id.startsWith('qty_lmt') && span.innerText.trim() == ord) {
                    rows[i].getElementsByClassName('operation')[0].getElementsByClassName('delCgt')[0].click();
                }
            }
        }
        // 隐藏黑色半透明背景
        setTimeout(function() {
            var bgs = document.body.getElementsByTagName('div');
            for (var bg of bgs) {
                if (bg.style.zIndex == '9999' && bg.style.opacity == '0.3') {
                    bg.style.display = 'none';
                }
            }
        }, 100);
        // 隐藏弹窗
        setTimeout(function() {
            var divs = document.getElementsByClassName('ui_msg');
            for (div of divs) {
                div.parentNode.style.display = 'none';
            }
        }, 700);
    }

})();
