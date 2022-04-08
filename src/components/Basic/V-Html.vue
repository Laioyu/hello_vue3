<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "V-HTML",
  data() {
    return {
      rawHtml: ' <span style="color: red">This should be red</span>',
    };
  },
});
</script>
