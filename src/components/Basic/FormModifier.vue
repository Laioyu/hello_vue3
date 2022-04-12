<template>
  <div>
    <span>origin</span>
    <input
      type="text"
      v-model="value"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <p>{{ value }}</p>

    <span>v-model.lazy</span>
    <input
      type="text"
      v-model.lazy="value"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <p>{{ value }}</p>

    <span>v-model.trim</span>
    <input
      type="text"
      v-model.trim="value"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <p>{{ value }}</p>

    <span>v-model.number</span>
    <input
      type="text"
      v-model.number="value"
      required
      minlength="4"
      maxlength="8"
      size="10"
    />
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      value: "",
    };
  },
});
</script>
