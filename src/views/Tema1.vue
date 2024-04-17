<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Poscosecha
    

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema1/img_1.svg', alt='')
      .col-lg-8(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.m-0 La poscosecha es el manejo que se le da al producto desde su cosecha hasta su comercialización, ya sea para consumir en fresco o procesado agroindustrialmente, el cual incluye una serie de etapas y operaciones con distintas finalidades como son de acondicionamiento en las que está la recepción, separación, limpieza, selección y clasificación, además de actividades de desinfección, empaque, embalaje, transporte y almacenamiento que pueden ser realizadas de forma parcial o totalmente y su orden varía de acuerdo a cada producto.
        
        p Siendo un proceso de vital importancia y requerido para disminuir las pérdidas de producción que a su vez generan pérdidas económicas, debido a que los productos son susceptibles al deterioro por su fisiología, por los daños que puedan ocasionar en la cosecha y por la inapropiada manipulación o nulo manejo poscosecha. Por tanto, estas actividades de poscosecha permiten acondicionar el producto, mejorar su presentación e higiene y conservar su calidad nutricional, lo que favorece y facilita la comercialización e incrementa la obtención de buenos precios y ganancias durante el mercadeo.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
