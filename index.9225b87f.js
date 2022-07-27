const t={countriesList:document.querySelector(".country-list")};var n;(n="sw",fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(n){let e="";n.forEach((t=>{e+=`<li>${t.name.common}</li>`})),t.countriesList.innerHTML=e}));
//# sourceMappingURL=index.9225b87f.js.map
