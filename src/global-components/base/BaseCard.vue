<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
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
  box-shadow: 0 0 4px var(--color-black);

  @media (max-width: 768px) {
    padding: 10px;
  }
}
</style>
