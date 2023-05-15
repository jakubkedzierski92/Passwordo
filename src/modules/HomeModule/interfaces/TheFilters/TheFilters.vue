<template>
  <div id="filters">
    <section id="filter">
      <label>
        <input type="checkbox" v-model="localIncludeUppercase" />
        <span>Include Uppercase Letterssss</span>
      </label>
      <label>
        <input type="checkbox" v-model="localIncludeLowercase" />
        <span>Include Lowercase Letters</span>
      </label>
    </section>
    <section id="filter">
      <label>
        <input type="checkbox" v-model="localIncludeNumbers" />
        <span>Include Numbers</span>
      </label>
      <label>
        <input type="checkbox" v-model="localIncludeSpecial" />
        <span>Include Symbols</span>
      </label>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFilters",
  props: {
    includeUppercase: {
      type: Boolean,
      required: true,
    },
    includeLowercase: {
      type: Boolean,
      required: true,
    },
    includeNumbers: {
      type: Boolean,
      required: true,
    },
    includeSpecial: {
      type: Boolean,
      required: true,
    },
  },
  emits: [
    "update:includeUppercase",
    "update:includeLowercase",
    "update:includeNumbers",
    "update:includeSpecial",
  ],
  data() {
    return {
      localIncludeUppercase: this.includeUppercase,
      localIncludeLowercase: this.includeLowercase,
      localIncludeNumbers: this.includeNumbers,
      localIncludeSpecial: this.includeSpecial,
    };
  },
  watch: {
    localIncludeUppercase(value) {
      this.$emit("update:includeUppercase", value);
    },
    localIncludeLowercase(value) {
      this.$emit("update:includeLowercase", value);
    },
    localIncludeNumbers(value) {
      this.$emit("update:includeNumbers", value);
    },
    localIncludeSpecial(value) {
      this.$emit("update:includeSpecial", value);
    },
  },
});
</script>

<style lang="sass" scoped>
input
    margin-right: 10px
    border-radius: 12px

label:checked
    background-color: var(--color-black)
    border-radius: 12px
    color: black

label
    padding: 10px
    padding-left: 0
    color: var(--color-body)

#filters
    display: flex
    padding: 10px

#filter
  display: flex
  flex-direction: column
  padding: 10px
  padding-left: 0
  width: 20%
</style>
