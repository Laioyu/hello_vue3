<!--在style经常用scoped属性实现组件的私有化时，要改变element-ui某个深层元素（eg:.el-input__inner）或其他深层样式时，需要使用::deep()-->
<!--深度作用选择器 >>>-->
<!--（注意，只作用于css）-->
<!--但如果是sass/less的话可能无法识别，这时候需要使用 /deep/和::v-deep 选择器。-->
<!--想修改element-ui某个深层元素也有其他方式解决；-->
<!--解决方法之一：除非你将 scoped 移除，或者新建一个没有 scoped 的 style（一个.vue文件允许多个style）-->

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
      <v-icon style="font-size: 0.7rem">mdi-triangle</v-icon
      ><span style="display: block">sss</span>
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
  name: "V-Deep",
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
