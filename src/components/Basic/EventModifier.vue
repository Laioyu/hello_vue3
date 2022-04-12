在事件处理程序中调用event.preventDefault()或event.stopPropagation()是非常常见的需求。尽管可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理DOM事件细节
<template>
  <a v-on:click.stop="doStop">click.stop</a>
  <form v-on:submit.prevent="doSubmit">submit.prevent</form>
  <a v-on:click.stop.prevent="doStopAndPrevent">click.stop.prevent</a>
  <div v-on:click.capture="doClickCapture">click.capture</div>
  <div v-on:click.self="doClickSelf">click.self</div>
  <a v-on:clck.once="doClickOnce">click.once</a>
  <div v-on:scroll.passive="doScroll" class="testDiv">
    test scroll.passive test scroll.passive test scroll.passive test
    scroll.passivetest scroll.passivetest scroll.passivevtest scroll.passivetest
    scroll.passivetest scroll.passivetest scroll.passivetest scroll.passivetest
    scroll.passive
  </div>
</template>

<style scoped>
.testDiv {
  overflow: scroll;
  width: 100px;
  height: 100px;
  background: aqua;
}
</style>

<script setup lang="ts">
const doStop = () => {
  alert("DoStop");
};

const doSubmit = () => {
  alert("DoSubmit");
};

const doStopAndPrevent = () => {
  alert("DoStopPrevent");
};

const doClickCapture = () => {
  alert("DoClickCapture");
};
const doClickSelf = () => {
  alert("DoClickSelf");
};

const doClickOnce = () => {
  alert("DoClickOnce");
};
const doScroll = () => {
  alert("doScroll");
};
</script>
