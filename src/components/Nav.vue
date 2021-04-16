<template>
  <nav>
    <router-link to="/projects" exact>
      <div>Proyectos</div>
      <div>2017-2021</div>
    </router-link>
    <router-link to="/services">Plataforma</router-link>
    <!-- <router-link to="/about">About Us</router-link> -->
    <!-- <router-link to="/projects">Proyectos</router-link> -->
    <router-link to="/contact">Contacto</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  // background-color: pink;
}

a:hover {
  color: white;
}
</style>