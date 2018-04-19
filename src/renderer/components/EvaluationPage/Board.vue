<template>
  <v-stage ref="stage" :config="config">
    <v-layer ref="layer">
      <v-circle :config="configCircle"></v-circle>
    </v-layer>
  </v-stage>
</template>
<script>
export default {
  name: 'board',
  data () {
    return {
      config: {
        width: 500,
        height: 500
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      }
    }
  }
}
</script>