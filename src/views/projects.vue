<template>
  <div class="content-block">
    <div class="content-block__left">
      <h2>Proyectos</h2>
    </div>
    <div class="content-block__right">
      <router-link  class="project-link" v-for="project in projects" :to="{ name: 'project-details', params: { slug: project.slug, project }}" :key="project.id">
        <div class="project-box">
          <div class="project-box__title">{{project.name}}</div>
          <div class="project-box__thumb" v-if="project.thumb">
            <img :src="require(`@/assets/images/${project.thumb}`)" alt="">
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.project-box {

  width: 300px;
  height: 300px;
  display: inline-block;


  border-radius: 3px;
  margin-right: 15px;
  margin-bottom: 15px;

  overflow: hidden;

  &__title {
    padding: 5px;
  }

  &__thumb {
    img {
      max-width: 100%;
    }
  }

  transition: text-decoration 500ms;

  &:hover {
    text-decoration: underline;
    transition: text-decoration 500ms;
  }


}

  .project-link,
  .project-link:hover {
    color: white;
  }
</style>

<script>
export default {
  data() {
    return {
      projects
    }
  },
  methods: {}
}


const projects = [
  {
    id: 1,
    name: 'EBPA',
    year: 2021,
    slug: 'ebpa',
    thumb: '',
    images: [],
    description: ``,
    show: true
  },
  {
    id: 2,
    name: 'Almatierra',
    year: 2020,
    slug: 'almatierra',
    thumb: '',
    images: [],
    description: ``,
    show: true
  },
  {
    id: 3,
    name: 'Petmatch',
    year: 2020,
    slug: 'petmatch',
    thumb: 'petmatch-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/petmatch-04.jpg')
      },
      {
        href: require('@/assets/images/petmatch-01.jpg')
      },
      {
        href: require('@/assets/images/petmatch-02.jpg')
      },
      {
        href: require('@/assets/images/petmatch-03.jpg')
      },

    ],
    description: ``,
    show: true
  },
  {
    id: 4,
    name: 'Unica',
    year: 2020,
    slug: 'unica',
    thumb: '',
    images: [],
    description: ``,
    show: true
  },
  {
    id: 5,
    name: 'TAMA',
    year: 2020,
    slug: 'tama',
    thumb: '',
    images: [],
    description: ``,
    show: true
  },
  {
    id: 6,
    name: 'BALVIN',
    year: 2020,
    slug: 'balvin',
    thumb: 'balvin-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/balvin-01.jpg')
      },
      {
        href: require('@/assets/images/balvin-02.jpg')
      },
      {
        href: require('@/assets/images/balvin-03.jpg')
      },
      {
        href: require('@/assets/images/balvin-04.jpg')
      },
    ],
    description: `
      Un mundo de buena vibra, fantasía, felicidad y música, eso es Oasis.
      Los dos mayores exponentes a nivel mundial de la música urbana se unen para mostrar su mundo paralelo donde solo la genialidad es posible.
      Basándose en el pop art, el cover del álbum te transporta al universo de balvin y el conejo malo, donde dinosaurios, conejos y arcoiris conviven en el mundo/mente de ambos artistas.
      El trabajo detallado en 2D de Luis Bañuelos, sentó la idea inicial de la portada, y junto a chocotoycute pudo llevarse al brillante 3D que da la forma definitiva al arte del proyecto.
    `,
    show: true
  },
  {
    id: 7,
    name: 'EDC',
    year: 2020,
    slug: 'edc',
    thumb: 'edc-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/edc-01.jpg')
      },
      {
        href: require('@/assets/images/edc-02.jpg')
      },
      {
        href: require('@/assets/images/edc-03.jpg')
      },
      {
        href: require('@/assets/images/edc-04.jpg')
      },
    ],
    description: `
      Dirección de arte, ilustración, animación, diseño de escenario y diseño de promocionales para festival.
      Para el Electric Daisy Carnival, el concepto se inclinó hacia una sobreabundancia del color y de elementos psicodélicos que resuenan con el ambiente de la música electrónica de baile (EDM). Se realizó un diseño global del festival, incluyendo escenografía, visuales, gráficos, y contenido promocional.
    `,
    show: true
  },
  {
    id: 8,
    name: 'JUANES',
    year: 2020,
    slug: 'juanes',
    thumb: 'juanes-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/juanes-03.jpg')
      },
      {
        href: require('@/assets/images/juanes-01.jpg')
      },
      {
        href: require('@/assets/images/juanes-02.jpg')
      },
      {
        href: require('@/assets/images/juanes-04.jpg')
      },
    ],
    description: `
      La dirección de este proyecto se definió a partir del nombre del álbum. De la frase “Mis Planes Son Amarte” surgió un concepto integral para el arte del álbum y la comunicación oficial en medios. La narrativa que se muestra y el estilo gráfico lúdico son una forma de apelar a un segmento de mercado joven además de conservar la base de fans de un músico ya consolidado en el pop latinoamericano.
    `,
    show: true
  },
  {
    id: 9,
    name: 'ZIG ZAG',
    year: 2020,
    slug: 'zigzag',
    thumb: 'zigzag-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/zigzag-03.jpg')
      },
      {
        href: require('@/assets/images/zigzag-01.jpg')
      },
      {
        href: require('@/assets/images/zigzag-02.jpg')
      },
      {
        href: require('@/assets/images/zigzag-04.jpg')
      },
    ],
    description: `
      Compra y vende artículos semi nuevos de la manera más segura y conveniente del mercado.
      Proyecto enfocado en un start-up mexicano enfocado en innovar un modelo de negocio diferente para la compra-venta de productos usados de una manera híbrida (en línea/presencial)
    `,
    show: true
  },
  {
    id: 10,
    name: 'MOTOR DE MÉXICO',
    year: 2020,
    slug: 'mmx',
    thumb: 'mmx-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/mmx-03.jpg')
      },
      {
        href: require('@/assets/images/mmx-01.jpg')
      },
      {
        href: require('@/assets/images/mmx-02.jpg')
      },
      {
        href: require('@/assets/images/mmx-04.jpg')
      },
    ],
    description: `
      Desde el 2013 el Congreso Nacional “Motor de México” se ha posicionado como la plataforma de Jóvenes Universitarios más importante del país, espacio donde expresan sus ideas con el propósito de formar líderes disruptivos, con un enfoque ético y preparados para los retos del futuro. Motor de México es un Congreso que busca impulsar a los catalizadores del cambio, a través de la formación de ciudadanos con un alto sentido de responsabilidad social.
    `,
    show: true
  },
  {
    id: 11,
    name: 'CORDEM',
    year: 2020,
    slug: 'cordem',
    thumb: 'cordem-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/cordem-03.jpg')
      },
      {
        href: require('@/assets/images/cordem-01.jpg')
      },
      {
        href: require('@/assets/images/cordem-02.jpg')
      },
      {
        href: require('@/assets/images/cordem-04.jpg')
      },
    ],
    description: `
      Cordem es una organización de la sociedad civil, sin fines de lucro, donde creamos oportunidades para mujeres que carecen de apoyo económico y social y que quieren transformar su entorno.
      En Cordem trabajamos por el empoderamiento y superación de las mujeres.
      Creando acceso equitativo a esquemas de aprendizaje y desarrollo personal y profesional a través de nuestros tres programas. De esta manera buscamos catalizar el desarrollo de las capacidades integrales de las mujeres de la comunidad para el contexto actual y el del futuro, expandiendo las posibilidades de empleabilidad, habilidades blandas, técnicas y humanas.
    `,
    show: true
  },
  {
    id: 12,
    name: 'BLOW',
    year: 2021,
    slug: 'blow',
    thumb: 'blow-thumb.jpg',
    images: [
      {
        href: require('@/assets/images/blow-04.jpg')
      },
      {
        href: require('@/assets/images/blow-01.jpg')
      },
      {
        href: require('@/assets/images/blow-02.jpg')
      },
      {
        href: require('@/assets/images/blow-03.jpg')
      },
    ],
    description: ``,
    show: true
  },
];
</script>