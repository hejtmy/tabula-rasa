<template>
  <div>
    <v-stage ref="stage" :config="config">
      <v-layer ref="layer">
        <v-circle :config="configCircle"></v-circle>
        <v-image :config="configImage"></v-image>
      </v-layer>
    </v-stage>
    <button class="alt" @click="openMap()">Load map</button>
    <button class="alt" @click="doThing()">Do thig</button>
  </div>
</template>
<script>
export default {
  name: 'board',
  data() {
    return {
      config: {
        width: 500,
        height: 500,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
      },
      configImage: {
        x: 100,
        y: 100,
        image: new Image(),
        width: 300,
        height: 300,
      },
    };
  },
  methods: {
    openMap() {
      const img = new Image();
      img.src = './static/tw118.jpg';
      this.configImage.image = img;
    },
  },
};
</script>