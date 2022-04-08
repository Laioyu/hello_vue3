<template>
  <span>{{ message }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextInterpolation",
  data() {
    return {
      message: "Hello World",
    };
  },
});
</script>
