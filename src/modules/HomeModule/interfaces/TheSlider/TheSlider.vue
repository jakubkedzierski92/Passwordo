<!-- <script setup lang="ts">
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
</style> -->

<template>
  <label>
    <input
      id="slider"
      v-model="localValue"
      type="range"
      :min="min"
      :max="max"
      @input="onInput"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSlider",
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:value"],
  data() {
    return {
      localValue: this.value,
    };
  },
  methods: {
    onInput(event: Event) {
      const newValue = (event.target as HTMLInputElement).valueAsNumber;
      this.localValue = newValue;
      this.$emit("update:value", newValue);
    },
  },
});
</script>

<style scoped>
#slider {
  width: 100%;
}
</style>
