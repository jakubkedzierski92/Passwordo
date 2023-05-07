<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
  // define component properties and methods here
});
</script>

<style lang="scss">
.base-card {
  padding: 40px;
  border: 1px solid var(--color-stroke);
  border-radius: 12px;
  width: 80%;
  margin: auto;
  margin-top: 40px;
}
</style>
