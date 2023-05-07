<script setup lang="ts">
import TheParagraph from "../../components/TheParagraph/TheParagraph.vue";
import { ref } from "vue";

const minLength = 6;
const maxLength = 16;
const passwordLength = ref(minLength);
</script>

<template>
  <TheParagraph text="Character Length" />
  <label id="range">
    <input
      v-model="passwordLength"
      type="range"
      :min="minLength"
      :max="maxLength"
    />
  </label>
</template>

<style scoped>
input {
  width: 100%;
}
</style>
