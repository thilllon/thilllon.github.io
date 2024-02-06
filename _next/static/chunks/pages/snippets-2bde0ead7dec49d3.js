(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{4495:function(e,t,n){"use strict";n.d(t,{M:function(){return AnimatePresence}});var r=n(959),i=n(8278),a=n(6982);function useIsMounted(){let e=(0,r.useRef)(!1);return(0,a.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var s=n(5477),o=n(9016);let PopChildMeasure=class PopChildMeasure extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}};function PopChild({children:e,isPresent:t}){let n=(0,r.useId)(),i=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:s,left:o}=a.current;if(t||!i.current||!e||!r)return;i.current.dataset.motionPopId=n;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),r.createElement(PopChildMeasure,{isPresent:t,childRef:i,sizeRef:a},r.cloneElement(e,{ref:i}))}let PresenceChild=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:l,mode:c})=>{let u=(0,o.h)(newChildrenMap),d=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:d,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;i&&i()},register:e=>(u.set(e,!1),()=>u.delete(e))}),l?void 0:[n]);return(0,r.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),r.useEffect(()=>{n||u.size||!i||i()},[n]),"popLayout"===c&&(e=r.createElement(PopChild,{isPresent:n},e)),r.createElement(s.O.Provider,{value:p},e)};function newChildrenMap(){return new Map}var l=n(8550),c=n(3843);let getChildKey=e=>e.key||"",AnimatePresence=({children:e,custom:t,initial:n=!0,onExitComplete:s,exitBeforeEnter:o,presenceAffectsLayout:u=!0,mode:d="sync"})=>{o&&(d="wait");let[p]=function(){let e=useIsMounted(),[t,n]=(0,r.useState)(0),a=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]),s=(0,r.useCallback)(()=>i.Z_.postRender(a),[a]);return[s,t]}(),h=(0,r.useContext)(l.p).forceRender;h&&(p=h);let f=useIsMounted(),m=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),x=m,g=new Set,y=(0,r.useRef)(x),v=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,a.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let n=getChildKey(e);t.set(n,e)})}(m,v),y.current=x}),(0,c.z)(()=>{C.current=!0,v.clear(),g.clear()}),C.current)return r.createElement(r.Fragment,null,x.map(e=>r.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:d},e)));x=[...x];let w=y.current.map(getChildKey),j=m.map(getChildKey),b=w.length;for(let e=0;e<b;e++){let t=w[e];-1===j.indexOf(t)&&g.add(t)}return"wait"===d&&g.size&&(x=[]),g.forEach(e=>{if(-1!==j.indexOf(e))return;let n=v.get(e);if(!n)return;let i=w.indexOf(e);x.splice(i,0,r.createElement(PresenceChild,{key:getChildKey(n),isPresent:!1,onExitComplete:()=>{v.delete(e),g.delete(e);let t=y.current.findIndex(t=>t.key===e);if(y.current.splice(t,1),!g.size){if(y.current=m,!1===f.current)return;p(),s&&s()}},custom:t,presenceAffectsLayout:u,mode:d},n))}),x=x.map(e=>{let t=e.key;return g.has(t)?e:r.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,presenceAffectsLayout:u,mode:d},e)}),r.createElement(r.Fragment,null,g.size?x:x.map(e=>(0,r.cloneElement)(e)))}},3982:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets",function(){return n(7670)}])},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return IconText}});var r=n(1527);n(959);var i=n(5187);function IconText(e){let{Icon:t,iconSize:n=14,text:a,className:s}=e;return(0,r.jsxs)("div",{className:(0,i.$)("flex items-center",null!=s?s:"gap-1 text-xs"),children:[(0,r.jsx)(t,{width:n,height:n}),(0,r.jsx)("span",{children:a})]})}},7695:function(e,t,n){"use strict";n.d(t,{Z:function(){return Pill}});var r=n(1527);n(959);var i=n(5187);function Pill(e){let{className:t,selected:n,...a}=e;return(0,r.jsx)("div",{...a,className:(0,i.$)("rounded-lg px-2 py-0.5 transition-colors","bg-secondary hover:text-primary hover:bg-tertiary",n?"text-primary font-semibold ring-2 ring-neutral-350":"text-secondary font-normal",t)})}},9533:function(e,t,n){"use strict";n.d(t,{Z:function(){return PlainText}});var r=n(1527);n(959);var i=n(5187);function PlainText(e){let{children:t,className:n}=e;return(0,r.jsx)("p",{className:(0,i.$)("text-tertiary mb-4",n),children:t})}},3586:function(e,t,n){"use strict";n.d(t,{Z:function(){return SnippetListItem}});var r=n(1527),i=n(5726),a=n.n(i),s=n(7749),o=n.n(s),l=n(5187),c=n(1050),u=n(2503);function SnippetListItem(e){let{post:t}=e;return(0,r.jsx)(o(),{as:t.slug,href:"/snippets/[...slug]",children:(0,r.jsxs)("div",{className:(0,l.$)("group w-full py-4 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800","rounded-lg px-4 ring-1 ring-neutral-300 dark:ring-neutral-700"),children:[(0,r.jsx)("p",{className:"text-lg font-bold lg:text-xl",children:t.title}),(0,r.jsx)("div",{className:"mt-2 inline-flex w-full items-start gap-2 text-sm",children:(0,r.jsx)("div",{className:"flex gap-2 whitespace-nowrap text-neutral-600 dark:text-neutral-400",children:(0,r.jsx)(u.Z,{Icon:c.Z,text:a()(t.date).format("YY.MM.DD")})})})]})})}},6938:function(e,t,n){"use strict";n.d(t,{Z:function(){return Title}});var r=n(1527),i=n(5187);function Title(e){let{className:t,...n}=e;return(0,r.jsx)("h1",{...n,className:(0,i.$)("mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl",t)})}},1050:function(e,t,n){"use strict";n.d(t,{Z:function(){return CalenderIcon}});var r=n(1527);function CalenderIcon(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}},1234:function(e,t,n){"use strict";n.d(t,{HA:function(){return o},Ji:function(){return c},Oj:function(){return s},YK:function(){return l},eu:function(){return u},gS:function(){return d},rv:function(){return a},xN:function(){return i}});let r=[.6,-.05,.01,.99],i={animate:{transition:{staggerChildren:.2}}},a={animate:{transition:{staggerChildren:.1}}},s={animate:{transition:{staggerChildren:.05}}},o={animate:{transition:{staggerChildren:.01}}},l={initial:{opacity:.3,transition:{duration:.3,ease:r},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3,ease:r},willChange:"opacity"},exit:{opacity:.3,transition:{duration:.3,ease:r},willChange:"opacity"}},c={initial:{opacity:0,transition:{duration:.6,ease:r},willChange:"opacity"},animate:{opacity:1,transition:{duration:.6,ease:r},willChange:"opacity"},exit:{opacity:0,transition:{duration:.6,ease:r},willChange:"opacity"}},u={initial:{opacity:0,y:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"},animate:{opacity:1,y:0,transition:{duration:.6,ease:r},willChange:"opacity, transform"},exit:{opacity:0,y:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"}},d={initial:{opacity:0,x:30,transition:{duration:.6,ease:r},willChange:"opacity, transform"},animate:{opacity:1,x:0,transition:{duration:.6,ease:r},willChange:"opacity, transform"},exit:{opacity:0,x:-30,transition:{duration:.6,ease:r},willChange:"opacity, transform"}}},7670:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return Snippets}});var r=n(1527),i=n(3063),a=n(4495),s=n(7749),o=n.n(s),l=n(9654),c=n(9378),u=n.n(c),d=n(7695),p=n(9533),h=n(3586),f=n(6938),m=n(4439),x=n(1205),g=n(1234),y=!0;function Snippets(e){var t;let{snippetList:n}=e,s=(0,l.useRouter)(),c=null===(t=s.query)||void 0===t?void 0:t.key,y=!c||"all"===c,v=n.reduce((e,t)=>e+t.postList.length,0),C=n.filter(e=>!!y||e.key===c);return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(x.T,{title:"Snippets",description:"개발하면서 실제 사용되었던 코드 조각들 입니다. 간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 \uD83C\uDF6F",url:"/snippets"}),(0,r.jsx)(f.Z,{children:"Code Snippets"}),(0,r.jsxs)(i.E.div,{variants:g.Oj,initial:"initial",animate:"animate",exit:"exit",children:[(0,r.jsx)(i.E.div,{variants:g.YK,children:(0,r.jsxs)(p.Z,{children:["개발하면서 실제 사용되었던 코드 조각들 입니다.",(0,r.jsx)("br",{}),"간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 \uD83C\uDF6F"]})}),(0,r.jsxs)(i.E.div,{className:"bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70",variants:g.HA,children:[(0,r.jsx)(i.E.div,{variants:g.YK,children:(0,r.jsx)(o(),{href:"?key=all",children:(0,r.jsxs)(d.Z,{selected:y,className:"cursor-pointer whitespace-nowrap",children:["All ",(0,r.jsx)("span",{className:"text-xs",children:v})]})})}),n.map(e=>{let{key:t,postList:n}=e;return(0,r.jsx)(i.E.div,{variants:g.YK,children:(0,r.jsx)(o(),{href:"?key=".concat(t),children:(0,r.jsxs)(d.Z,{className:"cursor-pointer whitespace-nowrap",selected:t===c,children:[u()(t)," ",(0,r.jsx)("span",{className:"text-xs",children:n.length})]})})},t)})]}),(0,r.jsx)("div",{className:"mt-8 space-y-16",children:C.map(e=>{let{key:t,postList:n}=e;return(0,r.jsx)(i.E.ul,{className:"mt-4 grid grid-cols-2 gap-4",variants:g.HA,children:(0,r.jsx)(a.M,{mode:"wait",children:n.map(e=>(0,r.jsx)(i.E.li,{variants:g.YK,children:(0,r.jsx)(h.Z,{post:e})},e.slug))})},t)})})]})]})}},9378:function(e,t,n){let r=n(3587),i=n(2168),a="[^\\s'’\\(\\)!?;:\"-]",s=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),convertToRegExp=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(s,(e,t="",n,i,a,s,o)=>{let l=e.length+s>=o.length,c=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return c?!n&&r.has(i+a)&&!l?c:t+(i||n).toUpperCase()+a:e});let n=t.special||[],a=[...i,...n],o=convertToRegExp(a);return o.forEach(([t,n])=>{e=e.replace(t,n)}),e}},3587:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},2168:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]}},function(e){e.O(0,[749,63,829,774,888,179],function(){return e(e.s=3982)}),_N_E=e.O()}]);