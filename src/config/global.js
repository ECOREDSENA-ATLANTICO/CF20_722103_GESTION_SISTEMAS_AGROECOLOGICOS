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
        'Agencia Japonesa de Cooperación Internacional. (s.f.). VI. Manejo y cría de ganado bovino.',
      link:
        'https://www.jica.go.jp/project/bolivia/3065022E0/04/pdf/4-3-1_10.pdf',
    },
    {
      referencia:
        'Bertucci, A. (s.f.). Anatomía y fisiología animal. Facultad de Ciencias Agrarias.',
      link:
        'https://www.fca-ude.edu.uy/upload/Materiales/ANATOMIA_Y_FISIOLOGIA-0113-0003.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2006). Bienestar Animal: Nuevo reto para la ganadería',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/enfermedades-animales',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura (IICA). (2009). Manual de Buenas Prácticas en Explotaciones Ganaderas de Carne Bovina.',
      link: 'https://www.biopasos.com/documentos/048.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura. (s.f.). Capítulo 2. Movilización de ganado',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Paginas/Decreto-1071-2015/CAPITULO-2-Movilizacion-de-Ganado.aspx',
    },
    {
      referencia:
        'Salas, M. & Manteca, X. (2016). Evaluación del bienestar en animales de zoológico: indicadores basados en el animal. Centro de educación en bienestar de animales de zoológico.',
      link: 'http://www.zawec.org/media/com_lazypdf/pdf/Ficha%20ZAWEC%204.pdf',
    },
    {
      referencia:
        'Tafur Garzón, A. & Acosta Barbosa J.M. (2006). Bienestar Animal: Nuevo reto para la ganadería. ICA.',
      link:
        'https://www.ica.gov.co/getattachment/79b98e64-a258-46d5-9ce1-1375a8312434/Publicacion-20.aspx',
    },
    {
      referencia:
        'Universidad de Córdoba. (s.f.). Tema 23. El manejo de los animales domésticos enfocado hacia la protección animal. Control del comportamiento, manejo y modos de contención.',
      link:
        'http://www.uco.es/organiza/departamentos/prod-animal/economia/aula/img/pictorex/06_07_09_TEMA_23.pdf',
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
      tema: '1. Identificación animal',
      referencia:
        'Aula vet. (2021, marzo 22). Terminología Anatómica - Anatomía Veterinaria. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cZGVzjbJKgY',
    },
    {
      tema: '2. Anatomía de las especies pecuarias.',
      referencia:
        'Agro tendencia. (2020, 29 de octubre). Tecnologías de identificación animal | Agro para el siglo 21. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oBd03GITIBM',
    },
    {
      tema: '3. Anatomía de las especies pecuarias.',
      referencia:
        'TvAgro. (2018, 25 de septiembre). INCREÍBLES tratamientos alternativos para ANIMALES - TvAgro por Juan Gonzalo Angel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qCNc27m-CUk',
    },
    {
      tema: '4. Tratamientos alternativos',
      referencia:
        'Senasa Comunica. (2017, 24 de agosto). Bienestar animal. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eJymjFBeJNE',
    },
    {
      tema: '5. Registro',
      referencia:
        'COASGROP HIJOS DEL CAMPO. (2021, 26 de agosto). Bioseguridad en las explotaciones pecuarias. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zgWVX_cWMeo',
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
