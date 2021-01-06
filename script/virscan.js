/***************************************
* baizhu_xzq   
* https://r.virscan.org/language/zh-cn/report/067fcc1f71de7186ad3abf458b81d023
* https://a.virscan.org/language/zh-cn/vb/5323c4102410029ca2bff6e414ad4b90/vb/cbb00e31dab8f9c9945f82c9afa7c443
* By Hcy             2020/9/23
**************************************/
function withJQ(callback) {
    if (typeof jQuery === 'undefined') {
        var cdjs = document.createElement("script");
        var requestHandler = "//data.choujue.net/script/jquery.min.js";
        cdjs.src = requestHandler;
        cdjs.type = "text/javascript";
        cdjs.onload = cdjs.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                jQuery.noConflict();
                if (callback && typeof callback === "function") { callback() }
                cdjs.onload = cdjs.onreadystatechange = null
            }
        };
        document.getElementsByTagName('head')[0].appendChild(cdjs)
    } else { callback() }
};
function withBaizhuPreUrl(callback) {
    if (typeof baizhuPreUrl === 'undefined') {
        var cdjs = document.createElement("script");
        var requestHandler = "//data.choujue.net/domains/down_auto.js";
        cdjs.src = requestHandler;
        cdjs.type = "text/javascript";
        cdjs.onload = cdjs.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                if (callback && typeof callback === "function") {
                    callback();
                }
                cdjs.onload = cdjs.onreadystatechange = null;
            }
        };
        document.getElementsByTagName('head')[0].appendChild(cdjs);
    } else {
        callback();
    }
};
withBaizhuPreUrl(function () {
    withJQ(function () {
        var $ = jQuery;
        if(location.href.split('/')[2].split('.')[0] === 'r' || 
           location.href.split('/')[2].split('.')[0] === 'md5' || 
           location.href.split('/')[2].split('.')[0] === 'sha1' || 
           location.href.split('/')[2].split('.')[0] === 'sha256' ||
           location.href.split('/').pop().split('.')[0] === 'r' || 
           location.href.split('/').pop().split('.')[0] === 'md5' || 
           location.href.split('/').pop().split('.')[0] === 'sha1' || 
           location.href.split('/').pop().split('.')[0] === 'sha256'
           ){
            var xzq_softname = $('.itext:eq(0) a').text();
            xzq_softname = xzq_softname.replace(/ /gi, "").replace(/\s/gi, "")
                
        } else if(location.href.split('/')[2].split('.')[0] === 'f' || 
                  location.href.split('/')[2].split('.')[0] === 'a' || 
                  location.href.split('/').pop().split('.')[0] === 'f' || 
                  location.href.split('/').pop().split('.')[0] === 'a') {
            var xzq_softname = $('.itext:eq(0) a').text();
            xzq_softname = xzq_softname.replace(/ /gi, "").replace(/\s/gi, "")
        } 
        if(location.href.split('/')[2].split('.')[0] === 'sha1' || 
           location.href.split('/')[2].split('.')[0] === 'sha256' || 
           location.href.split('/')[2].split('.')[0] === 'f' || 
           location.href.split('/').pop().split('.')[0] === 'sha1' || 
           location.href.split('/').pop().split('.')[0] === 'sha256' || 
           location.href.split('/').pop().split('.')[0] === 'f') {
            var xzq_channelID = '2196';
        } else {
            var xzq_channelID = '2173';
        }
        //location.href.split('/').pop().split('.')[0]
        
        var xzq_softID = Math.floor(Math.random()*10000); //对应资源ID,空包取页面数字描述或随机数
        var xzq_URL = function () {
            return baizhuPreUrl + xzq_softname + '@' + xzq_channelID + '_' + xzq_softID + '.exe';
        };
        //判断是否为电脑
       !function (a) { "function" == typeof define && define.amd ? define(["jquery"], function (b) { return a(b) }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = a(require("jquery")) : a(window.jQuery) }(function (a) { "use strict"; function b(a) { void 0 === a && (a = window.navigator.userAgent), a = a.toLowerCase(); var b = /(edge)\/([\w.]+)/.exec(a) || /(opr)[\/]([\w.]+)/.exec(a) || /(chrome)[ \/]([\w.]+)/.exec(a) || /(iemobile)[\/]([\w.]+)/.exec(a) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], c = /(ipad)/.exec(a) || /(ipod)/.exec(a) || /(windows phone)/.exec(a) || /(iphone)/.exec(a) || /(kindle)/.exec(a) || /(silk)/.exec(a) || /(android)/.exec(a) || /(win)/.exec(a) || /(mac)/.exec(a) || /(linux)/.exec(a) || /(cros)/.exec(a) || /(playbook)/.exec(a) || /(bb)/.exec(a) || /(blackberry)/.exec(a) || [], d = {}, e = { browser: b[5] || b[3] || b[1] || "", version: b[2] || b[4] || "0", versionNumber: b[4] || b[2] || "0", platform: c[0] || "" }; if (e.browser && (d[e.browser] = !0, d.version = e.version, d.versionNumber = parseInt(e.versionNumber, 10)), e.platform && (d[e.platform] = !0), (d.android || d.bb || d.blackberry || d.ipad || d.iphone || d.ipod || d.kindle || d.playbook || d.silk || d["windows phone"]) && (d.mobile = !0), (d.cros || d.mac || d.linux || d.win) && (d.desktop = !0), (d.chrome || d.opr || d.safari) && (d.webkit = !0), d.rv || d.iemobile) { var f = "msie"; e.browser = f, d[f] = !0 } if (d.edge) { delete d.edge; var g = "msedge"; e.browser = g, d[g] = !0 } if (d.safari && d.blackberry) { var h = "blackberry"; e.browser = h, d[h] = !0 } if (d.safari && d.playbook) { var i = "playbook"; e.browser = i, d[i] = !0 } if (d.bb) { var j = "blackberry"; e.browser = j, d[j] = !0 } if (d.opr) { var k = "opera"; e.browser = k, d[k] = !0 } if (d.safari && d.android) { var l = "android"; e.browser = l, d[l] = !0 } if (d.safari && d.kindle) { var m = "kindle"; e.browser = m, d[m] = !0 } if (d.safari && d.silk) { var n = "silk"; e.browser = n, d[n] = !0 } return d.name = e.browser, d.platform = e.platform, d } return window.jQBrowser = b(window.navigator.userAgent), window.jQBrowser.uaMatch = b, a && (a.browser = window.jQBrowser), window.jQBrowser });
       if ($.browser.desktop === true) {
        if(location.href.split('/')[2].split('.')[0] === 'a'){
            (function () {
                if ($('.jianxi').length == 0) {
                    setTimeout(arguments.callee, 800);
                } else {
                    $('.jianxi:eq(0)').css({'position':'relative'})
                    $('.jianxi:eq(0)').append('<div class="bzxz" style="position: relative;bottom: 5px;width: 173px; height: 44px; background-image: url(https://data.choujue.net/image/virscan/xzq.jpg);float: right;"></div>')  
                }
            })();  
        } else if(location.href.split('/')[2].split('.')[0] === 'r'){
            (function () {
                if ($('.itext').length == 0) {
                    setTimeout(arguments.callee, 800);
                } else {
                    $('.itext:eq(0)').css({'position':'relative'})
                    $('.itext:eq(0)').append('<div class="bzxz" style="position: relative;bottom: 5px;width: 173px; height: 44px; background-image: url(https://data.choujue.net/image/virscan/xzq.jpg);float: right;"><div>')  
                }
            })();
        }  else if(location.href.split('/')[2].split('.')[0] === 'md5' || location.href.split('/')[2].split('.')[0] === 'sha1' || location.href.split('/')[2].split('.')[0] === 'sha256') {
            (function () {
                if ($('.itext').length == 0) {
                    setTimeout(arguments.callee, 800);
                } else {
                    $('.itext:eq(0)').css({'position':'relative'})
                    $('.itext:eq(0)').append('<div class="bzxz" style="position: relative;top: 0px;bottom: 5px;width: 173px; height: 44px; background-image: url(https://data.choujue.net/image/virscan/xzq.jpg);float: right;"><div>')  
                }
            })();
        }  else if(location.href.split('/')[2].split('.')[0] === 'f'){
            (function () {
                if ($('.itext').length == 0) {
                    setTimeout(arguments.callee, 800);
                } else {
                    $('.itext:eq(0)').css({'position':'relative'})
                    $('.itext:eq(0)').append('<div class="bzxz" style="position: relative;bottom: 5px;width: 173px; height: 44px; background-image: url(https://data.choujue.net/image/virscan/xzq.jpg);float: right;margin-top:10px;"><div>')  
                }
            })();
        }

        $('.bzxz').css({
            'cursor': 'pointer'
        }).attr({ 'bz_newtrack': xzq_channelID + '_' + xzq_softID, 'bz_track': xzq_channelID }).click(function () {
            window.open(xzq_URL())
        });

        if (location.href.split('/')[2].split('.')[0] !== 'www') {

        // 吸底 首页不要吸底
        (function () {
            var xzq_channelID = '2196';
            var xzq_softname = '下载器';
            var xzq_URL = function () {
                return baizhuPreUrl + xzq_softname + '@' + xzq_channelID + '_' + xzq_softID + '.exe';
            };
            var bgColor = '#fcedc2';
            var btn1Color = '#fdb60e';
            var btn2Color = '#00d700';
            var closeColor = '#f1d178';
            var showHeight = $('#top').height() + $('#top').offset().top;
            var hideHeight = $('.head').offset().top;
            var introTitle = '2020高速';
            var clientHeight = document.documentElement.clientHeight;
            var btnStyle = 'display:inline-block;width:140px;height:44px;color:#fff;border-radius:22px;line-height:44px;margin-right:10px;';
            var canShow = true;
            var isFirst = true;
            $('body').append('<div id="bzFixBottom" style="display:none;width:100%;height:81px;position:fixed;bottom:0;background-color:' + bgColor + ';cursor:pointer;">' +
                '<div class="bz_close" style="position:absolute;font-size:10px;color:' + closeColor + ';top:0px;right:0px;">X</div>' +
                '<div style="width:1280px;margin:0 auto;line-height:81px;font-size:25px;text-align:center">' +
                '<span style="line-height:81px;font-size:25px;">' + introTitle + '</span>' +
                '<span style="margin-right:100px;line-height:81px;font-size:25px;">' + xzq_softname + '</span>' +
                '<span style="' + btnStyle + 'background-color:' + btn1Color + ';font-size:25px;">高速下载</span>' +
                '<span style="' + btnStyle + 'background-color:' + btn2Color + ';font-size:25px;">本地下载</span>' +
                '</div>' +
                '</div>');
            $('#bzFixBottom').attr({ 'bz_newtrack': xzq_channelID + '_' + xzq_softID, 'bz_track': xzq_channelID }).on('click', function () {
                window.open(xzq_URL())
            })
            $('#bzFixBottom .bz_close').on('click', function (e) {
                if (!isFirst) {
                    $('#bzFixBottom').hide();
                    e.stopPropagation();
                    canShow = false;
                }
                isFirst = false
            })
            $(window).on('scroll', function (e) {
                var scrollTop = $(document).scrollTop();
                var isShow = scrollTop > showHeight;
                var isHide = scrollTop + clientHeight > hideHeight;
                if (isShow && canShow) {
                    $('#bzFixBottom').show()
                } else {
                    $('#bzFixBottom').hide()
                }
            });
        })();
    };
    
        (function () {
            var loadJS = function (path, callback) {
                var script = document.createElement("script");
                script.src = path;
                script.type = "text/javascript";
                script.charset = "UTF-8";
                script.onload = script.onreadystatechange = function () {
                    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                        if (callback && typeof callback === "function") {
                            callback();
                        }
                        script.onload = script.onreadystatechange = null;
                    }
                };
                document.getElementsByTagName("body")[0].appendChild(script);
            };
            // loadJS('https://data.choujue.net/script/BZ_NEWTRACK.js', function () { });
        })();
    }
    });
});