(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{27484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",n="minute",r="hour",i="week",s="month",o="quarter",u="year",a="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h="en",p={};p[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var m="$isDayjsObject",g=function(e){return e instanceof M||!(!e||!e[m])},$=function e(t,n,r){var i;if(!t)return h;if("string"==typeof t){var s=t.toLowerCase();p[s]&&(i=s),n&&(p[s]=n,i=s);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var u=t.name;p[u]=t,i=u}return!r&&i&&(h=i),i||!r&&h},v=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},y={s:d,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+d(Math.floor(n/60),2,"0")+":"+d(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,s),o=n-i<0,u=t.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-u:u-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:s,y:u,w:i,d:"day",D:a,h:r,m:n,s:t,ms:e,Q:o})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=$,y.i=g,y.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function d(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var h=d.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var c=this,l=!!y.u(o)||o,f=y.p(e),d=function(e,t){var n=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return l?n:n.endOf("day")},h=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},p=this.$W,m=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case u:return l?d(1,0):d(31,11);case s:return l?d(1,m):d(0,m+1);case i:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return d(l?g-M:g+(6-M),m);case"day":case a:return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case t:return h($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(i,o){var c,l=y.p(i),f="set"+(this.$u?"UTC":""),d=((c={}).day=f+"Date",c[a]=f+"Date",c[s]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[t]=f+"Seconds",c[e]=f+"Milliseconds",c)[l],h="day"===l?this.$D+(o-this.$W):o;if(l===s||l===u){var p=this.clone().set(a,1);p.$d[d](h),p.init(),this.$d=p.set(a,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,o){var a,c=this;e=Number(e);var l=y.p(o),f=function(t){var n=v(c);return y.w(n.date(n.date()+Math.round(t*e)),c)};if(l===s)return this.set(s,this.$M+e);if(l===u)return this.set(u,this.$y+e);if("day"===l)return f(1);if(l===i)return f(7);var d=((a={})[n]=6e4,a[r]=36e5,a[t]=1e3,a)[l]||1,h=this.$d.getTime()+e*d;return y.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$H,o=this.$m,u=this.$M,a=n.weekdays,l=n.months,d=n.meridiem,h=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},p=function(e){return y.s(s%12||12,e,"0")},m=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return u+1;case"MM":return y.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,l,3);case"MMMM":return h(l,u);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,a,2);case"ddd":return h(n.weekdaysShort,t.$W,a,3);case"dddd":return a[t.$W];case"H":return String(s);case"HH":return y.s(s,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(s,o,!0);case"A":return m(s,o,!1);case"m":return String(o);case"mm":return y.s(o,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,a,c){var l,f=this,d=y.p(a),h=v(e),p=(h.utcOffset()-this.utcOffset())*6e4,m=this-h,g=function(){return y.m(f,h)};switch(d){case u:l=g()/12;break;case s:l=g();break;case o:l=g()/3;break;case i:l=(m-p)/6048e5;break;case"day":l=(m-p)/864e5;break;case r:l=m/36e5;break;case n:l=m/6e4;break;case t:l=m/1e3;break;default:l=m}return c?l:y.a(l)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),x=M.prototype;return v.prototype=x,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",u],["$D",a]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,M,v),e.$i=!0),v},v.locale=$,v.isDayjs=g,v.unix=function(e){return v(1e3*e)},v.en=p[h],v.Ls=p,v.p={},v},e.exports=t()},14682:function(e,t,n){"use strict";n.d(t,{y:function(){return g}});var r=n(9669),i=n.n(r),s=n(84506),o=n(40203),u=n(35823),a=n.n(u),c=i().create({baseURL:s.url_root+"/api/v1/",headers:{"Access-Control-Allow-Origin":"*"}});c.interceptors.request.use(function(e){return e.headers.Authorization="Bearer "+(0,o.Gg)().user.token,e},function(e){console.log("Interceptor request error: "+e)}),c.interceptors.response.use(function(e){return e},function(e){throw console.log(" AXIOS error: "),console.log(e),401===e.response.status&&(0,o.KY)("","",-1,0,"",!0),403===e.response.status&&console.log("Error: "+e.response.data.status),404===e.response.status&&console.log("Error: "+e.response.data.status),409===e.response.status&&console.log("Error: "+e.response.data.status),422===e.response.status&&(0,o.KY)("","",-1,0,"",!0),e});var l=function(e){return e.data},f=function(e){return c.get(e).then(l)},d=function(e,t,n){return c.post(e,{pin:n},{responseType:"blob"}).then(function(e){t=e.headers["content-disposition"].split('"')[1],a()(e.data,t)})},h=function(e,t){return c.post(e,t).then(l)},p=function(e,t){return c.patch(e,t).then(l)},m=function(e){return c.delete(e).then(l)},g={login:function(e){return h("login",e)},getUsers:function(){return f("users")},getUser:function(e){return f("users/".concat(e))},getUserStartupKit:function(e,t,n){return d("users/".concat(e,"/blob"),t,n)},getClientStartupKit:function(e,t,n){return d("clients/".concat(e,"/blob"),t,n)},getOverseerStartupKit:function(e,t){return d("overseer/blob",e,t)},getServerStartupKit:function(e,t,n){return d("servers/".concat(e,"/blob"),t,n)},getClients:function(){return f("clients")},getProject:function(){return f("project")},postUser:function(e){return h("users",e)},patchUser:function(e,t){return p("users/".concat(e),t)},deleteUser:function(e){return m("users/".concat(e))},postClient:function(e){return h("clients",e)},patchClient:function(e,t){return p("clients/".concat(e),t)},deleteClient:function(e){return m("clients/".concat(e))},patchProject:function(e){return p("project",e)},getServer:function(){return f("server")},patchServer:function(e){return p("server",e)}}},12976:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(50029),i=n(64687),s=n.n(i),o=n(41664),u=n.n(o),a=n(29224),c=n.n(a),l=n(70491),f=n.n(l),d=n(86188),h=n.n(d),p=n(85444),m=p.default.div.withConfig({displayName:"styles__StyledLayout",componentId:"sc-xczy9u-0"})(["overflow:hidden;height:100%;width:100%;margin:0;padding:0;display:flex;flex-wrap:wrap;.menu{height:auto;}.content-header{flex:0 0 80px;}"]),g=p.default.div.withConfig({displayName:"styles__StyledContent",componentId:"sc-xczy9u-1"})(["display:flex;flex-direction:column;flex:1 1 0%;overflow:auto;height:calc(100% - 3rem);.inlineeditlarger{padding:10px;}.inlineedit{padding:10px;margin:-10px;}.content-wrapper{padding:",";min-height:800px;}"],function(e){return e.theme.spacing.four}),$=n(11163),v=n(84506),y=n(67294),M=n(40203),x=n(13258),S=n.n(x),w=n(5801),j=n.n(w),D=n(14682),b=n(85893),C=function(e){var t,n=e.children,i=e.headerChildren,o=e.title,a=(0,$.useRouter)(),l=a.pathname,p=a.push,w=(0,y.useState)(),C=w[0],O=w[1],k=(0,M.Gg)();(0,y.useEffect)(function(){D.y.getProject().then(function(e){O(e.project)})},[]);var I=(t=(0,r.Z)(s().mark(function e(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(0,M.KY)("none","",-1,0),p("/");case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,b.jsxs)(m,{children:[(0,b.jsx)(c(),{app:null==C?void 0:C.short_name,appBarActions:k.user.role>0?(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",marginRight:10},children:[v.demo&&(0,b.jsx)("div",{children:"DEMO MODE"}),(0,b.jsx)(S(),{parentElement:(0,b.jsx)(j(),{icon:{name:"AccountCircleGenericUser",color:"white",size:22},shape:"circle",variant:"link",className:"logout-link"}),position:"top-right",children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.ActionMenuItem,{label:"Logout",onClick:I}),!1]})})]}):(0,b.jsx)(b.Fragment,{})}),(0,b.jsxs)(h(),{className:"menu",itemMatchPattern:function(e){return e===l},itemRenderer:function(e){var t=e.title,n=e.href;return(0,b.jsx)(u(),{href:n,children:t})},location:l,children:[0==k.user.role&&(0,b.jsxs)(d.MenuContent,{children:[(0,b.jsx)(d.MenuItem,{href:"/",icon:{name:"AccountUser"},title:"Login"}),(0,b.jsx)(d.MenuItem,{href:"/registration-form",icon:{name:"ObjectsClipboardEdit"},title:"User Registration Form"})]}),4==k.user.role&&(0,b.jsxs)(d.MenuContent,{children:[(0,b.jsx)(d.MenuItem,{href:"/",icon:{name:"ViewList"},title:"Project Home"}),(0,b.jsx)(d.MenuItem,{href:"/user-dashboard",icon:{name:"ServerEdit"},title:"My Info"}),(0,b.jsx)(d.MenuItem,{href:"/project-admin-dashboard",icon:{name:"AccountGroupShieldAdd"},title:"Users Dashboard"}),(0,b.jsx)(d.MenuItem,{href:"/site-dashboard",icon:{name:"ConnectionNetworkComputers2"},title:"Client Sites"}),(0,b.jsx)(d.MenuItem,{href:"/project-configuration",icon:{name:"SettingsCog"},title:"Project Configuration"}),(0,b.jsx)(d.MenuItem,{href:"/server-config",icon:{name:"ConnectionServerNetwork1"},title:"Server Configuration"}),(0,b.jsx)(d.MenuItem,{href:"/downloads",icon:{name:"ActionsDownload"},title:"Downloads"}),(0,b.jsx)(d.MenuItem,{href:"/logout",icon:{name:"PlaybackStop"},title:"Logout"})]}),(1==k.user.role||2==k.user.role||3==k.user.role)&&(0,b.jsxs)(d.MenuContent,{children:[(0,b.jsx)(d.MenuItem,{href:"/",icon:{name:"ViewList"},title:"Project Home Page"}),(0,b.jsx)(d.MenuItem,{href:"/user-dashboard",icon:{name:"ServerEdit"},title:"My Info"}),(0,b.jsx)(d.MenuItem,{href:"/downloads",icon:{name:"ActionsDownload"},title:"Downloads"}),(0,b.jsx)(d.MenuItem,{href:"/logout",icon:{name:"PlaybackStop"},title:"Logout"})]}),(0,b.jsx)(d.MenuFooter,{})]}),(0,b.jsxs)(g,{children:[(0,b.jsx)(f(),{className:"content-header",title:o,children:i}),(0,b.jsx)("div",{className:"content-wrapper",children:n})]})]})}},40203:function(e,t,n){"use strict";n.d(t,{Gg:function(){return o},KY:function(){return i},a5:function(){return s}});var r={user:{email:"",token:"",id:-1,role:0},status:"unauthenticated"};function i(e,t,n,i,s){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return r={user:{email:e,token:t,id:n,role:i,org:s},expired:o,status:0==i?"unauthenticated":"authenticated"},localStorage.setItem("session",JSON.stringify(r)),r}function s(e){return r={user:{email:r.user.email,token:r.user.token,id:r.user.id,role:e,org:r.user.org},expired:r.expired,status:r.status},localStorage.setItem("session",JSON.stringify(r)),r}function o(){var e=localStorage.getItem("session");return null!=e&&(r=JSON.parse(e)),r}},50029:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o){try{var u=e[s](o),a=u.value}catch(e){n(e);return}u.done?t(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var o=e.apply(t,n);function u(e){r(o,i,s,u,a,"next",e)}function a(e){r(o,i,s,u,a,"throw",e)}u(void 0)})}}n.d(t,{Z:function(){return i}})},84506:function(e){"use strict";e.exports=JSON.parse('{"projectname":"New FL Project","demo":false,"url_root":"/nvflare-dashboard","arraydata":[{"name":"itemone"},{"name":"itemtwo"},{"name":"itemthree"}]}')}}]);