var swfobject=function(){var aq="undefined",aD="object",ab="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",aE="application/x-shockwave-flash",ac="SWFObjectExprInst",ax="onreadystatechange",af=window,aL=document,aB=navigator,aa=false,Z=[aN],aG=[],ag=[],al=[],aJ,ad,ap,at,ak=false,aU=false,aH,an,aI=true,ah=function(){var a=typeof aL.getElementById!=aq&&typeof aL.getElementsByTagName!=aq&&typeof aL.createElement!=aq,e=aB.userAgent.toLowerCase(),c=aB.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(e),j=c?/mac/.test(c):/mac/.test(e),g=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,d=!+"\v1",f=[0,0,0],k=null;if(typeof aB.plugins!=aq&&typeof aB.plugins[ab]==aD){k=aB.plugins[ab].description;if(k&&!(typeof aB.mimeTypes!=aq&&aB.mimeTypes[aE]&&!aB.mimeTypes[aE].enabledPlugin)){aa=true;d=false;k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");f[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10);f[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);f[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof af.ActiveXObject!=aq){try{var i=new ActiveXObject(X);if(i){k=i.GetVariable("$version");if(k){d=true;k=k.split(" ")[1].split(",");f=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)]}}}catch(b){}}}return{w3:a,pv:f,wk:g,ie:d,win:h,mac:j}}(),aK=function(){if(!ah.w3){return}if((typeof aL.readyState!=aq&&aL.readyState=="complete")||(typeof aL.readyState==aq&&(aL.getElementsByTagName("body")[0]||aL.body))){aP()}if(!ak){if(typeof aL.addEventListener!=aq){aL.addEventListener("DOMContentLoaded",aP,false)}if(ah.ie&&ah.win){aL.attachEvent(ax,function(){if(aL.readyState=="complete"){aL.detachEvent(ax,arguments.callee);aP()}});if(af==top){(function(){if(ak){return}try{aL.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}aP()})()}}if(ah.wk){(function(){if(ak){return}if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);return}aP()})()}aC(aP)}}();function aP(){if(ak){return}try{var b=aL.getElementsByTagName("body")[0].appendChild(ar("span"));b.parentNode.removeChild(b)}catch(a){return}ak=true;var d=Z.length;for(var c=0;c<d;c++){Z[c]()}}function aj(a){if(ak){a()}else{Z[Z.length]=a}}function aC(a){if(typeof af.addEventListener!=aq){af.addEventListener("load",a,false)}else{if(typeof aL.addEventListener!=aq){aL.addEventListener("load",a,false)}else{if(typeof af.attachEvent!=aq){aM(af,"onload",a)}else{if(typeof af.onload=="function"){var b=af.onload;af.onload=function(){b();a()}}else{af.onload=a}}}}}function aN(){if(aa){Y()}else{am()}}function Y(){var d=aL.getElementsByTagName("body")[0];var b=ar(aD);b.setAttribute("type",aE);var a=d.appendChild(b);if(a){var c=0;(function(){if(typeof a.GetVariable!=aq){var e=a.GetVariable("$version");if(e){e=e.split(" ")[1].split(",");ah.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)]}}else{if(c<10){c++;setTimeout(arguments.callee,10);return}}d.removeChild(b);a=null;am()})()}else{am()}}function am(){var g=aG.length;if(g>0){for(var h=0;h<g;h++){var c=aG[h].id;var l=aG[h].callbackFn;var a={success:false,id:c};if(ah.pv[0]>0){var i=aS(c);if(i){if(ao(aG[h].swfVersion)&&!(ah.wk&&ah.wk<312)){ay(c,true);if(l){a.success=true;a.ref=av(c);l(a)}}else{if(aG[h].expressInstall&&au()){var e={};e.data=aG[h].expressInstall;e.width=i.getAttribute("width")||"0";e.height=i.getAttribute("height")||"0";if(i.getAttribute("class")){e.styleclass=i.getAttribute("class")}if(i.getAttribute("align")){e.align=i.getAttribute("align")}var f={};var d=i.getElementsByTagName("param");var k=d.length;for(var j=0;j<k;j++){if(d[j].getAttribute("name").toLowerCase()!="movie"){f[d[j].getAttribute("name")]=d[j].getAttribute("value")}}ae(e,f,c,l)}else{aF(i);if(l){l(a)}}}}}else{ay(c,true);if(l){var b=av(c);if(b&&typeof b.SetVariable!=aq){a.success=true;a.ref=b}l(a)}}}}}function av(b){var d=null;var c=aS(b);if(c&&c.nodeName=="OBJECT"){if(typeof c.SetVariable!=aq){d=c}else{var a=c.getElementsByTagName(aD)[0];if(a){d=a}}}return d}function au(){return !aU&&ao("6.0.65")&&(ah.win||ah.mac)&&!(ah.wk&&ah.wk<312)}function ae(f,d,h,e){aU=true;ap=e||null;at={success:false,id:h};var a=aS(h);if(a){if(a.nodeName=="OBJECT"){aJ=aO(a);ad=null}else{aJ=a;ad=h}f.id=ac;if(typeof f.width==aq||(!/%$/.test(f.width)&&parseInt(f.width,10)<310)){f.width="310"}if(typeof f.height==aq||(!/%$/.test(f.height)&&parseInt(f.height,10)<137)){f.height="137"}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";var b=ah.ie&&ah.win?"ActiveX":"PlugIn",c="MMredirectURL="+af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;if(typeof d.flashvars!=aq){d.flashvars+="&"+c}else{d.flashvars=c}if(ah.ie&&ah.win&&a.readyState!=4){var g=ar("div");h+="SWFObjectNew";g.setAttribute("id",h);a.parentNode.insertBefore(g,a);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a)}else{setTimeout(arguments.callee,10)}})()}aA(f,d,h)}}function aF(a){if(ah.ie&&ah.win&&a.readyState!=4){var b=ar("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(aO(a),b);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a)}else{setTimeout(arguments.callee,10)}})()}else{a.parentNode.replaceChild(aO(a),a)}}function aO(b){var d=ar("div");if(ah.win&&ah.ie){d.innerHTML=b.innerHTML}else{var e=b.getElementsByTagName(aD)[0];if(e){var a=e.childNodes;if(a){var f=a.length;for(var c=0;c<f;c++){if(!(a[c].nodeType==1&&a[c].nodeName=="PARAM")&&!(a[c].nodeType==8)){d.appendChild(a[c].cloneNode(true))}}}}}return d}function aA(e,g,c){var d,a=aS(c);if(ah.wk&&ah.wk<312){return d}if(a){if(typeof e.id==aq){e.id=c}if(ah.ie&&ah.win){var f="";for(var i in e){if(e[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){g.movie=e[i]}else{if(i.toLowerCase()=="styleclass"){f+=' class="'+e[i]+'"'}else{if(i.toLowerCase()!="classid"){f+=" "+i+'="'+e[i]+'"'}}}}}var h="";for(var j in g){if(g[j]!=Object.prototype[j]){h+='<param name="'+j+'" value="'+g[j]+'" />'}}a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+h+"</object>";ag[ag.length]=e.id;d=aS(e.id)}else{var b=ar(aD);b.setAttribute("type",aE);for(var k in e){if(e[k]!=Object.prototype[k]){if(k.toLowerCase()=="styleclass"){b.setAttribute("class",e[k])}else{if(k.toLowerCase()!="classid"){b.setAttribute(k,e[k])}}}}for(var l in g){if(g[l]!=Object.prototype[l]&&l.toLowerCase()!="movie"){aQ(b,l,g[l])}}a.parentNode.replaceChild(b,a);d=b}}return d}function aQ(b,d,c){var a=ar("param");a.setAttribute("name",d);a.setAttribute("value",c);b.appendChild(a)}function aw(a){var b=aS(a);if(b&&b.nodeName=="OBJECT"){if(ah.ie&&ah.win){b.style.display="none";(function(){if(b.readyState==4){aT(a)}else{setTimeout(arguments.callee,10)}})()}else{b.parentNode.removeChild(b)}}}function aT(a){var b=aS(a);if(b){for(var c in b){if(typeof b[c]=="function"){b[c]=null}}b.parentNode.removeChild(b)}}function aS(a){var c=null;try{c=aL.getElementById(a)}catch(b){}return c}function ar(a){return aL.createElement(a)}function aM(a,c,b){a.attachEvent(c,b);al[al.length]=[a,c,b]}function ao(a){var b=ah.pv,c=a.split(".");c[0]=parseInt(c[0],10);c[1]=parseInt(c[1],10)||0;c[2]=parseInt(c[2],10)||0;return(b[0]>c[0]||(b[0]==c[0]&&b[1]>c[1])||(b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]))?true:false}function az(b,f,a,c){if(ah.ie&&ah.mac){return}var e=aL.getElementsByTagName("head")[0];if(!e){return}var g=(a&&typeof a=="string")?a:"screen";if(c){aH=null;an=null}if(!aH||an!=g){var d=ar("style");d.setAttribute("type","text/css");d.setAttribute("media",g);aH=e.appendChild(d);if(ah.ie&&ah.win&&typeof aL.styleSheets!=aq&&aL.styleSheets.length>0){aH=aL.styleSheets[aL.styleSheets.length-1]}an=g}if(ah.ie&&ah.win){if(aH&&typeof aH.addRule==aD){aH.addRule(b,f)}}else{if(aH&&typeof aL.createTextNode!=aq){aH.appendChild(aL.createTextNode(b+" {"+f+"}"))}}}function ay(a,c){if(!aI){return}var b=c?"visible":"hidden";if(ak&&aS(a)){aS(a).style.visibility=b}else{az("#"+a,"visibility:"+b)}}function ai(b){var a=/[\\\"<>\.;]/;var c=a.exec(b)!=null;return c&&typeof encodeURIComponent!=aq?encodeURIComponent(b):b}var aR=function(){if(ah.ie&&ah.win){window.attachEvent("onunload",function(){var a=al.length;for(var b=0;b<a;b++){al[b][0].detachEvent(al[b][1],al[b][2])}var d=ag.length;for(var c=0;c<d;c++){aw(ag[c])}for(var e in ah){ah[e]=null}ah=null;for(var f in swfobject){swfobject[f]=null}swfobject=null})}}();return{registerObject:function(a,e,c,b){if(ah.w3&&a&&e){var d={};d.id=a;d.swfVersion=e;d.expressInstall=c;d.callbackFn=b;aG[aG.length]=d;ay(a,false)}else{if(b){b({success:false,id:a})}}},getObjectById:function(a){if(ah.w3){return av(a)}},embedSWF:function(k,e,h,f,c,a,b,i,g,j){var d={success:false,id:e};if(ah.w3&&!(ah.wk&&ah.wk<312)&&k&&e&&h&&f&&c){ay(e,false);aj(function(){h+="";f+="";var q={};if(g&&typeof g===aD){for(var o in g){q[o]=g[o]}}q.data=k;q.width=h;q.height=f;var n={};if(i&&typeof i===aD){for(var p in i){n[p]=i[p]}}if(b&&typeof b===aD){for(var l in b){if(typeof n.flashvars!=aq){n.flashvars+="&"+l+"="+b[l]}else{n.flashvars=l+"="+b[l]}}}if(ao(c)){var m=aA(q,n,e);if(q.id==e){ay(e,true)}d.success=true;d.ref=m}else{if(a&&au()){q.data=a;ae(q,n,e,j);return}else{ay(e,true)}}if(j){j(d)}})}else{if(j){j(d)}}},switchOffAutoHideShow:function(){aI=false},ua:ah,getFlashPlayerVersion:function(){return{major:ah.pv[0],minor:ah.pv[1],release:ah.pv[2]}},hasFlashPlayerVersion:ao,createSWF:function(a,b,c){if(ah.w3){return aA(a,b,c)}else{return undefined}},showExpressInstall:function(b,a,d,c){if(ah.w3&&au()){ae(b,a,d,c)}},removeSWF:function(a){if(ah.w3){aw(a)}},createCSS:function(b,a,c,d){if(ah.w3){az(b,a,c,d)}},addDomLoadEvent:aj,addLoadEvent:aC,getQueryParamValue:function(b){var a=aL.location.search||aL.location.hash;if(a){if(/\?/.test(a)){a=a.split("?")[1]}if(b==null){return ai(a)}var c=a.split("&");for(var d=0;d<c.length;d++){if(c[d].substring(0,c[d].indexOf("="))==b){return ai(c[d].substring((c[d].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(aU){var a=aS(ac);if(a&&aJ){a.parentNode.replaceChild(aJ,a);if(ad){ay(ad,true);if(ah.ie&&ah.win){aJ.style.display="block"}}if(ap){ap(at)}}aU=false}}}}();function flashChecker(){var a=0;var b=0;if(document.all){var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(d){a=1;VSwf=d.GetVariable("$version");b=parseInt(VSwf.split(" ")[1].split(",")[0])}}else{if(navigator.plugins&&navigator.plugins.length>0){var d=navigator.plugins["Shockwave Flash"];if(d){a=1;var e=d.description.split(" ");for(var c=0;c<e.length;++c){if(isNaN(parseInt(e[c]))){continue}b=parseInt(e[c])}}}}return{f:a,v:b}}var NET=(function(){function b(d,c){$.getJSON("data/playSong?songIds="+d,function(e){c&&c(e)})}function a(c,d){$.ajax({url:c}).done(function(e){d&&d(e)})}return{getMusicInfoById:b,getLrc:a}})();var PLAYER=(function(){var d=[];var i;var k=false;var l="mp3player";var h=flashChecker();if(!h.f||h.v<11){$("#noPlayer").show();if(/MSIE 6.0/i.test(navigator.userAgent)){$("#noPlayer").css({height:Math.max($(document.body).height(),$(".wrapper").height())});$(window).on("resize",function(){$("#noPlayer").css({height:Math.max($(document.body).height(),$(".wrapper").height())})})}}var a=null;function m(){function c(){var p={};var r={menu:"false",scale:"noScale",allowFullscreen:"false",allowScriptAccess:"always",bgcolor:"#FFF",wmode:"transparent"};var q={id:l};swfobject.embedSWF("resources/swf/mp3.swf","swfContainer","1","1","11.0.0","resources/swf/expressInstall.swf",p,r,q)}function o(p){if(window.document[p]){return window.document[p]}if(navigator.appName.indexOf("Microsoft Internet")==-1){if(document.embeds&&document.embeds[p]){return document.embeds[p]}}else{return document.getElementById(p)}}c();window.FLASH_READY=function(){i=o(l);k=true;j("playerOK")};window.FLASH_CONSOLE=function(p){console.log(p)};window.FLASH_LOADPROGRESS=function(p){PROGRESS.setLoadProgress(p)};window.FLASH_VOLUME=function(p){VOLUME.setVolume(p)};window.FLASH_PLAYPROGRESS=function(s,r,q,p){PROGRESS.setPlayProgress(s,r,q,p)};window.FLASH_PLAYCOMPLETE=function(){if(a){LIST.addMost(a.id)}PLAYCTROL.playEnd()};window.FLASH_PLAYSTATUS=function(p){PLAYCTROL.updatePlay(p=="1")}}function e(c){if(k){i.playSound(c.file);PROGRESS.updateTitle(c);LRC.updateAvatar(c);LRC.load(c);a=c;document.title=c.title+" - "+c.artist;LIST.addRecord(c.id)}}function n(c){if(k){i.pauseSound(c?0:1)}}function b(c){if(k){i.setVolume(c)}}function f(c){if(k){i.setProgress(c)}}function g(c){d.push(c)}function j(c){$.each(d,function(o,p){p&&p(c)})}m();return{play:e,pause:n,setVolume:b,setProgress:f,addListen:g}})();if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());var LOCAL=(function(){var b={hname:location.hostname?location.hostname:"localStatus",isLocalStorage:window.localStorage?true:false,dataDom:null,initDom:function(){if(!this.dataDom){try{$("#userdataBox").html('<input id="userData">');this.dataDom=document.getElementById("userData");document.body.appendChild(this.dataDom);var f=new Date();f=f.getDate()+30;this.dataDom.expires=f.toUTCString()}catch(e){return false}}return true},set:function(e,f){if(this.isLocalStorage){window.localStorage.setItem(e,f)}else{if(this.initDom()){this.dataDom.load(this.hname);this.dataDom.setAttribute(e,f);this.dataDom.save(this.hname)}}},get:function(e){if(this.isLocalStorage){return window.localStorage.getItem(e)}else{if(this.initDom()){this.dataDom.load(this.hname);return this.dataDom.getAttribute(e)}}},remove:function(e){if(this.isLocalStorage){localStorage.removeItem(e)}else{if(this.initDom()){this.dataDom.load(this.hname);this.dataDom.removeAttribute(e);this.dataDom.save(this.hname)}}}};function d(f,e){b.set(f,e)}function a(e){return b.get(e)}function c(){if(!window.localStorage){b.initDom()}}c();return{set:d,get:a}})();var LRC=(function(){var n={};var t=null;var p={time:[],dom:[]};var a=$(".lrcBox");var l=null;function j(A){t=null;var B=A.id;if(n[B]){t=n[B];m()}else{if(A.lrc){NET.getLrc(A.lrc,function(C){n[B]=C;t=n[B];m()})}else{t=null;m()}}}function m(){p={time:[],dom:[]};a.stop();a.scrollTop(0);if(!t){a.html('<div class="noLrc">暂无歌词</div>');return}a.html("");var A=/\r|\n/g;var H=t.split(A);var I=/^\[\d{2}\:\d{2}\.\d{2}\]/;for(var E=0;E<H.length;E++){var J=H[E].replace(/^(\s*)|(\s*)$/,"");if(J==""){continue}var C=J.match(I);var B="",F="";if(C){B=C[0];B=B.replace("[","").replace("]","");B=y(B);F=J.replace(I,"")||"&nbsp;"}else{F=J||"&nbsp;"}var G='<div class="lrcItem">'+F+"</div>";var D=$(G);p.time.push(B);p.dom.push(D);a.append(D)}}function y(E){var A=E.split(":")[0];var D=E.split(":")[1];var C=D.split(".")[0];var B=D.split(".")[1];return Number(Number(A)*60+Number(C)+"."+Number(B))}function v(A){if(A>300&&A<400){a.removeClass("max");a.addClass("mid")}else{if(A>=400&&A<=500){a.removeClass("mid");a.addClass("max")}else{a.removeClass("mid");a.removeClass("max")}}}function o(B){if(!t){return}var A=x(B);if(A!=-1){if(l==p.dom[A]){return}if(l){l.removeClass("curlrc")}l=p.dom[A];l.addClass("curlrc");r(l)}}function r(B){var E=B.parent();var C=E.height();var G=E.scrollTop();var D=B.position().top+G;var F=B.height();var A=D-C/2+F/2;E.animate({scrollTop:A},"slow")}function x(C){for(var B=0;B<p.time.length;B++){if(B+1<p.time.length){if(C>=p.time[B]&&C<p.time[B+1]){if(p.time[B]==""||p.time[B+1]==""){return -1}return B}}else{var A=p.time.length-1;if(C>=p.time[A]){if(p.time[A]==""){return -1}return A}else{return -1}}}return -1}function g(A){if(A.avatar){$("#avatar").attr("src",A.avatar)}else{$("#avatar").attr("src","resources/images/avatar.jpg")}}var b=$("#splitBT"),w=$(".right"),h=$(".wrapper"),e=$("#centerBox"),k=$("#markLayer");var i=false;var z=null;var f=0,c,u;var q=250,s=500;b.on("mousedown",function(A){i=true;f=A.pageX-b.offset().left;c=u=A.pageX;k.addClass("resize");k.show();d();b[0].setCapture&&b[0].setCapture();A.stopImmediatePropagation()});$(document).on("mousemove",function(A){if(i){u=A.pageX}}).on("mouseup",function(A){if(i){window.clearInterval(z);i=false;b[0].releaseCapture&&b[0].releaseCapture();k.removeClass("resize");k.hide()}});function d(){z=window.setInterval(function(){if(u==c){return}c=u;var A=h.width()-u+f;A=Math.min(Math.max(q,A),s);w.css({width:A});e.css({right:A});IE6.setCenterSize();v(A)},20)}return{move:o,load:j,updateAvatar:g}})();var PROGRESS=(function(){var q={load:0,play:0,pos:0,tot:0};var m=false;var v=0;var b=null;var z=null;var f=0;var n=null;var s=$("#musicProgressBox");var r=$("#musicProgress");var l=$("#musicRadio");var c=$("#playProgress");var i=$("#loadProgress");var k=$("#markLayer");var p=$("#loadingIcon");l.hover(function(){l.addClass("musicHover")},function(){l.removeClass("musicHover")});l.on("mousedown",function(A){m=true;f=A.pageX-l.offset().left;b=v=A.pageX;n=r.offset().left;l.addClass("musicActive");k.show();e();l[0].setCapture&&l[0].setCapture();A.stopImmediatePropagation()});$(document).on("mousemove",function(A){if(m){v=A.pageX}}).on("mouseup",function(C){if(m){window.clearInterval(z);m=false;l[0].releaseCapture&&l[0].releaseCapture();l.removeClass("musicActive");var A=v-n-f;A=Math.min(Math.max(0,A),r.width()-l.width());var B=Math.min(j(A),q.load);PLAYER.setProgress(B);q.play=B;k.hide()}});s.on("mousedown",function(B){var A=B.pageX-s.offset().left;A=A-l.width()/2;A=Math.min(Math.max(0,A),r.width()-l.width());g(A,true)});function e(){z=window.setInterval(function(){if(v==b){return}b=v;var A=v-n-f;A=Math.min(Math.max(0,A),r.width()-l.width());g(A,false,true)},20)}function g(A,B,C){l.css({left:A});c.css({width:A+l.width()/2});if(B){var D=Math.min(j(A),q.load);PLAYER.setProgress(D);q.play=D}}function t(B){var A=Number(B)/100;var C=(r.width()-l.width())*A;return C}function j(A){var B=(A/(r.width()-l.width()))*100;return B}function u(E,D,C,B){C=Number(C);if(isNaN(C)){C=0}q.play=C;if(!m){var A=t(C);g(A);o(E,D)}d(B)}function d(A){A=(A=="1");var B=p.attr("data-isloading")=="1";if(B==A){return}if(A){p.attr("data-isloading","1");p.show()}else{p.attr("data-isloading","0");p.hide()}}function a(A){i.css({width:s.width()*parseInt(A)/100});q.load=parseInt(A)}$(window).on("resize",function(){window.setTimeout(function(){u(q.pos,q.tot,q.play);a(q.load)},50)});var h=$("#timmer");function o(D,A){var C=x(D);var B=x(A);h.html(C+" / "+B);LRC.move(x(D,true))}function x(D,B){var H=new Date(D);var F=H.getUTCHours(),A=H.getMinutes(),E=H.getSeconds();var G="";if(F!=0){if(F<10){F="0"+F}G=G+F+":"}if(A<10){A="0"+A}if(E<10){E="0"+E}if(B){var C=H.getMilliseconds()}G=G+A+":"+E;if(!B){return G}else{return Number(A)*60+Number(E)+(Number(C)/1000)}}var y=$("#playInfo");function w(B){var A=B.title+" - "+(B.artistLink?'<a href="'+B.artistLink+'" target="_blank">'+B.artist+"</a>":B.artist);y.html(A)}return{setPlayProgress:u,setLoadProgress:a,updateTitle:w}})();var VOLUME=(function(){var k=false;var r=0;var a=null;var s=null;var c=0;var l=null;var q=0;var p=$("#soundBox");var o=$("#soundPercent");var j=$("#soundRadio");var e=$("#soundProgress");var h=$("#markLayer");var g=$("#soundIcon");j.hover(function(){j.addClass("soundHover")},function(){j.removeClass("soundHover")});j.on("mousedown",function(t){k=true;c=t.pageX-j.offset().left;a=r=t.pageX;l=o.offset().left;j.addClass("soundActive");h.show();b();j[0].setCapture&&j[0].setCapture();t.stopImmediatePropagation()});$(document).on("mousemove",function(t){if(k){r=t.pageX}}).on("mouseup",function(t){if(k){window.clearInterval(s);k=false;j[0].releaseCapture&&j[0].releaseCapture();j.removeClass("soundActive");h.hide()}});p.on("mousedown",function(u){var t=u.pageX-p.offset().left;t=t-j.width()/2;t=Math.min(Math.max(0,t),o.width()-j.width());f(t)});function b(){s=window.setInterval(function(){if(r==a){return}a=r;var t=r-l-c;t=Math.min(Math.max(0,t),o.width()-j.width());f(t,false,false,true)},20)}function f(t,w,v,y){if(!y){j.animate({left:t},100);e.animate({width:t+j.width()/2},100)}else{j.css({left:t});e.css({width:t+j.width()/2})}var u=d(t);if(!v){PLAYER.setVolume(u)}if(!w){q=u}}function n(u){var t=parseInt(u)/100;var w=(o.width()-j.width())*t;return w}function d(t){var u=(t/(o.width()-j.width()))*100;return u}function i(t){if(k){return}var u=n(t);f(u,false,true)}g.on("click",function(){var t=$(this).attr("data-mute")=="1";m(t)}).hover(function(){var t=$(this).attr("data-mute")=="1";if(!t){g.addClass("soundIconHover")}},function(){g.removeClass("soundIconHover")});function m(u){if(u){var t=n(q);f(t,true);g.attr("data-mute","0");g.removeClass("mute")}else{f(0,true);g.attr("data-mute","1");g.removeClass("soundIconHover");g.addClass("mute")}}return{setVolume:i}})();var LEFT=(function(){var b=null;$(".leftType").hover(function(){$(this).addClass("leftHover")},function(){$(this).removeClass("leftHover")}).click(function(){$(".leftType").removeClass("leftSelected");$(this).addClass("leftSelected");a($(this).attr("data-type"))});function a(c){if(b==c){return}b=c;LIST.fillList(c)}})();var LIST=(function(){var x=100;var h=null;var y="list-";var g="music-map";var I={};var v={temp:[],record:[],most:[]};var a={temp:{},record:{},most:{}};var c=null;var D=null;var L=0;var m=$("#musicList");function B(){var N=LOCAL.get(g);if(N){N=JSON.parse(N)}else{N={}}I=N}B();function f(){LOCAL.set(g,JSON.stringify(I))}function z(O){m.html("");h=O;var P=H(O)||[];v[O]=[];for(var N=P.length-1;N>=0;N--){var Q=P[N];Q.domId=l();v[O].unshift(Q);J(Q)}E();a={temp:{},record:{},most:{}};s();j();q()}function b(P){var O={};for(var N in P){O[N]=P[N]}return O}function H(T){var P=LOCAL.get(y+T);if(T=="temp"&&P){var R=[];try{R=JSON.parse(P).list}catch(S){}var U=[];for(var Q=0;Q<R.length;Q++){var X=I[R[Q]];if(X){U.push(b(X))}}return U}if(T=="record"&&P){var R=[];try{R=JSON.parse(P).list}catch(S){}var N=[];for(var Q=0;Q<R.length;Q++){var X=I[R[Q]];if(X){N.push(b(X))}}return N}if(T=="most"&&P){var R=[];try{var O=JSON.parse(P);var W=[];for(var X in O){var V={};V.id=X;V.count=O[X];W.push(V)}W.sort(k);for(var Q=0;Q<W.length;Q++){var X=I[W[Q].id];if(X&&R.length<x){R.push(b(X))}}}catch(S){}return R}return[]}function k(O,N){if(Number(O.count)<Number(N.count)){return 1}else{return -1}}function e(O,P){for(var N=P.length-1;N>=0;N--){var R=P[N];if(!R){continue}R.domId=l();v[O].unshift(R);J(R);Q(R)}function Q(S){if(O=="temp"){r(S.id)}if(!I[S.id]){I[S.id]=S;f()}}E();q()}function J(R){var P=R.domId;var Q=R.artist;if(!!R.artistLink){Q='<a href="'+R.artistLink+'" target="_blank">'+Q+"</a>"}var N='<div class="item" id="'+P+'" data-id="'+R.id+'"><div class="itemTitle"><span class="itemCheckBox"></span>'+R.title+'</div><div class="itemArtist">'+Q+"</div></div>";var O=$(N);O.prependTo(m);O.on("dblclick",function(){PLAYER.play(R);R.domId=P;c=R;A()}).hover(function(){if(!O.hasClass("itemSelected")){O.addClass("itemHover")}},function(){O.removeClass("itemHover")}).on("click",function(){var S=O.find(".itemCheckBox");if(S.attr("data-checked")=="1"){S.attr("data-checked","0");S.removeClass("itemCheked");delete a[h][O.attr("id")]}else{S.attr("data-checked","1");S.addClass("itemCheked");a[h][O.attr("id")]=true}s()})}function l(){L++;return"item_"+Math.random()+"_"+L}function E(){$(".item").removeClass("odd");$(".item:even").addClass("odd")}function p(N){}function r(Q){var P=LOCAL.get(y+"temp");var N=[];if(P){P=JSON.parse(P);var O=P.list||[];O.unshift(Q);if(O.left>x){O.pop()}N=O}else{N=[Q]}LOCAL.set(y+"temp",JSON.stringify({list:N}))}function u(R){var Q=LOCAL.get(y+"record");var N=[];if(Q){Q=JSON.parse(Q);var P=Q.list||[];var O=$.inArray(R,P);if(O==-1){P.unshift(R)}else{P.splice(O,1);P.unshift(R)}if(P.length>x){P.pop()}N=P}else{N=[R]}LOCAL.set(y+"record",JSON.stringify({list:N}))}function n(P){var N=LOCAL.get(y+"most");if(N){N=JSON.parse(N);if(N[P]){N[P]=parseInt(N[P])+1}else{N[P]=1}LOCAL.set(y+"most",JSON.stringify(N))}else{var O={};O[P]=1;LOCAL.set(y+"most",JSON.stringify(O))}}function M(){var N=G(false);A();return N}function t(N){var O=G(true,N);A();return O}function o(N){var O=v[N]||[];c=O[0];A();return c}function G(Q,O){var R=v[h]||[];var N=R.length;if(N==0){return null}var S=window.playMode;if(S=="random"){var P=d(0,N-1);c=R[P];return c}if(S=="one"){if(!O){var P=T();if(Q){if(P==-1){c=R[0]}else{if(P+1<N-1){c=R[P+1]}else{c=R[0]}}}else{if(P==-1){c=R[0]}else{if(P-1<0){c=R[N-1]}else{c=R[P-1]}}}}return c}if(S=="all"){var P=T();if(Q){if(P==-1){c=R[0]}else{if(P+1<=N-1){c=R[P+1]}else{c=R[0]}}}else{if(P==-1){c=R[0]}else{if(P-1<0){c=R[N-1]}else{c=R[P-1]}}}return c}function T(){if(!c){return -1}for(var U=0;U<N;U++){if(R[U].domId==c.domId){return U}}return -1}}function d(O,N){return Math.floor(O+Math.random()*(N-O))}function A(){if(D){D.removeClass("itemSelected")}if(c){var N=document.getElementById(c.domId);D=$(N);D.addClass("itemSelected");C(D)}}function C(N){var Q=N.parent();var O=Q.height();var S=Q.scrollTop();var P=N.position().top+S;var R=N.height();if(P+R>O+S){Q.scrollTop(P+R-O)}if(P-S<0){Q.scrollTop(P)}}var K=$("#selectAll");K.on("click",function(){var S=false;var N=K.find(".selectAll");if(N.attr("data-checked")=="1"){N.attr("data-checked","0");N.removeClass("deleteCheked")}else{N.attr("data-checked","1");N.addClass("deleteCheked");S=true}var P=m.find(".itemCheckBox");P.attr("data-checked",S?"1":"0");if(S){P.addClass("itemCheked")}else{P.removeClass("itemCheked")}var O=m.find(".item");for(var Q=0;Q<O.length;Q++){var R=$(O[Q]);if(S){a[h][R.attr("id")]=true}else{delete a[h][R.attr("id")]}}s()});function j(O){var N=K.find(".selectAll");if(!O){N.attr("data-checked","0");N.removeClass("deleteCheked")}else{N.attr("data-checked","1");N.addClass("deleteCheked")}}var F=$("#count");function q(){var N=H(h)||[];F.html("共有"+N.length+"首歌")}var w=$("#delete");function s(){var P=a[h];var O=[];for(var N in P){O.push(N)}if(O.length){w.addClass("deleteAva")}else{w.removeClass("deleteAva")}}w.on("click",function(){var P=a[h];var O=[];for(var N in P){O.push(N)}if(O.length==0){return}i(P)}).hover(function(){w.addClass("deleteHover")},function(){w.removeClass("deleteHover");w.removeClass("deleteActive")}).on("mousedown",function(){w.addClass("deleteActive")}).on("mouseup",function(){w.removeClass("deleteActive")});function i(R){var P=LOCAL.get(y+h);var V=[];if(P){if(h!="most"){V=JSON.parse(P).list}}for(var O in R){var T=N(O);if(T!=-1){V[T]=false;v[h][T]=false}}var U=[];for(var S=0;S<V.length;S++){if(V[S]!=false){U.push(V[S])}}var Q=[];for(var S=0;S<v[h].length;S++){if(v[h][S]!=false){Q.push(v[h][S])}}v[h]=Q;LOCAL.set(y+h,JSON.stringify({list:U}));q();a={temp:{},record:{},most:{}};s();function N(X){var Y=v[h]||[];for(var W=0;W<Y.length;W++){if(Y[W]&&Y[W].domId==X){var Z=document.getElementById(X);$(Z).remove();return W}}return -1}}return{fillList:z,add:e,addRecord:u,addMost:n,remove:p,getMusic:o,getPreview:M,getNext:t}})();var PLAYCTROL=(function(){var f=$("#pre");var e=$(".play");var h=$("#next");f.on("click",function(){b()}).hover(function(){f.addClass("preHover")},function(){f.removeClass("preHover");f.removeClass("preActive")}).on("mousedown",function(){f.addClass("preActive")}).on("mouseup",function(){f.removeClass("preActive")});e.on("click",function(){var m=e.attr("data-play")=="1";j(!m);PLAYER.pause(!m)}).hover(function(){var m=e.attr("data-play")=="1";e.addClass(m?"pauseHover":"playHover")},function(){e.removeClass("playHover");e.removeClass("pauseHover");e.removeClass("playActive")}).on("mousedown",function(){e.addClass("playActive")}).on("mouseup",function(){e.removeClass("playActive")});h.on("click",function(){g()}).hover(function(){h.addClass("nextHover")},function(){h.removeClass("nextHover");h.removeClass("nextActive")}).on("mousedown",function(){h.addClass("nextActive")}).on("mouseup",function(){h.removeClass("nextActive")});function j(m){if(m){e.attr("data-play","1");e.addClass("pause")}else{e.attr("data-play","0");e.removeClass("pause")}}var d=$(".random");var i=$(".loopOne");var l=$(".loopAll");var k="all";window.playMode=k;d.on("click",function(){k=d.attr("data-type");window.playMode=k;a();d.addClass("randomSelect")}).hover(function(){if(d.attr("data-type")!=k){d.addClass("randomHover")}},function(){d.removeClass("randomHover")});i.on("click",function(){k=i.attr("data-type");window.playMode=k;a();i.addClass("loopOneSelect")}).hover(function(){if(i.attr("data-type")!=k){i.addClass("loopOneHover")}},function(){i.removeClass("loopOneHover")});l.on("click",function(){k=l.attr("data-type");window.playMode=k;a();l.addClass("loopAllSelect")}).hover(function(){if(l.attr("data-type")!=k){l.addClass("loopAllHover")}},function(){l.removeClass("loopAllHover")});function a(){d.removeClass("randomSelect");i.removeClass("loopOneSelect");l.removeClass("loopAllSelect")}function b(){var m=LIST.getPreview();if(m){PLAYER.play(m)}}function g(){var m=LIST.getNext();if(m){PLAYER.play(m)}}function c(){var m=LIST.getNext(true);if(m){PLAYER.play(m)}}return{updatePlay:j,playEnd:c}})();var MAIN=(function(){function g(i){var j=new RegExp("(\\?|#|&)"+i+"=([^&#]*)(&|#|$)");var h=location.href.match(j);return(!h?"":h[2])}var b=null;LIST.fillList("temp");var f=g("id");if(f){var a=false,c=false,e;NET.getMusicInfoById(f,function(j){if(!j){return}for(var h=0;h<j.length;h++){j[h].id=j[h].songID}e=j;a=true;LIST.add("temp",e);d();if(location.hash){location.hash=""}});PLAYER.addListen(function(h){if(h=="playerOK"){c=true;d()}});function d(){if(c&&a){var h=LIST.getMusic("temp");if(h){b=h;PLAYER.play(h)}}}}else{PLAYER.addListen(function(h){if(h=="playerOK"){var i=LIST.getMusic("temp");if(i){b=i;PLAYER.play(i)}}})}})();var IE6=(function(){try{document.execCommand("BackgroundImageCache",false,true)}catch(p){}var k=/MSIE 6.0/i.test(navigator.userAgent);if(k){$(window).on("load",function(){var v=["resources/images/background.gif","resources/images/blue.gif","resources/images/red.gif"];for(var w=0;w<v.length;w++){new Image().src=v[w]}})}var c=600;var r=400;var g=$(document.body);var b=$(".wrapper");var h=$(".container");var m=$(".header");var j=$(".footer");var u=$("#centerBox");var q=$("#musicList");var a=$(".left");var t=$(".right");var i=$(".top");var n=$(".bar");var f=$(".lrcBox");var d=$(".ctrolInfo"),o=$(".ctrol"),l=$(".ctrolOther");function s(){b.css({width:Math.max(g.width(),c),height:Math.max(g.height(),r)});h.css({height:b.height()-m.height()-j.height()});a.css({height:h.height()});t.css({height:h.height()});f.css({height:t.height()-f.position().top});u.css({width:b.width()-a.width()-t.width(),height:h.height()});q.css({height:u.height()-i.height()-n.height()});d.css({width:b.width()-o.width()-l.width()-10})}if(k){$(window).on("resize",function(){window.setTimeout(function(){s()},20)});s()}function e(){if(!k){return}s()}return{setCenterSize:e}})();