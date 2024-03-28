import{l as bt,A as wt,d as xt,k as Ot,h as _,y as Ae,o as Xe,c as Ie,m as at,r as Ye,N as Ue,Z as ze,J as Et,w as At,a as Pt,t as Dt,e as kt,T as Bt}from"./framework.1ZhN5mGv.js";var C="top",S="bottom",L="right",j="left",ke="auto",ce=[C,S,L,j],K="start",se="end",Ct="clippingParents",nt="viewport",ne="popper",jt="reference",_e=ce.reduce(function(e,t){return e.concat([t+"-"+K,t+"-"+se])},[]),ot=[].concat(ce,[ke]).reduce(function(e,t){return e.concat([t,t+"-"+K,t+"-"+se])},[]),$t="beforeRead",Rt="read",Tt="afterRead",St="beforeMain",Lt="main",Mt="afterMain",Nt="beforeWrite",Wt="write",Ht="afterWrite",Vt=[$t,Rt,Tt,St,Lt,Mt,Nt,Wt,Ht];function H(e){return e?(e.nodeName||"").toLowerCase():null}function R(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=R(e).Element;return e instanceof t||e instanceof Element}function T(e){var t=R(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=R(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ft(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},s=t.elements[r];!T(s)||!H(s)||(Object.assign(s.style,a),Object.keys(n).forEach(function(c){var i=n[c];i===!1?s.removeAttribute(c):s.setAttribute(c,i===!0?"":i)}))})}function qt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],s=t.attributes[a]||{},c=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),i=c.reduce(function(o,p){return o[p]="",o},{});!T(n)||!H(n)||(Object.assign(n.style,i),Object.keys(s).forEach(function(o){n.removeAttribute(o)}))})}}const Xt={name:"applyStyles",enabled:!0,phase:"write",fn:Ft,effect:qt,requires:["computeStyles"]};function W(e){return e.split("-")[0]}var G=Math.max,ye=Math.min,Q=Math.round;function Pe(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function it(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,s=1;t&&T(e)&&(n=e.offsetWidth>0&&Q(a.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Q(a.height)/e.offsetHeight||1);var c=J(e)?R(e):window,i=c.visualViewport,o=!it()&&r,p=(a.left+(o&&i?i.offsetLeft:0))/n,f=(a.top+(o&&i?i.offsetTop:0))/s,h=a.width/n,g=a.height/s;return{width:h,height:g,top:f,right:p+h,bottom:f+g,left:p,x:p,y:f}}function Ce(e){var t=ee(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function st(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function V(e){return R(e).getComputedStyle(e)}function It(e){return["table","td","th"].indexOf(H(e))>=0}function q(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||q(e)}function Ge(e){return!T(e)||V(e).position==="fixed"?null:e.offsetParent}function Yt(e){var t=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&T(e)){var a=V(e);if(a.position==="fixed")return null}var n=be(e);for(Be(n)&&(n=n.host);T(n)&&["html","body"].indexOf(H(n))<0;){var s=V(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function pe(e){for(var t=R(e),r=Ge(e);r&&It(r)&&V(r).position==="static";)r=Ge(r);return r&&(H(r)==="html"||H(r)==="body"&&V(r).position==="static")?t:r||Yt(e)||t}function je(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return G(e,ye(t,r))}function Ut(e,t,r){var a=oe(e,t,r);return a>r?r:a}function ft(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},ft(),e)}function pt(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}var zt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:pt(t,ce))};function _t(e){var t,r=e.state,a=e.name,n=e.options,s=r.elements.arrow,c=r.modifiersData.popperOffsets,i=W(r.placement),o=je(i),p=[j,L].indexOf(i)>=0,f=p?"height":"width";if(!(!s||!c)){var h=zt(n.padding,r),g=Ce(s),l=o==="y"?C:j,w=o==="y"?S:L,d=r.rects.reference[f]+r.rects.reference[o]-c[o]-r.rects.popper[f],u=c[o]-r.rects.reference[o],m=pe(s),x=m?o==="y"?m.clientHeight||0:m.clientWidth||0:0,E=d/2-u/2,v=h[l],y=x-g[f]-h[w],b=x/2-g[f]/2+E,O=oe(v,b,y),D=o;r.modifiersData[a]=(t={},t[D]=O,t.centerOffset=O-b,t)}}function Gt(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||st(t.elements.popper,n)&&(t.elements.arrow=n))}const Jt={name:"arrow",enabled:!0,phase:"main",fn:_t,effect:Gt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(e){return e.split("-")[1]}var Zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Kt(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:Q(r*n)/n||0,y:Q(a*n)/n||0}}function Je(e){var t,r=e.popper,a=e.popperRect,n=e.placement,s=e.variation,c=e.offsets,i=e.position,o=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,h=e.isFixed,g=c.x,l=g===void 0?0:g,w=c.y,d=w===void 0?0:w,u=typeof f=="function"?f({x:l,y:d}):{x:l,y:d};l=u.x,d=u.y;var m=c.hasOwnProperty("x"),x=c.hasOwnProperty("y"),E=j,v=C,y=window;if(p){var b=pe(r),O="clientHeight",D="clientWidth";if(b===R(r)&&(b=q(r),V(b).position!=="static"&&i==="absolute"&&(O="scrollHeight",D="scrollWidth")),b=b,n===C||(n===j||n===L)&&s===se){v=S;var P=h&&b===y&&y.visualViewport?y.visualViewport.height:b[O];d-=P-a.height,d*=o?1:-1}if(n===j||(n===C||n===S)&&s===se){E=L;var A=h&&b===y&&y.visualViewport?y.visualViewport.width:b[D];l-=A-a.width,l*=o?1:-1}}var k=Object.assign({position:i},p&&Zt),M=f===!0?Kt({x:l,y:d},R(r)):{x:l,y:d};if(l=M.x,d=M.y,o){var B;return Object.assign({},k,(B={},B[v]=x?"0":"",B[E]=m?"0":"",B.transform=(y.devicePixelRatio||1)<=1?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",B))}return Object.assign({},k,(t={},t[v]=x?d+"px":"",t[E]=m?l+"px":"",t.transform="",t))}function Qt(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,s=r.adaptive,c=s===void 0?!0:s,i=r.roundOffsets,o=i===void 0?!0:i,p={placement:W(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Je(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:o})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Je(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const er={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qt,data:{}};var he={passive:!0};function tr(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,s=n===void 0?!0:n,c=a.resize,i=c===void 0?!0:c,o=R(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&o.addEventListener("resize",r.update,he),function(){s&&p.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&o.removeEventListener("resize",r.update,he)}}const rr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:tr,data:{}};var ar={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return ar[t]})}var nr={start:"end",end:"start"};function Ze(e){return e.replace(/start|end/g,function(t){return nr[t]})}function $e(e){var t=R(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function Re(e){return ee(q(e)).left+$e(e).scrollLeft}function or(e,t){var r=R(e),a=q(e),n=r.visualViewport,s=a.clientWidth,c=a.clientHeight,i=0,o=0;if(n){s=n.width,c=n.height;var p=it();(p||!p&&t==="fixed")&&(i=n.offsetLeft,o=n.offsetTop)}return{width:s,height:c,x:i+Re(e),y:o}}function ir(e){var t,r=q(e),a=$e(e),n=(t=e.ownerDocument)==null?void 0:t.body,s=G(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),i=-a.scrollLeft+Re(e),o=-a.scrollTop;return V(n||r).direction==="rtl"&&(i+=G(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:c,x:i,y:o}}function Te(e){var t=V(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function lt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:T(e)&&Te(e)?e:lt(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var a=lt(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),s=R(a),c=n?[s].concat(s.visualViewport||[],Te(a)?a:[]):a,i=t.concat(c);return n?i:i.concat(ie(be(c)))}function De(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function sr(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ke(e,t,r){return t===nt?De(or(e,r)):J(t)?sr(t,r):De(ir(q(e)))}function fr(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,a=r&&T(e)?pe(e):e;return J(a)?t.filter(function(n){return J(n)&&st(n,a)&&H(n)!=="body"}):[]}function cr(e,t,r,a){var n=t==="clippingParents"?fr(e):[].concat(t),s=[].concat(n,[r]),c=s[0],i=s.reduce(function(o,p){var f=Ke(e,p,a);return o.top=G(f.top,o.top),o.right=ye(f.right,o.right),o.bottom=ye(f.bottom,o.bottom),o.left=G(f.left,o.left),o},Ke(e,c,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ut(e){var t=e.reference,r=e.element,a=e.placement,n=a?W(a):null,s=a?te(a):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,o;switch(n){case C:o={x:c,y:t.y-r.height};break;case S:o={x:c,y:t.y+t.height};break;case L:o={x:t.x+t.width,y:i};break;case j:o={x:t.x-r.width,y:i};break;default:o={x:t.x,y:t.y}}var p=n?je(n):null;if(p!=null){var f=p==="y"?"height":"width";switch(s){case K:o[p]=o[p]-(t[f]/2-r[f]/2);break;case se:o[p]=o[p]+(t[f]/2-r[f]/2);break}}return o}function fe(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,s=r.strategy,c=s===void 0?e.strategy:s,i=r.boundary,o=i===void 0?Ct:i,p=r.rootBoundary,f=p===void 0?nt:p,h=r.elementContext,g=h===void 0?ne:h,l=r.altBoundary,w=l===void 0?!1:l,d=r.padding,u=d===void 0?0:d,m=ct(typeof u!="number"?u:pt(u,ce)),x=g===ne?jt:ne,E=e.rects.popper,v=e.elements[w?x:g],y=cr(J(v)?v:v.contextElement||q(e.elements.popper),o,f,c),b=ee(e.elements.reference),O=ut({reference:b,element:E,strategy:"absolute",placement:n}),D=De(Object.assign({},E,O)),P=g===ne?D:b,A={top:y.top-P.top+m.top,bottom:P.bottom-y.bottom+m.bottom,left:y.left-P.left+m.left,right:P.right-y.right+m.right},k=e.modifiersData.offset;if(g===ne&&k){var M=k[n];Object.keys(A).forEach(function(B){var X=[L,S].indexOf(B)>=0?1:-1,I=[C,S].indexOf(B)>=0?"y":"x";A[B]+=M[I]*X})}return A}function pr(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,s=r.rootBoundary,c=r.padding,i=r.flipVariations,o=r.allowedAutoPlacements,p=o===void 0?ot:o,f=te(a),h=f?i?_e:_e.filter(function(w){return te(w)===f}):ce,g=h.filter(function(w){return p.indexOf(w)>=0});g.length===0&&(g=h);var l=g.reduce(function(w,d){return w[d]=fe(e,{placement:d,boundary:n,rootBoundary:s,padding:c})[W(d)],w},{});return Object.keys(l).sort(function(w,d){return l[w]-l[d]})}function lr(e){if(W(e)===ke)return[];var t=ge(e);return[Ze(e),t,Ze(t)]}function ur(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!0:c,o=r.fallbackPlacements,p=r.padding,f=r.boundary,h=r.rootBoundary,g=r.altBoundary,l=r.flipVariations,w=l===void 0?!0:l,d=r.allowedAutoPlacements,u=t.options.placement,m=W(u),x=m===u,E=o||(x||!w?[ge(u)]:lr(u)),v=[u].concat(E).reduce(function(Z,F){return Z.concat(W(F)===ke?pr(t,{placement:F,boundary:f,rootBoundary:h,padding:p,flipVariations:w,allowedAutoPlacements:d}):F)},[]),y=t.rects.reference,b=t.rects.popper,O=new Map,D=!0,P=v[0],A=0;A<v.length;A++){var k=v[A],M=W(k),B=te(k)===K,X=[C,S].indexOf(M)>=0,I=X?"width":"height",$=fe(t,{placement:k,boundary:f,rootBoundary:h,altBoundary:g,padding:p}),N=X?B?L:j:B?S:C;y[I]>b[I]&&(N=ge(N));var le=ge(N),Y=[];if(s&&Y.push($[M]<=0),i&&Y.push($[N]<=0,$[le]<=0),Y.every(function(Z){return Z})){P=k,D=!1;break}O.set(k,Y)}if(D)for(var ue=w?3:1,we=function(F){var ae=v.find(function(de){var U=O.get(de);if(U)return U.slice(0,F).every(function(xe){return xe})});if(ae)return P=ae,"break"},re=ue;re>0;re--){var ve=we(re);if(ve==="break")break}t.placement!==P&&(t.modifiersData[a]._skip=!0,t.placement=P,t.reset=!0)}}const vr={name:"flip",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"],data:{_skip:!1}};function Qe(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function et(e){return[C,L,S,j].some(function(t){return e[t]>=0})}function dr(e){var t=e.state,r=e.name,a=t.rects.reference,n=t.rects.popper,s=t.modifiersData.preventOverflow,c=fe(t,{elementContext:"reference"}),i=fe(t,{altBoundary:!0}),o=Qe(c,a),p=Qe(i,n,s),f=et(o),h=et(p);t.modifiersData[r]={referenceClippingOffsets:o,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:dr};function hr(e,t,r){var a=W(e),n=[j,C].indexOf(a)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=s[0],i=s[1];return c=c||0,i=(i||0)*n,[j,L].indexOf(a)>=0?{x:i,y:c}:{x:c,y:i}}function gr(e){var t=e.state,r=e.options,a=e.name,n=r.offset,s=n===void 0?[0,0]:n,c=ot.reduce(function(f,h){return f[h]=hr(h,t.rects,s),f},{}),i=c[t.placement],o=i.x,p=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=o,t.modifiersData.popperOffsets.y+=p),t.modifiersData[a]=c}const yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:gr};function br(e){var t=e.state,r=e.name;t.modifiersData[r]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const wr={name:"popperOffsets",enabled:!0,phase:"read",fn:br,data:{}};function xr(e){return e==="x"?"y":"x"}function Or(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,s=n===void 0?!0:n,c=r.altAxis,i=c===void 0?!1:c,o=r.boundary,p=r.rootBoundary,f=r.altBoundary,h=r.padding,g=r.tether,l=g===void 0?!0:g,w=r.tetherOffset,d=w===void 0?0:w,u=fe(t,{boundary:o,rootBoundary:p,padding:h,altBoundary:f}),m=W(t.placement),x=te(t.placement),E=!x,v=je(m),y=xr(v),b=t.modifiersData.popperOffsets,O=t.rects.reference,D=t.rects.popper,P=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(b){if(s){var B,X=v==="y"?C:j,I=v==="y"?S:L,$=v==="y"?"height":"width",N=b[v],le=N+u[X],Y=N-u[I],ue=l?-D[$]/2:0,we=x===K?O[$]:D[$],re=x===K?-D[$]:-O[$],ve=t.elements.arrow,Z=l&&ve?Ce(ve):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ft(),ae=F[X],de=F[I],U=oe(0,O[$],Z[$]),xe=E?O[$]/2-ue-U-ae-A.mainAxis:we-U-ae-A.mainAxis,vt=E?-O[$]/2+ue+U+de+A.mainAxis:re+U+de+A.mainAxis,Oe=t.elements.arrow&&pe(t.elements.arrow),dt=Oe?v==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,Se=(B=k==null?void 0:k[v])!=null?B:0,mt=N+xe-Se-dt,ht=N+vt-Se,Le=oe(l?ye(le,mt):le,N,l?G(Y,ht):Y);b[v]=Le,M[v]=Le-N}if(i){var Me,gt=v==="x"?C:j,yt=v==="x"?S:L,z=b[y],me=y==="y"?"height":"width",Ne=z+u[gt],We=z-u[yt],Ee=[C,j].indexOf(m)!==-1,He=(Me=k==null?void 0:k[y])!=null?Me:0,Ve=Ee?Ne:z-O[me]-D[me]-He+A.altAxis,Fe=Ee?z+O[me]+D[me]-He-A.altAxis:We,qe=l&&Ee?Ut(Ve,z,Fe):oe(l?Ve:Ne,z,l?Fe:We);b[y]=qe,M[y]=qe-z}t.modifiersData[a]=M}}const Er={name:"preventOverflow",enabled:!0,phase:"main",fn:Or,requiresIfExists:["offset"]};function Ar(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pr(e){return e===R(e)||!T(e)?$e(e):Ar(e)}function Dr(e){var t=e.getBoundingClientRect(),r=Q(t.width)/e.offsetWidth||1,a=Q(t.height)/e.offsetHeight||1;return r!==1||a!==1}function kr(e,t,r){r===void 0&&(r=!1);var a=T(t),n=T(t)&&Dr(t),s=q(t),c=ee(e,n,r),i={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(a||!a&&!r)&&((H(t)!=="body"||Te(s))&&(i=Pr(t)),T(t)?(o=ee(t,!0),o.x+=t.clientLeft,o.y+=t.clientTop):s&&(o.x=Re(s))),{x:c.left+i.scrollLeft-o.x,y:c.top+i.scrollTop-o.y,width:c.width,height:c.height}}function Br(e){var t=new Map,r=new Set,a=[];e.forEach(function(s){t.set(s.name,s)});function n(s){r.add(s.name);var c=[].concat(s.requires||[],s.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var o=t.get(i);o&&n(o)}}),a.push(s)}return e.forEach(function(s){r.has(s.name)||n(s)}),a}function Cr(e){var t=Br(e);return Vt.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function jr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function $r(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Rr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,s=n===void 0?tt:n;return function(i,o,p){p===void 0&&(p=s);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,s),modifiersData:{},elements:{reference:i,popper:o},attributes:{},styles:{}},h=[],g=!1,l={state:f,setOptions:function(m){var x=typeof m=="function"?m(f.options):m;d(),f.options=Object.assign({},s,f.options,x),f.scrollParents={reference:J(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(o)};var E=Cr($r([].concat(a,f.options.modifiers)));return f.orderedModifiers=E.filter(function(v){return v.enabled}),w(),l.update()},forceUpdate:function(){if(!g){var m=f.elements,x=m.reference,E=m.popper;if(rt(x,E)){f.rects={reference:kr(x,pe(E),f.options.strategy==="fixed"),popper:Ce(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var y=f.orderedModifiers[v],b=y.fn,O=y.options,D=O===void 0?{}:O,P=y.name;typeof b=="function"&&(f=b({state:f,options:D,name:P,instance:l})||f)}}}},update:jr(function(){return new Promise(function(u){l.forceUpdate(),u(f)})}),destroy:function(){d(),g=!0}};if(!rt(i,o))return l;l.setOptions(p).then(function(u){!g&&p.onFirstUpdate&&p.onFirstUpdate(u)});function w(){f.orderedModifiers.forEach(function(u){var m=u.name,x=u.options,E=x===void 0?{}:x,v=u.effect;if(typeof v=="function"){var y=v({state:f,name:m,instance:l,options:E}),b=function(){};h.push(y||b)}})}function d(){h.forEach(function(u){return u()}),h=[]}return l}}var Tr=[rr,wr,er,Xt,yr,vr,Er,Jt,mr],Sr=Rr({defaultModifiers:Tr});const Lr=(e,t)=>{const r=a=>{e.value&&a.target&&(e.value.contains(a.target)||t(a))};bt(()=>{document.addEventListener("click",r)}),wt(()=>{document.removeEventListener("click",r)})},Mr=at("div",{id:"arrow","data-popper-arrow":""},null,-1),Wr=xt({name:"XinTooltip",__name:"Tooltip",props:{content:{},trigger:{default:"hover"},placement:{default:"bottom"},manual:{type:Boolean},popperOptions:{},transition:{default:"fade"}},emits:["visible-change"],setup(e,{expose:t,emit:r}){const a=e,n=r,s=Ot(()=>({placement:a.placement,...a.popperOptions})),c=_({}),i=_({}),o=_(!1),p=_(),f=_(),h=_();let g=_(null);const l=()=>{o.value=!o.value,n("visible-change",o.value)},w=()=>{o.value=!0,n("visible-change",!0)},d=()=>{o.value=!1,n("visible-change",!1)},u=()=>{a.trigger==="hover"?(c.value.mouseenter=w,i.value.mouseleave=d):a.trigger==="click"&&(c.value.click=l)};return a.manual||u(),Ae(()=>a.trigger,(m,x)=>{m!==x&&(c.value={},i.value={},u())}),Ae(o,m=>{var x;m&&(p.value&&f.value?g.value=Sr(f.value,p.value,s.value):(x=g.value)==null||x.destroy())},{flush:"post"}),Ae(()=>a.manual,m=>{m?(c.value={},i.value={}):u()}),Lr(h,()=>{a.trigger==="click"&&o.value&&!a.manual&&d()}),t({showTooltip:w,closeTooltip:d}),(m,x)=>(Xe(),Ie("div",Ue({ref_key:"containerNode",ref:h,class:"xin-tooltip"},ze(i.value,!0)),[at("div",Ue({ref_key:"triggerNode",ref:f,class:"xin-tooltip__trigger"},ze(c.value,!0)),[Ye(m.$slots,"default")],16),Et(Bt,{name:a.transition},{default:At(()=>[o.value?(Xe(),Ie("div",{key:0,ref_key:"popperNode",ref:p,class:"xin-tooltip__popper"},[Ye(m.$slots,"content",{},()=>[Pt(Dt(a.content),1)]),Mr],512)):kt("",!0)]),_:3},8,["name"])],16))}});export{Wr as _};
