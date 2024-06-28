<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Acondicionamiento

    .row.justify-content-center.align-items-center.mb-4  
      p.text-center.mb-5 En poscosecha las operaciones de acondicionamiento incluyen principalmente las actividades de:
      .col-lg-8.mb-5
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_1.svg', alt='')
      p.text-center.mb-5 En poscosecha las operaciones de acondicionamiento incluyen principalmente las actividades de:
      .col-lg-8.mb-5
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_2.svg', alt='')
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_3.png', alt='')
      .col-lg-7(data-aos="fade-right")
        p Lo indicado previamente, permite mantener la calidad de los productos, al mismo tiempo que evita que se dañen o contaminen, es decir alargan la durabilidad mediante prácticas que permiten conservar las características propias de los productos (físicas, químicas y organolépticas) y así lograr que el producto sea apreciado y aceptado por el consumidor o que tenga las condiciones requeridas para ser procesado.
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_4.svg', alt='')
            .col-md-9
              p.mt-3.p-1 Como se muestra en la siguiente figura, existen diversos tipos de calidad, que mediante el desarrollo de las actividades de acondicionamiento permiten preservar y potencializar los productos. 
             
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--blanca.p-4.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Calidad en los alimentos  
              
        figure
          img(src='@/assets/curso/images/tema2/img_5.svg', alt='Texto que describa la imagen')

    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.p-2 Teniendo en cuenta que se requiere una adecuada calidad inicial debido a la calidad final obtenida, está directamente relacionada con las cualidades y condiciones con que llega el producto al proceso de poscosecha, además de higiene y sanidad durante todo el proceso de acondicionamiento que asegure la integridad del producto y a su vez la salud de los consumidores. 
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_6.png', alt='')
    
    
    figure.d-flex.align-items-center.mb-4#t_2_1
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Recepción y separación
  
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La recepción es la primera actividad que se realiza en poscosecha, una vez realizado el proceso de recolección, los productos son enviados a los centros de acopio donde son recepcionados e inspeccionados teniendo en cuenta factores como:
      .col-lg-8.mb-5
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_8.svg', alt='')

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_9.png', alt='')
      .col-lg-7(data-aos="fade-right")
        p Entre otras propiedades organolépticas que se pueden percibir y dar una primera impresión de cómo está el producto, además de cómo ha sido el proceso de cosecha, recolección y manipulación que se le ha dado hasta ese momento.
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-4.mb-lg-0
          p.mt-3.p-1 Es importante durante el proceso de recepción, no sólo inspeccionar las características físicas del producto, sino que también se debe obtener información de:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-3
        .tarjeta.color-acento-contenido.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_10.svg', alt='').mb-2
          p.text-center Cantidad de producto recibido

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_11.svg', alt='').mb-2
          p.text-center Lugar de procedencia

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_12.svg', alt='').mb-2
          p.text-center Fechas de recolección

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_13.svg', alt='').mb-2
          p.text-center Inspección del vehículo

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_14.svg', alt='').mb-2
          p.text-center Condiciones de transporte

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_15.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De acuerdo con la verificación de las condiciones con que llega el producto cosechado, se realiza un proceso básico y rápido de separación, que consiste eliminar los productos dañados o con un alto grado de deterioro y así continuar el manejo poscosecha, sólo con los que cumplen con características y condiciones de sanidad y madurez que los hacen aptos para recibirlos. A continuación, se analiza algunas condiciones y características para la selección:
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_16.svg')
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Madurez
              p.text-center Madurez avanzada del producto.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_17.svg')
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Falta de madurez
              p.text-center Cosecha prematura del producto.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_18.svg')
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Deformidad
              p.text-center Forma o presentación visual del producto diferente a la habitual.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_19.svg')
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Daño
              p.text-center Hongos, insectos o residuos químicos en el producto.
    
    figure.d-flex.align-items-center.mb-4#t_2_2
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Selección y clasificación

  
    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Es otra de las actividades del manejo poscosecha pertenecientes al proceso de acondicionamiento, son actividades complementarias, debido a que primero se selecciona de acuerdo con varias características, para luego dentro de esas mismas características clasificar por categorías. Es decir, estas actividades están enfocadas a las propiedades de los productos recolectados de acuerdo con la calidad y exigencias del mercado.
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_20.svg', alt='')
            .col-md-9
              p.mt-3.p-1 Una vez separados los productos dañados y seleccionados los que cumplen y están en buenas condiciones se les realiza un proceso de selección que puede realizarse de forma manual o mediante el empleo de equipos y máquinas como:
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_21.png', alt='')
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_22.svg', style="width: 130px")
          .tarjeta.color-acento-contenido2
            .p-4
              p.text-center Tamices de apertura fija, fondo plano, tambor.

      .col-lg-5.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_23.svg', style="width: 130px")
          .tarjeta.color-secundario2
            .p-4
              p.text-center Seleccionadoras de abertura variable, rodillo, cuerda, cable, cinta, tornillo, disco, cilindro, células fotoeléctricas, entre otras.
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_24.png', alt='')
      .col-lg-7(data-aos="fade-right")
        p Este proceso se realiza con la finalidad de obtener productos sanos sin deformaciones ni daños mecánicos, que sean de la misma variedad, como tamaño uniforme (peso y forma), además de un grado de madurez adecuado.  
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-5.mb-lg-0
          p.mt-3.p-1 Después, se lleva a cabo la operación de clasificación, que consiste en unificar y agrupar de acuerdo con categorías y grados de calidad que se manejan principalmente a la hora de la comercialización, siendo las clases comerciales:
        img.img-t.m-auto(src='@/assets/curso/images/tema2/img_25.svg', alt='')
      p Esta clasificación se obtiene como lo indica Borrero Ortiz, M., & Urrea López, M. (2007), de acuerdo con la suma total de los daños e imperfectos (manchas, cicatrices, magulladuras, rasguños, etc.), pero sin dejar de lado las exigencias y criterios relacionados con el aspecto externo (color, forma, firmeza, grado de madurez, imperfecciones), aspecto interno (daños internos), cualidades organolépticas (aroma, sabor, textura) y valor nutricional y sanitario.
    
    .row.align-items-center.mb-2
      p.text-bold A continuación, se describen los parámetros utilizados en la clasificación:
      .col-lg-8
        TabsA.color-secundario.mb-5

          .tarjeta.color-secundario-claro.p-4(titulo="Color, aroma y sabor")
            p Se pueden medir mediante las características de la carta colorimétrica para cada producto; o mediante los índices de madurez.
          
          .tarjeta.color-secundario-claro.p-4(titulo="Carencia de imperfecciones")
            h4 PASO 2: The splendor

            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen
              .col-xl-6
                p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
                  strong user style sheets
                  |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
       
          .tarjeta.color-secundario-claro.p-4(titulo="Madurez óptima")
            h4 PASO 2: The splendor

            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen
              .col-xl-6
                p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
                  strong user style sheets
                  |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          .tarjeta.color-secundario-claro.p-4(titulo="Forma")
            h4 PASO 2: The splendor

            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                  figcaption Leyenda de la imagen
              .col-xl-6
                p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
                  strong user style sheets
                  |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .col-lg-4 
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_24.png', alt='')

    p Actualmente existen guías para diferentes frutas y hortalizas que facilitan y estandarizan el proceso de selección y clasificación de acuerdo con la normatividad existente, las exigencias del mercado y a los atributos de mayor importancia y relevancia.

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-5.mb-lg-0
          p.mt-3.p-1 A manera de ejemplo, a continuación, se describen los criterios de la guía para selección y clasificación de la mora:
    
    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/images/tema2/img_26.svg", alt="alt")
      .col-lg-8
      
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Daño por plagas: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_34.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Daño por mordeduras
            
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_35.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Daño por larvas
                  
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_28.svg', alt='')

            p 
              span.text-bold Recomendación: 
              | Realizar constante inspección del cultivo para verificar que se encuentre libre de daños y/o enfermedades, en caso contrario, realizar adecuada disposición de los frutos dañados y manejo cultural y/o agroecológico para evitar propagación.

          .row(numero="2" titulo="Enfermedades por hongos: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_37.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Daño por hongos en el cultivo
                  
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_29.svg', alt='')

          .row(numero="3" titulo="Categoría de calidad: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_38.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Categoría de calidad: selección y clasificación
                  
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_30.svg', alt='')
              
          .row(numero="4" titulo="Categoría de calidad: selección y clasificación")
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_31.png', alt='')
            
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_32.svg', alt='')
              
          .row(numero="5" titulo="Categoría de calidad: norma")
            p.mb-1 Las siguientes son algunas descripciones según la norma NCT 4601 de las condiciones que deben cumplir los frutos para las categorías de calidad.
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_34.svg', alt='')
            
            .col-md-4.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_39.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Extra
            .col-md-4.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_40.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Extra
            .col-md-4.mb-3
              .tarjeta-avatar-b.mb-3
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_41.svg', alt='')
                .tarjeta.shadow-sm
                  p.text-bold.p-4.mt-2 Extra
                  
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_33.png', alt='')
            p.mb-1 Cosechar los frutos de color rojo intenso con drupillas de color morado (Grado de maduración cinco GM 5) y clasificar de acuerdo a las especificaciones del mercado.
         
    p.text-bold.text-center En relación con el color de la mora, a continuación, se muestra la tabla de colores utilizada para su clasificación:
    
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--blanca.p-4.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Color clasificación de la mora  
              
        figure
          img(src='@/assets/curso/images/tema2/img_27.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
