(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{42:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var a,c=i(0),n=i(1),r=i.n(n),s=i(21),o=i.n(s),l=i(13),u=i(5),d=i(31),j=i(9),b=i(6),p=i.p+"static/media/pizza-logo.56ac8703.svg",O=i(16),h=i(17),m=i(7),z={POPULAR:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",PRICE:"\u0446\u0435\u043d\u0435",ALPHABET:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"},f=z.POPULAR,_="\u0412\u0441\u0435",v={isSortMenuOpen:!1,activeSortType:f,activePizzaType:_,cart:[]},y="TOGGLE_SORT_MENU",x="CHANGE_SORT_TYPE",g="CHANGE_PIZZA_TYPE",N="RESET_SORT_MENU",A="RESET_FILTERS",T=function(){return{type:y}},C=function(e){return{type:x,payload:e}},P=function(e){return{type:g,payload:e}},R=function(){return{type:N}},I=function(){return{type:A}},S=i(32),E={cart:[]},q="ADD_TO_CART",k="CHANGE_QUANTITY",w="CLEAR_CART",M="DELETE_ITEM",D="INC_QUANTITY",L="DEC_QUANTITY",Q=function(e){return{type:q,payload:e}},U=function(){return{type:w}},H=function(e){return{type:M,payload:e}},V=function(e){return{type:D,payload:e}},F=function(e){return{type:L,payload:e}},G=i(3),Z={pizzas:[{typeId:Object(G.a)(),type:"\u041c\u044f\u0441\u043d\u044b\u0435",isHot:!1,isVegan:!1,isNew:!1,title:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043f\u0438\u0446\u0446\u0430",structure:"\u041c\u044f\u0441\u043d\u043e\u0439 \u0441\u043e\u0443\u0441 \u0431\u043e\u043b\u043e\u043d\u044c\u0435\u0437\u0435, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a, \u0441\u043e\u043b\u0435\u043d\u044b\u0435 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0438, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u043e\u0443\u0441 \u0431\u0443\u0440\u0433\u0435\u0440",image:"https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_584x584.jpeg",options:[{dough:"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435",isAvailableDough:!1,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:300,isAvailable:!1},{id:Object(G.a)(),size:30,price:400,isAvailable:!1},{id:Object(G.a)(),size:40,price:500,isAvailable:!0}]},{dough:"\u0422\u043e\u043d\u043a\u043e\u0435",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:500,isAvailable:!1},{id:Object(G.a)(),size:30,price:600,isAvailable:!0},{id:Object(G.a)(),size:40,price:800,isAvailable:!0}]}]},{typeId:Object(G.a)(),type:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435",isHot:!1,isVegan:!0,isNew:!1,title:"\u0421\u044b\u0440\u043d\u0430\u044f",structure:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0440\u0446\u0438\u044f \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u044b, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441",image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f8ea1b5e-671d-4460-9e3d-ce720b95a1ce.jpg",options:[{dough:"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:200,isAvailable:!0},{id:Object(G.a)(),size:30,price:300,isAvailable:!0},{id:Object(G.a)(),size:40,price:400,isAvailable:!0}]},{dough:"\u0422\u043e\u043d\u043a\u043e\u0435",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:550,isAvailable:!0},{id:Object(G.a)(),size:30,price:650,isAvailable:!0},{id:Object(G.a)(),size:40,price:850,isAvailable:!0},{id:Object(G.a)(),size:44,price:990,isAvailable:!0}]},{dough:"\u0411\u043e\u0440\u0442\u0438\u043a\u0438",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:35,price:800,isAvailable:!0},{id:Object(G.a)(),size:40,price:1100,isAvailable:!1}]}]},{typeId:Object(G.a)(),type:"\u041c\u044f\u0441\u043d\u044b\u0435",isHot:!0,isVegan:!1,isNew:!1,title:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f",structure:"\u041e\u0441\u0442\u0440\u044b\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u0441\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0446, \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a, \n    \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043e\u0441\u0442\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0446 \u0445\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u043e\u0443\u0441 \u0441\u0430\u043b\u044c\u0441\u0430",image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a1f7da39-debe-4a2e-bfc9-82d747f5aeec.jpg",options:[{dough:"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:200,isAvailable:!0},{id:Object(G.a)(),size:30,price:300,isAvailable:!0},{id:Object(G.a)(),size:40,price:400,isAvailable:!0},{id:Object(G.a)(),size:44,price:1050,isAvailable:!0}]},{dough:"\u0422\u043e\u043d\u043a\u043e\u0435",isAvailableDough:!1,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:550,isAvailable:!0},{id:Object(G.a)(),size:30,price:650,isAvailable:!0},{id:Object(G.a)(),size:40,price:850,isAvailable:!0}]}]},{typeId:Object(G.a)(),type:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435",isHot:!1,isVegan:!0,isNew:!0,title:"\u041f\u0438\u0446\u0446\u0430-\u043f\u0438\u0440\u043e\u0433",structure:"\u0410\u043d\u0430\u043d\u0430\u0441\u044b, \u0431\u0440\u0443\u0441\u043d\u0438\u043a\u0430, \u043c\u043e\u043b\u043e\u043a\u043e \u0441\u0433\u0443\u0449\u0435\u043d\u043d\u043e\u0435",image:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/acf387b2-273b-41ab-82c8-d648ae4793cd.jpg",options:[{dough:"\u0422\u043e\u043d\u043a\u043e\u0435",isAvailableDough:!0,id:Object(G.a)(),conditions:[{id:Object(G.a)(),size:26,price:350,isAvailable:!0},{id:Object(G.a)(),size:30,price:550,isAvailable:!0}]}]}]},B="LOAD_PIZZAS",Y="APP_STATE",J="DATA",K="CART",W=Object(l.combineReducers)((a={},Object(h.a)(a,Y,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)(Object(m.a)({},e),{},{isSortMenuOpen:!e.isSortMenuOpen});case x:return Object(m.a)(Object(m.a)({},e),{},{activeSortType:t.payload});case g:return Object(m.a)(Object(m.a)({},e),{},{activePizzaType:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{isSortMenuOpen:!1});case A:return Object(m.a)(Object(m.a)({},e),{},{isSortMenuOpen:!1,activePizzaType:_,activeSortType:f});default:return e}})),Object(h.a)(a,J,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(m.a)(Object(m.a)({},e),{},{pizzas:t.payload});default:return e}})),Object(h.a)(a,K,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return Object(S.a)(e,(function(e){if(t.type===q&&e.cart.push(t.payload),t.type===k){var i=t.payload;e.cart.map((function(e){return e.id===i.id?(e.quantity+=1,e):e}))}if(t.type===w&&(e.cart=[]),t.type===M){var a=t.payload;e.cart=e.cart.filter((function(e){return e.id!==a}))}if(t.type===D){var c=t.payload;e.cart.map((function(e){return e.id===c?(e.quantity+=1,e):e}))}if(t.type===L){var n=t.payload;e.cart.map((function(t,i){return t.id===n?1===t.quantity?e.cart.splice(i,1):(t.quantity-=1,t):t}))}}))})),a)),X=function(e){return e[K].cart},$=Object(O.a)(X,(function(e){return e?e.reduce((function(e,t){return t.quantity+e}),0):0})),ee=Object(O.a)(X,(function(e){return e?e.reduce((function(e,t){return e+t.price*t.quantity}),0):0})),te=(i(42),function(e){var t=e.sumQuantityInCart,i=e.sumPriceInCart,a=e.isMainPage;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)(j.b,{to:"/",className:"header__logo",children:[Object(c.jsx)("div",{className:"header__img-wrapper",children:Object(c.jsx)("img",{src:p,width:"38",height:"38",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0420\u0435\u0430\u043a\u0442 \u041f\u0438\u0446\u0446\u044b"})}),Object(c.jsxs)("div",{className:"header__logo-text",children:[Object(c.jsx)("h1",{className:"header__title",children:"React Pizza"}),Object(c.jsx)("p",{className:"header__subtitle",children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432 \u043c\u0438\u0440\u0435"})]})]}),a&&Object(c.jsxs)(j.b,{to:"/cart",className:"header__order",children:[Object(c.jsxs)("p",{className:"header__price",children:[i," \u20bd"]}),Object(c.jsx)("p",{className:"header__quantity",children:t})]})]})});te.defaultProps={isMainPage:!1};var ie=Object(l.compose)(Object(u.b)((function(e){return{sumQuantityInCart:$(e),sumPriceInCart:ee(e)}})),n.memo)(te),ae=i(15),ce=i.n(ae),ne=function(e){return e[Y].activeSortType},re=function(e){return e[Y].isSortMenuOpen},se=function(){return z},oe=function(e){return e[Y].activePizzaType},le=i(14),ue=function(e){var t=e.options.filter((function(e){return!0===e.isAvailableDough})).map((function(e){var t=e.conditions.filter((function(e){return!0===e.isAvailable}));return Object(m.a)(Object(m.a)({},e),{},{conditions:t})}));return Object(m.a)(Object(m.a)({},e),{},{options:t})},de=function(e){return e[J].pizzas},je=Object(O.a)(de,(function(e){var t=e.map((function(e){return e.type})).sort();return["\u0412\u0441\u0435"].concat(Object(le.a)(new Set(t)))})),be=Object(O.a)([de,oe,ne],(function(e,t,i){var a=e.filter((function(e){return e.type===t||"\u0412\u0441\u0435"===t}));switch(i){case z.POPULAR:return a;case z.PRICE:return a.slice().sort((function(e,t){var i=ue(e),a=ue(t),c=i.options[0].conditions[0].price,n=a.options[0].conditions[0].price;return c>n?1:c<n?-1:0}));case z.ALPHABET:return a.slice().sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0}));default:return a}})),pe=(i(44),Object(u.b)((function(e){return{activePizzaType:oe(e),typesFilter:je(e)}}),(function(e){return{onChangePizzaType:function(t){e(P(t)),e(R())}}}))((function(e){var t=e.onChangePizzaType,i=e.activePizzaType,a=e.typesFilter,n=function(e){e.target.innerText!==i&&t(e.target.innerText)};return Object(c.jsx)("nav",{className:"section-pizza__nav nav",children:Object(c.jsx)("ul",{className:"nav__list",children:a.map((function(e){var t=ce()("nav__item",{"nav__item--active":e===i});return Object(c.jsx)("li",{className:t,children:Object(c.jsx)(j.b,{className:"nav__link",to:"/",onClick:n,children:e})},e)}))})})}))),Oe=(i(45),Object(u.b)((function(e){return{isSortMenuOpen:re(e),activeSortType:ne(e),sortType:se()}}),(function(e){return{onToggledSortMenu:function(){e(T())},onResetSortMenu:function(){e(R())},onChageSortType:function(t){e(C(t)),e(T())}}}))((function(e){var t=e.isSortMenuOpen,i=e.onToggledSortMenu,a=e.sortType,r=e.activeSortType,s=e.onChageSortType,o=e.onResetSortMenu,l=Object(n.useRef)(null),u=Object(n.useCallback)((function(e){(e.path||e.composedPath&&e.composedPath()).includes(l.current)||o()}),[o]);return Object(n.useEffect)((function(){return document.body.addEventListener("click",u),function(){document.body.removeEventListener("click",u)}}),[u,t]),Object(c.jsxs)("div",{ref:l,className:"section-pizza__sorting sorting",children:[Object(c.jsx)("span",{className:"sorting__caption",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(c.jsx)("span",{onClick:i,onKeyDown:function(e){"Enter"===e.code&&i()},className:"sorting__type",tabIndex:"0",role:"button",children:r}),t&&Object(c.jsx)("ul",{className:"sorting__options",children:Object.values(a).map((function(e){return Object(c.jsx)("li",{className:ce()("sorting__option",{"sorting__option--active":r===e}),tabIndex:"-1",children:Object(c.jsx)(j.b,{className:"sorting__link",to:"/",onClick:function(){return s(e)},children:e})},e)}))})]})}))),he=(i(46),i(2)),me=i.n(he),ze=me.a.shape({id:me.a.string.isRequired,typeId:me.a.string.isRequired,type:me.a.string,title:me.a.string,size:me.a.number.isRequired,price:me.a.number.isRequired,quantity:me.a.number.isRequired,image:me.a.string.isRequired,dough:me.a.string.isRequired}),fe=(me.a.arrayOf(ze),me.a.shape({typeId:me.a.string.isRequired,type:me.a.string.isRequired,title:me.a.string.isRequired,image:me.a.string.isRequired,isHot:me.a.bool.isRequired,isVegan:me.a.bool.isRequired,isNew:me.a.bool.isRequired,structure:me.a.string.isRequired,options:me.a.arrayOf(me.a.shape({dough:me.a.string.isRequired,id:me.a.string.isRequired,conditions:me.a.arrayOf(me.a.shape({id:me.a.string.isRequired,size:me.a.number.isRequired,price:me.a.number.isRequired}))}))}),me.a.oneOf(Object(le.a)(Object.values(z))).isRequired,Object(u.b)((function(e){return{activePizzaType:oe(e),activeSortType:ne(e),sortType:se()}}),(function(e){return{onResetFilters:function(){e(I())}}}))((function(e){var t=e.activePizzaType,i=e.activeSortType,a=e.sortType,n=e.onResetFilters,r="\u0412\u0441\u0435"!==t||i!==a.POPULAR;return Object(c.jsxs)("section",{className:"section-pizza",children:[Object(c.jsx)("h2",{className:"visually-hidden",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0438\u0434 \u043f\u0438\u0446\u0446\u044b"}),Object(c.jsxs)("div",{className:"section-pizza__wrapper",children:[Object(c.jsx)(pe,{}),Object(c.jsx)(Oe,{})]}),r&&Object(c.jsx)("button",{className:"section-pizza__reset-btn",type:"button",onClick:n,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443"})]})}))),_e=i(20),ve=(i(47),Object(l.compose)(Object(u.b)((function(e){return{cart:X(e)}}),(function(e){return{onAddToCart:function(t){e(Q(t))},onIncQuantity:function(t){e(V(t))}}})),n.memo)((function(e){var t=e.pizza,i=e.onAddToCart,a=e.cart,r=e.onIncQuantity,s=t.typeId,o=t.title,l=t.type,u=t.image,d=t.options,j=t.isHot,b=t.isVegan,p=t.isNew,O=t.structure,h=function(e){return e.options.filter((function(e){return!0===e.isAvailableDough})).map((function(e){return e.dough}))}(t),m=Object(n.useState)(h[0]),z=Object(_e.a)(m,2),f=z[0],_=z[1],v=d.find((function(e){return e.dough===f})).conditions,y=function(e){var t=function(e){return e.filter((function(e){return!0===e.isAvailable}))}(e).map((function(e){return e.size}));return Math.min.apply(Math,Object(le.a)(t))}(v),x=Object(n.useState)(y),g=Object(_e.a)(x,2),N=g[0],A=g[1],T=v.find((function(e){return e.size===N}))||{price:0,id:0},C=T.price,P=T.id,R=Object(n.useState)(0),I=Object(_e.a)(R,2),S=I[0],E=I[1];Object(n.useEffect)((function(){A(y)}),[f,y]);var q=Object(n.useState)(!1),k=Object(_e.a)(q,2),w=k[0],M=k[1],D=function(){M(!0)},L=function(){M(!1)},Q=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=Q.current;return e.addEventListener("mouseover",D),e.addEventListener("mouseout",L),function(){e.removeEventListener("mouseover",D),e.removeEventListener("mouseout",L)}}),[]);var U=function(e){var t=e.map((function(e,t){return e.isAvailable?t:999}));return Math.min.apply(Math,Object(le.a)(t))}(v),H=function(e){var t=e.map((function(e,t){return e.isAvailableDough?t:999}));return Math.min.apply(Math,Object(le.a)(t))}(d),V=ce()("pizza-list__item pizza-card",{"pizza-card--new":p,"pizza-card--popup-active":w}),F=ce()("pizza-card__title",{"pizza-card__title--hot":j,"pizza-card__title--vegan":b});return Object(c.jsxs)("article",{className:V,children:[Object(c.jsx)("div",{ref:Q,className:"pizza-card__img-wrapper",children:Object(c.jsx)("img",{src:u,width:"260",height:"260",alt:"\u041f\u0438\u0446\u0446\u0430 ".concat(o)})}),Object(c.jsx)("h3",{className:F,children:o}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:P,typeId:s,dough:f,image:u,type:l,title:o,size:N,price:C,quantity:1};-1===a.findIndex((function(e){return e.id===P}))?i(t):r(P),E((function(e){return e+1}))},className:"pizza-card__form",method:"#",children:[Object(c.jsxs)("div",{className:"pizza-card__controls",children:[Object(c.jsxs)("fieldset",{className:"pizza-card__field",children:[Object(c.jsx)("legend",{className:"visually-hidden",children:"\u0412\u0438\u0434 \u0442\u0435\u0441\u0442\u0430"}),d.map((function(e,t){var i=e.dough,a=e.id,n=e.isAvailableDough,r=t===H;return Object(c.jsxs)("p",{className:"pizza-card__input-wrapper",children:[Object(c.jsx)("input",{onChange:function(){return _(i)},className:"pizza-card__input visually-hidden",type:"radio",id:a,name:"dough",value:a,defaultChecked:r,disabled:!n}),Object(c.jsx)("label",{className:"pizza-card__label",htmlFor:a,children:i})]},"".concat(i,"-").concat(a))}))]}),Object(c.jsxs)("fieldset",{className:"pizza-card__field",children:[Object(c.jsx)("legend",{className:"visually-hidden",children:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0438\u0446\u0446\u044b"}),v.map((function(e,t){var i=e.size,a=e.isAvailable,n=t===U;return Object(c.jsxs)("p",{className:"pizza-card__input-wrapper",children:[Object(c.jsx)("input",{onChange:function(){A(i)},className:"pizza-card__input visually-hidden",id:"".concat(s,"-").concat(f,"-").concat(i),type:"radio",name:"size",value:i,defaultChecked:n,disabled:!a}),Object(c.jsx)("label",{className:"pizza-card__label",htmlFor:"".concat(s,"-").concat(f,"-").concat(i),children:"".concat(i," \u0441\u043c.")})]},"".concat(s,"-").concat(f,"-").concat(i))}))]})]}),Object(c.jsxs)("div",{className:"pizza-card__bottom",children:[Object(c.jsxs)("p",{className:"pizza-card__price",children:["\u043e\u0442 ",C," \u0420"]}),Object(c.jsxs)("button",{className:"pizza-card__button",type:"submit",children:[Object(c.jsxs)("svg",{className:"pizza-card__plus",width:"10",height:"10",viewBox:"0 0 10 10",children:[Object(c.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"currentColor"}),Object(c.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"currentColor"})]}),Object(c.jsx)("span",{className:"pizza-card__button-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(c.jsx)("span",{className:"pizza-card__quantity",children:S})]})]})]}),w&&Object(c.jsx)("div",{className:"pizza-card__popup-info",children:Object(c.jsxs)("p",{className:"pizza-card__structure",children:["\u0421\u043e\u0441\u0442\u0430\u0432: ",O.toLowerCase()]})})]})}))),ye=(i(48),Object(u.b)((function(e){return{activePizzaType:oe(e),filteredPizzas:be(e)}}))((function(e){var t=e.activePizzaType,i=e.filteredPizzas;return Object(c.jsxs)("section",{className:"pizza-list",children:[Object(c.jsxs)("h2",{className:"pizza-list__title",children:[t," \u043f\u0438\u0446\u0446\u044b"]}),Object(c.jsx)("ul",{className:"pizza-list__list",children:i.map((function(e){return Object(c.jsx)("li",{className:"pizza-list__item",children:Object(c.jsx)(ve,{pizza:e})},e.typeId)}))})]})}))),xe=(i(49),i(50),function(){return Object(c.jsx)("footer",{className:"page__footer footer",children:Object(c.jsxs)("div",{className:"footer__copyright",children:[Object(c.jsxs)("p",{className:"footer__label",children:["Design by:"," ",Object(c.jsx)("a",{className:"footer__link",href:"https://archakov.im/",target:"_blank",rel:"noreferrer",children:"Archakov Blog"})]}),Object(c.jsxs)("p",{className:"footer__label",children:["Developed by:"," ",Object(c.jsx)("a",{className:"footer__link",href:"https://github.com/maxorrs",target:"_blank",rel:"noreferrer",children:"Max Strokov"})]})]})})}),ge=function(){return Object(c.jsxs)("div",{className:"page page--yellow page--main",children:[Object(c.jsx)(ie,{isMainPage:!0}),Object(c.jsxs)("main",{children:[Object(c.jsx)(fe,{}),Object(c.jsx)(ye,{})]}),Object(c.jsx)(xe,{})]})},Ne=(i(51),Object(u.b)(null,(function(e){return{onDeleteItem:function(t){e(H(t))},onIncQuantity:function(t){e(V(t))},onDecQuantity:function(t){e(F(t))}}}))((function(e){var t=e.pizza,i=e.onDeleteItem,a=e.onIncQuantity,n=e.onDecQuantity,r=t.title,s=t.size,o=t.price,l=t.quantity,u=t.image,d=t.dough,j=t.id,b=l*o;return Object(c.jsxs)("section",{className:"cart-list__pizza-cart pizza-cart",children:[Object(c.jsxs)("div",{className:"pizza-cart__info",children:[Object(c.jsx)("div",{className:"pizza-cart__img-wrapper",children:Object(c.jsx)("img",{className:"pizza-cart__img",src:u,width:"80",height:"80",alt:"\u041f\u0438\u0446\u0446\u0430 ".concat(r)})}),Object(c.jsxs)("div",{className:"pizza-cart__name",children:[Object(c.jsx)("h3",{className:"pizza-cart__title",children:r}),Object(c.jsxs)("p",{className:"pizza-cart__subtitle",children:[d,", ",s," \u0441\u043c."]})]})]}),Object(c.jsxs)("div",{className:"pizza-cart__actions",children:[Object(c.jsx)("button",{className:"pizza-cart__action-btn pizza-cart__action-btn--dec",type:"button",onClick:function(){return n(j)},children:Object(c.jsx)("span",{className:"visually-hidden",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0434\u043d\u0443 \u043f\u0438\u0446\u0446\u0443 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"})}),Object(c.jsx)("p",{className:"pizza-cart__quantity",children:l}),Object(c.jsx)("button",{className:"pizza-cart__action-btn pizza-cart__action-btn--inc",type:"button",onClick:function(){return a(j)},children:Object(c.jsx)("span",{className:"visually-hidden",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043f\u0438\u0446\u0446\u0443 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]}),Object(c.jsxs)("p",{className:"pizza-cart__price",children:[b,"\u0420"]}),Object(c.jsx)("button",{className:"pizza-cart__action-btn pizza-cart__action-btn--delete",type:"button",onClick:function(){return i(j)},children:Object(c.jsx)("span",{className:"visually-hidden",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0438\u0446\u0446\u0443 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"})})]})}))),Ae=(i(52),Object(u.b)((function(e){return{cart:X(e)}}))((function(e){var t=e.cart;return Object(c.jsx)("ul",{className:"cart__cart-list cart-list",children:t.map((function(e){return Object(c.jsx)("li",{className:"cart-list__item",children:Object(c.jsx)(Ne,{pizza:e})},e.id)}))})}))),Te=(i(53),Object(u.b)((function(e){return{sumQuantityInCart:$(e),sumPriceInCart:ee(e)}}),(function(e){return{onClearCart:function(){e(U())}}}))((function(e){var t=e.sumQuantityInCart,i=e.sumPriceInCart,a=e.onClearCart;return Object(c.jsx)("section",{className:"cart",children:Object(c.jsx)("form",{className:"cart__form",action:"#",method:"GET",children:Object(c.jsxs)("div",{className:"cart__wrapper",children:[Object(c.jsxs)("div",{className:"cart__header",children:[Object(c.jsx)("h1",{className:"cart__title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(c.jsx)("button",{className:"cart__reset-btn",type:"button",onClick:a,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]}),Object(c.jsx)(Ae,{}),Object(c.jsxs)("div",{className:"cart__bottom",children:[Object(c.jsxs)("p",{className:"cart__total-quantity",children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(c.jsxs)("span",{children:[t," \u0448\u0442."]})]}),Object(c.jsxs)("p",{className:"cart__total-price",children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(c.jsxs)("span",{children:[i,"\u0420"]})]})]}),Object(c.jsxs)("div",{className:"cart__actions",children:[Object(c.jsx)(j.b,{className:"cart__back-btn",to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"}),Object(c.jsx)("button",{className:"cart__submit",type:"submit",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})]})]})})})}))),Ce=(i(54),function(){return Object(c.jsxs)("section",{className:"cart-empty",children:[Object(c.jsx)("h1",{className:"cart-empty__title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(c.jsx)("p",{className:"cart-empty__info",children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0435 \u043f\u0438\u0446\u0446\u0443. \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."}),Object(c.jsx)(j.b,{className:"cart-empty__link",to:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})}),Pe=(i(55),Object(u.b)((function(e){return{cart:X(e)}}))((function(e){var t=0===e.cart.length;return Object(c.jsxs)("div",{className:"page page--yellow page--cart",children:[Object(c.jsx)(ie,{}),t?Object(c.jsx)(Ce,{}):Object(c.jsx)(Te,{}),Object(c.jsx)(xe,{})]})}))),Re=(i(56),function(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",children:Object(c.jsx)(ge,{})}),Object(c.jsx)(b.a,{exact:!0,path:"/cart",children:Object(c.jsx)(Pe,{})}),Object(c.jsx)(b.a,{children:Object(c.jsx)("h1",{children:"404"})})]})})}),Ie=Object(l.createStore)(W,Object(d.composeWithDevTools)());o.a.render(Object(c.jsx)(u.a,{store:Ie,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Re,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.02227dee.chunk.js.map