<template>
  <div>
    <div>{{ project.name }}</div>
    <div>{{ project.description }}</div>
  </div>
</template>
<script>
export default {
  props: ['project']
}
</script>