(()=>{"use strict";var e=["~","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","del","caps","a","s","d","f","g","h","j","k","l",";","'","enter","shift","|","z","x","c","v","b","n","m",",",".","/","▲","shift","ctrl","win","alt","give some space","alt","ctrl","◀","▼","▶"],t=["192","49","50","51","52","53","54","55","56","57","48","189","187","8","9","81","87","69","82","84","89","85","73","79","80","219","221","220","46","20","65","83","68","70","71","72","74","75","76","186","222","13","16","220","90","88","67","86","66","78","77","188","190","191","38","16","17","91","18","32","18","17","37","40","39"];function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===n(o)?o:String(o)),r)}var o}var r=document.body;r.classList.add("keyboard_body");var o=document.createElement("div");o.classList.add("keyboard_wrapper"),r.append(o);var c=document.createElement("div");c.classList.add("keyboard_cherry_textarea_wrapper"),o.append(c);var i=document.createElement("a");i.classList.add("keyboard_cherry_neon"),c.append(i),i.href="https://github.com/lyutails/";var d=document.createElement("span");d.classList.add("keyboard_cherry_branch_leaf"),i.append(d);var l=document.createElement("span");l.classList.add("keyboard_cherry_berries"),i.append(l);var s=document.createElement("textarea");s.classList.add("keyboard_textarea"),c.append(s),s.style.columns="1",s.placeholder="Start typing...";var u=document.createElement("div");u.classList.add("keyboard_plate"),o.append(u),(new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=e}var n,r;return n=t,(r=[{key:"createButton",value:function(){for(var t=0;t<e.length;t++)this.button=document.createElement("div"),this.button.textContent=e[t],this.button.classList.add("keyboard_button"),u.append(this.button)}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())).createButton();var y=document.createElement("p");y.classList.add("keyboard_os"),o.append(y),y.textContent="Win 10";var p=document.createElement("p");function b(n){for(var a=0;a<e.length;a++)(null==n?void 0:n.keyCode)===+t[a]&&(s.value+="".concat(""+e[a]))}p.classList.add("keyboard_lang"),o.append(p),p.textContent="to change language press Ctrl+Shift",window.addEventListener("keydown",b),b(),document.onkeyup=function(t){for(var n=function(n){if(t.key===e[n]){document.querySelector(".keyboard_button").classList.contains("active")&&document.querySelector(".keyboard_button.active").classList.remove("active");var a=document.querySelectorAll(".keyboard_button");a[n].textContent===t.key&&(a[n].classList.add("active"),setTimeout((function(){a[n].classList.remove("active")}),500))}},a=0;a<=e.length;a++)n(a)},function(){for(var e=document.querySelectorAll(".keyboard_button"),t=function(t){e[t].addEventListener("click",(function(){s.value+="".concat(""+e[t].textContent)}))},n=0;n<e.length;n++)t(n)}()})();