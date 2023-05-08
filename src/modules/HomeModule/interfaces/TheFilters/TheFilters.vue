<template>
  <div>
    <section id="filter">
      <label>
        <input type="checkbox" v-model="localIncludeUppercase" />
        <span>Uppercase</span>
      </label>
      <label>
        <input type="checkbox" v-model="localIncludeLowercase" />
        <span>Lowercase</span>
      </label>
    </section>
    <section id="filter">
      <label>
        <input type="checkbox" v-model="localIncludeNumbers" />
        <span>Numbers</span>
      </label>
      <label>
        <input type="checkbox" v-model="localIncludeSpecial" />
        <span>Special characters</span>
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
