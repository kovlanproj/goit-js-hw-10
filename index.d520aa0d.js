function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}n=function(t,e,n){var i,o,r,u,f,c,a=0,l=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=i,r=o;return i=o=void 0,a=e,u=t.apply(r,n)}function g(t){return a=t,f=setTimeout(w,e),l?h(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function w(){var t=v();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function T(t){return f=void 0,b&&i?h(t):(i=o=void 0,u)}function O(){var t=v(),n=j(t);if(i=arguments,o=this,c=t,n){if(void 0===f)return g(c);if(s)return f=setTimeout(w,e),h(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,e):r,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,i=c=o=f=void 0},O.flush=function(){return void 0===f?u:T(v())},O};const b={inputField:document.querySelector("#search-box"),countriesList:document.querySelector(".country-list")};function h(t){let e="";t.forEach((t=>{e+=`<li>${t.name.common}</li>`})),b.countriesList.innerHTML=e}b.inputField.addEventListener("input",t(n)((function(){(t=b.inputField.value,fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then(h);var t}),300));
//# sourceMappingURL=index.d520aa0d.js.map
