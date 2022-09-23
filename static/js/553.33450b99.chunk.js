"use strict";(self.webpackChunkyeshtery_task=self.webpackChunkyeshtery_task||[]).push([[553],{1779:function(e,s,t){t.r(s),t.d(s,{default:function(){return Z}});var n=t(4165),a=t(5861),r=t(5671),i=t(3144),c=t(136),l=t(7277),d=t(2791),o=t(8683),u=t(2982),h=(t(8040),t(197)),m=t(184),x=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={imagesCounter:(0,u.Z)(Array(4).keys())},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.data,s=this.state.imagesCounter;return 0===e.length?(0,m.jsx)("div",{}):(0,m.jsx)(h.lr,{children:s.map((function(s,t){return(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"./images/".concat(e[0].imgFolder,"/").concat(t+1,".jpg"),alt:"product"})},s)}))})}}]),t}(d.Component),f=t(6199),p=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.context.addProduct,s=this.props.data[0];return s?(0,m.jsxs)("div",{className:"description",children:[(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("img",{src:"./images/Group 745.svg",alt:"product"})}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsx)("h1",{className:"fw-bold",children:s.title}),(0,m.jsx)("p",{className:"text-secondary text-capitalize mb-1",children:s.category}),(0,m.jsxs)("div",{className:"rating d-flex align-items-center mb-3",children:[(0,m.jsx)("img",{src:"./images/rating/".concat(Math.floor(s.rating),"-stars.png"),alt:"rating"}),(0,m.jsxs)("span",{className:"fw-bold mx-4",children:[s.rating," ","of 5"]}),(0,m.jsx)("span",{className:"fw-bold mx-4 text-secondary",children:"22 ratings"})]}),(0,m.jsxs)("div",{className:"cost d-flex justify-content-between align-items-center mb-2",children:[(0,m.jsxs)("div",{className:"pricing fw-bold ",children:[s.price," ",(0,m.jsx)("span",{className:"currency",children:"LE"})]}),(0,m.jsxs)("span",{className:"fw-bold text-secondary text-decoration-line-through ",children:[Math.floor(100*s.price/(100-s.discountPercentage))," ","LE"]}),(0,m.jsxs)("span",{className:"fw-bold  sale",children:[s.discountPercentage,"% Off"]})]}),(0,m.jsxs)("div",{className:"size my-4",children:[(0,m.jsx)("h3",{className:"fw-bold",children:"Size"}),(0,m.jsxs)("div",{className:"d-flex justify-content-start gap-2",children:[(0,m.jsx)("div",{className:"size-box fw-bold",children:"Small"}),(0,m.jsx)("div",{className:"size-box fw-bold",children:"Medium"}),(0,m.jsx)("div",{className:"size-box fw-bold selected-size",children:"Large"}),(0,m.jsx)("div",{className:"size-box fw-bold",children:"X large"}),(0,m.jsx)("div",{className:"size-box fw-bold",children:"XX Large"})]})]}),(0,m.jsxs)("div",{className:"color my-2",children:[(0,m.jsx)("h3",{className:"fw-bold",children:"Color"}),(0,m.jsxs)("div",{className:"d-flex justify-content-start align-items-center gap-3",children:[(0,m.jsx)("div",{className:"color-box-yellow"}),(0,m.jsx)("div",{className:"color-box-blue"})]})]}),(0,m.jsxs)("div",{className:"quantity my-2",children:[(0,m.jsx)("h3",{className:"fw-bold",children:"Quantity"}),(0,m.jsxs)("div",{className:"d-flex justify-content-start align-items-center gap-3",children:[(0,m.jsx)("button",{type:"button",className:"btn btn-light fw-bold btn-",children:"-"}),(0,m.jsx)("span",{className:"fw-bold",children:"1"}),(0,m.jsx)("button",{type:"button",className:"btn btn-light fw-bold btn-plus",children:"+"})]})]}),(0,m.jsxs)("div",{className:"actions d-flex align-items-center gap-5",children:[(0,m.jsx)("button",{type:"button",onClick:function(){return e(s)},className:"add-cart fw-bold",children:"Add to Cart"}),(0,m.jsx)("button",{type:"button",className:"pick-up fw-bold",children:"Pick up from store"})]})]})]}):(0,m.jsx)("div",{children:"Please wait..."})}}]),t}(d.Component);p.contextType=f.Z;var j=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.product;return e?(0,m.jsxs)("div",{className:"card shadow-sm",style:{width:"18rem"},children:[(0,m.jsx)("img",{src:"./images/".concat(e.imgFolder,"/1.jpg"),className:"card-img-top",style:{height:"300px"},alt:"..."}),(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("a",{href:"./#/product/".concat(e.imgFolder),className:"card-title h3 text-decoration-none text-dark",children:e.title}),(0,m.jsxs)("div",{className:"card-info d-flex justify-content-between align-items-center",children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"pricing fw-bold ",children:[e.price," ",(0,m.jsx)("span",{className:"currency",children:"LE"})]}),(0,m.jsxs)("span",{className:"fw-bold text-secondary text-decoration-line-through ",children:[Math.floor(100*e.price/(100-e.discountPercentage))," ","LE"]}),(0,m.jsxs)("span",{className:"fw-bold  sale",children:[e.discountPercentage,"% Off"]})]}),(0,m.jsx)("img",{src:"./images/Group 745.svg",className:"brand-logo",alt:"product"})]}),(0,m.jsxs)("div",{className:"d-flex justify-content-center align-items-center gap-2 mt-4",children:[(0,m.jsx)("img",{src:"./images/rating/".concat(Math.floor(e.rating),"-stars.png"),alt:"rating",className:"rating"}),(0,m.jsxs)("p",{className:"fw-bold",children:[e.rating," ","of 5"]})]}),(0,m.jsx)("div",{children:(0,m.jsx)("p",{className:"fw-bold text-center mt-3",children:"from Egypt"})})]})]},e.id):(0,m.jsx)("div",{})}}]),t}(d.Component),g=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.data;return 0===e.length?(0,m.jsx)("div",{}):(0,m.jsxs)("div",{className:"similar-products",children:[(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h1",{children:"Similar Products"}),(0,m.jsx)("p",{children:"You may like these products also"})]}),(0,m.jsx)("div",{className:"d-flex justify-content-center gap-5 container my-5",children:e.map((function(e){return(0,m.jsx)(j,{product:e},e.id)}))})]})}}]),t}(d.Component),v=t(2925),b=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={},n}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.data.map((function(e,s){return(0,o.Z)((0,o.Z)({},e),{},{imgFolder:s+1})})),s=e.filter((function(e,s){return s+1===parseInt(window.location.href.split("/").pop(),10)})),t=e.filter((function(e,s){return s+1!==parseInt(window.location.href.split("/").pop(),10)}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"d-flex justify-content-center product container my-5",children:[(0,m.jsx)("div",{className:"w-50",children:(0,m.jsx)(x,{data:s})}),(0,m.jsx)("div",{className:"",children:(0,m.jsx)(p,{data:s})})]}),(0,m.jsx)(g,{data:t}),(0,m.jsx)(v.Z,{children:"Hello"})]})}}]),t}(d.Component),N=t(4569),y=t.n(N),w=function(){return y().get("https://dummyjson.com/products/search?q=shirt&limit=5").then((function(e){return e.data})).then((function(e){return e.products}))},Z=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=s.call(this,e)).state={data:[]},n}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w();case 3:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return(0,m.jsx)(b,{data:e})}}]),t}(d.Component)}}]);
//# sourceMappingURL=553.33450b99.chunk.js.map