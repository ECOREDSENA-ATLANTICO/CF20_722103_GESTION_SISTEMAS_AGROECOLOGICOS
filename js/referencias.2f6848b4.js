(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-3913883c"],{"13aa":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},i=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},s=r,o=(e("196e"),e("2877")),c=Object(o["a"])(s,a,i,!1,null,null,null);n["default"]=c.exports},"196e":function(t,n,e){"use strict";e("a377")},"64ef":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return e("div",{key:n.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=e("13aa"),s=e("ecc5"),o={name:"Referencias",components:{BannerInterno:r["default"]},mixins:[s["a"]],computed:{referenciasData(){return this.$config.referencias},orderedData(){const t=[...this.referenciasData].sort((t,n)=>{const e=this.quitarAcentos(t.referencia.split(" ")[0].toLowerCase()),a=this.quitarAcentos(n.referencia.split(" ")[0].toLowerCase());return e<a?-1:e>a?1:0});return t}}},c=o,l=(e("6fa0"),e("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);n["default"]=u.exports},"6fa0":function(t,n,e){"use strict";e("ea10")},a377:function(t,n,e){},ea10:function(t,n,e){}}]);
//# sourceMappingURL=referencias.2f6848b4.js.map