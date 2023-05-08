<!-- <script setup lang="ts">
import { Ref, ref } from "vue";
import TheParagraph from "../../components/TheParagraph/TheParagraph.vue";
import characters from "../../stores/characters";

const minLength = 6;
const maxLength = 16;
const passwordLength = ref(minLength);

const generatedPassword: Ref<string> = ref("");
const includeUppercase: Ref<boolean> = ref(false);
const includeLowercase: Ref<boolean> = ref(true);
const includeNumbers: Ref<boolean> = ref(false);
const includeSpecial: Ref<boolean> = ref(true);

const { lowercaseChars, uppercaseChars, symbols, numbers } = characters;

const generatePassword = () => {
  generatedPassword.value = "";
  let randomChars: any = "";
  if (includeUppercase.value) {
    randomChars += uppercaseChars;
  }
  if (includeLowercase.value) {
    randomChars += lowercaseChars;
  }
  if (includeNumbers.value) {
    randomChars += numbers;
  }
  if (includeSpecial.value) {
    randomChars += symbols;
  }

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * randomChars.length);
    generatedPassword.value += randomChars[randomIndex];
  }
};

generatePassword();
</script>

<template>
  <div>
    <TheParagraph text="Character Length" />
    <label id="range">
      <input
        id="slider"
        v-model="passwordLength"
        type="range"
        :min="minLength"
        :max="maxLength"
      />
    </label>
    <div id="filters">
      <section id="filter">
        <label>
          <input type="checkbox" v-model="includeUppercase" />
          <span>Uppercase</span>
        </label>
        <label>
          <input type="checkbox" v-model="includeLowercase" />
          <span>Lowercase</span>
        </label>
      </section>
      <section id="filter">
        <label>
          <input type="checkbox" v-model="includeNumbers" />
          <span>Numbers</span>
        </label>
        <label>
          <input type="checkbox" v-model="includeSpecial" />
          <span>Special characters</span>
        </label>
      </section>
    </div>
    <button id="btn" @click="generatePassword">Generate</button>
    <section id="password">
      <span>{{ generatedPassword }}</span>
    </section>
  </div>
</template>

<style>
#filter {
  display: flex;
  padding: 5px;
  width: 400px;
}

#filters {
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 0;
}

#password {
  margin-top: 20px;
  border: 1px solid var(--color-stroke);
  border-radius: 12px;
  padding: 12px;
}

#btn {
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  text-align: center;
  align-self: center;
}
#slider {
  width: 100%;
}
</style> -->
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
