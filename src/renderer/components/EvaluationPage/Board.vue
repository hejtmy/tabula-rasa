<template>
  <div>
    <v-stage ref="stage" :config="config">
      <v-layer ref="layer">
        <v-image :config="configImage"></v-image>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
    <button class="alt" @click="openMap('./static/tw118.jpg')">Load map</button>
    <button class="alt" @click="openMapFile()">Do thig</button>
  </div>
</template>
<script>
// import path from 'path';

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
    openMap(src) {
      const img = new Image();
      img.src = src;
      this.configImage.image = img;
    },
    openMapFile() {
      this.$electron.remote.dialog.showOpenDialog({
        filters: [{ name: 'text', extensions: ['txt'] }] },
      (fileNames) => {
        if (fileNames === undefined) return;
        const fileName = fileNames[0];
        this.openMap(fileName);
      });
    },
  },
};
</script>