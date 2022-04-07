<template>
  <v-slider
    :ticks="tickLabels"
    :min="30"
    :max="120"
    color="#55595d"
    show-ticks="always"
    tick-size="1.5"
    track-fill-color="#338bff"
    track-size="2"
    thumb-size="10"
    hide-details="true"
  ></v-slider>
  <div class="fov-labels__container">
    <div class="fov-labels__item">
      <v-icon style="font-size: 0.7rem">mdi-triangle</v-icon><span style="display: block">sss</span>
    </div>
    <div class="fov-labels__item">
      <div><div></div></div>
    </div>
    <div class="fov-labels__item" style="visibility: hidden">
      <div><div></div></div>
    </div>
    <div class="fov-labels__item">
      <div><div></div></div>
    </div>
  </div>
</template>

<style scoped>
.v-slider ::v-deep(.v-slider__container) {
  height: 1rem;
}
.fov-labels__container {
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
}
.fov-labels__container .fov-labels__item {
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CameraFov",
  data() {
    return {
      tickLabels: {
        30: "",
        60: "",
        120: "",
      },
    };
  },
});
</script>
