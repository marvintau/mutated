!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.persisted=t():e.persisted=t()}(window,(function(){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Body}));var _List__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Tabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _construct(e,t,r){return(_construct=isNativeReflectConstruct()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var getRandSamples=function getRandSamples(e,t){for(var r=[];r.length<t;){var n=parseInt(Math.random()*t);-1===r.indexOf(n)&&r.push(n)}return Body.from(r.map((function(t){return e[t]})))},samplesWithinSum=function samplesWithinSum(e,t,r){var n=[],o=0,i=!0,a=!1,s=void 0;try{for(var u,c=e[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var l=u.value;if(o+=l.cols[t]>r)break;n.push(l)}}catch(e){a=!0,s=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw s}}return n},findSingle=function findSingle(e,t){return{rec:e.find((function(e){return e.get(key).valueOf()===t})),list:e}},isArrayOfString=function isArrayOfString(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))},iterateWithPathArray=function iterateWithPathArray(e,t,r){var n=e,o=void 0,i=!0,a=!1,s=void 0;try{for(var u,c=function _loop(){var e=u.value;if(void 0===(o=n.find((function(r){return r.get(t).valueOf()===e}))))return"break";n=o.subs},l=r[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){if("break"===c())break}}catch(e){a=!0,s=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return{rec:o,list:n}},reach=function reach(e,t){var r=t.breakCond,n=t.getFunc;if(void 0===r||void 0===n)return{rec:void 0,list:void 0};for(var o=e,i=void 0;o.length>0&&!r(o);)o=(i=n(o)).subs;return{rec:i,list:o}},parseString=function parseString(e){return"string"!=typeof e&&e.constructor!==String||!e.match(/^[0-9]+$/)?e:parseFloat(e)},Body=function(_List){function Body(){var e,t;_classCallCheck(this,Body);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(Body)).call.apply(e,[this].concat(n)))).ops=[],t}return _inherits(Body,_List),_createClass(Body,[{key:"findBy",value:function findBy(e,t){return"string"==typeof t?findSingle(this,t):isArrayOfString(t)?iterateWithPathArray(this,e,t):reach(this,t)}},{key:"isColSame",value:function isColSame(e){return this.map((function(t){return t.get(e).valueOf()})).every((function(e,t,r){return e==r[0]}))}},{key:"orderBy",value:function orderBy(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.sort((function(r,n){var o=parseString(r.get(e)),i=parseString(n.get(e)),a=t?1:-1;return o>i?a:o<i?-a:0})),Body.from(this)}},{key:"grip",value:function grip(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.desc,n=void 0===r?"noname":r,o=t.style,i=void 0===o?"paginator":o,a={},s=0;s<this.length;s++){var u=e.constructor===Function?e(this[s]):this[s].get(e);u in a||(a[u]=new Body(0)),a[u].push(this[s])}return new _Tabs__WEBPACK_IMPORTED_MODULE_1__.a(a,{desc:n,style:i})}},{key:"uniq",value:function uniq(e){for(var uniq={},t=0;t<this.length;t++){uniq[e.constructor===Function?e(this[t]):this[t].get(e)]=this[t]}return Body.from(Object.values(uniq))}},{key:"cascade",value:function cascade(e){var t,r=this.orderBy(e).grip((function(t){return t.get(e).length})).vals();for(t=r.pop();r.length>0;t=r.pop()){for(var n=r.pop(),o=0;o<n.length;o++)(Array.isArray(n[o].subs)||void 0===n[o].subs)&&(n[o].subs=new Body(0));for(;t.length>0;)for(var i=t.pop(),a=0;a<n.length;a++){var s=n[a];if(i.get(e).startsWith(s.get(e)))try{s.subs.push(i)}catch(e){throw console.log(s),Error("found")}}r.push(n)}return t}},{key:"flatten",value:function flatten(){for(var e=Body.from(this).reverse(),t=new Body(0);e.length;){var r=e.pop();t.push(r),e.push.apply(e,_toConsumableArray(_List__WEBPACK_IMPORTED_MODULE_0__.a.from(r.subs).reverse()))}return t}},{key:"flattenPath",value:function flattenPath(){for(var e=Body.from(this).map((function(e){return[e]})),t=new Body(0),r=function _loop2(){var r=e.pop(),n=_toArray(r),o=n[0],i=n.slice(1);"Body"!==o.subs.constructor.name||0===o.subs.length?t.push(r):e.push.apply(e,_toConsumableArray(o.subs.map((function(e){return[e,o].concat(_toConsumableArray(i))}))))};e.length;)r();return t.map((function(e){return _List__WEBPACK_IMPORTED_MODULE_0__.a.from(e)}))}},{key:"copy",value:function copy(){for(var e=0;e<this.length;e++)this[e]=this[e].copy(),this[e].subs=this[e].subs.copy();return _construct(Body,_toConsumableArray(this))}},{key:"backTraverse",value:function backTraverse(e){for(var t=0;t<this.length;t++)this[t].subs=this[t].subs.backTraverse(e),this[t]=e(this[t]);return _construct(Body,_toConsumableArray(this))}},{key:"addOp",value:function addOp(e){var t=e.type,r=e.args;this.ops.push({type:t,args:r})}},{key:"removeOp",value:function removeOp(e){void 0===e?this.ops.pop():this.ops.splice(e,1)}},{key:"applyOp",value:function applyOp(){var _this2=this,sort=function sort(e){var t=e.key,r=e.order;return _this2.orderBy(t,r)},filter=function filter(_ref5){var method=_ref5.method,key=_ref5.key,arg=_ref5.arg;switch(method){case">=":case"<=":return _this2.filter((function(_ref6){var cols=_ref6.cols;return eval("".concat(cols[key]).concat(method,"(").concat(arg,")"))}));case"rand":return getRandSamples(_this2,arg);case"&>=":case"&<=":return samplesWithinSum(_this2,arg)}},_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _iterator3=this.ops[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){var _step3$value=_step3.value,type=_step3$value.type,args=_step3$value.args;newBody="sort"===type?sort(args):"filter"===type?filter(args):newList}}catch(e){_didIteratorError3=!0,_iteratorError3=e}finally{try{_iteratorNormalCompletion3||null==_iterator3.return||_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}}}]),Body}(_List__WEBPACK_IMPORTED_MODULE_0__.a)},function(e,t,r){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _construct(e,t,r){return(_construct=function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}));var n=function(e){function List(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(List)).call.apply(e,[this].concat(n)))).ops=[],t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(List,e),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(List,[{key:"last",value:function last(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e=Math.max(Math.min(e,this.length),1),this[this.length-e]}},{key:"isEmpty",value:function isEmpty(){return 0===this.length}},{key:"insert",value:function insert(e,t){return console.log(e,t,"inserting"),this.splice(e,0,t),List.from(this)}},{key:"swap",value:function swap(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1===t){if(e<this.length-1){var r=[this[e+1],this[e]];this[e]=r[0],this[e+1]=r[1]}}else if(e>0){var n=[this[e],this[e-1]];this[e-1]=n[0],this[e]=n[1]}return List.from(this)}},{key:"remove",value:function remove(e){return this.length>1&&this.splice(e,1),List.from(this)}},{key:"toObject",value:function toObject(){return Object.fromEntries(this)}},{key:"max",value:function max(e){return Math.max.apply(Math,_toConsumableArray(void 0===e?this:this.map(e)))}},{key:"min",value:function min(e){return Math.min.apply(Math,_toConsumableArray(void 0===e?this:this.map(e)))}},{key:"minMax",value:function minMax(e){return{min:this.min(e),max:this.max(e)}}}]),List}(_wrapNativeSuper(Array))},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function Tabs(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.desc,o=void 0===n?"无描述":n,i=r.style,a=void 0===i?"paginator":i;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tabs),function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(this,"iter",(function(e){for(var r=Object.assign({},t.group),n=Object.entries(r),o=0;o<n.length;o++){var i=_slicedToArray(n[o],2),a=i[0],s=i[1];r[a]=e(a,s)}return new Tabs(r,{desc:t.desc,style:t.style})})),e instanceof Tabs?Object.assign(this,e):(this.group=e,this.desc=o,this.style=a)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Tabs,[{key:"orderBy",value:function orderBy(e,t){var r=this;if(Array.isArray(e)){var o=!0,i=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value;r=r.get(c)}}catch(e){i=!0,a=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}}else r=r.get(e);if(r.constructor!==n.a)throw Error("Tabs.orderBy.tabPath: 找到的数据不是Body，不能排序");return r.orderBy(t),new Tabs(this)}},{key:"get",value:function get(e){return this.group[e]}},{key:"set",value:function set(e,t){return this.group[e]=t,new Tabs(this)}},{key:"vals",value:function vals(){return n.a.from(Object.values(this.group))}},{key:"keys",value:function keys(){return Object.keys(this.group)}},{key:"grap",value:function grap(){return n.a.from(this.vals().flat())}}]),Tabs}()},function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_nonIterableRest()}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}__webpack_require__.d(__webpack_exports__,"a",(function(){return RefString}));var matchRef=function matchRef(e){var t=_slicedToArray(e.split("@"),2),r=t[0],n=t[1];void 0===n&&(n=r,r=void 0);var o=matchPath(n);return{refName:r,refBody:n=null===o?{expr:n}:o}},matchPath=function matchPath(e){if(e.search(/:/)>0){var t=_slicedToArray(e.split(":"),2),r=t[0],n=t[1];return(r=matchPathDir(r))?{pathBody:r,refValue:n}:null}return null},matchPathDir=function matchPathDir(e){return e.match(/([\/&].+)+/)?e.split("/").slice(1).map((function(e){return e.split("&")})):null},NaNto0=function NaNto0(e){var t=parseFloat(e);return isNaN(t)?0:t},outer=function outer(e){if(e.some((function(e){return!Array.isArray(e)})))throw Error("outer必须得用在list of lists上");var t=_toArray(e),r=t[0],n=t.slice(1),o=r.map((function(e){return[e]})),i=!0,a=!1,s=void 0;try{for(var u,c=function _loop(){var e=u.value;o=o.map((function(t){return e.map((function(e){return t.concat(e)}))})).flat()},l=n[Symbol.iterator]();!(i=(u=l.next()).done);i=!0)c()}catch(e){a=!0,s=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return o},calcVal=function calcVal(expr,rec){var dict={"期初":"mb","期末":"me","借方":"md","贷方":"mc"},expression=expr.replace(/([^+-]+)/g,"(rec.get(dict['$&']))");return eval(expression)},evalFunc=function evalFunc(e,t){return"SUMSUB"===e?(console.log("SUMSUB",t.map((function(e){return e.get("value").value})),t),{value:t.map((function(e){return NaNto0(e.get("value").value)})).reduce((function(e,t){return e+t}),0)}):"SUB1"===e?{value:NaNto0(t[0].get("value").value)}:"NONE"===e?{value:""}:{value:"不能识别的函数",type:"error"}},evalExpr=function evalExpr(expr,refs){var value,type;try{value=eval(expr.replace(/\$/g,"refs.")),type="NORMAL"}catch(e){value="不能识别的表达式",type="ERROR"}return{value:value,type:type}},RefString=function(){function RefString(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";_classCallCheck(this,RefString),"RefString"===e.constructor.name||void 0!==e.string?Object.assign(this,e):this.string=e.toString(),this.type="NORMAL",this.value="",this.note="",this.desc=""}return _createClass(RefString,[{key:"set",value:function set(e){return this.string=e,new RefString(e)}},{key:"setDesc",value:function setDesc(e){this.desc=e}},{key:"valueOf",value:function valueOf(){return this.string}},{key:"toAST",value:function toAST(){return matchRef(this.string.replace(/\s+/g,""))}},{key:"display",value:function display(){var e=_slicedToArray(this.string.replace(/\s+/g,"").split("@"),2),t=e[0],r=e[1],n={refName:t,refBody:r};if(void 0===r&&(n.refName="",n.refBody=t),null!==n.refBody.match(/^[_A-Z]+$/))return n.refBody={func:n.refBody},n;var o,i=_slicedToArray(n.refBody.split(":"),2),a=i[0],s=i[1];return void 0===s&&(s=a,a=void 0),void 0!==a&&(o=a.split("/").map((function(e){return e.split("&")})).filter((function(e){return e[0].length>0}))),n.refBody={path:o,valExpr:s},n}},{key:"evaluate",value:function evaluate(e,t,r){var n=this.toAST(),o=n.refBody,i=o.pathBody,a=o.refValue,s=o.expr,u=n.refName;if(i){var c=outer(i).map((function(t){var r=e.findBy("ccode_name",t).rec,n=r?calcVal(a,r):void 0;return{path:t.join("/")+":"+a,val:n}})).reduce((function(e,t){var r=e.note,n=e.value,o=t.path,i=t.val;return void 0===i?{note:[o].concat(_toConsumableArray(r)),value:n}:{note:r,value:n+i}}),{note:[],value:0});this.value=c.value,c.note.length>0&&(this.type="WARN",this.note=c.note.join("\n"))}else if(void 0!==s)if(isNaN(parseFloat(s)))if(s.match(/^[A-Z0-9]+$/g)){var l=evalFunc(s,r),f=l.value,p=l.type;this.value=f,this.type=p}else{var h=evalExpr(s,t),y=h.value,_=h.type;this.value=y,this.type=_}else this.value=parseFloat(s);else this.value="不能识别的表达式",this.type="ERROR";console.log(this.desc,this.value,this.type,this.note),void 0!==u&&(t[u]=this.value)}}]),RefString}()},function(e,t,r){"use strict";r.r(t);var n=r(0);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function Cols(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.head,o=t.subs,i=void 0===o?new n.a(0):o,a=t.attr,s=void 0===a?{}:a;if(function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cols),e instanceof Cols)Object.assign(this,e);else{for(var u in this.cols={},r){var c=null===e[u]?void 0:e[u];void 0===c||void 0===c.error&&void 0===c.valid?(r[u].type===Number&&(void 0===c&&(c="0"),c=c.toString().replace(/,/g,"")),this.cols[u]=new r[u].type(c)):this.cols[u]=c}this.head=r,this.subs=i,this.attr=s}}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Cols,[{key:"copy",value:function copy(){return new Cols(this)}},{key:"set",value:function set(e,t){var r=this.head[e].type;return this.cols[e]=new r(t),new Cols(this)}},{key:"get",value:function get(e){return this.cols[e]}},{key:"keys",value:function keys(){return Object.keys(this.cols)}},{key:"subsType",value:function subsType(){return this.subs.constructor.name}},{key:"valueOf",value:function valueOf(){var e=Object.entries(this.cols).map((function(e){var t=_slicedToArray(e,2);return[t[0],t[1].valueOf()]}));return Object.fromEntries(e)}}]),Cols}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _construct(e,t,r){return(_construct=function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){function Path(){var e;!function Path_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Path);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(0===r.length)(e=_possibleConstructorReturn(this,_getPrototypeOf(Path).call(this,0))).push(0);else if(Array.isArray(r[0])){var o;(o=e=_possibleConstructorReturn(this,_getPrototypeOf(Path).call(this,0))).push.apply(o,_toConsumableArray(r[0]))}else{var i;e=_possibleConstructorReturn(this,(i=_getPrototypeOf(Path)).call.apply(i,[this].concat(r)))}return _possibleConstructorReturn(e)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Path,e),Path}(_wrapNativeSuper(Array)),a=r(3);function MultiLine_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function MultiLine(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";!function MultiLine_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MultiLine),this.lines=e instanceof MultiLine?e.lines:e.split(/[,;] */)}return function MultiLine_createClass(e,t,r){return t&&MultiLine_defineProperties(e.prototype,t),r&&MultiLine_defineProperties(e,r),e}(MultiLine,[{key:"valueOf",value:function valueOf(){return this.lines.join("\n")}},{key:"setLines",value:function setLines(e){this.lines=this.lines.map(e)}}]),MultiLine}();function Head_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function Head(e){!function Head_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head);var t={Number:Number,String:String,Date:Date,Path:i,RefString:a.a,MultiLine:s};for(var r in e)e[r]in t||console.warn('Head: found non-existing type "'.concat(e[r],'", typo suggested.'),Object.keys(t)),this[r]={type:t[e[r]]}}return function Head_createClass(e,t,r){return t&&Head_defineProperties(e.prototype,t),r&&Head_defineProperties(e,r),e}(Head,[{key:"len",value:function len(){return Object.keys(this).length}},{key:"lenDisplayed",value:function lenDisplayed(){return Object.values(this).filter((function(e){return!(e.hidden||e.isTitle)})).length}},{key:"sum",value:function sum(e){var t=this,r={String:function String(e){for(var t=!0,r=0;r<e.length-1&&(t=t&&void 0!==e[r]&&void 0!==e[r+1]&&e[r].valueOf()==e[r+1].valueOf());r++);return t?e[0]:"..."},Number:function Number(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t}},n={},i=function _loop(o){var i=e.map((function(e){return e.get(o)})),a=t[o].type.name,s=r[a];n[o]=void 0!==s?r[t[o].type.name](i):"..."};for(var a in this)i(a);return new o(n,{head:this})}},{key:"setColProp",value:function setColProp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={isExpandToggler:!1};if(t in this)Object.assign(this[t],{colDesc:t},r,e);else for(var n in t)n in this&&Object.assign(this[n],{colDesc:n},r,e)}},{key:"createCols",value:function createCols(e){return new o(e,{head:this})}},{key:"createBody",value:function createBody(e){var t=this;return n.a.from(e.map((function(e){return t.createCols(e)})))}}]),Head}(),c=r(2),l=r(1);var f=function Table(e,t,r){!function Table_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Table),this.head=e,this.data=t,this.attr=r};function Sheet_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function Sheet(e){var t=e.referred,r=void 0===t?{}:t,n=e.type,o=e.isSavable,i=void 0!==o&&o,a=e.isExportable,s=void 0!==a&&a,u=e.status,c=void 0===u?"none":u,l=e.location,f=void 0===l?"local":l,p=e.importProc,h=e.exportProc,y=e.forceReload,_=void 0!==y&&y,v=e.desc,d=void 0===v?"无描述":v,b=e.hidden,g=void 0!==b&&b;!function Sheet_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Sheet),this.referred=r,this.importProc=p,this.exportProc=h,this.type=n,this.desc=d,this.hidden=g,this.isSavable=i,this.isExportable=s,this.status=c,this.location=f,this.forceReload=_}return function Sheet_createClass(e,t,r){return t&&Sheet_defineProperties(e.prototype,t),r&&Sheet_defineProperties(e,r),e}(Sheet,[{key:"receive",value:function receive(e,t,r){var n=this;(this.blobs=this.blobs||[],this.blobs.push(e),"LAST"===t)&&new Blob(this.blobs).text().then((function(e){n.data=JSON.parse(e),n.status="ready",r()}))}},{key:"import",value:function _import(e){this.tables=this.importProc(e),this.status="ready"}}]),Sheet}();function WorkTable_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function isTitle(e){return e.get("value").desc.startsWith("#")},y=function getTitleLevel(e){return(e.get("value").desc.match(/#/g)||[]).length},_=function breakCond(e){return function(t){console.log(t,"breakCOns");var r=t.last();return!h(r)||h(e)&&function isSameTitleLevel(e,t){return y(e)===y(t)}(e,r)}},v=function(){function WorkTable(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function WorkTable_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WorkTable),this.referred=e,this.data=new n.a(0),this.head=new u({value:"RefString"}),this.head.setColProp({colDesc:"项目",paths:t},"value"),this.attr=r}return function WorkTable_createClass(e,t,r){return t&&WorkTable_defineProperties(e.prototype,t),r&&WorkTable_defineProperties(e,r),e}(WorkTable,[{key:"parse",value:function parse(e){for(var t=0;t<e.length;t++){var r=new o(e[t],{head:this.head});e[t].item.startsWith("#")&&r.get("value").setDesc(e[t].item),this.data.findBy("",{breakCond:_(r),getFunc:function getFunc(e){return e.last()}}).list.push(r)}this.data}},{key:"evaluate",value:function evaluate(){var e=this,t={};return this.data.backTraverse((function(r){return r.get("value").evaluate(e.referred,t,r.subs),r.copy()})),n.a.from(this.data)}}]),WorkTable}();function SheetCollection_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function SheetCollection(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log;!function SheetCollection_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SheetCollection),function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(this,"fetchTable",(function(e){var t=e.projName,n=e.sheetName,o=e.afterFetched;console.log(r.fetchStack,"current fetch stack before next"),console.log(n,r.sheets[n]),r.sheets[n].forceReload&&(r.sheets[n].status="none"),r.afterFetched=o,r.fetchStack.push({projName:t,sheetName:n,sheetSpec:r.sheets[n]}),r.fetchTableWorker()})),this.id=t,this.sheets={},this.socket=e,this.fetchStack=[],this.log=n,this.refs={},this.socket.on("RECV",(function(e){var t=e.position,n=e.percent,o=e.projName,i=e.sheetName,a=e.data;r.log("[".concat(o,"] 的 [").concat(r.sheets[i].desc,"] 已下载").concat((100*n).toFixed(2)+"%"),!0);var s={id:r.id,projName:o,sheetName:i,position:t,type:r.sheets[i].type};r.socket.emit("SEND",s),r.sheets[i].receive(a)})).on("DONE",(function(e){var t=e.projName,n=e.sheetName,o=e.data;r.log("[".concat(t,"] 的 [").concat(r.sheets[n].desc,"] 已下载100%"),!0),r.sheets[n].receive(o,"LAST",(function(){r.fetchTableWorker()}))})).on("NOTFOUND",(function(e){var t=e.projName,n=e.sheetName;e.data;r.log("[".concat(t,"] 的 [").concat(r.sheets[n].desc,"] 未找到，极可能是您没有上传相关的数据文件。请先完成上传并更新数据后再回来。"),!0),r.fetchStack=[],r.afterFetched(!1)})).on("SAVED",(function(){console.log("已保存")}))}return function SheetCollection_createClass(e,t,r){return t&&SheetCollection_defineProperties(e.prototype,t),r&&SheetCollection_defineProperties(e,r),e}(SheetCollection,[{key:"get",value:function get(e){return this.sheets[e]}},{key:"clearSheets",value:function clearSheets(){this.sheets={},this.id=void 0}},{key:"addSheet",value:function addSheet(e,t){if(console.log(t.constructor.name),"Sheet"!==t.constructor.name)throw Error("加入SheetCollection的并不是一个Sheet对象");this.sheets[e]=t}},{key:"addSheets",value:function addSheets(e){for(var t in e)this.addSheet(t,e[t])}},{key:"fetchTableWorker",value:function fetchTableWorker(){if(0!==this.fetchStack.length){var e=this.fetchStack[this.fetchStack.length-1],t=e.projName,r=e.sheetName,n=e.sheetSpec;if("ready"===n.status)this.log("[".concat(t,"] 的 [").concat(n.desc,"] 表已存在")),this.fetchStack.pop(),0===this.fetchStack.length?this.afterFetched(!0):(console.log(t,r,"fetched."),this.fetchTableWorker());else if("remote"===n.location)this.log("[".concat(t,"] 的 [").concat(n.desc,"] 表是远程数据表，待从后台获取"),!0),this.socket.emit("SEND",{id:this.id,projName:t,sheetName:r,type:n.type,position:0});else if("local"===n.location){this.log("[".concat(t,"] 的 [").concat(n.desc,"] 表是本地数据表，须先检查其所依赖的数据表"));var o=n.referred,i=!0;if(r in o)return void this.log("在 [".concat(r,"] 中发现了循环引用，一个数据表不能依赖自己。请召唤程序员"));for(var a in o){var s=o[a];"remote"===s.location&&void 0===this.sheets[a]&&(this.sheets[a]=new p(s)),"ready"!=this.sheets[a].status&&(this.log("[".concat(t,"] 的 [").concat(this.sheets[a].desc,"] 进入队列")),this.fetchStack.push({projName:t,sheetName:a,sheetSpec:this.sheets[a]})),i=i&&"ready"===this.sheets[a].status}i&&this.sheets[r].import(this.sheets),this.fetchTableWorker()}else this.log("哎呀呀，[".concat(n.desc,"] 没有定义location，请打电话联系程序员"))}}}]),SheetCollection}();r.d(t,"Head",(function(){return u})),r.d(t,"Cols",(function(){return o})),r.d(t,"Tabs",(function(){return c.a})),r.d(t,"List",(function(){return l.a})),r.d(t,"Body",(function(){return n.a})),r.d(t,"Table",(function(){return f})),r.d(t,"Sheet",(function(){return p})),r.d(t,"WorkTable",(function(){return v})),r.d(t,"SheetCollection",(function(){return d}))}])}));