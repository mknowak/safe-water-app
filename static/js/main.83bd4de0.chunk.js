(this["webpackJsonpwater-app"]=this["webpackJsonpwater-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(17),a(6)),u=a(1),l=a(2),s=a(4),d=a(3),p=a(5),m=(a(18),function(e){var t=e.product,a=t.text,n=t.id;return r.a.createElement("div",{className:"product"},r.a.createElement("p",null,r.a.createElement("span",null,a),r.a.createElement("button",{onClick:function(){return e.buy(n)}},"Kup produkt")))}),v=(a(19),function(e){var t=e.product,a=t.text,n=t.id;return r.a.createElement("div",{className:"product_in_cart"},r.a.createElement("p",null,r.a.createElement("span",null,a),r.a.createElement("button",{onClick:function(){return e.remove(n)}},"Anuluj")))}),y=(a(20),function(e){var t=e.products.filter((function(e){return!1===e.active})).map((function(e){return e}));console.log(t);var a=t.map((function(e){return e.production})),n=t.map((function(e){return e.eko})),o=t.map((function(e){return e.cansave}));console.log(a);var c=a.reduce((function(e,t){return e+t}),0),i=n.reduce((function(e,t){return e+t}),0),u=o.reduce((function(e,t){return e+t}),0);return r.a.createElement("section",{className:"waste"},r.a.createElement("div",{className:"sum_production"},r.a.createElement("h2",null,"Do produkcji zu\u017cyto: ",r.a.createElement("span",null,c," l"))),r.a.createElement("div",{className:"sum_production"},r.a.createElement("h2",null,"Ekologoczne zamienniki: ",r.a.createElement("span",null,i," l"))),r.a.createElement("div",{className:"save"},r.a.createElement("h2",null,"Mo\u017cesz oszcz\u0119dzi\u0107: ",r.a.createElement("strong",null,u," l"))),r.a.createElement("button",{className:"more"},r.a.createElement("a",{href:"https://mknowak.github.io/save-water-page/"},"Dowiedz si\u0119 wi\u0119cej")))}),f=(a(21),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={select:"all"},a.filterCategory=function(){var e=a.props.products;switch(a.state.select){case"all":return(e=e.filter((function(e){return!0===e.active}))).map((function(e){return r.a.createElement(m,{product:e,key:e.id,buy:a.props.buy})}));case"food":return(e=e.filter((function(e){return"food"===e.category&&!0===e.active}))).map((function(e){return r.a.createElement(m,{product:e,key:e.id,buy:a.props.buy})}));case"cloth":return(e=e.filter((function(e){return"cloth"===e.category&&!0===e.active}))).map((function(e){return r.a.createElement(m,{product:e,key:e.id,buy:a.props.buy})}));case"everyday":return(e=e.filter((function(e){return"everyday"===e.category&&!0===e.active}))).map((function(e){return r.a.createElement(m,{product:e,key:e.id,buy:a.props.buy})}));default:return"Nie ma takie kategorii"}},a.boughtProducts=function(){return a.props.products.filter((function(e){return!1===e.active})).map((function(e){return r.a.createElement(v,{key:e.id,product:e,remove:a.props.remove})}))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleCategoryFilter",value:function(e){this.setState({select:e})}},{key:"render",value:function(){return r.a.createElement("section",{className:"box"},r.a.createElement("section",{className:"list"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",{className:"button_holder"},r.a.createElement("button",{onClick:this.handleCategoryFilter.bind(this,"all")},"Wszystko"),r.a.createElement("button",{onClick:this.handleCategoryFilter.bind(this,"food")},"Produkty spo\u017cywcze"),r.a.createElement("button",{onClick:this.handleCategoryFilter.bind(this,"cloth")},"Ubrania"),r.a.createElement("button",{onClick:this.handleCategoryFilter.bind(this,"everyday")},"Codzienne")),r.a.createElement("div",{className:"product_list"},this.filterCategory())),r.a.createElement("div",{className:"right_side"},r.a.createElement("section",{className:"cart"},r.a.createElement("h2",null,"Tw\xf3j koszyk"),r.a.createElement("div",{className:"cart_list"},this.boughtProducts())),r.a.createElement(y,{wasted:this.props.wasted,products:this.props.products})))}}]),t}(n.Component)),h=a(11),k=(a(24),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={select:h.all,products:[{id:0,text:"Butelka wody 1.5l",category:"everyday",production:7.5,eko:1.5,cansave:6,active:!0},{id:1,text:"Mi\u0119so wo\u0142owe 1kg",category:"food",production:15415,eko:322,cansave:15093,active:!0},{id:2,text:"Mi\u0119so wieprzowe 1kg",category:"food",production:5988,eko:322,cansave:5666,active:!0},{id:3,text:"Mi\u0119so z kurczaka 1kg",category:"food",production:4325,eko:322,cansave:4003,active:!0},{id:4,text:"Ksi\u0105\u017cka ok. 400 stron",category:"everyday",production:125,eko:.6,cansave:124.4,active:!0},{id:5,text:"Para jeans\xf3w",category:"cloth",production:11e3,eko:5500,cansave:5500,active:!0},{id:6,text:"Bawe\u0142niania koszulka",category:"cloth",production:2500,eko:1250,cansave:1250,active:!0},{id:7,text:"Plastikowa torba na zakupy",category:"everyday",production:.8,eko:.2,cansave:.6,active:!0},{id:8,text:"Pielucha jednorazowa",category:"everyday",production:545,eko:1,cansave:544,active:!0}]},a.buyProduct=function(e){var t=Object(i.a)(a.state.products);t.forEach((function(t){t.id===e&&(t.active=!1)})),a.setState({products:t})},a.removeProduct=function(e){var t=Object(i.a)(a.state.products);t.forEach((function(t){t.id===e&&(t.active=!0)})),a.setState({products:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement("h1",null," Save water! ")),r.a.createElement(f,{products:this.state.products,buy:this.buyProduct,remove:this.removeProduct}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.83bd4de0.chunk.js.map