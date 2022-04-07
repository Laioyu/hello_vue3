<template>
  <camera-fov />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import CameraFov from "../components/CameraFov/CameraFov.vue";

export default defineComponent({
  name: "RenderView",

  components: {
    CameraFov,
  },
});
</script>
