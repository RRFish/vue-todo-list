<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">待辦事項</router-link> | 
      <router-link to="/add-event">新增</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>

    <footer>made by rrfish</footer>
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
footer{
  position: absolute;
  bottom: 0;
  background: rgba(155,155,155,0.3);
}
</style>
