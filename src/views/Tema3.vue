<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Recubrimientos y encerados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema3/img_1.png', alt='')
      .col-lg-7.mb-3
        p Con la finalidad de reducir las pérdidas durante la poscosecha, debido a factores microbiológicos y fisiológicos y lograr prolongar la vida útil de las frutas y hortalizas durante el almacenamiento, combinado con el empleo de empaques más amigables con el medio ambiente, han surgido tecnologías como el uso y aplicación de películas y recubrimientos como el encerado que permiten mantener los atributos, valor nutricional y en general la calidad de los productos.
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.mt-3.img-t.m-auto(src='@/assets/curso/images/tema3/img_2.svg', alt='')
            .col-md-9
              p.mt-3.p-1 Estás técnicas, consisten como lo indica Borrero Ortiz, M., & Urrea López, M. (2007), en aplicar una capa artificial con características específicas (espesor y resistencia) que varían según el producto empleado para elaborarlo y el procedimiento para aplicarlo y pueden estar ya preformados (películas) o se pueden elaborar y aplicar sobre el alimento, lo que conlleva a que adopte la misma forma (recubrimiento).
                          
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_3.png')})`, 'left': '50%'}"
          )
          .bloque-texto-g__texto.p-4(
            :style="{'right': '40%'}"
          )
            p.mb-0 Esta capa artificial o recubrimiento funciona como una barrera que brinda protección contra patógenos y factores ambientales, mejora la apariencia del producto ya que proporciona brillo, retarda el envejecimiento al controlar la respiración y minimizar la deshidratación, debido que se controla la transferencia de humedad, de gases como el oxígeno O2, dióxido de carbono CO2 y etileno, además incorpora ingredientes funcionales como antioxidantes, antimicrobianos, colorantes y sabores, como se muestra a continuación:
      
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--blanca.p-4.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span  Funciones y propiedades de las recubrimientos y películas  
              
        figure
          img(src='@/assets/curso/images/tema3/img_4.png', alt='Texto que describa la imagen').mb-5
          figcaption Nota. Fernández Valdés, Daybelis, Bautista Baños, Silvia, Fernández Valdés, Dayvis, Ocampo Ramírez, Arturo, García Pereira, Annia, & Falcón Rodríguez, Alejandro. (2015)
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema3/img_5.svg', alt='')
      .col-lg-7(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.p-2 Por tanto, aunque las características y propiedades de películas y recubrimientos están enfocadas a reducir el deterioro y perecibilidad de los alimentos, se generan otras ventajas funcionales que dan un valor agregado a los productos, como se plantean a continuación:
     
  </template>

<script>
export default {
  name: 'Tema3',
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
