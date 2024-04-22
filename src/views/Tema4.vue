<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Etiquetado
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema4/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El etiquetado es un proceso que va de la mano con el empaque y embalaje, ya que consiste en rotularlos o etiquetarlos con la finalidad de identificar el producto y proporcionar información relevante para el consumidor, como se muestra a continuación:
  
    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Identificación de las partes de la etiqueta
        figure
          img.img-t.m-auto.mb-4(src='@/assets/curso/images/tema4/img_2.svg', alt='')
        figcaption Nota. Ospina Arias, J. C. (2015).
        
    .row.justify-content-center.mb-5
      .col-md-1
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_3.svg', alt='')
      .col-md-11 
        p.mb-0 El etiquetado genera ventajas tanto para la empresa como para el consumidor; debido a que es multifuncional, además de proporcionar información del producto la cual es indispensable para el consumidor, mediante el etiquetado se puede impulsar las compras por medio de promociones y cupones, incluir recetas y diferentes modos de uso, fortalecer la imagen de la empresa, presentar los distintos sellos de calidad o resaltar los atributos que dan un valor agregado al producto. 
          span.text-bold A continuación, se analizan algunas de sus principales funciones:

    .row.justify-content-center.mb-5
      .col-xl-2.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.text-small Diálogo
            p.mb-0.text-small Establecer un diálogo con el consumidor.

      .col-xl-2.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas semanal
            p.mb-0 Con estos reportes semanales, podrá encontrar las dificultades que pueda tener algún o algunos vendedores y evitar que se pierdan los clientes fijos. Reportar semanalmente, le permite tener un equipo de ventas fortalecido y bien direccionado, con las correcciones necesarias para lograr las metas de ventas propuestas.

      .col-xl-2.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas mensuales
            p.mb-0 Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.

      .col-xl-2.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas mensuales
            p.mb-0 Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.

      .col-xl-2.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Reporte de ventas mensuales
            p.mb-0 Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.

  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
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
