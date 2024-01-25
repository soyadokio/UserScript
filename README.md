# SoyaDokio自用油猴脚本


[![GitHub license](https://img.shields.io/github/license/sdokio/UserScript.svg?style=flat-square&color=4285dd&logo=github)](https://github.com/XIU2/UserScript/)
[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=555555&color=4285dd&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMWVlZDE4NS1iMTU5LTM5NGUtYjZhNS1mNWYzMWUyNGNlY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZCRThFRjg3Q0REMTFFQ0FCNjJEODgyNEFGQkI5NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZCRThFRjc3Q0REMTFFQ0FCNjJEODgyNEFGQkI5NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxZWVkMTg1LWIxNTktMzk0ZS1iNmE1LWY1ZjMxZTI0Y2VjZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmMWVlZDE4NS1iMTU5LTM5NGUtYjZhNS1mNWYzMWUyNGNlY2UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4jVydKAAAABlBMVEX09PT///+farO/AAAAAnRSTlP/AOW3MEoAAAA/SURBVHjadI9RCgAwCEL1/pfe5hqYND9CHwUJbqEkb1kEyrZzPJ28aXc3MgmDBFBuYCDAl+TjiCpjuV5/CTAAKsgAUaugSHsAAAAASUVORK5CYII=)](https://greasyfork.org/users/394248)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/sdokio/UserScript/badge)](https://www.jsdelivr.com/package/gh/sdokio/UserScript)


## 有什么用/能干什么

油猴是浏览器的插件，脚本算是油猴的插件。脚本可以帮你干页面没提供、但你需要的功能。常用的有自动签到......

<details><summary>点我查看详细描述</summary>

### 油猴是什么

> Tampermonkey 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 Chrome, Microsoft Edge, Safari, Opera Next, 和 Firefox 等主流浏览器。
> 
> 虽然有些受支持的浏览器拥有原生的用户脚本支持，但 Tampermonkey 将在您的用户脚本管理方面提供更多的便利。 它提供了诸如便捷脚本安装、自动更新检查、标签中的脚本运行状况速览、内置的编辑器等众多功能， 同时 Tampermonkey 还有可能正常运行原本并不兼容的脚本。

注1：基于 `Chromium` 内核的浏览器一般都可以使用 Chrome 扩展，国内主要的套皮浏览器都可以使用油猴插件。

<details><summary>主流国内套皮浏览器</summary>

- 360极速浏览器
- 360安全浏览器
- QQ浏览器
- 傲游浏览器
- 搜狗浏览器
- 云起浏览器
- 极速浏览器
- 华为浏览器
- 猎豹浏览器
- 2345浏览器

</details>

注2：如果要重装脚本，请记得在 Tampermonkey 扩展的回收站中**彻底删除脚本**后，再尝试重新安装脚本。

### 脚本是什么

> 用户脚本是一段代码，它们能够优化您的网页浏览体验。安装之后，有些脚本能为网站添加新的功能，有些能使网站的界面更加易用，有些则能隐藏网站上烦人的部分内容。在 Greasy Fork 上的用户脚本都是由用户编写并向全世界发表的，您可以免费安装，轻松体验。

</details>


## 如何使用

### 1. 安装油猴

_注：要使用任何脚本，先决条件是浏览器已安装油猴插件。_

#### 在线安装

找到自己浏览器的 `扩展程序/扩展管理` ，找到搜索框并搜索 `Tampermonkey 脚本管理器扩展` ，然后按照提示安装重启即可。

或者直接点此超链接
（
[Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN) |
[Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) |
[Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)
）
进入三种主流浏览器官方应用商店的油猴脚本页面。

如果浏览器官方应用商店页面访问速度太慢或无法加载成功，可以考虑离线安装。

#### 离线安装

也可以在[这里](https://pan.lanzouo.com/b073l8d1e)自行下载后，以 `离线安装` 的方式安装。

_注：不会离线安装 .crx 扩展？请参考 @XIU2 大佬的文章： [Chrome、Edge 重新开启隐藏的 [拖入安装 .crx 扩展] 功能！全版本！](https://zhuanlan.zhihu.com/p/276027099)_

### 2. 安装脚本

在下方[脚本列表](#脚本列表)找到需要的脚本，根据功能说明选择需要的脚本，点击右侧 `安装` 或 `备用` 进入脚本安装页面，再点击 `安装` 即可。也可点击脚本名称进入 GreasyFork 网站上的该脚本主页深入了解详细的脚本介绍、使用说明、注意事项等后再做决定。


## 脚本列表

| 名称 | 功能 | 链接 |
| :---- | :---- | :----: |
| ![](https://github.com/sdokio/UserScript/blob/main/assets/images/hide_pictures_on_page_16x16.jpg)&nbsp;&nbsp;&nbsp;&nbsp;[一键隐藏图片](https://greasyfork.org/scripts/420682) | 一键隐藏网页所有图片，安全摸鱼... | [安装](https://greasyfork.org/scripts/420682/code/hide_pictures_on_page.user.js) \| [备用](https://cdn.jsdelivr.net/gh/sdokio/UserScript/hide_pictures_on_page.user.js) |
| ![](https://github.com/sdokio/UserScript/blob/main/assets/images/xinshangmeng_helper_16x16.ico)&nbsp;&nbsp;&nbsp;&nbsp;[中烟新商盟小助手](https://greasyfork.org/scripts/439021) | 一键全订1.5倍可用量（限收收藏）、一键全删订购量为0商品 | [安装](https://greasyfork.org/scripts/439021/code/xinshangmeng_helper.user.js) \| [备用](https://cdn.jsdelivr.net/gh/sdokio/UserScript/xinshangmeng_helper.user.js) |
| ![](https://github.com/sdokio/UserScript/blob/main/assets/images/base64_encode_decode_16x16.png)&nbsp;&nbsp;&nbsp;&nbsp;[Base64加解密](https://greasyfork.org/scripts/439021) | 选中后点击右键菜单即可快速替换加解密文本 | [安装](https://greasyfork.org/scripts/439021/code/xinshangmeng_helper.user.js) \| [备用](https://cdn.jsdelivr.net/gh/sdokio/UserScript/xinshangmeng_helper.user.js) |

_注：使用 `备用安装` 的脚本可能存在24小时以内的更新延迟_


## 许可协议

The MIT License.

所有脚本仅供学习交流，请勿用于商用等其他用途。

脚本所有权归 SoyaDokio(sdokio) 所有。
