<!--如果 isButtonDisabled 具有真值，则将包含 disabled 属性。如果值为空字符串，它也将被包括在内，保持与 <button disabled=""> 的一致性。对于其他虚假值，该属性将被省略。-->
注意v-bind所有的bind都只能bind到 vue对象里面，
<template>
  <div v-bind:id="dynamicId">Dynamic Bind Id</div>
  <v-btn elevation="2" :disabled="isButtonDisabled">Button bind Disabled</v-btn>
  <div v-bind="objectOfAttrs"></div>
  <div :id="`TemplateString${templateStringTestId}`" :class="wrapper"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      wrapper: "wrapper", //如果没定义这个属性，:class="wrapper"是找不到.wrapper
      dynamicId: "testId",
      isButtonDisabled: false, //true //"true"
      message: "123abc456edf789",
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      templateStringTestId: "ddd",
    };
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
