<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 6
      h1 Trazabilidad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_1.svg', alt='')
      .col-lg-8.mb-3
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-5.mb-lg-0
          p.m-0 Actualmente debido a las crisis alimentarias y la aparición de enfermedades zoonóticas, ha aumentado el cuidado y prevención por parte de los consumidores, generando que el sector agroalimentario se preocupe y se enfoque en asegurar a los consumidores la calidad de los productos ofrecidos, mediante la implementación de medidas de carácter obligatorio, como también disposiciones voluntarias como la trazabilidad. 
        p.mt-2 Debido a que la trazabilidad permite conocer el origen de los productos y hacerle seguimiento a lo largo de todo el proceso poscosecha hasta llegar al comprador final, lo que beneficia la seguridad alimentaria y da garantía al consumidor, pues existen registros y rastro de donde viene el producto, por donde paso y a donde llegó, es decir como lo indica Sevilla, E., Ortiz, F., & López, M. (2013), permite obtener una trazabilidad ascendente, descendente y total o también denominada hacia atrás, hacia adelante e interna. En el caso de presentarse errores, estos se pueden detectar y saber dónde se originó para así tomar las medidas correctivas necesarias y garantizar la inocuidad de los productos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6.
          span Sentidos de la trazabilidad
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_2.png', alt='')

    .row.mb-4
      .col-auto
        img(src='@/assets/curso/images/tema6/img_3.svg' , alt='')
      .col-lg-6
        h3.mt-2(data-aos="fade-right") Importancia y responsabilidades

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_4.png', alt='')
      .col-lg-7.mb-3
        p.mt-2 Por medio del seguimiento y rastreabilidad se tiene la opción de intervenir sobre los factores que permitan mejorar la calidad del producto final, la seguridad de los productos y la transparencia de los mercados. Por tanto, se debe tener toda la información relacionada de cada uno de los eslabones de la cadena:
    
    p.text-bold.text-center A continuación, se representan los ámbitos o elementos involucrados en la trazabilidad:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7.
          span Ámbitos de la trazabilidad
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_5.svg', alt='')
          figcaption 
            span.text-bold Nota. 
            | Sevilla, E., Ortiz, F., & López, M. (2013)
               
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Además, la trazabilidad es de gran importancia, porque como se muestra en la siguiente figura, funciona como un instrumento de información para todos los actores de la cadena producción, generando beneficios para los consumidores, la empresa y los entes de control, ya que permite obtener un control del flujo del producto y un análisis de riesgos que incluye la determinación, gestión, control y comunicación.
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8.
          span Importancia y beneficios de la trazabilidad
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_7.svg', alt='')
                   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-5.mb-lg-0
          p.m-0 Pero, así como se obtienen beneficios mediante la aplicación de sistemas de trazabilidad, también las empresas, los consumidores y los entes de control tiene responsabilidades y deben cumplir obligaciones, siendo necesario el sistema de trazabilidad obtenga, procese y recupere información sobre los productos, materias primas, procesos y en general de todas las actividades que se realicen y estén bajo su dominio y así lograr identificar adecuadamente los productos y obtener la trazabilidad a lo largo de toda la cadena.
      .col-lg-4
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_8.png', alt='')
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9.
          span Responsabilidades en la trazabilidad
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_9.svg', alt='')
    
    .row.mb-5
      .col-auto
        img(src='@/assets/curso/images/tema6/img_3.svg' , alt='')
      .col-lg-6
        h3.mt-2(data-aos="fade-right") Análisis de peligros y puntos críticos de control
    
    .row.justify-content-center.align-items-center.mb-5
      p Se debe tener claro que la calidad e inocuidad de los alimentos es responsabilidad del productor, lo que conlleva a la implementación y diseño del HACCP o análisis de peligros y puntos críticos de control, ya que este sistema permite emplear medidas preventivas en las etapas donde se presenten peligros y así garantizar la inocuidad mediante controles eficaces y efectivos.
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_10.png', alt='')
      .col-lg-7.mb-3
        p Además de brindar beneficios indirectos relacionados con la disminución de costos por reprocesos, destrucción o retirar del mercado productos por razones de seguridad, ya que es una herramienta enfocada en la prevención de peligros para establecer controles; y su vez se aumenta la confianza de los consumidores porque están adquiriendo productos inocuos y seguros. 
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.mt-3.img-t.m-auto(src='@/assets/curso/images/tema6/img_11.svg', alt='')
            .col-md-9
              p.mt-3 Como indica Torres, E. G., Matos, A. R., Fernández, M. O., & Sánchez, O. M. (2005), el sistema HACCP mediante un acompañamiento, seguimiento detallado, con el empleo de técnicas y medidas de monitoreo constante se logra tener control del proceso y de los puntos críticos y peligros potenciales que afectan la inocuidad. 
          
      .col-md-12
        .cajon.color-acento-botones.p-4.ps-5.bg_18.mb-5.mb-lg-0
          p.m-0 Debido a que el sistema HACCP se fundamente en una secuencia fases que están interrelacionadas empleadas en todos las etapas y eslabones de la cadena de producción, es decir desde la producción primaria hasta la comercialización y de acuerdo con el decreto 60 de 2002, en el artículo 4 establece que el sistema HACCP se fundamenta en la aplicación de 7 principios:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10.
          span Principios HACCP
        figure
          img.img-t.mb-5(src='@/assets/curso/images/tema6/img_12.png', alt='')
          figcaption 
            span.text-bold Nota. 
            | Sistema de análisis de peligros y de puntos críticos de control (HACCP) y directrices para su aplicación. (2021, febrero 9).
      
  </template>

<script>
export default {
  name: 'Tema6',
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
