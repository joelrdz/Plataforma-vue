<template>
  <div>
    <div>{{ project.name }}</div>
    <div>{{ project.description }}</div>
    <div v-if="project.images !== []">
      <img v-for="image in project.images" :src="require(`@/assets/images/${image}`)" alt="" :key="image.id">
    </div>
  </div>
</template>
<script>
export default {
  props: ['project']
}
</script>