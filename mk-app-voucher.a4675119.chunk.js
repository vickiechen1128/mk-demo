webpackJsonp([2],{1642:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,u=a(2),c=n(u),i=a(58),s=n(i),d=a(4),f=n(d),l=a(10),m=n(l),h=a(7),p=n(h),v=a(8),w=n(v),x=a(0),S=(n(x),a(13)),k=(n(S),a(273)),A=a(646),b=n(A),g=(r=(0,k.wrapper)(b.default))(o=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,w.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),t}(x.Component))||o;t.default=g,e.exports=t.default},1643:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new S.action(e),a=new R((0,u.default)({},e,{metaAction:t})),n=(0,u.default)({},t,a);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),u=n(o),c=a(274),i=n(c),s=a(275),d=n(s),f=a(4),l=n(f),m=a(10),h=n(m);t.default=r;var p=a(0),v=n(p),w=a(13),x=n(w),S=a(273),k=a(616),A=n(k),b=a(80),g=a(9),R=(n(g),function(){function e(t){var a=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init"),a.load()},this.load=(0,d.default)(i.default.mark(function e(){var t,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,a.webapi.voucher.init({id:a.component.props.voucherId});case 3:n=e.sent,t.voucher=n.voucher,t.educationDataSource=n.educations,t.relaDataSource=n.relas,a.injections.reduce("load",t);case 8:case"end":return e.stop()}},e,a)})),this.prev=(0,d.default)(i.default.mark(function e(){var t,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.voucher.prev(t);case 3:n=e.sent,n&&a.injections.reduce("setVoucher",n);case 5:case"end":return e.stop()}},e,a)})),this.next=(0,d.default)(i.default.mark(function e(){var t,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.voucher.next(t);case 3:n=e.sent,n&&a.injections.reduce("setVoucher",n);case 5:case"end":return e.stop()}},e,a)})),this.add=function(){a.injections.reduce("setVoucher")},this.del=(0,d.default)(i.default.mark(function e(){var t,n,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 3:if(!(n=e.sent)){e.next=10;break}return e.next=7,a.webapi.voucher.del({id:t});case 7:r=e.sent,a.metaAction.toast("success","删除单据成功"),a.injections.reduce("setVoucher",r);case 10:case"end":return e.stop()}},e,a)})),this.save=(0,d.default)(i.default.mark(function e(){var t,n,r,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.metaAction.gf("data.form").toJS(),n=a.checkSave(t),!(n.length>0)){e.next=5;break}return a.metaAction.toast("error",v.default.createElement("ul",{style:{textAlign:"left"}},n.map(function(e){return v.default.createElement("li",null,e)}))),e.abrupt("return");case 5:if(!t.id&&0!=t.id){e.next=12;break}return e.next=8,a.webapi.voucher.update(t);case 8:r=e.sent,r&&(a.metaAction.toast("success","保存单据成功"),a.injections.reduce("setVoucher",r)),e.next=16;break;case 12:return e.next=14,a.webapi.voucher.create(t);case 14:o=e.sent,o&&(a.metaAction.toast("success","保存单据成功"),a.injections.reduce("setVoucher",o));case 16:case"end":return e.stop()}},e,a)})),this.addEducation=(0,d.default)(i.default.mark(function e(){var t,n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("show",{title:"新增学历",children:a.metaAction.loadApp("mk-app-voucher-education",{store:a.component.props.store})});case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,a.webapi.education.query();case 6:n=e.sent,a.metaAction.sfs({"data.other.educationDataSource":(0,b.fromJS)(n),"data.form.education":(0,b.fromJS)(t)});case 8:case"end":return e.stop()}},e,a)})),this.educationFocus=(0,d.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.education.query();case 2:t=e.sent,a.metaAction.sf("data.other.educationDataSource",(0,b.fromJS)(t));case 4:case"end":return e.stop()}},e,a)})),this.educationChange=function(e){var t=a.metaAction.gf("data.other.educationDataSource"),n=t.find(function(t){return t.get("id")==e});a.metaAction.sf("data.form.education",n)},this.addrow=function(e){a.injections.reduce("addEmptyRow",e.rowIndex+1)},this.delrow=function(e){a.injections.reduce("delrow",e.rowIndex)},this.getCellClassName=function(e){return a.metaAction.isFocus(e)?"mk-app-voucher-cell edit-control":""},this.cellClick=function(e){var t=a.metaAction.findPathByEvent(e);if(!a.metaAction.isFocus(t)){a.metaAction.sf("data.other.focusFieldPath",t);var n=a;setTimeout(function(){var e=x.default.findDOMNode(n.component).querySelector(".edit-control");if(e){if(-1!=e.className.indexOf("input"))return void e.select();if(-1!=e.className.indexOf("select"))return void e.click();if(-1!=e.className.indexOf("datepicker")){return void e.querySelector("input").click()}}},16)}},this.metaAction=t.metaAction,this.config=A.default.current,this.webapi=this.config.webapi}return(0,h.default)(e,[{key:"checkSave",value:function(e){var t=[];return e.name||t.push("姓名不能为空!"),e.mobile||t.push("手机不能为空!"),e.details&&0!=e.details.length||t.push("家庭情况不能为空！"),e.details.forEach(function(e,a){e.name||t.push("家庭情况第"+(a+1)+"行，家庭成员姓名不能为空！"),e.rela||t.push("家庭情况第"+(a+1)+"行，关系不能为空！")}),t}}]),e}());e.exports=t.default},1644:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new d.reducer(e),a=new p((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,a)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),u=n(o),c=a(4),i=n(c);t.default=r;var s=a(80),d=a(273),f=a(616),l=n(f),m=a(647),h=a(9),p=(n(h),function e(t){var a=this;(0,i.default)(this,e),this.init=function(e,t){return a.metaReducer.init(e,(0,m.getInitState)())},this.load=function(e,t){var n=t.voucher,r=t.educationDataSource,o=t.relaDataSource;return e=n?a.metaReducer.sf(e,"data.form",(0,s.fromJS)(n)):a.metaReducer.sf(e,"data",(0,s.fromJS)((0,m.getInitState)().data)),e=a.metaReducer.sf(e,"data.other.educationDataSource",(0,s.fromJS)(r)),e=a.metaReducer.sf(e,"data.other.relaDataSource",(0,s.fromJS)(o))},this.setVoucher=function(e,t){return t?a.metaReducer.sf(e,"data.form",(0,s.fromJS)(t)):a.metaReducer.sf(e,"data.form",(0,s.fromJS)((0,m.getInitState)().data.form))},this.addEmptyRow=function(e,t){var n=a.metaReducer.gf(e,"data.form.details");return n=n.insert(t,(0,s.Map)({})),a.metaReducer.sf(e,"data.form.details",n)},this.delrow=function(e,t){var n=a.metaReducer.gf(e,"data.form.details");return-1==t?e:(n=n.remove(t),0==n.size&&(n=n.insert(t,(0,s.Map)({}))),a.metaReducer.sf(e,"data.form.details",n))},this.metaReducer=t.metaReducer,this.config=l.default.current});e.exports=t.default}});