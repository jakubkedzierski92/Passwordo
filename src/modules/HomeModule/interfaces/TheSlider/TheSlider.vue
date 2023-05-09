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

<style lang="sass" scoped>
#slider
  width: 100%
</style>
