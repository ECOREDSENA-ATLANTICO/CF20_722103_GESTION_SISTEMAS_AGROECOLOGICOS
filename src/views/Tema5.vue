<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1 Almacenamiento
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema5/img_1.png', alt='Imagen Decorativa')
      .col-lg-7.mb-3
        p Al igual que las demás actividades de poscosecha, el almacenamiento tiene el objetivo de alargar la vida útil y conservar la calidad de los productos, específicamente la calidad comercial, mediante técnicas que permiten regular la respiración y la pérdida de agua (transpiración) los cuales son factores de deterioro de la calidad, que se agudizan bajo condiciones ambientales extremas porque se aceleran los procesos fisiológicos.
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-2
              img.mt-3.img-t.m-auto(src='@/assets/curso/images/tema5/img_2.svg', alt='Imagen Decorativa')
            .col-md-10
              p.mt-3.p-1 Adicionalmente, el almacenamiento permite estabilizar y regular los procesos de oferta y demanda, debido a que se da un control en la comercialización, al guardar producto para aprovisionar en el tiempo de no cosecha.
      p.mt-1 No obstante, como lo indica Borrero Ortiz, M., & Urrea López, M. (2007), se debe tener presente y proveer las condiciones adecuadas durante el almacenamiento para evitar la continuidad de los procesos desarrollo propios de los productos, como, por ejemplo, enraizamiento, germinación de semillas, enverdecimiento, brotación y crecimiento o alargamiento.
        span.text-bold  A continuación, se exponen algunos procesos metabólicos que se presentan después de la poscosecha:
          
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Brotado")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_3.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Brotado
            p Causa deterioro especialmente en cebollas, ajo y papas, está relacionado con la latencia debida a factores externos e internos.
        
       
      .py-3.py-md-4(titulo="Alargamiento")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_4.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Alargamiento
            p Se genera un alargamiento de las estructuras existentes. Se presenta en zanahorias, espárragos y nabos.
        
      .py-3.py-md-4(titulo="Enraizamiento")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_5.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Enraizamiento
            p Puede presentarse por condiciones de humedad elevada. Genera descomposición rápida, arrugamiento y agotamiento de reservas alimenticias en tubérculos y raíces
        
      .py-3.py-md-4(titulo="Enverdecimiento")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_6.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Enverdecimiento
            p La luz durante el almacenamiento produce un tejido verde, generando problemas de presentación, mal sabor y rechazo por parte del consumidor.
        
      .py-3.py-md-4(titulo="Germinación")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_7.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Germinación
            p En el transcurso del almacenamiento se favorece la germinación de semillas de los frutos maduros.
        
      .py-3.py-md-4(titulo="Endurecimiento")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/images/tema5/img_10.png', alt='Imagen Decorativa')
          .col-md-6.mb-4.mb-md-0
            h4.mt-5 Endurecimiento
            p La gravedad y la luz pueden ocasionar el encorvamiento de los tejidos. Los productos deformes son difíciles de empacar y de baja calidad comercial debido a la mala presentación.
    
    figure.d-flex.align-items-center.mb-4#t_5_1
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Técnicas y condiciones 
  
    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Existen diversas técnicas de almacenamiento, entre las que se destacan el almacenamiento denominado común, donde los productos se conservar bajo condiciones ambientales naturales, durante el tiempo que se mantengan las características propias (sensoriales, nutricionales, físicas, químicas) o se produzcan alteraciones mínimas, ya que existen frutas y hortalizas como la papa, ajo y cítricos que se mantienen sin ningún tratamiento por un tiempo prolongado. Para lo cual se puede aprovechar la ventilación natural y así asegurar unas mejores condiciones. Pero, esta técnica de almacenamiento es arriesgada porque no existe control sobre el ambiente (temperatura y humedad)
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema5/img_9.png', alt='Imagen Decorativa')
        
    .row.mb-4
      .col-lg-3.mb-3(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema5/img_11.svg', alt='Imagen Decorativa')
      .col-lg-9.mb-3(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-3
          p.m-0 También se pueden llevar a cabo procesos de almacenamiento con condiciones de temperatura y humedad ideales y requeridas para prolongar la vida de anaquel, debido a que existen productos perecederos que necesitan ser conservados, mediante el control de forma artificial de la temperatura, es decir por medio del almacenamiento con enfriamiento, ya que como denota Camelo, A. (2003), las temperaturas bajas reducen la actividad enzimática y minimizan el desarrollo y crecimiento de microorganismos culpables del deterioro, debido a que se detiene la maduración, se minimiza el ritmo respiratorio y la deshidratación.
        p.mb-4 Pero se debe tener presente, que una inapropiada utilización de las bajas temperaturas genere el efecto contrario a lo deseado, es decir aligera la degradación de la calidad de los productos, ya que una exposición prolongada al frío genera congelamiento y por ende formación de cristales que afectan la estructura porque se destruyen los tejidos de forma permanente, reflejado a la hora de descongelarse signos como:
        
        .row 
          .col-md-4
            ul.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Deshidratación.
              li 
                i.fas.fa-angle-right
                | Pérdida de líquidos.
              li 
                i.fas.fa-angle-right
                | Alteración en los tejidos. 
              li 
                i.fas.fa-angle-right
                | Desorden fisiológico.
          .col-md-4
            ul.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Decoloración interna y externa.
              li 
                i.fas.fa-angle-right
                | Falta de sabor.
              li 
                i.fas.fa-angle-right
                | Ausencia o maduración no uniforme.
              li 
                i.fas.fa-angle-right
                | Entre otros.
          .col-md-4 
            img.m-auto.w-75(src='@/assets/curso/images/tema5/img_12.svg', alt='Imagen Decorativa')
      p Otra técnica de almacenamiento es por medio de atmósferas controladas o modificadas, las cuales permiten adicionar, extraer o cambiar la concentración de gases que la componen, como son el dióxido de carbono (CO2), oxígeno (O2), etileno (C2H4), nitrógeno (N), con la finalidad de generar un retraso en los cambios fisiológicos, biológicos y químicos propios del ciclo de vida de los productos, como en la velocidad de respiración, la generación de etileno y la aparición de ablandamiento y variación en la composición, además, se minimiza la susceptibilidad a los daños causados por patógenos.

    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/images/tema5/img_13.png', alt='Imagen Decorativa')
      .col-lg-7(data-aos="fade-right")
        p Cada gas empleado en la atmósfera cumple su función y sus niveles varían de acuerdo a los beneficios o consecuencias que generan, por ejemplo, el oxígeno no están deseado ya que genera oxidación por tanto el nitrógeno se encarga de desplazar, además de que ayuda a minimizar el crecimiento de patógenos; por su parte el dióxido de carbono como disminuye la respiración y frena la acción de metileno hace que los órganos entren en un estado de reposo que favorece porque frena y suspende todos los procesos ayudando a la conservación. Pero, al igual que la temperatura, cuando la concentración de gases no es la propicia, se generan consecuencias negativas, como presencia de sabores y olores desagradables, fermentación y asfixia de tejidos.
    
    figure.d-flex.align-items-center.mb-4#t_5_2
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/images/tema5/img_7.svg', alt='Imagen Decorativa')
      h2.mb-0(data-aos="fade-right") Variables
  
  
    .row.justify-content-center.align-items-center.mb-5
      p Existen diversas variables y factores que influyen en el proceso como son las condiciones con que ingresa el producto al almacenamiento, porque la calidad de la conservación se ve afectada por daños físicos, mecánicos, biológicos, químicos. Se requiere que las condiciones de temperatura y humedad estén monitoreadas, controladas y permanezcan constantes durante el ciclo de almacenamiento debido a que variaciones mínimas tanto de aumento como de disminución pueden generar efectos negativos. 
      .col-lg-7.mb-3
        p Otra variable que tiene influencia en el proceso son las condiciones de higiene y desinfección en los lugares de almacenamiento, por lo que se requiere constantemente realizar limpieza para evitar la proliferación de bacterias, hongos, moho y demás microorganismos que afecten la calidad del producto y puede ocasionar problemas en la salud de los consumidores. 
        .tarjeta.color-secundario-claro-sin-bordes.p-3.ps-4.bg_18.mb-4.mb-lg-0
          .row
            .col-md-3
              img.mt-3.img-t.m-auto(src='@/assets/curso/images/tema5/img_14.svg', alt='Imagen Decorativa')
            .col-md-9
              p.mt-3 Además, estos espacios o bodegas deben de ser diseñados de tal forma que haya buena circulación de aire y a la hora de almacenar se acomode organizadamente, teniendo presente la rotación de los productos, sin ir a pegar a la pared, ni al techo, ni poner directamente en el piso, se debe utilizar estibas o plataformas y dejar distancia entre arrume y arrume, entre arrume y pared y entre arrume y techo.
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/images/tema5/img_15.png', alt='Imagen Decorativa')

      .col-md-12  
        .cajon.color-acento-contenido.p-4.ps-5.bg_18.mb-4.mb-lg-0
          p.m-0 De igual forma se debe usar medidas de seguridad y elementos de protección personal porque existen riesgos asociados como golpes y sepultamiento por caídas de cargas.
        

  </template>

<script>
export default {
  name: 'Tema5',
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
