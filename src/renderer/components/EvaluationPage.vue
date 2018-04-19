<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="row">
        <h1> Evaluation Page</h1>
        <router-link to="landing"> Back home</router-link>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'evaluation-page',
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>