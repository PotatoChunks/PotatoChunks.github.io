(function (global, factory) {
    global._P_ZZ = factory;
})(this, (function () {
    (function () {
        'use strict';
        var devtools = {
            open: false,
            orientation: null
        };
        var threshold = 160;
        var emitEvent = function (state, orientation) {
            window.dispatchEvent(new CustomEvent('devtoolschange', {
                detail: {
                    open: state,
                    orientation: orientation
                }
            }));
        };

        setInterval(function () {
            var widthThreshold = window.outerWidth - window.innerWidth > threshold;
            var heightThreshold = window.outerHeight - window.innerHeight > threshold;
            var orientation = widthThreshold ? 'vertical' : 'horizontal';

            if (!(heightThreshold && widthThreshold) &&
                ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
                if (!devtools.open || devtools.orientation !== orientation) {
                    emitEvent(true, orientation);
                }

                devtools.open = true;
                devtools.orientation = orientation;
            } else {
                if (devtools.open) {
                    emitEvent(false, null);
                }

                devtools.open = false;
                devtools.orientation = null;
            }
        }, 500);

        if (typeof module !== 'undefined' && module.exports) {
            module.exports = devtools;
        } else {
            window.devtools = devtools;
        }

    })();
    class P_ZZ {
        constructor(obj) {
            document.body.innerHTML = '';
            document.head.innerHTML = `<meta charset="UTF-8"><title>绂�</title>`;
            if (obj) {
                this.createParams(obj);
            }
            this.init();
        }
        p_txt = '灏�';
        p_color = 'rgb(235,49,49)'
        createParams(params) {
            if (typeof params === Number) return;
            params.txt += '';
            if (params.txt) this.p_txt = params.txt;
            if (params.color) this.p_color = params.color
        }
        init() {
            let sty = document.createElement('style');
            sty.innerText = `.p_zhezhao{overflow:hidden;position:fixed;z-index:9;top:0;left:0;width:100vw;height:100vh;}.p_zhezhao>.span{position:absolute;display:block;top:0;left:0;width:100vw;font-size:6.25em;color:${this.p_color};line-height:100vh;text-align:center;animation:p_txtAnimation 3.1s normal forwards;user-select:none;font-weight:bold;}.p_zhezhao>.top{position:absolute;top:0;width:0;height:0;}.p_zhezhao>.t{border-left:50vw solid transparent;border-right:50vw solid transparent;border-top:50vh solid black;animation:p_topAnimation 0.8s normal forwards;}.p_zhezhao>.l{border-left:50vw solid transparent;border-right:50vw solid black;border-top:50vh solid transparent;border-bottom:50vh solid transparent;animation:p_leftAnimation 0.8s normal forwards;}.p_zhezhao>.r{border-right:50vw solid transparent;border-left:50vw solid black;animation:p_rightAnimation 0.8s normal forwards;}.p_zhezhao>.b{border-bottom:50vh solid black;border-top:50vh solid transparent;animation:p_bottomAnimation 0.8s normal forwards;}@keyframes p_topAnimation{0%{transform:translateY(-100vh) rotateX(180deg);}100%{transform:translateY(0vh) rotateX(0deg);}}@keyframes p_bottomAnimation{0%{transform:translateY(130vh) rotateX(-180deg);}100%{transform:translateY(0vh) rotateX(0deg);}}@keyframes p_leftAnimation{0%{transform:translateX(130vw) rotateY(-180deg);}100%{transform:translateX(0vh) rotateY(0deg);}}@keyframes p_rightAnimation{0%{transform:translateX(-130vw) rotateY(-180deg);}100%{transform:translateX(0vh) rotateY(0deg);}}@keyframes p_txtAnimation{0%{transform:translateY(-150vh);}100%{transform:translateY(0vh);}}`;
            document.body.append(sty);
            let div = document.createElement('div');
            div.className = 'p_zhezhao';
            div.innerHTML = `<div class="top t"></div><div class="top l"></div><div class="top l r"></div><div class="top t b"></div><div class="span">${this.p_txt}</div>`;
            document.body.append(div);
        }
    }
    return P_ZZ
})())