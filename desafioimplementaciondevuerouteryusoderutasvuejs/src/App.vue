<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <router-link to="/sobremi">Sobre Mi</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/post/1">UltimoPost</router-link> |
      <router-link to="/rutasinexistentes">Rutas Inexistentes</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
