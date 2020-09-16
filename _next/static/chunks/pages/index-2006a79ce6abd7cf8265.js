_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1T6e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};t.default=a},"5UwM":function(e,t,n){"use strict";function a(e,t){return function(){return null}}n.r(t),n.d(t,"chainPropTypes",(function(){return a})),n.d(t,"deepmerge",(function(){return r.a})),n.d(t,"elementAcceptingRef",(function(){return c})),n.d(t,"elementTypeAcceptingRef",(function(){return f})),n.d(t,"exactProp",(function(){return u})),n.d(t,"formatMuiErrorMessage",(function(){return l.a})),n.d(t,"getDisplayName",(function(){return b})),n.d(t,"HTMLElementType",(function(){return y})),n.d(t,"ponyfillGlobal",(function(){return w})),n.d(t,"refType",(function(){return A}));var r=n("2+6g"),i=n("17x9"),o=n.n(i);var s=(o.a.element,function(){return null});s.isRequired=(o.a.element.isRequired,function(){return null});var c=s;var f=(i.elementType,function(){return null});n("rePB"),n("wx14");function u(e){return e}var l=n("TrhM"),d=n("U8pU"),p=n("TOwV"),g=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function m(e){var t="".concat(e).match(g);return t&&t[1]||""}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||m(e)||t}function v(e,t,n){var a=h(t);return e.displayName||(""!==a?"".concat(n,"(").concat(a,")"):n)}function b(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return h(e,"Component");if("object"===Object(d.a)(e))switch(e.$$typeof){case p.ForwardRef:return v(e,e.render,"ForwardRef");case p.Memo:return v(e,e.type,"memo");default:return}}}function y(e,t,n,a,r){return null}var w="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A=o.a.oneOfType([o.a.func,o.a.object])},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},"8rdq":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};t.default=a},Lozw:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.primary,n=void 0===t?{light:f.default[300],main:f.default[500],dark:f.default[700]}:t,a=e.secondary,y=void 0===a?{light:u.default.A200,main:u.default.A400,dark:u.default.A700}:a,w=e.error,A=void 0===w?{light:l.default[300],main:l.default[500],dark:l.default[700]}:w,S=e.warning,O=void 0===S?{light:d.default[300],main:d.default[500],dark:d.default[700]}:S,P=e.info,k=void 0===P?{light:p.default[300],main:p.default[500],dark:p.default[700]}:P,x=e.success,M=void 0===x?{light:g.default[300],main:g.default[500],dark:g.default[700]}:x,j=e.type,E=void 0===j?"light":j,T=e.contrastThreshold,I=void 0===T?3:T,_=e.tonalOffset,R=void 0===_?.2:_,C=(0,i.default)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function N(e){return(0,m.getContrastRatio)(e,v.text.primary)>=I?v.text.primary:h.text.primary}var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=(0,r.default)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error((0,o.formatMuiErrorMessage)(4,t));if("string"!==typeof e.main)throw new Error(_formatMuiErrorMessage(5,JSON.stringify(e.main)));return b(e,"light",n,R),b(e,"dark",a,R),e.contrastText||(e.contrastText=N(e.main)),e},L={dark:v,light:h};0;return(0,o.deepmerge)((0,r.default)({common:s.default,type:E,primary:H(n),secondary:H(y,"A400","A200","A700"),error:H(A),warning:H(O),info:H(k),success:H(M),grey:c.default,contrastThreshold:I,getContrastText:N,augmentColor:H,tonalOffset:R},L[E]),C)},t.dark=t.light=void 0;var r=a(n("pVnL")),i=a(n("QILm")),o=n("5UwM"),s=a(n("sAgZ")),c=a(n("sFvP")),f=a(n("xJ30")),u=a(n("8rdq")),l=a(n("fWIC")),d=a(n("1T6e")),p=a(n("vqLa")),g=a(n("VvZr")),m=n("wClv"),h={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:s.default.white,default:c.default[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}};t.light=h;var v={text:{primary:s.default.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:c.default[800],default:"#303030"},action:{active:s.default.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function b(e,t,n,a){var r=a.light||a,i=a.dark||1.5*a;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,m.lighten)(e.main,r):"dark"===t&&(e.dark=(0,m.darken)(e.main,i)))}t.dark=v},QILm:function(e,t,n){var a=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,r,i=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),i=n("HaE+"),o=n("wx14"),s=n("rePB"),c=n("q1tI"),f=n.n(c),u=n("5Yp1"),l=n("Ji2X"),d=n("Lozw"),p=n("ZPUd"),g=n.n(p),m=n("6u8J"),h=n("tRbT"),v=n("oa/T"),b=n("ofer"),y=n("30+C"),w=n("Ie8z"),A=n("kfFl"),S=n("bXiM"),O=n("lO0E"),P=n("PsDL"),k=f.a.createElement,x={fontFamily:"Poppins, sans-serif",textAlign:"center",fontSize:"3.5rem",color:"#8bc34a"},M={fontFamily:"Poppins, sans-serif",textAlign:"center",fontSize:"2rem",color:"#8bc34a"},j={fontFamily:"Red Hat Display, sans-serif",fontSize:"1.8rem",marginBottom:"150px",textAlign:"center",color:"white"},E={fontSize:"1.25rem",textAlign:"left",color:"#8bc34a"},T=Object(s.a)({fontSize:"3rem",textAlign:"center",color:"#8bc34a"},"textAlign","center"),I={display:"flex",flexDirection:"column"},_=[{name:"Prof. Rajasekar M",designation:"Associate Professor",org:"PES University",description:"Prof. M Rajasekar is an Associate Professor in the department of Electronics and Communication Engineering at PES University. He is an alumnus of IIT Madras (Computer Science and Engineering). He brings with him over two decades of rich and varied experience ranging from combatant in Indian Air Force to Systems Engineer and Project Manager in the IT Industry. He manages the PES Innovation Lab at the PES University. He has been actively involved in various projects undertaken at PES Innovation Lab. His research interests include wireless communications, embedded systems and healthcare systems. He handholds student projects in several domains viz. Robotics, IoT, Machine Learning, Sensor Networks and Virtual Reality. Recently, he presented his project works in the International Conferences (TENCON) held in Singapore, Malaysia and Jeju,South Korea. He is an astute listener and motivator.",image:"/images/mlab/Rajasekar_profile.jpg"},{name:"Dr. Venkatarangan MJ",designation:"Professor",org:"PES University",description:"After leaving Philips in 2015 to follow his passion towards teaching and research, Dr. Venkatarangan joined PES University as the Associate Professor in EEE to focus on Embedded Systems stream. Prior to joining PES University, he spent 20 years in Tektronix, Siemens, HCL Technologies and Philips working in India and abroad serving in roles right from Software Engineer to System Architect. As System Architect he was on technical lead for projects across sites and also supported cross functions like program or purchase management, quality and product strategy for platform evaluation, supplier evaluation and product road-mapping. A significant achievement has been to lead as Architect for first Digital TV for US market and also to develop MP3 Audio products adhering to Microsoft PlaysForSure specifications. Rangan is an alumnus of Chinese University of Hong Kong where he completed is PhD and holds M.Tech and B.E from Mysore University. He current teaches Microcontroller and Applications, Signals and Systems, 'C' Programming and Intoduction to Robotics. His research interests include embedded systems, IoT, Robotics, Automation and Sensor networks.He supports the PES Innovation Lab activities and summer internship projects in domains of embedded systems, IoT Robotics and Automation.",image:"/images/mlab/Venkatarangan_profile.jpg"},{name:"Dr. A Srinivas",designation:"Founder",org:"PES Innovation Lab",description:"Dr. A Srinivas is the faculty founder of PES Innovation Lab (formerly known as Microsoft Innovation Lab). He is presently the Dean, School of Engineering in Dayananda Sagar University. He has worked for 10 years in Companies/Research Organizations Such as Tata Consulting Engineers, Centre for AI & amp; Robotics (DRDO), Philips Software Centre and Nortel Networks (Sydney,Australia). Academic experience of 19 yrs with KREC, Surathkal, Amrita University, PES University and Monash University (Melbourne, Australia). His Areas of Research Interest: Wireless Networks, Healthcare Informatics. He is extremely passionate about promoting Undergraduate Research.",image:"/images/mlab/Srinivas_profile.jpg"}],R=f.a.forwardRef((function(e,t){return k(m.a,Object(o.a)({direction:"up",ref:t},e))}));t.default=function(){var e=Object(c.useState)({stats:[]}),t=e[0],n=e[1];Object(c.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://pil-api.herokuapp.com/stats");case 2:return t=e.sent,e.next=5,t.json();case 5:for(o in a=e.sent,i=[],a)i.push({key:o,data:a[o]});n({stats:i});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var a=Object(c.useState)(!1),o=a[0],s=a[1],f=Object(c.useState)(_[0]),p=f[0],m=f[1];return k(u.a,{title:"PES Innovation Lab",active:"Home"},k("div",{className:"introSection"},k(l.a,null,k("p",{style:x},"PES Innovation Lab"),k("p",{style:M},"(formerly known as Microsoft Innovation Lab)"),k("blockquote",{style:j},"We are a student community dedicated to cultivating the spirit of research and innovation in budding engineers."))),k(l.a,null,k("p",{id:"about_title",style:T},"ABOUT US"),k("p",{id:"about_content",style:E,className:d.light},"PIL is a unique community which inculcates the spirit of student research. Students work with like-minded peers to try and solve carefully chosen real-world problems. The Lab\u2019s activities include the flagship summer internship, HashCode (a hackathon), RoadShow (A project presentation event) and other enriching opportunities such as workshops and tutorials.",k("br",null),k("br",null),"Students here, routinely push the boundaries of research by developing products to benefit the masses and publishing their work in conferences and journals of repute. Interns continue working with the lab while in college, sharing insights, starting new projects and mentoring subsequent batches of student interns.",k("br",null),k("br",null),"Over the years, the members of PIL have grown into a close-knit family who contribute to the lab long after their graduation.")),k("div",{className:"statSection"},k(l.a,null,k(h.a,{container:!0,justify:"center"},t.stats.map((function(e){return k(h.a,{item:!0,sm:3,xs:12,justify:"center"},k(v.a,{style:{textAlign:"center"}},k(b.a,{className:"statValue",component:"p"},e.data),k(b.a,{className:"statTitle"},e.key)))}))))),k("p",{id:"about_title",style:T},"PROFESSORS"),k(l.a,null,k(h.a,{container:!0,justify:"center",className:"profContainer"},_.map((function(e){return k(h.a,{item:!0,md:4,sm:12,xs:12,justify:"center",style:{textAlign:"center",alignItems:"center"}},k(y.a,{className:"profCard",onClick:function(){!function(e){m(e),s(!0)}(e)}},k(w.a,{className:"profImage",image:e.image,title:e.designation}),k("div",{style:I},k(v.a,null,k(b.a,{component:"h5",variant:"h5",className:"profCardDescription"},e.name),k(b.a,{className:"profCardDescription"},e.designation)))))})))),k(A.a,{fullScreen:!0,open:o,onClose:function(){s(!1)},TransitionComponent:R,PaperProps:{className:"dialogContainer"}},k(S.a,{className:"dialogAppBar"},k(O.a,null,k(b.a,{variant:"h6",className:"dialogTitle"},p.name),k(P.a,{edge:"start",color:"inherit",onClick:function(){s(!1)}},k(g.a,{style:{float:"right",color:"#8bc34a"}})))),k(l.a,{style:{marginTop:"5em"}},k(w.a,{style:{maxWidth:"250px",margin:"auto",height:"300px",marginTop:30,marginBottom:30},image:p.image,className:"profImage"}),k(b.a,{className:"profDialogContentHeading"},p.name),k(b.a,{className:"profDialogContentSubHeading"},p.designation," | ",p.org),k("br",null),k(b.a,{className:"profDialogContentDescription"},p.description))))}},VvZr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=a},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=a},sAgZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={black:"#000",white:"#fff"};t.default=a},sFvP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};t.default=a},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vqLa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};t.default=a},wClv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=i,t.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var t=s(e).values;return"#".concat(t.map((function(e){return function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}(e)})).join(""))},t.hslToRgb=o,t.decomposeColor=s,t.recomposeColor=c,t.getContrastRatio=function(e,t){var n=f(e),a=f(t);return(Math.max(n,a)+.05)/(Math.min(n,a)+.05)},t.getLuminance=f,t.emphasize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return f(e)>.5?u(e,t):l(e,t)},t.fade=function(e,t){e=s(e),t=r(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=t,c(e)},t.darken=u,t.lighten=l;var a=n("5UwM");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function i(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}function o(e){var t=(e=s(e)).values,n=t[0],a=t[1]/100,r=t[2]/100,i=a*Math.min(r,1-r),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return r-i*Math.max(Math.min(t-3,9-t,1),-1)},f="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(f+="a",u.push(t[3])),c({type:f,values:u})}function s(e){if(e.type)return e;if("#"===e.charAt(0))return s(i(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error((0,a.formatMuiErrorMessage)(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function c(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function f(e){var t="hsl"===(e=s(e)).type?s(o(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function u(e,t){if(e=s(e),t=r(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return c(e)}function l(e,t){if(e=s(e),t=r(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return c(e)}},xJ30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"};t.default=a}},[["vlRD",0,2,1,3,4]]]);