<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 En este componente formativo se consolida el material de estudio para que el aprendiz pueda identificar las etapas de poscosecha, específicamente las relacionadas al acondicionamiento de los productos que son las actividades de recepción, separación, selección y clasificación, las cuales permiten eliminar los productos no aptos y ordenar de acuerdo con características de color, variedad, forma, tamaño, grado de madurez y ausencia de daños. También se hace referencia a operaciones especiales como la aplicación de recubrimientos y encerados que se encarga de brindar mayor protección mediante una capa que sirve como barrera y mejora la presentación. <br>
    p.mb-3 Siendo importante tener presente que con el empaque y el embalaje va de la mano el etiquetado que tiene como finalidad de identificar el producto y proporcionar información relevante para el consumidor; y, que el almacenamiento que es otra etapa de la poscosecha cumple no solo la función de alargar la vida útil y conservar la calidad de los productos sino que también permite estabilizar y regular los procesos de oferta y demanda, debido a que se da un control en la comercialización, al guardar producto para aprovisionar en el tiempo de no cosecha. <br>
    p.mb-3.mb-5 Por último, se aborda la temática relacionada con la trazabilidad, la cual es vital para todo el sector agronómico y agroindustrial, ya que se encarga de hacer un rastreo del origen, proceso y destino final de los productos. Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/images/tema2/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
