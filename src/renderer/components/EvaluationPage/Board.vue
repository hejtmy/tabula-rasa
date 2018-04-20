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
        x: 0,
        y: 0,
        image: new Image(),
        width: 500,
        height: 500,
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
        filters: [{ name: 'jpg', extensions: ['jpg'] }] },
      (fileNames) => {
        if (fileNames === undefined) return;
        const fileName = fileNames[0];
        const img = this.$electron.nativeImage.createFromPath(fileName);
        this.openMap(img.toDataURL());
      });
    },
  },
};
</script>