<template>
  <div id="app">
    <main>
      <Header />
      <div class="content">
        <transition appear mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </main>
    <Nav />
  </div>
</template>

<script>
import Header from './components/Header';
import Nav from './components/Nav';

export default {
  name: 'App',
  components: {
    Header,
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */

  margin-top: 36px;
  color: white;
}

:root {
  --nav-width: 300px;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  background-color: black;
}

body {
  box-sizing: border-box;
}
</style>

<style lang="scss">

header {
  // border: 1px solid green;
  padding: 20px;
}

nav {
  width: var(--nav-width);
  float: right;
  height: calc(100vh - 72px);

  // border: 1px solid red;
  border-left: 1px solid white;

  a {
    display: block;
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 30px 15px;
    padding-left: 45px;
  }

  a.router-link-active {
    text-decoration: underline;
  }
}

main {
  // border: 1px solid blue;
  width: calc(100% - var(--nav-width));
  float: left;

  .content {
    padding: 20px;
  }
}
</style>
