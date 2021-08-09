(this.webpackJsonpkunashiri=this.webpackJsonpkunashiri||[]).push([[0],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=a(290),i=a(301),l=a(15),h=a(32),p=a.n(h),u=a(69),b=a(5),j=a(6),d=a(10),f=a(9),m=a(7),x=a(289),g=a(287),O=a(288),v=a(284),w=a(72),y=a(128);function k(e){var t=e;if(0===e||1===e)return 1;for(;e>1;)t*=--e;return t}function C(e){for(var t,a=1,n=0;e>=0;)t=a,a+=n,k(n=t),e--;return n}var N=a(3),B=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={factorialData:{labels:["JavaScript","C","RUST"],datasets:[{label:"Time taken to complete (in milliseconds)",data:[],backgroundColor:["rgba(255, 206, 86, 0.2)","rgba(0, 255, 81, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255, 206, 86, 0.2)","rgba(0, 255, 81, 0.2)","rgba(153, 102, 255, 0.2)"],borderWidth:1}]}},e.loadWasm=Object(u.a)(p.a.mark((function t(){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.e(3).then(a.bind(null,304));case 2:n=t.sent,e.setState({wasm:n}),"/Kunashiri/fibonacci.wasm",r={env:{memoryBase:0,tableBase:0,memory:new WebAssembly.Memory({initial:256,maximum:1024}),table:new WebAssembly.Table({initial:256,element:"anyfunc"}),__assert_fail:function(){},emscripten_resize_heap:function(){},emscripten_memcpy_big:function(){},setTempRet0:function(){}}},WebAssembly.instantiateStreaming(fetch("/Kunashiri/fibonacci.wasm"),r).then((function(t){e.setState({instance:t.instance})}));case 7:case"end":return t.stop()}}),t)}))),e.handleCalc1=Object(u.a)(p.a.mark((function t(){var a,n,r,c,o,s,i,l,h,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.wasm,n=void 0===a?{}:a,r=performance.now(),console.log("t0:"+r),t.next=5,n.factorialize(5e5);case 5:c=performance.now(),console.log("t1:"+c),e.updateGraph(c-r,"wa","fac"),o=performance.now(),console.log("t2:"+o),k(5e5),s=performance.now(),console.log("t3:"+s),e.updateGraph(s-o,"js","fac"),i=e.state.instance,l=void 0===i?{}:i,h=performance.now(),console.log("t4:"+h),l.exports._Z12factorializei(5e5),u=performance.now(),console.log("t5:"+u),e.updateGraph(u-h,"c","fac");case 21:case"end":return t.stop()}}),t)}))),e.handleCalc2=Object(u.a)(p.a.mark((function t(){var a,n,r,c,o,s,i,l,h,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.wasm,n=void 0===a?{}:a,r=performance.now(),console.log("t0:"+r),t.next=5,n.factorialize_fib(30);case 5:c=performance.now(),console.log("t1:"+c),e.updateGraph(c-r,"wa","fac"),o=performance.now(),console.log("t2:"+o),C(30),s=performance.now(),console.log("t3:"+s),e.updateGraph(s-o,"js","fac"),i=e.state.instance,l=void 0===i?{}:i,h=performance.now(),console.log("t4:"+h),l.exports._Z15factorializeFibi(30),u=performance.now(),console.log("t5:"+u),e.updateGraph(u-h,"c","fac");case 21:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.loadWasm()}},{key:"updateGraph",value:function(e,t,a){var n;var r=(n=this.state.factorialData).datasets.slice(0),c=r[0].data.slice(0);"js"===t?c[0]=e:"wa"===t?c[2]=e:"c"===t&&(c[1]=e),r[0].data=c,this.setState(Object(l.a)({},"factorialData",Object.assign({},n,{datasets:r})))}},{key:"render",value:function(){return Object(N.jsx)(v.a,{children:Object(N.jsx)(g.a,{className:this.props.classes.root,children:Object(N.jsxs)(O.a,{children:[Object(N.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"JavaScript and WebAssembly speed test"}),Object(N.jsxs)(v.a,{children:[Object(N.jsxs)("div",{className:this.props.classes.charts,children:[Object(N.jsx)(x.a,{className:this.props.classes.formControl,onClick:this.handleCalc1,color:"primary",children:"Calculate the factorial of 500"}),Object(N.jsx)(x.a,{className:this.props.classes.formControl,onClick:this.handleCalc2,color:"primary",children:"Factorialize the first 30 numbers of the fibonacci sequence"})]}),Object(N.jsx)(v.a,{children:Object(N.jsx)("div",{className:this.props.classes.charts,children:Object(N.jsx)("div",{className:this.props.classes.chart,children:Object(N.jsx)(y.a,{data:this.state.factorialData,width:400,height:400,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})})})]})]})})})}}]),n}(n.Component),T=Object(m.a)((function(e){return{root:{marginTop:"-55vh",marginBottom:e.spacing(1),flex:1},formControl:{margin:e.spacing(1)},charts:{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center"},chart:{margin:e.spacing(1)}}}))(B),D=Object(s.a)((function(e){return Object(i.a)({root:{background:"#424242",height:"60px",width:"100%"},text:{color:"#BDBDBD",fontSize:"13px",paddingLeft:"40px",paddingTop:"20px"}})}));function A(){var e=D();return Object(N.jsx)("footer",{className:e.root,children:Object(N.jsx)(w.a,{className:e.text,children:"Copyright \xa9 Panepo@Github 2020 All Rights Reserved."})})}var R=a(66),S=a(295),_=a(300),G=a(297),W=a(291),z=a(292),F=a(293),M=a(294),K=a(296),L=a(125),I=a.n(L),J=a(126),P=a.n(J),Z=[{text:"WebAssembly",link:"https://webassembly.org/"}],H=[{text:"React",link:"https://reactjs.org/"},{text:"Create React App",link:"https://create-react-app.dev/"},{text:"Material Design Lite",link:"https://getmdl.io/"},{text:"Material-UI",link:"https://material-ui.com/"},{text:"Rust",link:"https://www.rust-lang.org/"},{text:"Koala42",link:"https://koala42.com/"}],U=Object(s.a)((function(e){return Object(i.a)({appBar:{position:"relative"},button:{margin:e.spacing(1)},drawer:{color:"#990033"},drawerTitle:{textAlign:"center",marginTop:20,marginBottom:10},grow:{flexGrow:1},menuButton:{color:"#990033",marginLeft:-12,marginRight:20}})}));function q(){var e=U(),t=r.a.useState(!1),a=Object(R.a)(t,2),n=a[0],c=a[1],o=function(e){return function(){c(e)}},s=Object(N.jsxs)(_.a,{className:e.drawer,open:n,onClose:o(!1),children:[Object(N.jsx)(w.a,{className:e.drawerTitle,variant:"h6",color:"inherit",noWrap:!0,children:"Reference"}),Object(N.jsx)("div",{tabIndex:0,role:"button",onClick:o(!1),onKeyDown:o(!1),children:Object(N.jsx)(W.a,{children:H.map((function(e){return Object(N.jsxs)(z.a,{button:!0,divider:!0,component:"a",href:e.link,children:[Object(N.jsx)(F.a,{children:Object(N.jsx)(I.a,{color:"secondary"})}),Object(N.jsx)(M.a,{primary:e.text})]},e.text)}))})})]}),i=Z.reduce((function(t,a){return t.push(Object(N.jsx)(x.a,{color:"primary",className:e.button,href:a.link,children:a.text},a.text)),t}),[]);return Object(N.jsx)("header",{children:Object(N.jsxs)(S.a,{position:"static",color:"inherit",className:e.appBar,children:[s,Object(N.jsxs)(K.a,{children:[Object(N.jsx)(G.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:o(!0),children:Object(N.jsx)(P.a,{})}),Object(N.jsx)(w.a,{variant:"h6",color:"inherit",className:e.grow,children:Object(N.jsx)("b",{children:"Kunashiri"})}),i]})]})})}var E=Object(s.a)((function(e){return Object(i.a)({root:{width:"100%",height:"60vh",background:"linear-gradient(165deg, #990033 20%, #ff6699 70%)"}})}));function Q(){var e=E();return Object(N.jsx)("div",{className:e.root})}var V=a(31),X=(a(249),a(71)),Y=a.n(X),$=a(70),ee=a.n($),te=a(299),ae=a(127),ne=a(298),re=Object(ae.a)({typography:{fontFamily:"Roboto"},palette:{primary:{light:ee.a[300],main:ee.a[500],dark:ee.a[700],contrastText:"#fff"},secondary:{light:Y.a[300],main:Y.a[500],dark:Y.a[700],contrastText:"#fff"}}});var ce=function(e){return function(t){return Object(N.jsxs)(ne.a,{theme:re,children:[Object(N.jsx)(te.a,{}),Object(N.jsx)(e,Object(V.a)({},t))]})}},oe=Object(s.a)((function(e){return Object(i.a)({root:{display:"flex",minHeight:"100vh",flexDirection:"column"},content:{minHeight:"calc(100vh - 124px)"}})}));var se=ce((function(){var e=oe();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)(q,{}),Object(N.jsxs)("div",{className:e.content,children:[Object(N.jsx)(Q,{}),Object(N.jsx)(T,{})]}),Object(N.jsx)(A,{})]})})),ie=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,303)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(se,{})}),document.getElementById("root")),ie()}},[[250,1,2]]]);
//# sourceMappingURL=main.1435266f.chunk.js.map