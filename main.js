(()=>{"use strict";var e=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Delete"],["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"],["Shift","z","x","c","v","b","n","m",",",".","/","▲","|"],["Control","Alt","give some space","win","◀","▼","▶"]],t=["192","49","50","51","52","53","54","55","56","57","48","189","187","8","9","81","87","69","82","84","89","85","73","79","80","219","221","220","46","20","65","83","68","70","71","72","74","75","76","186","222","13","220","90","88","67","86","66","78","77","188","190","191","38","16","17","18","32","91","37","40","39"];function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(r)?r:String(r)),o)}var r}var o=document.body;o.classList.add("keyboard_body");var r=document.createElement("div");r.classList.add("keyboard_wrapper"),o.append(r);var c=document.createElement("div");c.classList.add("keyboard_cherry_textarea_wrapper"),r.append(c);var d=document.createElement("a");d.classList.add("keyboard_cherry_neon"),c.append(d),d.href="https://github.com/lyutails/";var i=document.createElement("span");i.classList.add("keyboard_cherry_branch_leaf"),d.append(i);var l=document.createElement("span");l.classList.add("keyboard_cherry_berries"),d.append(l);var u=document.createElement("textarea");u.classList.add("keyboard_textarea"),c.append(u),u.style.columns="1",u.placeholder="Start typing...";var s=document.createElement("div");s.classList.add("keyboard_plate"),r.append(s),function(){for(var e=0;e<5;e++){var t=document.createElement("div");t.classList.add("keyboard_row"),s.append(t)}}();var y=document.querySelectorAll(".keyboard_row");(new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=e}var n,o;return n=t,(o=[{key:"createButton",value:function(){var t=this;e.forEach((function(e,n){for(var a,o=[],r=0;r<e.length;r++)t.button=document.createElement("div"),t.button.textContent=e[r],t.button.classList.add("keyboard_button"),o.push(t.button);(a=y[n]).append.apply(a,o)}))}}])&&a(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}())).createButton();var p=document.createElement("p");p.classList.add("keyboard_os"),r.append(p),p.textContent="Win 10";var b,m=document.createElement("p");function v(e){for(var n=document.querySelectorAll(".keyboard_button"),a=0;a<n.length;a++)(null==e?void 0:e.keyCode)===+t[a]&&(u.value+="".concat(""+n[a].textContent))}m.classList.add("keyboard_lang"),r.append(m),m.textContent="to change language press Ctrl+Alt",window.addEventListener("keydown",v),v(),b=document.querySelectorAll(".keyboard_button"),document.onkeyup=function(e){for(var t=function(t){e.key===b[t].textContent&&(document.querySelector(".keyboard_button").classList.contains("active")&&document.querySelector(".keyboard_button.active").classList.remove("active"),b[t].textContent===e.key&&(b[t].classList.add("active"),setTimeout((function(){b[t].classList.remove("active")}),500)))},n=0;n<b.length;n++)t(n)},function(){for(var e=document.querySelectorAll(".keyboard_button"),t=function(t){e[t].addEventListener("click",(function(){u.value+="".concat(""+e[t].textContent)}))},n=0;n<e.length;n++)t(n)}()})();