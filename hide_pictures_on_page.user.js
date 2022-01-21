// ==UserScript==
// @name              一键隐藏图片
// @version           0.3.3
// @author            SoyaDokio
// @icon
// @description       摸鱼时页面显示与工作不相关的图片未免有些明目张胆，这时候就需要一键隐藏全图了。

// @match             *://*/*

// @grant             GM_addStyle
// @grant             GM_getValue
// @grant             GM_setValue

// @require           https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js

// @run-at            document-start

// @license           MIT
// @namespace         https://greasyfork.org/scripts/420682
// @supportURL        https://github.com/sdokio/UserScript
// @homepageURL       https://github.com/sdokio/UserScript
// ==/UserScript==

(function() {
    "use strict";

    var hpop_userData = null;
    var hpop_defaultData = {
        "version": "0.3.1",
        "position": {
            "top": $(window).height() / 2 - 14 + "",
            "left": "0",
            "right": "auto"
        }
    }

    init();

    function init() {
        // 校验本地是否存在本地缓存数据
        hpop_userData = GM_getValue("hpop_userData");
        if(!hpop_userData) {
            hpop_userData = hpop_defaultData;
        }
        // 将新添加的数据保存到本地缓存数据中
        var updFlag = false;
        for(let value in hpop_defaultData) {
            if(!hpop_userData.hasOwnProperty(value)) {
                hpop_userData[value] = hpop_defaultData[value];
                updFlag = true;
            }
        }
        if (updFlag) {
            saveSetting(hpop_userData);
        }

        createCtrlPanel();
        bindMouseCtrl();
        addDragEffect();
    }

    // 保存配置到本地
    function saveSetting(hpop_userData) {
        GM_setValue("hpop_userData", hpop_userData);
    }

    // 创建控制面板（浮动元素）
    function createCtrlPanel() {
        var node = document.createElement("hide-pictures-on-page");
        node.id = "hpop-panel";
        if (hpop_userData.position.left == 0) {
            node.className = "hpop-panel hpop-panel-left";
        }
        if (hpop_userData.position.right == 0) {
            node.className = "hpop-panel hpop-panel-right";
        }
        node.style.cssText = "position:fixed;top:" + hpop_userData.position.top + "px;left:" + hpop_userData.position.left + "px;right:" + hpop_userData.position.right + "px;";
        node.innerHTML = "<input type='checkbox' id='hpop-switch' /><label style='cursor:pointer;font-size:12px;color:3d3d3d;'>图片隐藏</label>";
        if (window.self === window.top) {
            if (document.querySelector("body")) {
                document.body.appendChild(node);
            } else {
                document.documentElement.appendChild(node);
            }
        }
        // 添加控制面板的鼠标滑入/滑出效果
        node.addEventListener("mouseover", function() {
            node.classList.add("hpop-panel-active");
            if (hpop_userData.position.left == 0) {
                node.classList.add("hpop-panel-left-active");
            }
            if (hpop_userData.position.right == 0) {
                node.classList.add("hpop-panel-right-active");
            }
        });
        node.addEventListener("mouseleave", function() {
            setTimeout(function() {
                node.classList.remove("hpop-panel-active");
                node.classList.remove("hpop-panel-left-active");
                node.classList.remove("hpop-panel-right-active");
            }, 300);
        });
        // 添加控制面板所需式样
        var style = document.createElement("style");
        style.type = "text/css";
        var styleRaw = ".hpop-panel{" +
                "position:fixed;" +
                "width:64px;" +
                "height:20px;" +
                "font-size:12px;" +
                "font-weight: 500;" +
                "font-family:Verdana, Arial, '宋体';" +
                "background:#f1f1f1;" +
                "z-index:2147483647;" +
                "margin: 0;" +
                "opacity:0.4;" +
                "transition:0.3s;" +
                "overflow:hidden;" +
                "user-select:none;" +
                "text-align:left;" +
                "white-space:nowrap;" +
                "line-height:20px;" +
                "padding:3px 6px;" +
                "border:1px solid #ccc;" +
                "box-sizing: content-box;" +
            "}" +
            ".hpop-panel-left{" +
                "transform:translate(-63px,0);" +
                "border-width:1px 1px 1px 0;" +
                "border-top-right-radius: 14px;" +
                "border-bottom-right-radius: 14px;" +
            "}" +
            ".hpop-panel-right{" +
                "transform:translate(63px,0);" +
                "border-width:1px 0 1px 1px;" +
                "border-top-left-radius: 14px;" +
                "border-bottom-left-radius: 14px;" +
                "padding-left: 10px;" +
                "padding-right: 0;" +
            "}" +
            ".hpop-panel input{" +
                "margin: 0;" +
                "padding: 0;" +
                "vertical-align:middle;" +
                "-webkit-appearance:checkbox;" +
                "-moz-appearance:checkbox;" +
                "position: static;" +
                "clip: auto;" +
                "opacity: 1;" +
                "cursor: pointer;" +
            "}" +
            ".hpop-panel.hpop-panel-active{" +
                "width:70px;" +
                "opacity: 0.9;" +
            "}" +
            ".hpop-panel.hpop-panel-left-active{" +
                "left: 0px;" +
                "transform:translate(0,0);" +
            "}" +
            ".hpop-panel.hpop-panel-right-active{" +
                "right: 0px;" +
                "transform:translate(0,0);" +
            "}" +
            ".hpop-panel label{" +
                "margin:0;" +
                "padding:0 0 0 3px;" +
                "font-weight:500;" +
            "}" +
            " ";
        style.innerHTML = styleRaw;
        if (document.querySelector("#hpop-panel")) {
            document.querySelector("#hpop-panel").appendChild(style);
        } else {
            GM_addStyle(styleRaw);
        }
    }

    // 绑定控制面板点击事件
    function bindMouseCtrl() {
        document.querySelector("#hpop-panel").addEventListener("click", function() {
            if (document.querySelector("#hpop-switch").checked) {
                document.querySelector("#hpop-switch").checked = false;
                $("img").show("500");
            } else {
                document.querySelector("#hpop-switch").checked = true;
                $("img").hide("500");
            }
        });
        document.querySelector("#hpop-switch").addEventListener("click", function() {
            if (document.querySelector("#hpop-switch").checked) {
                document.querySelector("#hpop-switch").checked = false;
                $("img").hide("500");
            } else {
                document.querySelector("#hpop-switch").checked = true;
                $("img").show("500");
            }
        });
    }

    // 添加拖拽效果
    function addDragEffect() {
        var node = document.querySelector("#hpop-panel");
        node.addEventListener("mousedown", function(event) {
            node.style.transition = "null";
            var dispX = event.clientX - node.offsetLeft;
            var dispY = event.clientY - node.offsetTop;

            var move = function(event) {
                node.style.left = event.clientX - dispX + "px" ;
                node.style.top  = event.clientY - dispY + "px" ;
            }

            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", function() {
                node.style.transition = "0.3s";
                document.removeEventListener("mousemove", move);
                var bodyWidth = document.body.clientWidth;
                var hpop_nodeWidth = node.offsetLeft + node.offsetWidth / 2;
                if(hpop_nodeWidth > bodyWidth / 2){
                    node.style.left = "auto";
                    node.style.right = 0;
                    node.classList.remove("hpop-panel-left");
                    node.classList.add("hpop-panel-right");
                    console.log("2 right");
                    hpop_userData.position.left = "auto";
                    hpop_userData.position.right = "0";
                } else {
                    node.style.left = hpop_userData.position.left =  0;
                    node.style.right = hpop_userData.position.right = "auto";
                    node.classList.add("hpop-panel-left");
                    node.classList.remove("hpop-panel-right");
                    console.log("2 left");
                }
                hpop_userData.position.top = node.offsetTop;
                saveSetting(hpop_userData);
            });
        });
    }
})();
