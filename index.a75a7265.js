!function(){var n,t={countriesList:document.querySelector(".country-list")};(n="sw",fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){var o="";n.forEach((function(n){o+="<li>".concat(n.name.common,"</li>")})),t.countriesList.innerHTML=o}))}();
//# sourceMappingURL=index.a75a7265.js.map