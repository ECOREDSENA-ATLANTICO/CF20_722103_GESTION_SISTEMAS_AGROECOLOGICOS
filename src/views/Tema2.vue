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
        figure.d-block.d-lg-none
          img.img-t.mx-auto(src='@/assets/curso/images/tema2/img_1m.svg', alt='Recepción, Separación, Limpieza, Selección y Clasificación.')
        figure.d-none.d-lg-block
          img.img-t.mx-auto(src='@/assets/curso/images/tema2/img_1.svg', alt='Recepción, Separación, Limpieza, Selección y Clasificación.')
  
      p.text-center.mb-5 Estas, se enfocan en preparar los productos para ser:
      .col-lg-8.mb-5
        figure.d-block.d-lg-none
          img.img-t.mx-auto(src='@/assets/curso/images/tema2/img_2m.svg', alt='Empacados, Almacenados, Transportados y Comercializados')
        figure.d-none.d-lg-block
          img.img-t.mx-auto(src='@/assets/curso/images/tema2/img_2.svg', alt='Empacados, Almacenados, Transportados y Comercializados')
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_3.png', alt='Imagen Decorativa')
      .col-lg-7(data-aos="fade-right")
        p Lo indicado previamente, permite mantener la calidad de los productos, al mismo tiempo que evita que se dañen o contaminen, es decir alargan la durabilidad mediante prácticas que permiten conservar las características propias de los productos (físicas, químicas y organolépticas) y así lograr que el producto sea apreciado y aceptado por el consumidor o que tenga las condiciones requeridas para ser procesado.
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_4.svg', alt='Imagen Decorativa')
            .col-md-9
              p.mt-3.p-1 Como se muestra en la siguiente figura, existen diversos tipos de calidad, que mediante el desarrollo de las actividades de acondicionamiento permiten preservar y potencializar los productos. 
             
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--blanca.p-4.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span  Calidad en los alimentos     
          
        figure.d-block.d-lg-none
          img(src='@/assets/curso/images/tema2/img_5m.svg', alt='Muestra el componente formativo la calidad en los alimentos. Estos acondicionamientos permiten preservar y potencializar los productos para su consumo: Calidad agropecuaria, Calidad comercial, Calidad industrial, Calidad nutricional')
        figure.d-none.d-lg-block
          img(src='@/assets/curso/images/tema2/img_5.svg', alt='Muestra el componente formativo la calidad en los alimentos. Estos acondicionamientos permiten preservar y potencializar los productos para su consumo: Calidad agropecuaria, Calidad comercial, Calidad industrial, Calidad nutricional')

    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .cajon.bg-lightyellow.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.p-2 Teniendo en cuenta que se requiere una adecuada calidad inicial debido a la calidad final obtenida, está directamente relacionada con las cualidades y condiciones con que llega el producto al proceso de poscosecha, además de higiene y sanidad durante todo el proceso de acondicionamiento que asegure la integridad del producto y a su vez la salud de los consumidores. 
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_6.png', alt='Imagen Decorativa')
    
    
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
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_8.png', alt='Color, Olor, Apariencia, Sabor, Textura, Consistencia, Impactos, Cortes y Daños.')

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_9.png', alt='Imagen Decorativa')
      .col-lg-7(data-aos="fade-right")
        p Entre otras propiedades organolépticas que se pueden percibir y dar una primera impresión de cómo está el producto, además de cómo ha sido el proceso de cosecha, recolección y manipulación que se le ha dado hasta ese momento.
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-4.mb-lg-0
          p.mt-3.p-1 Es importante durante el proceso de recepción, no sólo inspeccionar las características físicas del producto, sino que también se debe obtener información de:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-3
        .tarjeta.color-acento-contenido.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_10.svg', alt='Imagen Decorativa').mb-2
          p.text-center Cantidad de producto recibido

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_11.svg', alt='Imagen Decorativa').mb-2
          p.text-center Lugar de procedencia

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_12.svg', alt='Imagen Decorativa').mb-2
          p.text-center Fechas de recolección

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_13.svg', alt='Imagen Decorativa').mb-2
          p.text-center Inspección del vehículo

      .col-lg-2.mb-3
        .tarjeta.color-secundario-claro.p-3.ps-4.bg_18.mb-4.mb-lg-0
          img.w-50.img-t.m-auto(src='@/assets/curso/images/tema2/img_14.svg', alt='Imagen Decorativa').mb-2
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
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_16.png' alt="Imagen Decorativa")
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Madurez
              p.text-center Madurez avanzada del producto.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_17.png' alt="Imagen Decorativa")
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Falta de madurez
              p.text-center Cosecha prematura del producto.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_18.png' alt="Imagen Decorativa")
          .tarjeta.color-secundario-claro-redondeo
            .p-4
              h4.text-center.p-4.mb-0 Deformidad
              p.text-center Forma o presentación visual del producto diferente a la habitual.
      
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_19.png' alt="Imagen Decorativa" )
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
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_20.svg', alt='Imagen Decorativa')
            .col-md-9
              p.mt-3.p-1 Una vez separados los productos dañados y seleccionados los que cumplen y están en buenas condiciones se les realiza un proceso de selección que puede realizarse de forma manual o mediante el empleo de equipos y máquinas como:
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_21.png', alt='Imagen Decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_22.svg', alt='Imagen Decorativa' style="width: 130px")
          .tarjeta.color-acento-contenido2
            .p-4
              p.text-center Tamices de apertura fija, fondo plano, tambor.

      .col-lg-5.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_23.svg', alt='Imagen Decorativa' style="width: 130px")
          .tarjeta.color-secundario2
            .p-4
              p.text-center Seleccionadoras de abertura variable, rodillo, cuerda, cable, cinta, tornillo, disco, cilindro, células fotoeléctricas, entre otras.
    
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_24.png', alt='Imagen Decorativa')
      .col-lg-7(data-aos="fade-right")
        p Este proceso se realiza con la finalidad de obtener productos sanos sin deformaciones ni daños mecánicos, que sean de la misma variedad, como tamaño uniforme (peso y forma), además de un grado de madurez adecuado.  
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-5.mb-lg-0
          p.mt-3.p-1 Después, se lleva a cabo la operación de clasificación, que consiste en unificar y agrupar de acuerdo con categorías y grados de calidad que se manejan principalmente a la hora de la comercialización, siendo las clases comerciales:
        img.img-t.m-auto(src='@/assets/curso/images/tema2/img_25.svg', alt='Extra, Primera, Segunda y Tercera')
      p Esta clasificación se obtiene como lo indica Borrero Ortiz, M., & Urrea López, M. (2007), de acuerdo con la suma total de los daños e imperfectos (manchas, cicatrices, magulladuras, rasguños, etc.), pero sin dejar de lado las exigencias y criterios relacionados con el aspecto externo (color, forma, firmeza, grado de madurez, imperfecciones), aspecto interno (daños internos), cualidades organolépticas (aroma, sabor, textura) y valor nutricional y sanitario.
    
    .row.mb-5
      p.text-bold A continuación, se describen los parámetros utilizados en la clasificación:
      .col-lg-8
        TabsA.color-secundario

          .tarjeta.color-secundario-claro.p-4.mb-2(titulo="Color, aroma y sabor")
            p Se pueden medir mediante las características de la carta colorimétrica para cada producto; o mediante los índices de madurez.
          
          .tarjeta.color-secundario-claro.p-4.mb-2(titulo="Carencia de imperfecciones")
            p Las imperfecciones se miden en porcentaje con respecto al total del producto y así clasificar el producto de acuerdo con el mercado.
          
          .tarjeta.color-secundario-claro.p-4.mb-2(titulo="Madurez óptima")
            p Según las condiciones exigidas por los compradores, se clasifica para las operaciones de industrialización.
          
          .tarjeta.color-secundario-claro.p-4.mb-2(titulo="Forma")
            p La forma incluye peso y forma, con la finalidad de darle uniformidad a los lotes.
          
      .col-lg-4 
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema2/img_42.png', alt='Imagen Decorativa')

    p Actualmente existen guías para diferentes frutas y hortalizas que facilitan y estandarizan el proceso de selección y clasificación de acuerdo con la normatividad existente, las exigencias del mercado y a los atributos de mayor importancia y relevancia.

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")
        .cajon.color-secundario.p-3.ps-4.bg_18.mb-5.mb-lg-0
          p.mt-3.p-1 A manera de ejemplo, a continuación, se describen los criterios de la guía para selección y clasificación de la mora:
    
    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/images/tema2/img_26.png", alt="Muestra el componente formativo los daño por plagas: Selección y clasificación. Enfermedades por hongos: selección y clasificación. Categoría de calidad: selección y clasificación. Categoría de calidad: selección y clasificación. Categoría de calidad: norma")
      .col-lg-8
      
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Daño por plagas: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3.h-100
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_34.png', alt='Imagen Decorativa')
                .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                  p.text-bold.p-3.mb-0 Daño por mordeduras
            
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3.h-100
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_35.png', alt='Imagen Decorativa')
                .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                  p.text-bold.p-3.mb-0 Daño por larvas

            .tabla-b.mb-3
              table.min-100
                thead.bg-color-secundario
                  tr
                    td 
                      b Selección y clasificación
                    td 
                      b Instrumento
                tbody.bg_white
                  tr
                    td Seleccionar, recolectar y clasificar para comercialización los frutos que se encuentren libres de daños y enfermedades ocasionadas por plagas, como: 
                      ul 
                        li • Deformación 
                        li • Larvas 
                        li • Daños por insectos (arrugas, chupones, mordeduras).
                    td 
                      ul 
                        li • Percepción visual
                        li • Herramienta de corte
                        li • Recipiente colector 
                        li • Canastilla para producto dañado 
                        li • Empaque para comercialización

            p 
              span.text-bold Recomendación: 
              | Realizar constante inspección del cultivo para verificar que se encuentre libre de daños y/o enfermedades, en caso contrario, realizar adecuada disposición de los frutos dañados y manejo cultural y/o agroecológico para evitar propagación.


          .row(numero="2" titulo="Enfermedades por hongos: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3.h-100
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_36.png', alt='Imagen Decorativa')
                .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                  p.text-bold.p-3.mb-0 Daño por hongos en el cultivo

            .tabla-b.mb-3
              table.min-100
                thead.bg-color-secundario
                  tr
                    td 
                      b Selección y clasificación
                    td 
                      b Instrumento
                tbody.bg_white
                  tr
                    td  
                      p También seleccione para comercialización los frutos que se encuentren libres de:
                      ul 
                        li • Moho gris.
                        li • Frutos caídos.
                        li • Frutos blandos iniciando proceso de deterioro.
                    td 
                      ul 
                        li • Percepción visual
                        li • Recipiente colector 
                        li • Canastilla para producto dañado 
                        
          .row(numero="3" titulo="Daño mecánico: selección y clasificación")
            .col-md-6.mb-3
              .tarjeta-avatar-b.mb-3.h-100
                .tarjeta-avatar-b__img
                  img.img-t.m-auto(src='@/assets/curso/images/tema2/img_37.png', alt='Imagen Decorativa')
                .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                  p.text-bold.p-3.mb-0 Daño mecánico por compresión

            .tabla-b.mb-3
              table.min-100
                thead.bg-color-secundario
                  tr
                    td 
                      b Selección y clasificación
                    td 
                      b Instrumento
                tbody.bg_white
                  tr
                    td  
                      p Mantener prolongadamente la mora en la mano y contener más de 2 frutos, aumenta el deterioro del fruto.
                      | Se recomienda reenvasar del recipiente recolector a la canastilla con una altura máxima de 30 cm para evitar daños por compresión y magullamiento de los frutos.
                    td 
                      ul 
                        li • Percepción visual
                        li • Canastilla para producto dañado 
          
          .row(numero="4" titulo="Categoría de calidad: selección y clasificación")
                  
            .col-md-12.mb-3
              img.img-t.m-auto(src='@/assets/curso/images/tema2/img_31.png', alt='Imagen Decorativa')

            .tabla-b.mb-3
              table.min-100
                thead.bg-color-secundario
                  tr
                    td 
                      b Selección y clasificación
                    td 
                      b Instrumento
                tbody.bg_white
                  tr
                    td  
                      p Clasificar las moras según lo demande el mercado de comercialización.
                    td 
                      p Empaque para comercialización de producto clasificado


          .row(numero="5" titulo="Categoría de calidad: Norma")
            p Las siguientes son algunas descripciones según la norma NCT 4601 de las condiciones que deben cumplir los frutos para las categorías de calidad

            .tabla-b.mb-3
              table.min-100
                thead.bg-color-secundario
                  tr
                    td 
                      b Normas
                    td 
                      b Caracteristicas
                tbody.bg_white
                  tr
                    td Extra
                    td Con cáliz, firmes, enteras, forma regular, sin deformaciones en el ápice.
                  tr
                    td Primera
                    td Con cáliz, firmes, enteras, forma regular, mínimas deformaciones en el ápice.
                  tr
                    td Segunda
                    td Sin cáliz, forma irregular, deformaciones en el ápice.
            .row
              .col-md-4.mb-3
                .tarjeta-avatar-b.mb-3.h-100
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema2/img_38.png', alt='Extra')
                  .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                    p.text-bold.p-3.mb-0 Extra
              
              .col-md-4.mb-3
                .tarjeta-avatar-b.mb-3.h-100
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema2/img_39.png', alt='Primera')
                  .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                    p.text-bold.p-3.mb-0 Primera
              
              .col-md-4.mb-3
                .tarjeta-avatar-b.mb-3.h-100
                  .tarjeta-avatar-b__img
                    img.img-t.m-auto(src='@/assets/curso/images/tema2/img_40.png', alt='Segunda')
                  .tarjeta.shadow-sm.bg_white.d-flex.align-items-center
                    p.text-bold.p-3.mb-0 Segunda

            img.img-t.m-auto.mb-3(src='@/assets/curso/images/tema2/img_33.png', alt='Imagen Decorativa')

            p.mb-4 Cosechar los frutos de color rojo intenso con drupillas de color morado (Grado de maduración cinco GM 5) y clasificar de acuerdo a las especificaciones del mercado.



    p.text-bold.text-center En relación con el color de la mora, a continuación, se muestra la tabla de colores utilizada para su clasificación:
    
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--blanca.p-4.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Color clasificación de la mora  
              
        .tabla-a.mb-3
            table
              thead.bg1
                tr
                  td 
                    b Grado de Madurez (GM)     
                  td 
                    b GM 1
                  td 
                    b GM 2
                  td 
                    b GM 3
                  td 
                    b GM 4
                  td 
                    b GM 5
                  td 
                    b GM 6
              tbody.bg_white
                tr
                  td Detalle
                  td Fruto de color amarillo verdoso con drupillas de color rosado
                  td Fruto de color amarilloso en el que se incrementa el color rosado
                  td Fruto de color rojo claro
                  td Fruto de color vinotinto
                  td Fruto de color mitad vinotinto y mitad morada
                  td Fruto de color morado oscuro
                tr
                  td Color del fruto
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_43.png', alt='Fruto de color amarillo verdoso con drupillas de color rosado	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_44.png', alt='Fruto de color amarilloso en el que se incrementa el color rosado	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_45.png', alt='Fruto de color rojo claro	')
                  td
                    img.img-t(src='@/assets/curso/images/tema2/img_46.png', alt='Fruto de color vinotinto	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_47.png', alt='Fruto de color mitad vinotinto y mitad morada	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_48.png', alt='Fruto de color morado oscuro')
                tr
                  td Color de Referencia
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_49.png', alt='Fruto de color amarillo verdoso con drupillas de color rosado	')
                  td 
                   img.img-t(src='@/assets/curso/images/tema2/img_50.png', alt='GMFruto de color amarilloso en el que se incrementa el color rosado	2')
                  td 
                   img.img-t(src='@/assets/curso/images/tema2/img_51.png', alt='Fruto de color rojo claro	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_52.png', alt='Fruto de color vinotinto	')
                  td 
                    img.img-t(src='@/assets/curso/images/tema2/img_53.png', alt='Fruto de color mitad vinotinto y mitad morada	')
                  td 
                   img.img-t(src='@/assets/curso/images/tema2/img_54.png', alt='Fruto de color morado oscuro')


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
