<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 6
      h1 Trazabilidad

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_1.png', alt='Imagen Decorativa')
      .col-lg-8.mb-3
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-3
          p.m-0 Actualmente debido a las crisis alimentarias y la aparición de enfermedades zoonóticas, ha aumentado el cuidado y prevención por parte de los consumidores, generando que el sector agroalimentario se preocupe y se enfoque en asegurar a los consumidores la calidad de los productos ofrecidos, mediante la implementación de medidas de carácter obligatorio, como también disposiciones voluntarias como la trazabilidad. 
        p.mt-2 Debido a que la trazabilidad permite conocer el origen de los productos y hacerle seguimiento a lo largo de todo el proceso poscosecha hasta llegar al comprador final, lo que beneficia la seguridad alimentaria y da garantía al consumidor, pues existen registros y rastro de donde viene el producto, por donde paso y a donde llegó, es decir cómo lo indica Sevilla, E., Ortiz, F., & López, M. (2013), permite obtener una trazabilidad ascendente, descendente y total o también denominada hacia atrás, hacia adelante e interna. En el caso de presentarse errores, estos se pueden detectar y saber dónde se originó para así tomar las medidas correctivas necesarias y garantizar la inocuidad de los productos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6.
          span Sentidos de la trazabilidad
        figure.d-block.d-lg-none
          img.mb-3(src='@/assets/curso/images/tema6/img_2m.svg', alt='La figura explica los sentidos de la trazabilidad: - Ascendentes. - Descendentes. - Trazabilidad hacia adelante. - Trazabilidad hacia atrás. - Trazabilidad interna. ')
          figcaption 
            span.text-bold Nota. 
            | Sena 2022
        figure.d-none.d-lg-block
          img.mb-3(src='@/assets/curso/images/tema6/img_2.svg', alt='La figura explica los sentidos de la trazabilidad: - Ascendentes. - Descendentes. - Trazabilidad hacia adelante. - Trazabilidad hacia atrás. - Trazabilidad interna. ')
          figcaption 
            span.text-bold Nota. 
            | Sena 2022
    
    figure.d-flex.align-items-center.mb-4#t_6_1
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Importancia y responsabilidades

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_4.png', alt='')
      .col-lg-7.mb-3
        p.mt-2 Por medio del seguimiento y rastreabilidad se tiene la opción de intervenir sobre los factores que permitan mejorar la calidad del producto final, la seguridad de los productos y la transparencia de los mercados. Por tanto, se debe tener toda la información relacionada de cada uno de los eslabones de la cadena:
        SlyderF(columnas="col-lg-6 col-xl-6 mb-5")
          .d-flex.align-items-center.shadow-sm.mb-0
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_13.svg', alt='Imagen Ilustrativa')
            p.mb-0 Cosecha.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_14.svg', alt='Imagen Ilustrativa')
            p.mb-0 Producción.
          
          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_15.svg', alt='Imagen Ilustrativa')
            p.mb-0 Recolección.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_13.svg', alt='Imagen Ilustrativa')
            p.mb-0 Acondicionamiento.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_14.svg', alt='Imagen Ilustrativa')
            p.mb-0 Limpieza y desinfección.
          
          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_15.svg', alt='Imagen Ilustrativa')
            p.mb-0 Transformación.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_13.svg', alt='Imagen Ilustrativa')
            p.mb-0 Empaque.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_14.svg', alt='Imagen Ilustrativa')
            p.mb-0 Transporte.
          
          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_15.svg', alt='Imagen Ilustrativa')
            p.mb-0 Almacenamiento.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_13.svg', alt='Imagen Ilustrativa')
            p.mb-0 Distribución.

          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_14.svg', alt='Imagen Ilustrativa')
            p.mb-0 Comercialización.
          
          .d-flex.align-items-center.shadow-sm
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema6/img_15.svg', alt='Imagen Ilustrativa')
            p.mb-0 Cliente.




    
    p.text-bold.text-center A continuación, se representan los ámbitos o elementos involucrados en la trazabilidad:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7.
          span Ámbitos de la trazabilidad
        
        figure.d-block.d-lg-none
          img.img-t.mx-auto.mb-3(src='@/assets/curso/images/tema6/img_5m.svg',alt='En la figura se detalla los ámbitos de la trazabilidad: - Parcela. - Recolección. - Confección. - Transporte. - Distribución.')
          figcaption 
              span.text-bold Nota. 
              | Sevilla, E., Ortiz, F., & López, M. (2013)
      
        figure.d-none.d-lg-block
          img.img-t.mx-auto.mb-3(src='@/assets/curso/images/tema6/img_5.svg', alt='En la figura se detalla los ámbitos de la trazabilidad: - Parcela. - Recolección. - Confección. - Transporte. - Distribución.')
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
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_7.svg', alt='La figura muestra la Importancia y beneficios de la trazabilidad en las empresas, consumidores y entes de control.')
          figcaption 
            span.text-bold Nota. 
            | Sena 2022

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-5.mb-lg-0
          p.m-0 Pero, así como se obtienen beneficios mediante la aplicación de sistemas de trazabilidad, también las empresas, los consumidores y los entes de control tiene responsabilidades y deben cumplir obligaciones, siendo necesario el sistema de trazabilidad obtenga, procese y recupere información sobre los productos, materias primas, procesos y en general de todas las actividades que se realicen y estén bajo su dominio y así lograr identificar adecuadamente los productos y obtener la trazabilidad a lo largo de toda la cadena.
      .col-lg-4
        figure
          img.img-t(src='@/assets/curso/images/tema6/img_8.png', alt='Imagen Decorativa')
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9.
          span Responsabilidades en la trazabilidad
        figure
          img.img-t.mb-2(src='@/assets/curso/images/tema6/img_9.svg', alt='Responsabilidades en la trazabilidad en las empresas y entes de control. - Empresas: tener implantado el sistema de trazabilidad, disponer de la información necesaria, colaborar con las Autoridades competentes, informar a las Autoridades competentes en caso de que surjan problemas de seguridad de alimentos, proceder a la retirada de los productos. - Entes de control: promover la implantación del sistema de trazabilidad, verificar el cumplimiento de legislación alimentaria, adoptar acciones y medidas conjuntas con las empresas alimentarias para evitar cualquier riesgo a los consumidores, coordinar actuaciones de manera eficaz y efectiva entre todas las Autoridades competentes involucradas, incluso, entre diferentes Unidades de control.')
          figcaption 
            span.text-bold Nota: 
            | SENA 2022
    
    figure.d-flex.align-items-center.mb-4#t_6_2
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Análisis de peligros y puntos críticos de control

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
        .cajon.bg-lightyellow.p-4.ps-5.bg_18.mb-5.mb-lg-0
          p.m-0 Debido a que el sistema HACCP se fundamente en una secuencia fases que están interrelacionadas empleadas en todos las etapas y eslabones de la cadena de producción, es decir desde la producción primaria hasta la comercialización y de acuerdo con el decreto 60 de 2002, en el artículo 4 establece que el sistema HACCP se fundamenta en la aplicación de 7 principios:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10.
          span Principios HACCP

        figure.d-block.d-lg-none
          img.img-t.mx-auto.mb-2(src='@/assets/curso/images/tema6/img_12m.svg', alt='Los principios de análisis de puntos críticos de control(HACCP) en la cadena de producción: 1. Realizar un análisis de peligros. 2. Determinar los puntos críticos de control (PCC). 3. Establecer un límite o límites críticos. 4. Establecer un sistema de vigilancia del control de los PCC. 5. Establecer las medidas correctivas que han de adoptarse cuando la vigilancia indica que un determinado PCC no está controlado. 6. Establecer procedimientos de comprobación para confirmar que el sistema de HACCP funciona eficazmente. 7. Establecer un sistema de documentación sobre todos los procedimientos y los registros apropiados para estos principios y su aplicación.')
          figcaption 
              span.text-bold Nota. 
              | Sistema de análisis de peligros y de puntos críticos de control (HACCP) y directrices para su aplicación. (2021, febrero 9).
      
        figure.d-none.d-lg-block
          img.img-t.mx-auto.mb-2(src='@/assets/curso/images/tema6/img_12.svg',alt='Los principios de análisis de puntos críticos de control(HACCP) en la cadena de producción: 1. Realizar un análisis de peligros. 2. Determinar los puntos críticos de control (PCC). 3. Establecer un límite o límites críticos. 4. Establecer un sistema de vigilancia del control de los PCC. 5. Establecer las medidas correctivas que han de adoptarse cuando la vigilancia indica que un determinado PCC no está controlado. 6. Establecer procedimientos de comprobación para confirmar que el sistema de HACCP funciona eficazmente. 7. Establecer un sistema de documentación sobre todos los procedimientos y los registros apropiados para estos principios y su aplicación.')
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
