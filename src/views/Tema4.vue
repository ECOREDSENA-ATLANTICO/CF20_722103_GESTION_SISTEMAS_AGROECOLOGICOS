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
          img.img-t.m-auto.mb-4(src='@/assets/curso/images/tema4/img_2.svg', alt='A continuación se explica las partes de la etiqueta en un producto: - Nombre del producto. - Lista de ingredientes y aditivos. - Peso(neto) volumen o numero de unidades. - Instrucciones para la conservación. - Identificación del lote. - Permisos del Ministerio de salud. - Fecha de vencimiento. - País de origen. - Modos de empleo. - Identificación de la empresa.')
          figcaption Nota. Ospina Arias, J. C. (2015).
        
    .row.justify-content-center.mb-5
      .col-md-1
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema4/img_3.svg', alt='Imagen Decorativa')
      .col-md-11 
        p.mb-0 El etiquetado genera ventajas tanto para la empresa como para el consumidor; debido a que es multifuncional, además de proporcionar información del producto la cual es indispensable para el consumidor, mediante el etiquetado se puede impulsar las compras por medio de promociones y cupones, incluir recetas y diferentes modos de uso, fortalecer la imagen de la empresa, presentar los distintos sellos de calidad o resaltar los atributos que dan un valor agregado al producto. 
          span.text-bold A continuación, se analizan algunas de sus principales funciones:


    .row.justify-content-center.mb-5.text-center
      
      .col-md-4.mb-3.col-xl-2.col-lg-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_4.png", alt="Imagen Decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-secundario Diálogo
            p.mb-0.text-white Establecer un diálogo con el consumidor.

      .col-md-4.mb-3.col-xl-2.col-lg-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_5.png", alt="Imagen Decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-secundario Tiempo
            p.mb-0.text-white Ahorro de tiempo al consumidor, puesto que le transmite de manera rápida el mensaje que busca.

      .col-md-4.mb-3.col-xl-2.col-lg-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_6.png", alt="Imagen Decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-secundario Elección
            p.mb-0.text-white Facilitar al comprador y al consumidor final su elección de compra.

      .col-md-4.mb-3.col-xl-2.col-lg-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_7.png", alt="Imagen Decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-secundario Control
            p.mb-0.text-white Facilitar el control y vigilancia por medio de las fechas de fabricación y de vencimiento, contenido, código de barras.

      .col-md-4.mb-3.col-xl-2.col-lg-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/images/tema4/img_8.png", alt="Imagen Decorativa")
          .crd_hover_txt--body
            h4.mb-3.text-secundario Indicaciones
            p.mb-0.text-white Dar indicaciones para el manejo y administración del producto o empaque.
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3
        .cajon.color-acento-contenido.p-3.ps-4.bg_18.mb-4.mb-lg-0
          p.mt-3.p-1 La información del etiquetado puede estar registrada en uno o más idiomas y es muy común el uso de símbolos o pictogramas como se observa en la siguiente figura, que son regulados y empleados a nivel internacional, proporcionan indicaciones principalmente para la manipulación de acuerdo con las características físicas, químicas del producto. Además, existe una clasificación y simbología para productos peligrosos de acuerdo con diferentes tipos de riesgos, como por ejemplo tóxico, infeccioso, material radiactivo, gas inflamable, líquido inflamable, sólido inflamable, combustión espontánea, gas tóxico, peligro cuando está mojado y peróxido orgánico.
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema4/img_11.png', alt='Imagen Decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 4.
          span Simbología y pictogramas empleados en el etiquetado
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema4/img_12.svg', alt='Se explica la Simbología y pictogramas empleados en el etiquetado.')
          figcaption Nota. Ospina Arias, J. C. (2015).
          
    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img.img-t.m-auto(src='@/assets/curso/images/tema4/img_13.svg', alt='Imagen Decorativa')
          .tarjeta.color-secundario-oscuro.shadow-sm
            p.p-3.mb-0 Adicionalmente, en las etiquetas ya sean del empaque o embalaje como lo indica Ospina Arias, J. C. (2015), se usan métodos de identificación como códigos que puede ser códigos de barras lineales o bidimensionales, chips o bandas magnéticas, los cuales están compuesto por un símbolo gráfico (barras) y el código que son los números o en ocasiones se emplea un código alfanumérico, el cual varía de acuerdo con el producto, clase de etiqueta y mercado.
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5.
          span Herramientas de identificación (Código de barras)
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema4/img_14.svg', alt='Las herramientas de identificación (Código de barras) pueden ser: - Lineales: representación de líneas paralelas verticales de distinto grosor y espaciado que, en su conjunto contiene determinada información. El más utilizado es el código EAN (European Article Number), y el más usual es el EAN13, construido por 13 dígitos y con una estructura dividida en cuatro partes: código del país, código de empresa, código de producto y dígito de control. - Bidimensionales: permite almacenar información, se comporta como un archivo que guarda información del producto y sus características. El más frecuente es el código QR; se trata de una matriz diseñada para un escaneo rápido de la información; las aplicaciones que permiten escanearlo están disponibles a nivel de consumidor, a través de los teléfonos móviles.').mb-5
          figcaption Nota. Permite reconocer rápidamente un artículo de forma única, global en la cadena logística, a través de diversos sistemas de lectura existentes en el mercado (lector láser, CCD, Imagen 2D, entre otros.)..

          
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
