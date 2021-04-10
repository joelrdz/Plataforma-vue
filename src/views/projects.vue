<template>
  <div>
    <h2>Proyectos</h2>
    <div class="project-box" v-for="project in projects" :key="project.id">
      <div>{{project.name}} - {{project.year}}</div>
    </div>
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
}
</style>

<script>
const projects = [
  {
    name: 'EBPA',
    year: 2021,
    cover: 'imgurl',
    id: 1
  },
  {
    name: 'Almatierra',
    year: 2020,
    cover: 'imgurl',
    id: 2
  },
  {
    name: 'Petmatch',
    year: 2020,
    cover: 'imgurl',
    id: 3
  },
  {
    name: 'Unica',
    year: 2020,
    cover: 'imgurl',
    id: 4
  },
  {
    name: 'TAMA',
    year: 2020,
    cover: 'imgurl',
    id: 5
  },
];

export default {
  data() {
    return {
      projects
    }
  }
}
</script>