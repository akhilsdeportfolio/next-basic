(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{8187:function(t,e,a){Promise.resolve().then(a.bind(a,4475))},4475:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return R}});var i=a(9268),n=a(6006),r=a(9791),o=a(2120),s=a(7562),h=a(3343),l=a(3207),d=a(4517),u=a(8539),c=a(5368);function m(t){return(0,c.Z)("MuiSkeleton",t)}(0,u.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);let p=t=>t,f,g,v,b,w=t=>{let{classes:e,variant:a,animation:i,hasChildren:n,width:r,height:o}=t;return(0,s.Z)({root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]},m,e)},k=(0,o.F4)(f||(f=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,o.F4)(g||(g=p`
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
`)),x=(0,l.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let a=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",i=parseFloat(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",..."text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},..."circular"===e.variant&&{borderRadius:"50%"},..."rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},...e.hasChildren&&{"& > *":{visibility:"hidden"}},...e.hasChildren&&!e.width&&{maxWidth:"fit-content"},...e.hasChildren&&!e.height&&{height:"auto"}}},({ownerState:t})=>"pulse"===t.animation&&(0,o.iv)(v||(v=p`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),k),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,o.iv)(b||(b=p`
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
    `),C,(e.vars||e).palette.action.hover)),y=n.forwardRef(function(t,e){let a=(0,d.Z)({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:s="span",height:h,style:l,variant:u="text",width:c,...m}=a,p={...a,animation:n,component:s,variant:u,hasChildren:!!m.children},f=w(p);return(0,i.jsx)(x,{as:s,ref:e,className:(0,r.Z)(f.root,o),ownerState:p,...m,style:{width:c,height:h,...l}})});function R(){return(0,i.jsxs)("div",{style:{maxWidth:"80%",margin:"auto",marginTop:"20vh"},children:[(0,i.jsx)(y,{animation:"wave"}),(0,i.jsx)(y,{animation:"wave"}),(0,i.jsx)(y,{animation:"wave"})]})}}},function(t){t.O(0,[800,667,139,744],function(){return t(t.s=8187)}),_N_E=t.O()}]);