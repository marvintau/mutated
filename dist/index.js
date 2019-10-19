!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.persisted=t():e.persisted=t()}(window,(function(){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,r){"use strict";function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var n=function(){function Group(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.desc,o=void 0===n?"无描述":n,i=r.style,a=void 0===i?"paginator":i;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Group),_defineProperty(this,"iter",(function(e){for(var r=Object.entries(t.group),n=0;n<r.length;n++){var o=_slicedToArray(r[n],2),i=o[0],a=o[1];t.group[i]=e(i,a)}return new Group(t)})),_defineProperty(this,"filter",(function(e){var r={};for(var n in t.group)e(n)&&(r[n]=t.group[n]);return t.group=r,new Group(t)})),e instanceof Group?Object.assign(this,e):(this.group=e,this.desc=o,this.style=a)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Group,[{key:"get",value:function get(e){return this.group[e]}},{key:"set",value:function set(e,t){return this.group[e]=t,new Group(this)}},{key:"vals",value:function vals(){return o.from(Object.values(this.group))}},{key:"keys",value:function keys(){return Object.keys(this.group)}},{key:"grap",value:function grap(){return o.from(this.vals().flat())}}]),Group}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toArray(e){return function List_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||_iterableToArray(e)||function List_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||_iterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function List_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _construct(e,t,r){return(_construct=function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(e){function List(){var e;!function List_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _possibleConstructorReturn(this,(e=_getPrototypeOf(List)).call.apply(e,[this].concat(r)))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(List,e),function List_createClass(e,t,r){return t&&List_defineProperties(e.prototype,t),r&&List_defineProperties(e,r),e}(List,[{key:"last",value:function last(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e=Math.max(Math.min(e,this.length),1),this[this.length-e]}},{key:"isEmpty",value:function isEmpty(){return 0===this.length}},{key:"ordr",value:function ordr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.sort((function(r,n){var o=e(r),i=e(n);return o<i?-t:o>i?t:0})),List.from(this)}},{key:"grip",value:function grip(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.desc,o=void 0===r?"noname":r,i=t.style,a=void 0===i?"paginator":i,u={},s=0;s<this.length;s++){var c=e(this[s]);c in u||(u[c]=new List(0)),u[c].push(this[s])}return new n(u,{desc:o,style:a})}},{key:"uniq",value:function uniq(e){for(var uniq={},t=0;t<this.length;t++)uniq[e(this[t])]=this[t];var r=new List(0);for(var n in uniq)r.push(uniq[n]);return r}},{key:"cascade",value:function cascade(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){e.addChild(t)};console.log("length",this.length),console.time("grip");var n,o=this.ordr(e).grip(e).vals();for(console.timeEnd("grip"),n=o.pop();o.length>0;n=o.pop()){var i=o.pop();for(console.time("comparisonLevel");n.length>0;)for(var a=n.pop(),u=0;u<i.length;u++){var s=i[u];t(a,s)&&r(s,a)}for(var c=0;c<i;c++)i[c].subs=void 0;console.timeEnd("comparisonLevel"),o.push(i)}return n}},{key:"flatten",value:function flatten(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e.heir},t=List.from(this),r=new List(0);t.length;){var n=t.pop();r.push(n),t.push.apply(t,_toConsumableArray(e(n)))}return r}},{key:"flattenPath",value:function flattenPath(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e.heir},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.heir.isEmpty()},r=List.from(this).map((function(e){return[e]})),n=new List(0),o=function _loop(){var o=r.pop(),i=_toArray(o),a=i[0],u=i.slice(1);t(a)?n.push(o):r.push.apply(r,_toConsumableArray(e(a).map((function(e){return[e,a].concat(_toConsumableArray(u))}))))};r.length;)o();return n.map((function(e){return List.from(e)}))}},{key:"outer",value:function outer(e,t){for(var r=t.fromCol,n=t.thisCol,o=new Map,i=e.length-1;i>=0;i--)o.set(r,e[i][r]);for(var a=this.length-1;a>=0;a--){var u=this[a][n];o.has(u)&&Object.assign(this[a],o.get(u))}return List.from(this)}},{key:"insert",value:function insert(e,t){return this.splice(e,0,t),List.from(this)}},{key:"swap",value:function swap(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1===t){if(e<this.length-1){var r=[this[e+1],this[e]];this[e]=r[0],this[e+1]=r[1]}}else if(e>0){var n=[this[e],this[e-1]];this[e-1]=n[0],this[e]=n[1]}return List.from(this)}},{key:"remove",value:function remove(e){return this.splice(e,1),List.from(this)}},{key:"toObject",value:function toObject(){return Object.fromEntries(this)}}]),List}(_wrapNativeSuper(Array));function Record_slicedToArray(e,t){return function Record_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function Record_iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function Record_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Record_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function Record(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.head,n=void 0===r?{}:r,i=t.heir,a=void 0===i?new o:i,u=t.subs;if(function Record_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Record),e instanceof Record)Object.assign(this,e);else{for(var s in this.cols={},n){var c=null===e[s]?void 0:e[s];n[s].type===Number&&(void 0===c&&(c="0"),c=c.toString().replace(/,/g,"")),this.cols[s]=void 0===c?void 0:new n[s].type(c)}this.head=n,this.subs=u,this.heir=a}}return function Record_createClass(e,t,r){return t&&Record_defineProperties(e.prototype,t),r&&Record_defineProperties(e,r),e}(Record,[{key:"set",value:function set(e,t){var r=this.head[e].type;return this.cols[e]=new r(t),new Record(this)}},{key:"get",value:function get(e){return this.cols[e]}},{key:"table",value:function table(){return this.subs}},{key:"hasChild",value:function hasChild(){return this.heir.length>0}},{key:"hasTable",value:function hasTable(){return void 0!==this.subs}},{key:"isLeaf",value:function isLeaf(){return!(this.hasChild()||this.hasTable())}},{key:"addChild",value:function addChild(e){this.heir.push(e)}},{key:"keys",value:function keys(){return Object.keys(this.cols)}},{key:"valueOf",value:function valueOf(){var e=Object.entries(this.cols).map((function(e){var t=Record_slicedToArray(e,2);return[t[0],t[1].valueOf()]}));return Object.fromEntries(e)}}]),Record}();function Head_typeof(e){return(Head_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Head_toConsumableArray(e){return function Head_arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function Head_iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function Head_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Head_possibleConstructorReturn(e,t){return!t||"object"!==Head_typeof(t)&&"function"!=typeof t?function Head_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Head_wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(Head_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function Head_isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return Head_construct(e,arguments,Head_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),Head_setPrototypeOf(Wrapper,e)})(e)}function Head_construct(e,t,r){return(Head_construct=function Head_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&Head_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function Head_setPrototypeOf(e,t){return(Head_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function Head_getPrototypeOf(e){return(Head_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Head_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Head_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Head_createClass(e,t,r){return t&&Head_defineProperties(e.prototype,t),r&&Head_defineProperties(e,r),e}var a=function(){function MultiLine(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Head_classCallCheck(this,MultiLine),this.lines=e.split(",")}return Head_createClass(MultiLine,[{key:"valueOf",value:function valueOf(){return this.lines.join("\n")}},{key:"setLines",value:function setLines(e){this.lines=this.lines.map(e)}}]),MultiLine}(),u=function(e){function Path(){var e;Head_classCallCheck(this,Path);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(0===r.length)(e=Head_possibleConstructorReturn(this,Head_getPrototypeOf(Path).call(this,0))).push(0);else if(Array.isArray(r[0])){var o;(o=e=Head_possibleConstructorReturn(this,Head_getPrototypeOf(Path).call(this,0))).push.apply(o,Head_toConsumableArray(r[0]))}else{var i;e=Head_possibleConstructorReturn(this,(i=Head_getPrototypeOf(Path)).call.apply(i,[this].concat(r)))}return Head_possibleConstructorReturn(e)}return function Head_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Head_setPrototypeOf(e,t)}(Path,e),Path}(Head_wrapNativeSuper(Array)),s=function(){function Head(e){Head_classCallCheck(this,Head);var t={Float:Number,Integer:Number,String:String,Date:Date,Path:u,MultiLine:a};for(var r in e)e[r]in t||console.warn('Head: found non-existing type "'.concat(e[r],'", typo suggested.')),this[r]={type:t[e[r]]}}return Head_createClass(Head,[{key:"len",value:function len(){return Object.keys(this).length}},{key:"lenDisplayed",value:function lenDisplayed(){return Object.values(this).filter((function(e){return!(e.hidden||e.isTitle)})).length}},{key:"sum",value:function sum(e){var t=this,r={String:function String(e){for(var t=!0,r=0;r<e.length-1&&(t=t&&e[r]==e[r+1]);r++);return t?e[0]:"..."},Number:function Number(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t}},n={},o=function _loop(o){var i=e.map((function(e){return e.get(o)}));n[o]=r[t[o].type.name](i)};for(var a in this)o(a);return new i(n,{head:this})}},{key:"setColProp",value:function setColProp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={isExpandToggler:!1};if(t in this)Object.assign(this[t],{colDesc:t},r,e);else for(var n in t)n in this&&Object.assign(this[n],{colDesc:n},r,e)}},{key:"checkColProp",value:function checkColProp(e){for(var t in this)if(!(e in this[t]))return{res:!1,key:t};return{res:!0}}},{key:"createRecord",value:function createRecord(e){if(void 0===e)for(var t in e={},this)e=new this[t].type;return new i(e,{head:this})}},{key:"createTableFromColumnLists",value:function createTableFromColumnLists(e){for(var t=e.length,r=e.table,n=[],a=0;a<t;a++){var u={};for(var s in r)u[s]=r[s][a];n.push(new i(u,{head:this}))}return new o(n)}}]),Head}();r.d(t,"Head",(function(){return s})),r.d(t,"Record",(function(){return i})),r.d(t,"Group",(function(){return n})),r.d(t,"List",(function(){return o}))}])}));