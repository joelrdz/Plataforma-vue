<template>
  <div>
    <h2>Proyectos</h2>
    <router-link v-for="project in projects" v-show="project.description !== ''" :to="{ name: 'project-details', params: { slug: project.slug, project }}" :key="project.id">
      <div class="project-box">
        <div>{{project.name}} - {{project.year}}</div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.project-box {
  border: 1px solid white;
  width: 200px;
  height: 200px;
  display: inline-block;

  padding: 5px;
  border-radius: 3px;
  margin-right: 5px;

  overflow: hidden;
}
</style>

<script>
export default {
  data() {
    return {
      projects
    }
  }
}

const projects = [
  {
    name: 'EBPA',
    year: 2021,
    slug: 'ebpa',
    cover: 'imgurl',
    id: 1,
    description: ``,
    show: true
  },
  {
    name: 'Almatierra',
    year: 2020,
    slug: 'almatierra',
    cover: 'imgurl',
    id: 2,
    description: ``,
    show: true
  },
  {
    name: 'Petmatch',
    year: 2020,
    slug: 'petmatch',
    cover: 'imgurl',
    id: 3,
    description: ``,
    show: true
  },
  {
    name: 'Unica',
    year: 2020,
    slug: 'unica',
    cover: 'imgurl',
    id: 4,
    description: ``,
    show: true
  },
  {
    name: 'TAMA',
    year: 2020,
    slug: 'tama',
    cover: 'imgurl',
    id: 5,
    description: ``,
    show: true
  },
  {
    name: 'BALVIN',
    year: 2020,
    slug: 'balvin',
    cover: 'imgurl',
    id: 6,
    description: `
      Un mundo de buena vibra, fantasía, felicidad y música, eso es Oasis.
      Los dos mayores exponentes a nivel mundial de la música urbana se unen para mostrar su mundo paralelo donde solo la genialidad es posible.
      Basándose en el pop art, el cover del álbum te transporta al universo de balvin y el conejo malo, donde dinosaurios, conejos y arcoiris conviven en el mundo/mente de ambos artistas.
      El trabajo detallado en 2D de Luis Bañuelos, sentó la idea inicial de la portada, y junto a chocotoycute pudo llevarse al brillante 3D que da la forma definitiva al arte del proyecto.
    `,
    show: true
  },
  {
    name: 'EDC',
    year: 2020,
    slug: 'edc',
    cover: 'imgurl',
    id: 7,
    description: `
      Dirección de arte, ilustración, animación, diseño de escenario y diseño de promocionales para festival.
      Para el Electric Daisy Carnival, el concepto se inclinó hacia una sobreabundancia del color y de elementos psicodélicos que resuenan con el ambiente de la música electrónica de baile (EDM). Se realizó un diseño global del festival, incluyendo escenografía, visuales, gráficos, y contenido promocional.
    `,
    show: true
  },
  {
    name: 'JUANES',
    year: 2020,
    slug: 'juanes',
    cover: 'imgurl',
    id: 8,
    description: `
      La dirección de este proyecto se definió a partir del nombre del álbum. De la frase “Mis Planes Son Amarte” surgió un concepto integral para el arte del álbum y la comunicación oficial en medios. La narrativa que se muestra y el estilo gráfico lúdico son una forma de apelar a un segmento de mercado joven además de conservar la base de fans de un músico ya consolidado en el pop latinoamericano.
    `,
    show: true
  },
  {
    name: 'ZIG ZAG',
    year: 2020,
    slug: 'zigzag',
    cover: 'imgurl',
    id: 9,
    description: `
      Compra y vende artículos semi nuevos de la manera más segura y conveniente del mercado.
      Proyecto enfocado en un start-up mexicano enfocado en innovar un modelo de negocio diferente para la compra-venta de productos usados de una manera híbrida (en línea/presencial)
    `,
    show: true
  },
  {
    name: 'MOTOR DE MÉXICO',
    year: 2020,
    slug: 'mmx',
    cover: 'imgurl',
    id: 10,
    description: `
      Desde el 2013 el Congreso Nacional “Motor de México” se ha posicionado como la plataforma de Jóvenes Universitarios más importante del país, espacio donde expresan sus ideas con el propósito de formar líderes disruptivos, con un enfoque ético y preparados para los retos del futuro. Motor de México es un Congreso que busca impulsar a los catalizadores del cambio, a través de la formación de ciudadanos con un alto sentido de responsabilidad social.
    `,
    show: true
  },
  {
    name: 'CORDEM',
    year: 2020,
    slug: 'cordem',
    cover: 'imgurl',
    id: 11,
    description: `
      Cordem es una organización de la sociedad civil, sin fines de lucro, donde creamos oportunidades para mujeres que carecen de apoyo económico y social y que quieren transformar su entorno.
      En Cordem trabajamos por el empoderamiento y superación de las mujeres.
      Creando acceso equitativo a esquemas de aprendizaje y desarrollo personal y profesional a través de nuestros tres programas. De esta manera buscamos catalizar el desarrollo de las capacidades integrales de las mujeres de la comunidad para el contexto actual y el del futuro, expandiendo las posibilidades de empleabilidad, habilidades blandas, técnicas y humanas.
    `,
    show: true
  },
];
</script>