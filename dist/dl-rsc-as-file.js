!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.downloadAs=t():e.downloadAs=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=null;const r="TRIGGER__"+Math.random();var u={download(e,t){document.getElementById(r)?o=document.getElementById(r):((o=document.createElement("a")).id=r,o.target="_blank",document.body.appendChild(o)),o.download=t,o.href=e,o.click()}},c=(e,t)=>{const n="data:image/svg+xml;utf8,"+document.querySelector(e).outerHTML.replace(/"/g,"'").replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent);u.download(n,t)},d=(e,t)=>{var n="data:text/plain;charset=utf-8,"+encodeURIComponent(e);u.download(n,t)},a=(e,t,n="png")=>{e.toBlob((function(e){var n=document.createElement("img"),o=URL.createObjectURL(e);n.onload=function(){URL.revokeObjectURL(o)},u.download(o,t)}),`image/${n}`,1)},i=(e,t)=>{const n=document.querySelector(e),o=(new XMLSerializer).serializeToString(n),r="data:image/svg+xml;base64,"+btoa(o),u=document.createElement("canvas");u.width=200,u.height=200;const c=u.getContext("2d"),d=new Image;d.onload=function(){c.drawImage(d,0,0),a(u,t)},d.src=r};n.d(t,"svg",(function(){return c})),n.d(t,"txt",(function(){return d})),n.d(t,"cnv",(function(){return a})),n.d(t,"svgpng",(function(){return i}))}])}));