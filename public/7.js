(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{56:function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{url:window.location.pathname.split("/")[1]}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.mapGetters)(["FILE"])),mounted:function(){var t=this;axios.get("/api/file/"+this.url).then((function(e){t.$store.dispatch("TRIGGER_UPDATE_FILE",e.data),console.log(e.data),void 0===e.data.id&&t.$router.push({name:"404"})})).catch((function(t){console.log(t)})).data},methods:{download:function(){var t=this;axios.post("/api/file/download",{id:this.FILE.id}).then((function(e){t.$router.push({name:"home"})}))}}},c=n(1),s=Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron mt-5"},[n("h1",[t._v("Скачать")]),t._v(" "),t.FILE?n("div",[n("a",{staticClass:"btn btn-success",attrs:{href:t.FILE.path,download:t.FILE.original_name},on:{click:function(e){return t.download()}}},[t._v("\n      Скачать "+t._s(t.FILE.original_name)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.default=s.exports}}]);