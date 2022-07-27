<template>
  <div>
    <div class="navbar">
      <router-link
        v-for="item of routes"
        :key="item.name"
        :to="{ path: item.path }"
        >{{ item.name }}</router-link
      >
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: [],
  }),
  created() {
    // mock-chars-generator
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="scss">
html,
body,
#app,
.navs {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  padding: 15px;
  border-bottom: 1px solid #42b983;

  a {
    color: #2c3e50;
    margin-right: 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
