<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="row">
        <h1> Evaluation Page</h1>
        <board></board>
        <router-link to="landing"> Back home</router-link>
      </div>
    </main>
  </div>
</template>

<script>
  import Board from './EvaluationPage/Board';
export default {
    name: 'evaluation-page',
    components: { Board },
    methods: {
    },
  };
</script>