"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_=self.webpackChunkgoit_react_hw_08_phonebook_||[]).push([[56],{56:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(7689),r=t(5048),i=t(8650),o=(t(2791),t(1087)),c=t(3329),l=function(){return(0,c.jsx)("div",{children:(0,c.jsx)("nav",{children:(0,c.jsx)(o.OL,{to:"contacts",children:"Contacts"})})})},s=t(9439),u=t(6306),d=t(9712),f=t(5777),m=function(){var e=(0,r.v9)(i.vW),n=(0,u.Zn)(),t=(0,s.Z)(n,1)[0];return(0,c.jsx)(d.xu,{children:(0,c.jsxs)(d.kC,{h:16,alignItems:"center",justifyContent:"center",children:[(0,c.jsxs)(d.xv,{fontSize:"20px",color:"#ffff00",as:"u",mr:10,textShadow:"#000080 1px 0 0px, #000080 0 1px 0px, #000080 -1px 0 0px, #000080 0 -1px 0px",children:["Hello! ",e]}),(0,c.jsx)(f.zx,{type:"button",onClick:function(){t()},w:60,_hover:{transform:"scale(1.02)",color:"red",fontWeight:"bold"},children:"LogOut"})]})})},p=t(410),h=function(){return(0,c.jsx)(d.xu,{bg:(0,p.ff)("gray.100","gray.900"),px:4,children:(0,c.jsxs)(d.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,c.jsx)(l,{}),(0,c.jsx)(m,{})]})})},v=function(){var e=(0,r.v9)(i.Vp);return(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)(h,{}),(0,c.jsx)(a.j3,{})]})}},5777:function(e,n,t){t.d(n,{zx:function(){return j}});var a=t(4942),r=t(1413),i=t(4925),o=t(9439),c=t(2791),l=t(1507),s=t(251),u=t(2965),d=t(2680),f=t(9194),m=["children","className"],p=["label","placement","spacing","children","className","__css"],h=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],v=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=["icon","children","isRound","aria-label"],x=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},b=function(e){return e?"":void 0},y=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),_=(0,o.Z)(y,2),Z=_[0],E=_[1];function N(e){var n=e.children,t=e.className,a=(0,i.Z)(e,m),o=(0,c.isValidElement)(n)?(0,c.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=x("chakra-button__icon",t);return c.createElement(s.m$.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:l}),o)}function S(e){var n=e.label,t=e.placement,o=e.spacing,l=void 0===o?"0.5rem":o,u=e.children,d=void 0===u?c.createElement(f.$,{color:"currentColor",width:"1em",height:"1em"}):u,m=e.className,h=e.__css,v=(0,i.Z)(e,p),g=x("chakra-button__spinner",m),b="start"===t?"marginEnd":"marginStart",y=(0,c.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,a.Z)(e,b,n?l:0),(0,a.Z)(e,"fontSize","1em"),(0,a.Z)(e,"lineHeight","normal"),e),h)}),[h,n,b,l]);return c.createElement(s.m$.div,(0,r.Z)((0,r.Z)({className:g},v),{},{__css:y}),d)}N.displayName="ButtonIcon",S.displayName="ButtonSpinner";var j=(0,s.Gp)((function(e,n){var t=E(),a=(0,s.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),d=(0,u.Lr)(e),f=d.isDisabled,m=void 0===f?null==t?void 0:t.isDisabled:f,p=d.isLoading,v=d.isActive,g=d.children,y=d.leftIcon,_=d.rightIcon,Z=d.loadingText,N=d.iconSpacing,j=void 0===N?"0.5rem":N,w=d.type,I=d.spinner,C=d.spinnerPlacement,B=void 0===C?"start":C,z=d.className,A=d.as,q=(0,i.Z)(d,h),D=(0,c.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==a?void 0:a._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},a),!!t&&{_focus:e})}),[a,t]),R=function(e){var n=(0,c.useState)(!e),t=(0,o.Z)(n,2),a=t[0],r=t[1];return{ref:(0,c.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(A),$=R.ref,G=R.type,L={rightIcon:_,leftIcon:y,iconSpacing:j,children:g};return c.createElement(s.m$.button,(0,r.Z)({disabled:m||p,ref:(0,l.qq)(n,$),as:A,type:null!==w&&void 0!==w?w:G,"data-active":b(v),"data-loading":b(p),__css:D,className:x("chakra-button",z)},q),p&&"start"===B&&c.createElement(S,{className:"chakra-button__spinner--start",label:Z,placement:"start",spacing:j},I),p?Z||c.createElement(s.m$.span,{opacity:0},c.createElement(k,(0,r.Z)({},L))):c.createElement(k,(0,r.Z)({},L)),p&&"end"===B&&c.createElement(S,{className:"chakra-button__spinner--end",label:Z,placement:"end",spacing:j},I))}));function k(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return c.createElement(c.Fragment,null,n&&c.createElement(N,{marginEnd:r},n),a,t&&c.createElement(N,{marginStart:r},t))}j.displayName="Button",(0,s.Gp)((function(e,n){var t=e.size,a=e.colorScheme,o=e.variant,l=e.className,u=e.spacing,d=void 0===u?"0.5rem":u,f=e.isAttached,m=e.isDisabled,p=(0,i.Z)(e,v),h=x("chakra-button__group",l),g=(0,c.useMemo)((function(){return{size:t,colorScheme:a,variant:o,isDisabled:m}}),[t,a,o,m]),b={display:"inline-flex"};return b=f?(0,r.Z)((0,r.Z)({},b),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,r.Z)((0,r.Z)({},b),{},{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),c.createElement(Z,{value:g},c.createElement(s.m$.div,(0,r.Z)({ref:n,role:"group",__css:b,className:h,"data-attached":f?"":void 0},p)))})).displayName="ButtonGroup",(0,s.Gp)((function(e,n){var t=e.icon,a=e.children,o=e.isRound,l=e["aria-label"],s=(0,i.Z)(e,g),u=t||a,d=(0,c.isValidElement)(u)?(0,c.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(j,(0,r.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":l},s),d)})).displayName="IconButton"},1507:function(e,n,t){t.d(n,{lq:function(){return i},qq:function(){return o}});var a=t(2791);function r(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){r(n,e)}))}}function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.useMemo)((function(){return i.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=56.e07fce72.chunk.js.map