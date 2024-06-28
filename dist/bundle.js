(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",o="hour",a="day",u="week",c="month",d="quarter",f="year",l="date",h="Invalid Date",y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,o=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:a,D:l,h:o,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",M={};M[g]=$;var D="$isDayjsObject",w=function(t){return t instanceof O||!(!t||!t[D])},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},x=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},_=v;_.l=S,_.i=w,_.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function $(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var p=$.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(y);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return _},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return x(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<x(t)},p.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!_.u(e)||e,d=_.p(t),h=function(t,e){var i=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},y=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,$=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case f:return r?h(1,0):h(31,11);case c:return r?h(1,$):h(0,$+1);case u:var g=this.$locale().weekStart||0,M=(m<g?m+7:m)-g;return h(r?p-M:p+(6-M),$);case a:case l:return y(v+"Hours",0);case o:return y(v+"Minutes",1);case s:return y(v+"Seconds",2);case i:return y(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=_.p(t),d="set"+(this.$u?"UTC":""),h=(n={},n[a]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[f]=d+"FullYear",n[o]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],y=u===a?this.$D+(e-this.$W):e;if(u===c||u===f){var m=this.clone().set(l,1);m.$d[h](y),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](y);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[_.p(t)]()},p.add=function(r,d){var l,h=this;r=Number(r);var y=_.p(d),m=function(t){var e=x(h);return _.w(e.date(e.date()+Math.round(t*r)),h)};if(y===c)return this.set(c,this.$M+r);if(y===f)return this.set(f,this.$y+r);if(y===a)return m(1);if(y===u)return m(7);var $=(l={},l[s]=e,l[o]=n,l[i]=t,l)[y]||1,p=this.$d.getTime()+r*$;return _.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},l=function(t){return _.s(s%12||12,t,"0")},y=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return a+1;case"MM":return _.s(a+1,2,"0");case"MMM":return f(n.monthsShort,a,c,3);case"MMMM":return f(c,a);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,u,2);case"ddd":return f(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return _.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return y(s,o,!0);case"A":return y(s,o,!1);case"m":return String(o);case"mm":return _.s(o,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,l,h){var y,m=this,$=_.p(l),p=x(r),v=(p.utcOffset()-this.utcOffset())*e,g=this-p,M=function(){return _.m(m,p)};switch($){case f:y=M()/12;break;case c:y=M();break;case d:y=M()/3;break;case u:y=(g-v)/6048e5;break;case a:y=(g-v)/864e5;break;case o:y=g/n;break;case s:y=g/e;break;case i:y=g/t;break;default:y=g}return h?y:_.a(y)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return M[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return _.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},$}(),b=O.prototype;return x.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",o],["$W",a],["$M",c],["$y",f],["$D",l]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,O,x),t.$i=!0),x},x.locale=S,x.isDayjs=w,x.unix=function(t){return x(1e3*t)},x.en=M[g],x.Ls=M,x.p={},x}()},279:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,o,a){for(var u,c,d,f=s.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,y=0;y<h;y+=1){var m=l[y];m.d&&(u=o?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(d=u>0,$<=m.r||!m.r){$<=1&&y>0&&(m=l[y-1]);var p=f[m.l];a&&($=a(""+$)),c="string"==typeof p?p.replace("%d",$):p($,r,m.l,d);break}}if(r)return c;var v=d?f.future:f.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var o=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(o(this),t)},r.fromNow=function(t){return this.from(o(this),t)}}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(353),e=n.n(t),r=n(279),i=n.n(r);e().extend(i()),document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("toggle_personal"),e=document.getElementById("toggle_programming"),n=document.getElementById("toggle_meme"),r=document.querySelector(".personal_content"),i=document.querySelector(".programming_content");t.addEventListener("click",(function(){"none"===r.style.display?(r.style.display="flex",i.style.display="none",t.style.textDecoration="underline",e.style.textDecoration="none",n.style.textDecoration="none"):(r.style.display="none",t.style.textDecoration="none")})),e.addEventListener("click",(function(){"none"===i.style.display?(i.style.display="flex",r.style.display="none",e.style.textDecoration="underline",t.style.textDecoration="none",n.style.textDecoration="none"):(i.style.display="none",e.style.textDecoration="none")})),n.addEventListener("click",(function(){"none"===n.style.textDecoration?(e.style.textDecoration="none",t.style.textDecoration="none",n.style.textDecoration="underline"):n.style.textDecoration="none"}))})),function(t){const n=new URL("https://fwd.innopolis.university/api/hw2"),r=new URLSearchParams({email:t});n.search=r.toString(),fetch(n).then((t=>{if(!t.ok)throw new Error(`HTTP error status: ${t.status}`);return t.json()})).then((t=>{!function(t){const n=new URL("https://fwd.innopolis.university/api/comic"),r=new URLSearchParams({id:t});n.search=r.toString(),fetch(n).then((t=>{if(!t.ok)throw new Error(`HTTP error status: ${t.status}`);return t.json()})).then((t=>{!function(t){const n=document.getElementById("meme_title"),r=document.getElementById("img_container"),i=document.getElementById("meme_date");n.innerHTML=`${t.safe_title}`,r.innerHTML=`<img src="${t.img}" alt="${t.alt}">`;const s=e()(new Date(t.year,t.month-1,t.day)),o=s.fromNow();i.innerHTML=`Date Uploaded: ${o}`}(t)})).catch((t=>{console.error("There was a problem with the fetch operation:",t)}))}(t)})).catch((t=>{console.error("There was a problem with the fetch operation:",t)}))}("a.mitiutneva@innopolis.university")})()})();