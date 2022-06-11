"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[555],{71555:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0===t.delegations.length?r("router-link",{attrs:{to:"/wallet/import"}},[r("b-card",{staticClass:"addzone text-center"},[r("feather-icon",{attrs:{icon:"PlusIcon"}}),t._v(" Connect Wallet ")],1)],1):t._e(),t._l(t.groupedDelegations,(function(e,n){return r("b-card",{key:"row-"+n,attrs:{title:n}},[r("b-row",{staticClass:"bg-light-secondary text-white"},[r("b-col",{staticClass:"p-1 font-weight-bold",attrs:{md:"4",sm:"12"}},[t._v(" VALIDATOR ")]),r("b-col",{staticClass:"p-1 font-weight-bold",attrs:{md:"3",sm:"12"}},[t._v(" DELEGATION ")]),r("b-col",{staticClass:"p-1 font-weight-bold",attrs:{md:"5",sm:"12"}},[t._v(" REWARD ")])],1),t._l(e,(function(e,n){return r("b-row",{key:e.validator.validator+"-"+n,staticClass:"border-bottom"},[r("b-col",{staticClass:"d-flex align-items-center",attrs:{md:"4",sm:"12"}},[r("router-link",{attrs:{to:"/"+e.validator.chain+"/staking/"+e.validator.validator}},[r("div",{attrs:{cols:"6"}},[r("b-avatar",{attrs:{src:e.validator.logo,size:"18",variant:"light-primary",rounded:""}}),t._v(" "+t._s(e.validator.moniker)+" ")],1)])],1),r("b-col",{staticClass:"d-flex align-items-center",attrs:{md:"3",sm:"12"}},[t._v(" "+t._s(e.delegation)+" ")]),r("b-col",{attrs:{md:"5",sm:"12"}},[r("router-link",{attrs:{to:"/"+e.validator.chain+"/account/"+e.delegator_address}},[r("div",[t._v(t._s(e.reward))]),r("div",{staticClass:"text-success"},[t._v(" "+t._s(t.currency)+t._s(t.toCurrency(e.reward))+" ")])])],1)],1)}))],2)}))],2)},o=[],i=r(75200),a=r(8775),s=r(26253),l=r(50725),c=r(5870),d=r(20266),u=r(35436),f=r(22742),p={components:{BAvatar:i.SH,BCard:a._,BRow:s.T,BCol:l.l,FeatherIcon:f.Z},directives:{"b-tooltip":c.o,Ripple:d.Z},data(){return{address:"",selectedValidator:"",accounts:[],delegations:[],rewards:{},operationModalType:"",ibcDenoms:{},currency:(0,u.getUserCurrencySign)(),currency2:(0,u.getUserCurrency)()}},computed:{formatedDelegations(){return this.delegations.map((t=>({validator:{logo:t.chain.logo,validator:t.delegation.validator_address,moniker:this.findMoniker(t.chain.chain_name,t.delegation.validator_address),chain:t.chain.chain_name},delegator:t.keyname,delegator_address:t.delegation.delegator_address,delegation:(0,u.formatToken)(t.balance),reward:this.findReward(t.delegation.delegator_address,t.delegation.validator_address)})))},groupedDelegations(){const t={};return this.delegations.forEach((e=>{const r={validator:{logo:e.chain.logo,validator:e.delegation.validator_address,moniker:this.findMoniker(e.chain.chain_name,e.delegation.validator_address),chain:e.chain.chain_name},delegator:e.keyname,delegator_address:e.delegation.delegator_address,delegation:(0,u.formatToken)(e.balance),reward:this.findReward(e.delegation.delegator_address,e.delegation.validator_address)};t[e.keyname]?t[e.keyname].push(r):t[e.keyname]=[r]})),t}},created(){this.init()},methods:{selectValue(t,e){return this.operationModalType=t,this.address=e.delegator_address,this.selectedValidator=e.validator.validator,e},findMoniker(t,e){const r=JSON.parse((0,u.getCachedValidators)(t));if(r){const t=r.find((t=>t.operator_address===e));if(t)return t.description.moniker}return e},findReward(t,e){const r=this.rewards[t]?.rewards.find((t=>t.validator_address===e))||null;return r?(0,u.tokenFormatter)(r.reward,this.ibcDenoms):"-"},getPrice(t){const e=this.$store.state.chains.quotes[t];return e?e[this.currency2]:0},toCurrency(t){let e=0;return t.split(", ").forEach((t=>{const r=t.trim().replace(/,/,"").split(" ");e+=Number(r[0])*this.getPrice(r[1])})),(0,u.numberWithCommas)(e.toFixed(2))},init(){this.accounts=(0,u.getLocalAccounts)();const t=(0,u.getLocalChains)();this.accounts&&Object.keys(this.accounts).forEach((e=>{this.accounts[e].address.forEach((r=>{const n=t[r.chain];this.$http.getStakingReward(r.addr,n).then((t=>{this.rewards[r.addr]=t,t.total.forEach((t=>{t.denom.startsWith("ibc")&&this.$http.getIBCDenomTrace(t.denom,n).then((e=>{this.$set(this.ibcDenoms,t.denom,e)}))}))})),this.$http.getStakingDelegations(r.addr,n).then((t=>{if(t.delegation_responses&&t.delegation_responses.length>0){const r=t.delegation_responses.map((t=>{const r=t;return r.keyname=e,r.chain=n,r}));this.delegations=this.delegations.concat(r)}})).catch((()=>{}))}))}))}}},g=p,h=r(1001),v=(0,h.Z)(g,n,o,!1,null,null,null),m=v.exports},50725:function(t,e,r){r.d(e,{l:function(){return P}});var n=r(69558),o=r(94689),i=r(12299),a=r(30824),s=r(11572),l=r(79968),c=r(68265),d=r(33284),u=r(91051),f=r(67040),p=r(20451),g=r(46595);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=["auto","start","end","center","baseline","stretch"],y=function(t,e,r){var n=t;if(!(0,d.Jp)(r)&&!1!==r)return e&&(n+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),(0,g.vl)(n)):(0,g.vl)(n)},w=(0,u.H)(y),_=(0,f.Ue)(null),O=function(){var t=(0,l.QC)().filter(c.y),e=t.reduce((function(t,e){return t[e]=(0,p.pi)(i.jy),t}),(0,f.Ue)(null)),r=t.reduce((function(t,e){return t[(0,p.wv)(e,"offset")]=(0,p.pi)(i.fE),t}),(0,f.Ue)(null)),n=t.reduce((function(t,e){return t[(0,p.wv)(e,"order")]=(0,p.pi)(i.fE),t}),(0,f.Ue)(null));return _=(0,f.f0)((0,f.Ue)(null),{col:(0,f.XP)(e),offset:(0,f.XP)(r),order:(0,f.XP)(n)}),(0,p.y2)((0,f.GE)(v(v(v(v({},e),r),n),{},{alignSelf:(0,p.pi)(i.N0,null,(function(t){return(0,s.kI)(b,t)})),col:(0,p.pi)(i.U5,!1),cols:(0,p.pi)(i.fE),offset:(0,p.pi)(i.fE),order:(0,p.pi)(i.fE),tag:(0,p.pi)(i.N0,"div")})),o.ux)},P={name:o.ux,functional:!0,get props(){return delete this.props,this.props=O()},render:function(t,e){var r,o=e.props,i=e.data,s=e.children,l=o.cols,c=o.offset,d=o.order,u=o.alignSelf,f=[];for(var p in _)for(var g=_[p],h=0;h<g.length;h++){var v=w(p,g[h].replace(p,""),o[g[h]]);v&&f.push(v)}var b=f.some((function(t){return a.Es.test(t)}));return f.push((r={col:o.col||!b&&!l},m(r,"col-".concat(l),l),m(r,"offset-".concat(c),c),m(r,"order-".concat(d),d),m(r,"align-self-".concat(u),u),r)),t(o.tag,(0,n.b)(i,{class:f}),s)}}},26253:function(t,e,r){r.d(e,{T:function(){return _}});var n=r(69558),o=r(94689),i=r(12299),a=r(11572),s=r(79968),l=r(68265),c=r(91051),d=r(67040),u=r(20451),f=r(46595);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=["start","end","center"],m=(0,c.H)((function(t,e){return e=(0,f.fy)((0,f.BB)(e)),e?(0,f.vl)(["row-cols",t,e].filter(l.y).join("-")):null})),b=(0,c.H)((function(t){return(0,f.vl)(t.replace("cols",""))})),y=[],w=function(){var t=(0,s.QC)().reduce((function(t,e){return t[(0,u.wv)(e,"cols")]=(0,u.pi)(i.fE),t}),(0,d.Ue)(null));return y=(0,d.XP)(t),(0,u.y2)((0,d.GE)(g(g({},t),{},{alignContent:(0,u.pi)(i.N0,null,(function(t){return(0,a.kI)((0,a.zo)(v,"between","around","stretch"),t)})),alignH:(0,u.pi)(i.N0,null,(function(t){return(0,a.kI)((0,a.zo)(v,"between","around"),t)})),alignV:(0,u.pi)(i.N0,null,(function(t){return(0,a.kI)((0,a.zo)(v,"baseline","stretch"),t)})),noGutters:(0,u.pi)(i.U5,!1),tag:(0,u.pi)(i.N0,"div")})),o.tt)},_={name:o.tt,functional:!0,get props(){return delete this.props,this.props=w(),this.props},render:function(t,e){var r,o=e.props,i=e.data,a=e.children,s=o.alignV,l=o.alignH,c=o.alignContent,d=[];return y.forEach((function(t){var e=m(b(t),o[t]);e&&d.push(e)})),d.push((r={"no-gutters":o.noGutters},h(r,"align-items-".concat(s),s),h(r,"justify-content-".concat(l),l),h(r,"align-content-".concat(c),c),r)),t(o.tag,(0,n.b)(i,{staticClass:"row",class:d}),a)}}},5870:function(t,e,r){r.d(e,{o:function(){return L}});var n=r(94689),o=r(43935),i=r(63294),a=r(11572),s=r(79968),l=r(13597),c=r(68265),d=r(33284),u=r(3058),f=r(93954),p=r(67040),g=r(40960);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b="__BV_Tooltip__",y="hover focus",w={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},_=/^html$/i,O=/^noninteractive$/i,P=/^nofade$/i,j=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,k=/^(window|viewport|scrollParent)$/i,C=/^d\d+$/i,E=/^ds\d+$/i,x=/^dh\d+$/i,D=/^o-?\d+$/i,R=/^v-.+$/i,T=/\s+/,$=function(t,e){var r={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,s.wJ)(n.qv,"delay",50),boundary:String((0,s.wJ)(n.qv,"boundary","scrollParent")),boundaryPadding:(0,f.Z3)((0,s.wJ)(n.qv,"boundaryPadding",5),0),variant:(0,s.wJ)(n.qv,"variant"),customClass:(0,s.wJ)(n.qv,"customClass")};if((0,d.HD)(t.value)||(0,d.hj)(t.value)||(0,d.mf)(t.value)?r.title=t.value:(0,d.PO)(t.value)&&(r=v(v({},r),t.value)),(0,d.o8)(r.title)){var o=e.data||{};r.title=o.attrs&&!(0,d.Jp)(o.attrs.title)?o.attrs.title:void 0}(0,d.PO)(r.delay)||(r.delay={show:(0,f.Z3)(r.delay,0),hide:(0,f.Z3)(r.delay,0)}),t.arg&&(r.container="#".concat(t.arg)),(0,p.XP)(t.modifiers).forEach((function(t){if(_.test(t))r.html=!0;else if(O.test(t))r.interactive=!1;else if(P.test(t))r.animation=!1;else if(j.test(t))r.placement=t;else if(k.test(t))t="scrollparent"===t?"scrollParent":t,r.boundary=t;else if(C.test(t)){var e=(0,f.Z3)(t.slice(1),0);r.delay.show=e,r.delay.hide=e}else E.test(t)?r.delay.show=(0,f.Z3)(t.slice(2),0):x.test(t)?r.delay.hide=(0,f.Z3)(t.slice(2),0):D.test(t)?r.offset=(0,f.Z3)(t.slice(1),0):R.test(t)&&(r.variant=t.slice(2)||null)}));var i={};return(0,a.zo)(r.trigger||"").filter(c.y).join(" ").trim().toLowerCase().split(T).forEach((function(t){w[t]&&(i[t]=!0)})),(0,p.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),w[t]&&(i[t]=!0)})),r.trigger=(0,p.XP)(i).join(" "),"blur"===r.trigger&&(r.trigger="focus"),r.trigger||(r.trigger=y),r},N=function(t,e,r){if(o.Qg){var n=$(e,r);if(!t[b]){var a=r.context;t[b]=new g.j({parent:a,_scopeId:(0,l.P)(a,void 0)}),t[b].__bv_prev_data__={},t[b].$on(i.l0,(function(){(0,d.mf)(n.title)&&t[b].updateData({title:n.title(t)})}))}var s={title:n.title,triggers:n.trigger,placement:n.placement,fallbackPlacement:n.fallbackPlacement,variant:n.variant,customClass:n.customClass,container:n.container,boundary:n.boundary,delay:n.delay,offset:n.offset,noFade:!n.animation,id:n.id,interactive:n.interactive,disabled:n.disabled,html:n.html},c=t[b].__bv_prev_data__;if(t[b].__bv_prev_data__=s,!(0,u.W)(s,c)){var f={target:t};(0,p.XP)(s).forEach((function(e){s[e]!==c[e]&&(f[e]="title"===e&&(0,d.mf)(s[e])?s[e](t):s[e])})),t[b].updateData(f)}}},S=function(t){t[b]&&(t[b].$destroy(),t[b]=null),delete t[b]},L={bind:function(t,e,r){N(t,e,r)},componentUpdated:function(t,e,r){r.context.$nextTick((function(){N(t,e,r)}))},unbind:function(t){S(t)}}},20266:function(t,e){var r={bind:function(t,e){var o={event:"mousedown",transition:600};n(Object.keys(e.modifiers),o),t.addEventListener(o.event,(function(r){s(r,t,e.value)}));var i=e.value||r.color||"rgba(0, 0, 0, 0.35)",a=r.zIndex||"9999";function s(t,e){var r=e,n=parseInt(getComputedStyle(r).borderWidth.replace("px","")),s=r.getBoundingClientRect(),l=s.left,c=s.top,d=r.offsetWidth,u=r.offsetHeight,f=t.clientX-l,p=t.clientY-c,g=Math.max(f,d-f),h=Math.max(p,u-p),v=window.getComputedStyle(r),m=Math.sqrt(g*g+h*h),b=n>0?n:0,y=document.createElement("div"),w=document.createElement("div");w.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+o.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=a,y.style.backgroundColor=i,w.style.position="absolute",w.style.left=0-b+"px",w.style.top=0-b+"px",w.style.height="0",w.style.width="0",w.style.pointerEvents="none",w.style.overflow="hidden";var _=r.style.position.length>0?r.style.position:getComputedStyle(r).position;function O(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){w.parentNode.removeChild(w)}),850),e.removeEventListener("mouseup",O,!1),setTimeout((function(){for(var t=!0,e=0;e<r.childNodes.length;e++)"ripple-container"===r.childNodes[e].className&&(t=!1);t&&(r.style.position="static"!==_?_:"")}),o.transition+250)}"relative"!==_&&(r.style.position="relative"),w.appendChild(y),r.appendChild(w),y.style.marginLeft=f+"px",y.style.marginTop=p+"px",w.style.width=d+"px",w.style.height=u+"px",w.style.borderTopLeftRadius=v.borderTopLeftRadius,w.style.borderTopRightRadius=v.borderTopRightRadius,w.style.borderBottomLeftRadius=v.borderBottomLeftRadius,w.style.borderBottomRightRadius=v.borderBottomRightRadius,w.style.direction="ltr",setTimeout((function(){y.style.width=2*m+"px",y.style.height=2*m+"px",y.style.marginLeft=f-m+"px",y.style.marginTop=p-m+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",O,!1):O()}}};function n(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}e["Z"]=r}}]);