(this["webpackJsonpsimple-shop"]=this["webpackJsonpsimple-shop"]||[]).push([[0],{44:function(e,n,t){e.exports=t(73)},49:function(e,n,t){},50:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(18),i=t.n(c),l=(t(49),t(3)),o=t(14),u=t(5),s=t(4),d=(t(50),t(1)),m=t(8),p=t(13),f=Object(m.d)({name:"navigation",initialState:{activeId:"products"},reducers:{changeActive:function(e,n){e.activeId=n.payload}}}),b=f.actions.changeActive,x=f.reducer,g=Object(p.a)((function(e,n){return e.navigation.activeId===n}),(function(e){return e})),h=Object(m.c)(),E=h.getInitialState({cartCount:0,totalPrice:0}),v=Object(m.d)({name:"cart",initialState:E,reducers:{addToCart:function(e,n){e.cartCount++;var t=n.payload,a=t.id,r=t.price;e.ids.includes(a)?e.entities[a].itemCount++:h.addOne(e,n.payload),e.totalPrice+=r},changeItemCount:{reducer:function(e,n){var t=n.payload,a=t.itemId,r=t.itemCount,c=e.entities[a],i=c.itemCount-r;c.itemCount=r,e.cartCount-=i,e.totalPrice-=c.price*i},prepare:function(e,n){return{payload:{itemId:e,itemCount:n}}}},deleteItem:function(e,n){var t=n.payload,a=e.entities[t];h.removeOne(e,n.payload),e.cartCount-=a.itemCount,e.totalPrice-=a.price*a.itemCount},emptyCart:function(e){h.setAll(e,{}),e.cartCount=0,e.totalPrice=0}}}),O=v.reducer,j=h.getSelectors((function(e){return e.cart})),y=j.selectAll,k=j.selectById,C=j.selectIds,w=(j.selectTotal,v.actions),I=w.addToCart,N=w.changeItemCount,P=w.deleteItem,A=w.emptyCart,S=(Object(p.a)([y],(function(e){return e.map((function(e){return e.itemCount}))})),Object(p.a)([function(e){return e.cart.cartCount}],(function(e){return e}))),B=Object(p.a)([function(e){return e.cart.totalPrice}],(function(e){return e}));function T(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 10px 50px 10px 50px;\n\n  border-bottom: 2px solid black;\n\n  h1 {\n    font-size: 30px;\n  }\n\n  .header-right {\n    display: flex;\n    align-items: center;\n\n    button {\n      margin-right: 40px;\n\n      height: 30px;\n      width: 120px;\n\n      border-radius: 2px;\n      border: 1px solid black;\n\n      font-size: inherit;\n    }\n\n    h2 {\n      width: 100px;\n      font-weight: normal;\n    }\n  }\n"]);return T=function(){return e},e}var z=s.a.header(T()),V=function(){var e=Object(u.h)(),n=Object(d.c)((function(e){return S(e)}));return r.a.createElement("span",null,"/summary"===e.pathname?0:n)},M=function(){var e=Object(d.b)();return r.a.createElement(z,{onClick:function(n){n.target.id&&["products","cart"].includes(n.target.id)&&e(b(n.target.id))}},r.a.createElement("h1",null,r.a.createElement(o.b,{id:"products",to:"/"},"My simple shop")),r.a.createElement("div",{className:"header-right"},"function"===typeof HTMLDialogElement&&r.a.createElement("button",{onClick:function(){return document.getElementById("modal").showModal()}},"new product"),r.a.createElement(o.b,{id:"cart",to:"/cart"},r.a.createElement("h2",null,"Cart ",r.a.createElement(V,null)))))};function L(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n\n  padding-top: 20px;\n\n  width: 200px;\n\n  font-size: 18px;\n  line-height: 1.4em;\n  text-align: center;\n\n  border-right: 2px solid black;\n\n  .active {\n    box-shadow: 0 0 0 1px black;\n    background-color: #e9e9e9;\n  }\n"]);return L=function(){return e},e}var $,D=s.a.nav(L()),H=function(e){var n=e.id,t=e.to,a=e.content,c=Object(d.c)((function(e){return g(e,n)}));return r.a.createElement(o.b,{id:n,to:t,className:c?"active":""},a)},J=function(){var e=Object(d.b)(),n=Object(u.g)();Object(a.useEffect)((function(){"/"!==n.location.pathname&&n.push("/")}),[n]);return r.a.createElement(D,{onClick:function(n){"A"===n.target.tagName&&e(b(n.target.id))}},r.a.createElement(H,{id:"products",to:"/",content:"Products"}),r.a.createElement(H,{id:"cart",to:"/cart",content:"Cart"}))},W=t(43),F=t(19),R=t(24),U=t.n(R),Y=t(41),q=t(42),G=t.n(q),K=Object(m.b)("products/fetchProducts",Object(Y.a)(U.a.mark((function e(){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat("/simple-shop","/products.json"));case 2:return n=e.sent,e.abrupt("return",Object.values(n.data).map((function(e){return e.id=Object(m.e)(),e.hidden=e.available<=0,e})));case 4:case"end":return e.stop()}}),e)})))),Q=Object(m.c)({sortComparer:function(e,n){return e.name.localeCompare(n.name)}}),X=Q.getInitialState({status:"idle",error:null,sortBy:"name",isAscending:!0,isOutVisible:!1}),Z=Object(m.d)({name:"products",initialState:X,reducers:{addProduct:{reducer:Q.addOne,prepare:function(e,n,t){return{payload:{id:Object(m.e)(),name:e,price:n,available:t}}}},changeSortBy:{reducer:function(e,n){var t=n.payload.sortBy;e.sortBy=t},prepare:function(e){return{payload:{sortBy:e}}}},changeIsAscending:{reducer:function(e,n){var t=n.payload.isAscending;e.isAscending=t},prepare:function(e){return{payload:{isAscending:e}}}},sortProducts:function(e){var n;switch(e.sortBy){case"name":n=function(e,n){return e.name.localeCompare(n.name)};break;case"price":n=function(e,n){return+e.price-+n.price};break;case"availability":n=function(e,n){return+e.available-+n.available}}var t=function(t,a){return n(e.entities[t],e.entities[a])},a=e.isAscending?function(e,n){return t(e,n)}:function(e,n){return t(n,e)};e.ids.sort(a)},reverseOrder:function(e){e.ids.reverse()},changeIsOutVisible:function(e){e.isOutVisible=!e.isOutVisible},buyCart:{reducer:function(e,n){n.payload.forEach((function(n){e.entities[n.id].available-=n.itemCount}))}}},extraReducers:($={},Object(F.a)($,K.pending,(function(e){e.status="loading"})),Object(F.a)($,K.fulfilled,(function(e,n){e.status="succeeded",Q.upsertMany(e,n.payload)})),Object(F.a)($,K.rejected,(function(e,n){e.status="failed",e.error=n.error.message})),$)}),_=Z.actions,ee=_.addProduct,ne=_.buyCart,te=_.changeIsOutVisible,ae=_.sortProducts,re=_.reverseOrder,ce=_.changeSortBy,ie=_.changeIsAscending,le=Z.reducer,oe=Q.getSelectors((function(e){return e.products})),ue=oe.selectById,se=oe.selectIds,de=Object(p.a)((function(e){return e.products.isOutVisible}),(function(e){return e})),me=Object(p.a)((function(e,n){return ue(e,n)}),(function(e){return e.available})),pe=Object(p.a)([function(e,n){return me(e,n)},de],(function(e,n){return e<=0&&!n})),fe=Object(p.a)([function(e){return e.products.isAscending}],(function(e){return e})),be=Object(p.a)([function(e){return e.products.sortBy}],(function(e){return e}));function xe(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  flex-grow: 1;\n\n  margin-bottom: 20px;\n  padding: 0 10px;\n  height: 40px;\n\n  border: 1px solid #8f8f8f;\n  border-radius: 2px;\n\n  .carrItem-left {\n    display: flex;\n    align-items: center;\n  }\n\n  h4 {\n    padding: 0;\n    margin-right: 10px;\n  }\n\n  input {\n    font-size: inherit;\n    text-align: right;\n\n    width: 50px;\n    margin: 0 20px 0 15px;\n\n    border: 1px solid black;\n    border-radius: 5px;\n\n    &::-webkit-inner-spin-button,\n    &::-webkit-outer-spin-button {\n      opacity: 1;\n    }\n\n    &:focus {\n      outline: transparent;\n    }\n  }\n\n  button {\n    margin: 0 0 2px 15px;\n    padding: 0 3px 1px 3px;\n\n    font-size: 12px;\n\n    border-radius: 15px;\n  }\n"]);return xe=function(){return e},e}var ge=s.a.div(xe()),he=Object(a.memo)((function(e){var n=e.itemId,t=Object(d.b)(),c=Object(d.c)((function(e){return me(e,n)})),i=Object(d.c)((function(e){return k(e,n)})),l=Object(a.useState)("hidden"),o=Object(W.a)(l,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){var e;return i.itemCount===c&&""===u&&(e=setTimeout((function(){s("hidden")}),2e3)),function(){return clearTimeout(e)}}),[i.itemCount,c,u]),r.a.createElement(ge,null,r.a.createElement("div",{className:"carrItem-left"},r.a.createElement("h4",null,i.name),r.a.createElement("span",null,"(",i.price*i.itemCount,"$)")),r.a.createElement("div",null,r.a.createElement("span",{className:u},r.a.createElement("i",null,"no more in stock")),r.a.createElement("input",{type:"number",onInput:function(e){var a=e.target.value;""!==a?((!a||a<=0)&&(a=1),a>c&&(a=c,s("")),e.target.value=a,t(N(n,a))):e.target.value=""},defaultValue:i.itemCount}),r.a.createElement("button",{onClick:function(){return t(P(n))}},"\u2716")))}));function Ee(){var e=Object(l.a)(["\n  margin-top: 20px;\n\n  h2 {\n    font-weight: normal;\n    margin-bottom: 20px;\n  }\n\n  .button-container {\n    display: flex;\n    justify-content: center;\n\n    button {\n      font-size: inherit;\n\n      padding: 6px 20px 5px 20px;\n\n      border-radius: 2px;\n    }\n  }\n"]);return Ee=function(){return e},e}var ve=s.a.section(Ee()),Oe=function(){var e=Object(d.c)(B);return r.a.createElement("span",null,e,"$")},je=function(){var e=Object(d.c)(C),n=e.map((function(e){return r.a.createElement(he,{key:e,itemId:e})}));return r.a.createElement(ve,null,0===e.length?r.a.createElement("span",null,"Your cart is empty"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Total price: ",r.a.createElement(Oe,null)),n,r.a.createElement("div",{className:"button-container"},r.a.createElement(o.b,{to:"/summary"},r.a.createElement("button",null,"Next")))))};function ye(){var e=Object(l.a)(["\n  border: 1px solid black;\n  border-collapse: collapse;\n\n  th,\n  td {\n    border: 1px solid black;\n\n    padding: 5px 10px;\n\n    text-align: center;\n  }\n\n  td:first-child {\n    text-align: left;\n  }\n\n  th {\n    background-color: #e9e9e9;\n  }\n"]);return ye=function(){return e},e}function ke(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  h2,\n  h3 {\n    margin: 0;\n  }\n\n  .congratulations {\n    margin: 25px 0 30px 0;\n\n    text-align: center;\n\n    h3 {\n      margin-top: 5px;\n      font-weight: normal;\n    }\n  }\n\n  .total {\n    display: flex;\n    justify-content: space-around;\n\n    margin-top: 25px;\n\n    h3 span {\n      font-weight: normal;\n    }\n  }\n"]);return ke=function(){return e},e}var Ce=s.a.article(ke()),we=s.a.table(ye()),Ie=function(){var e=Object(d.b)(),n=Object(d.c)(y),t=Object(d.c)((function(e){return B(e)})),c=Object(d.c)((function(e){return S(e)}));return Object(a.useEffect)((function(){return function(){e(ne(n)),e(A())}}),[e,n]),r.a.createElement(Ce,null,r.a.createElement("section",{className:"congratulations"},r.a.createElement("h2",null,"Successful shopping!"),r.a.createElement("h3",null,"Thank you")),r.a.createElement("section",null,r.a.createElement(we,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Sum"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.itemCount),r.a.createElement("td",null,e.price*e.itemCount))})))),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Items: ",r.a.createElement("span",null,c," items")),r.a.createElement("h3",null,"Cost: ",r.a.createElement("span",null,t,"$")))))};function Ne(){var e=Object(l.a)(["\n  border: 1px solid black;\n  border-radius: 10px;\n\n  padding: 0 30px 30px 30px;\n\n  h3 {\n    text-align: center;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    margin-top: 10px;\n\n    .input-block {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n\n      input {\n        width: 170px;\n\n        margin: 5px 0 10px 10px;\n        padding: 3px 0 3px 5px;\n\n        font-size: inherit;\n      }\n\n      label {\n        padding-bottom: 5px;\n      }\n    }\n\n    .buttons {\n      display: flex;\n      justify-content: space-around;\n\n      margin-top: 15px;\n\n      button {\n        width: 80px;\n        height: 30px;\n\n        border-radius: 10px;\n\n        font-size: inherit;\n      }\n    }\n  }\n"]);return Ne=function(){return e},e}var Pe=s.a.dialog(Ne()),Ae=function(){var e=Object(d.b)(),n=Object(a.useCallback)((function(n){var t=n.target;if("BUTTON"===t.tagName){var a=n.currentTarget,r=a.elements;if("submit"===t.name){var c=[r.name.value,+r.price.value,+r.available.value];e(ee(c[0],c[1],c[2])),e(ae())}a.reset()}}),[e]);return r.a.createElement(Pe,{id:"modal"},r.a.createElement("h3",null,"Create New Product"),r.a.createElement("form",{method:"dialog",onClick:n},r.a.createElement("div",{className:"input-block"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Apple iPhone",minLength:"2",maxLength:"60",autoComplete:"off"})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",null,"Price:"),r.a.createElement("input",{type:"number",name:"price",placeholder:"500",min:"0",max:"10000000",autoComplete:"off"})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",null,"Available:"),r.a.createElement("input",{type:"number",name:"available",placeholder:"40",min:"0",max:"100000",autoComplete:"off"})),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{name:"submit"},"Submit"),r.a.createElement("button",{name:"cancel"},"Cancel"))))};function Se(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 10px;\n\n  button {\n    font-size: inherit;\n    padding: 3px 15px;\n    border-radius: 10px;\n  }\n\n  .all-in-cart {\n    padding-top: 3px;\n    font-style: italic;\n  }\n"]);return Se=function(){return e},e}function Be(){var e=Object(l.a)(["\n  padding: 15px 10px;\n  margin: 10px;\n\n  border: 1px solid black;\n\n  width: 150px;\n  height: 110px;\n\n  line-height: 1.4em;\n\n  h3 {\n    margin: 0 0 8px 0;\n  }\n\n  .in-stock {\n    color: #008000;\n  }\n\n  .few-in-stock {\n    color: #ddb059;\n  }\n\n  .out-of-stock {\n    color: red;\n  }\n"]);return Be=function(){return e},e}var Te=s.a.div(Be()),ze=s.a.div(Se()),Ve=Object(a.memo)((function(e){var n=e.productId,t=Object(d.b)(),a=Object(d.c)((function(e){return ue(e,n)})),c=Object(d.c)((function(e){return k(e,n)})),i=Object(d.c)((function(e){return pe(e,n)})),l=a.available,o=l>0,u=l<5,s=c&&c.itemCount>=l,m={id:a.id,name:a.name,price:a.price,itemCount:1};return r.a.createElement(Te,{className:i?"hidden":""},r.a.createElement("h3",null,a.name),r.a.createElement("div",null,"Price: ",r.a.createElement("i",null,a.price)),r.a.createElement("div",null,o?r.a.createElement("span",{title:"".concat(l," left")},u?r.a.createElement("span",{className:"few-in-stock"},"A few left"):r.a.createElement("span",{className:"in-stock"},"In stock")):r.a.createElement("span",{className:"out-of-stock"},"Out of stock")),r.a.createElement(ze,null,s?r.a.createElement("span",{className:"all-in-cart"},"all in cart"):r.a.createElement("button",{disabled:!o,onClick:function(){return t(I(m))}},"add to cart")))}));function Me(){var e=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Me=function(){return e},e}var Le=s.a.section(Me()),$e=function(){var e=Object(d.b)(),n=Object(d.c)(se),t=Object(d.c)((function(e){return e.products.status})),c=Object(d.c)((function(e){return e.products.error}));Object(a.useEffect)((function(){"idle"===t&&(e(K()),e(ae()))}),[t,e]);return r.a.createElement(Le,null,function(){switch(t){case"loading":return r.a.createElement("div",null,"Loading...");case"succeeded":return n.map((function(e){return r.a.createElement(Ve,{key:e,productId:e})}));case"failed":return r.a.createElement("div",null,c)}}())};function De(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n\n  margin: 15px 0 15px 10px;\n\n  select {\n    font-size: inherit;\n    font-family: inherit;\n\n    height: 30px;\n    width: 110px;\n\n    border-radius: 0;\n\n    &:focus {\n      outline: transparent;\n    }\n  }\n\n  button {\n    margin-left: 5px;\n    padding-bottom: 3px;\n\n    background-color: #e9e7e7;\n\n    font-size: inherit;\n\n    height: 30px;\n    width: 30px;\n\n    border: 1px solid black;\n  }\n\n  .checkbox-container {\n    display: flex;\n    align-items: center;\n\n    margin: 3px 0 0 25px;\n\n    input {\n      margin-right: 10px;\n    }\n  }\n"]);return De=function(){return e},e}var He=s.a.div(De()),Je=function(){var e=Object(d.b)(),n=Object(d.c)(be);return r.a.createElement("select",{onChange:function(n){e(ce(n.target.value)),e(ae())},defaultValue:n},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"price"},"Price"),r.a.createElement("option",{value:"availability"},"Available"))},We=function(){var e=Object(d.b)(),n=Object(d.c)(fe);return r.a.createElement("button",{onClick:function(){e(ie(!n)),e(re())}},n?"\u2191":"\u2193")},Fe=function(){var e=Object(d.b)(),n=Object(d.c)(de);return r.a.createElement("div",{className:"checkbox-container"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e(te())},defaultChecked:n}),r.a.createElement("label",null,"Show non-available"))},Re=function(){return r.a.createElement(He,null,r.a.createElement(Je,null),r.a.createElement(We,null),r.a.createElement(Fe,null))};function Ue(){var e=Object(l.a)(["\n  position: absolute;\n\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 100%;\n\n  main {\n    display: flex;\n    flex-grow: 1;\n\n    article {\n      flex-grow: 1;\n      padding: 0 25px 0 20px;\n    }\n  }\n"]);return Ue=function(){return e},e}var Ye=s.a.div(Ue());var qe=function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement(Ye,null,"function"===typeof HTMLDialogElement&&r.a.createElement(Ae,null),r.a.createElement(M,null),r.a.createElement("main",null,r.a.createElement(J,null),r.a.createElement("article",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(Re,null),r.a.createElement($e,null)),r.a.createElement(u.b,{exact:!0,path:"/cart"},r.a.createElement(je,null)),r.a.createElement(u.b,{exact:!0,path:"/summary"},r.a.createElement(Ie,null)),r.a.createElement(u.a,{to:"/"}))))))},Ge=Object(m.a)({reducer:{products:le,navigation:x,cart:O}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Ge},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.79297cff.chunk.js.map