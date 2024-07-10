export default {
  global: {
    componenteFormativo: 'Acondicionamiento y supervisión en poscosecha',
    descripcionCurso:
      'Durante la poscosecha se realizan actividades como recepción, separación, selección y clasificación; que permiten acondicionar los productos cosechados para realizar operaciones especiales como recubrimiento y encerados que brindan mayor protección y mejoran la presentación, para luego ser empacados con su respectivo etiquetado y rotulado con información para el consumidor. Siendo importante la trazabilidad durante la cadena de producción y comercialización.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Poscosecha',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acondicionamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recubrimientos y encerados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Etiquetado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Borrero Ortiz, M., & Urrea López, M. (2007). Modulo Poscosecha. Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente.',
    },
    {
      referencia:
        'Camelo, A. (2003). Manual para la preparación y venta de frutas y hortalizas. Roma: FAO',
    },
    {
      referencia:
        'Fernández Valdés, Daybelis, Bautista Baños, Silvia, Fernández Valdés, Dayvis, Ocampo Ramírez, Arturo, García Pereira, Annia, & Falcón Rodríguez, Alejandro. (2015). Películas y recubrimientos comestibles: una alternativa favorable en la conservación poscosecha de frutas y hortalizas. Revista Ciencias Técnicas Agropecuarias, 24(3), 52-5',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2071-00542015000300008&lng=es&tlng=es',
    },
    {
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima y Sena Regional Tolima. (2017). Protocolo de buenas prácticas para poscosecha de la mora de Castilla (Rubus glaucus Benth). Logística para la cadena Hortofrutícola del Tolima. Convenio N° 1032-2103.',
    },
    {
      referencia:
        'Ospina Arias, J. C. (2015). Fundamentos de envases y embalajes. Servicio Nacional de Aprendizaje SENA. ISBN: 978-958-8921-20-4',
    },
    {
      referencia:
        'Sevilla, E., Ortiz, F., & López, M. (2013). Introducción a la trazabilidad en la industria agroalimentaria.',
    },
    {
      referencia:
        'Solano-Doblado, Luz Georgina, Alamilla-Beltrán, Liliana, & Jiménez-Martínez, Cristian. (2018). Películas y recubrimientos comestibles funcionalizados. TIP. Revista especializada en ciencias químico-biológicas, 21(Supl. 2), e20180153. Epub 02 de diciembre de 2020',
      link: 'https://doi.org/10.22201/fesz.23958723e.2018.0.153',
    },
    {
      referencia:
        'Torres, E. G., Matos, A. R., Fernández, M. O., & Sánchez, O. M. (2005). El Análisis de Peligros y Puntos Críticos de Control (HACCP) como instrumento para la reducción de los peligros biológicos. REDVET. Revista Electrónica de Veterinaria, 6(9), 1-14',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado:
        'conjunto de cualidades físicas, propiedades organolépticas y valor nutricional de los alimentos.',
    },
    {
      termino: 'Características organolépticas',
      significado:
        'propiedades sensoriales (color, olor, aroma, textura y apariencia) que establecen el grado de madurez y daños.',
    },
    {
      termino: 'Estiba',
      significado:
        'plataforma que soporta los productos durante el almacenamiento y transporte.',
    },
    {
      termino: 'HACCP',
      significado: 'análisis de puntos críticos de control.',
    },
    {
      termino: 'Película',
      significado:
        'matriz preformada, obtenida por moldeo, cuyo espesor es siempre es mayor al de los recubrimientos.',
    },
    {
      termino: 'Recubrimiento',
      significado:
        'barrera transparente continua y delgada, que se adhiere al alimento con el fin de preservar su calidad y servir de empaque.',
    },
    {
      termino: 'Sanidad',
      significado:
        'integridad e inocuidad del producto que garantizan la salud del consumidor.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'es el control y seguimiento del producto a través de todas las etapas, desde su producción hasta el proceso de comercialización final.',
    },
    {
      termino: 'Valor nutricional',
      significado: 'contenido de nutrientes en un alimento.',
    },
  ],
  complementario: [
    {
      tema: 'Poscosecha',
      referencia:
        'Thompson, A. K. (1998). Tecnología post-cosecha de frutas y hortalizas.',
      tipo: 'Libro',
      link:
        'https://biblioteca.unimeta.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=17677&shelfbrowse_itemnumber=22213',
    },
    {
      tema: 'Poscosecha',
      referencia:
        'Food and Agriculture Organization of the United Nations FAO. (2013). Manejo postcosecha, procesamiento e higiene de frutas y hortalizas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=63aguf2YXo0',
    },
    {
      tema: 'Acondicionamiento',
      referencia:
        'Gobernación del Tolima, Universidad de Ibagué, Universidad del Tolima y Sena Regional Tolima. (2017). Guías para la selección y clasificación.',
      tipo: 'Guías y protocolos',
      link:
        'https://logihfrutic.unibague.edu.co/buenas-practicas/guias-poscosecha',
    },
    {
      tema: 'Recubrimientos y encerados',
      referencia:
        'Cerón , J. P. Q. (2010). Películas y recubrimientos comestibles: importancia y tendencias recientes en la cadena hortofrutícola. Revista tumbaga, 1(5).',
      tipo: 'Artículo',
      link: 'http://revistas.ut.edu.co/index.php/tumbaga/article/view/59',
    },
    {
      tema: 'Recubrimientos y encerados',
      referencia:
        'Pacheco, Pérez. W. (2021). Conferencia recubrimiento comestibles en poscosecha. Unilasallista. Corporación universitaria',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Cubc__Fw5Do',
    },
    {
      tema: 'Etiquetado',
      referencia:
        'Cámara de comercio de Bogotá (2019). Seminario empaques y embalajes para exportación.',
      tipo: 'Seminario',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/3049/2949_empaques_y_embalajes2.pdf',
    },
    {
      tema: 'Almacenamiento',
      referencia:
        'Arrarte, E. (2019). Estrategias para mantener la calidad de frutas durante el almacenamiento poscosecha en frío.',
      tipo: 'Libro',
      link:
        'https://www.colibri.udelar.edu.uy/jspui/bitstream/20.500.12008/32172/1/TD%20Arrarte%2c%20Elo%c3%adsa.pdf',
    },
    {
      tema: 'Trazabilidad',
      referencia:
        'Ecosistemas de Recursos Educativos ECORED. (2020). Trazabilidad',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YYuztIQETBc',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: 'Nelson vera',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Liborio de Jesús Castañeda Valencia',
          cargo: 'Desarrollo Fullstack Junior',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
