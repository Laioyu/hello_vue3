<template>
  <button @click.right="doRightClick">鼠标右键</button>
  <button @click.middle="doMiddleClick">鼠标中键</button>
  <button @click.left="doLeftClick">鼠标右键</button>
  <button @keydown.esc="doESCKeyDown">ESC键位</button>
</template>

<script setup lang="ts">
const doRightClick = () => {
  alert("DoRightClick");
};
const doMiddleClick = () => {
  alert("DoMiddleClick");
};
const doLeftClick = () => {
  alert("DoLeftClick");
};

const doESCKeyDown = () => {
  alert("DoESCKeyDown");
};
</script>
