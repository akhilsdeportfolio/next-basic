(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5300:function(t,e,n){Promise.resolve().then(n.bind(n,7831))},4475:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var i=n(9268),a=n(6006),r=n(9791),o=n(2120),s=n(7562),l=n(3343),u=n(3207),d=n(4517),h=n(8539),c=n(5368);function f(t){return(0,c.Z)("MuiSkeleton",t)}(0,h.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);let g=t=>t,m,p,v,b,w=t=>{let{classes:e,variant:n,animation:i,hasChildren:a,width:r,height:o}=t;return(0,s.Z)({root:["root",n,i,a&&"withChildren",a&&!r&&"fitContent",a&&!o&&"heightAuto"]},f,e)},C=(0,o.F4)(m||(m=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),x=(0,o.F4)(p||(p=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),k=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",i=parseFloat(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,l.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",..."text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},..."circular"===e.variant&&{borderRadius:"50%"},..."rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},...e.hasChildren&&{"& > *":{visibility:"hidden"}},...e.hasChildren&&!e.width&&{maxWidth:"fit-content"},...e.hasChildren&&!e.height&&{height:"auto"}}},({ownerState:t})=>"pulse"===t.animation&&(0,o.iv)(v||(v=g`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),C),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,o.iv)(b||(b=g`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),x,(e.vars||e).palette.action.hover)),y=a.forwardRef(function(t,e){let n=(0,d.Z)({props:t,name:"MuiSkeleton"}),{animation:a="pulse",className:o,component:s="span",height:l,style:u,variant:h="text",width:c,...f}=n,g={...n,animation:a,component:s,variant:h,hasChildren:!!f.children},m=w(g);return(0,i.jsx)(k,{as:s,ref:e,className:(0,r.Z)(m.root,o),ownerState:g,...f,style:{width:c,height:l,...u}})});function A(){return(0,i.jsxs)("div",{style:{maxWidth:"80%",margin:"auto",marginTop:"20vh"},children:[(0,i.jsx)(y,{animation:"wave"}),(0,i.jsx)(y,{animation:"wave"}),(0,i.jsx)(y,{animation:"wave"})]})}},7831:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l},userReducer:function(){return s}});var i=n(9268),a=n(6006),r=n(4475),o=n(6008);let s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADING":return{...t,loading:!0};case"AUTHENTICATED":return{...t,isAuth:!0,loading:!1};case"PENDING":return{...t,isAuth:!1,loading:!0};case"FAIL":return{...t,isAuth:!1,loading:!1};default:return t}};function l(t){let{children:e,href:n}=t,[l,u]=(0,a.useReducer)(s,{isAuth:!1,loading:!0});return((0,a.useEffect)(()=>{u({type:"LOADING"}),(null==localStorage?void 0:localStorage.getItem("authenticated"))&&(u({type:"AUTHENTICATED"}),(0,o.redirect)("dashboard?src=redirect"))},[l.loading]),l.loading)?(0,i.jsx)(r.default,{}):(0,i.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[JSON.stringify(l),(0,i.jsx)("button",{onClick:()=>{u({type:"PENDING"}),setTimeout(()=>{u({type:"AUTHENTICATED"}),localStorage.setItem("authenticated",!0)},3e3)},children:"LOG ME IN"})]})}},6008:function(t,e,n){t.exports=n(167)}},function(t){t.O(0,[800,667,139,744],function(){return t(t.s=5300)}),_N_E=t.O()}]);