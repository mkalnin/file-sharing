(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(e,t,n){"use strict";n.r(t);var r=n(0);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={computed:c({},Object(r.mapGetters)(["ERRORS"])),methods:c(c({},Object(r.mapActions)(["UPLOAD"])),{},{submitFile:function(){this.UPLOAD(this.file)},handleFileUpload:function(e){this.file=e.target.files[0]}})},s=n(1),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("label",[e._v("File\n      "),n("input",{attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload(t)}}})]),e._v(" "),e.ERRORS.file?n("span",{staticClass:"invalid-feedback"},[e._v(e._s(e.ERRORS.file[0]))]):e._e()]),e._v(" "),n("div",{staticClass:"col-md-3"},[n("button",{staticClass:"btn btn-info",on:{click:function(t){return e.submitFile()}}},[e._v("Загрузить")])])])}),[],!1,null,null,null);t.default=a.exports}}]);