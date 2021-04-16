<template>
  <div class="content-block">
    <div class="content-block__left">
      <router-link to="/projects">Proyectos /</router-link>
      <h2>{{ currentProject.name }}</h2>
    </div>
    <div class="content-block__right">
      <div v-if="currentProject.images !== []">
        <Gallery :images="currentProject.images"></Gallery>
      </div>
      <br>
      <div>{{ currentProject.description }}</div>
    </div>
  </div>
</template>
<script>
import Gallery from "vue-cover-gallery"

export default {
  name: 'ProjectDetails',
  props: ['project'],
  data() {
    return {
      currentProject: this.project,
      fotos: [
        {
          title: "thumb",
          description: "des 1",
          href: require("../assets/images/edc-thumb.jpg")
        },
        {
          title: "title 1",
          description: "des 1",
          href: require("../assets/images/edc-01.jpg")
        },
        {
          title: "title 2",
          description: "des 2",
          href: require("../assets/images/edc-02.jpg")
        },
        {
          title: "title 3",
          description: "des 1",
          href: require("../assets/images/edc-03.jpg")
        },
        {
          title: "title 4",
          description: "des 2",
          href: require("../assets/images/edc-04.jpg")
        },
        {
          title: "title 4",
          description: "des 2",
          href: require("../assets/images/edc-04.jpg")
        },
      ],
    };
  },
  components: {
    Gallery
  }
}
</script>

<style lang="scss">
.more-btn {
  display: none!important;
}
</style>