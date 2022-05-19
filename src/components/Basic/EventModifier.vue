在事件处理程序中调用event.preventDefault()或event.stopPropagation()是非常常见的需求。尽管可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理DOM事件细节
<template>
  <a v-on:click.stop="doStop">click.stop：阻止冒泡修饰符</a>
  <form v-on:submit.prevent="doSubmit">
    form触发submit后触发event.preventDefault()
  </form>
  <button type="button" @click.prevent="doClickPrevent">
    buttonClick()触发submit后触发event.preventDefault()
  </button>
  <a v-on:click.stop.prevent="doStopAndPrevent">click.stop.prevent</a>
  <div v-on:click.capture="doClickCapture">click.capture：捕获冒泡修饰符</div>
  <div v-on:click.self="doClickSelf">
    click.self：将事件绑定到自身，只有自身能触发
  </div>
  <a v-on:clck.once="doClickOnce">click.once：只触发一次</a>
  <div v-on:scroll.passive="doScroll" class="testDiv">
    告诉浏览器不阻止事件的默认行, 该修饰符尤其能提高移动端的性能。 test
    scroll.passive test scroll.passive test scroll.passive test
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

const doClickPrevent = () => {
  alert("DoClickPrevent");
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
