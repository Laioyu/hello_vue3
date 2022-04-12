html里面的元素都有全套的事件https://stackoverflow.com/questions/7284379/which-dom-events-can-be-bound-to-a-div-element

<template>
  <div v-on:click="testVOn" :class="wrapper">{{ count }}</div>
  <div @click="testVOn" :class="wrapper">{{ count }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      wrapper: "wrapper",
      count: 0,
    };
  },
  methods: {
    testVOn() {
      this.count++;
    },
  },
});
</script>

<style scoped>
.wrapper {
  width: 100px;
  height: 300px;
  background: aqua;
}
</style>
