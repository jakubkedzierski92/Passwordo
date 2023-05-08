<template>
  <TheSlider
    :value="passwordLength"
    :min="minLength"
    :max="maxLength"
    @input="passwordLength = $event.target.valueAsNumber"
  />
  <TheFilters
    :includeUppercase="includeUppercase"
    :includeLowercase="includeLowercase"
    :includeNumbers="includeNumbers"
    :includeSpecial="includeSpecial"
    @update:includeUppercase="includeUppercase = $event"
    @update:includeLowercase="includeLowercase = $event"
    @update:includeNumbers="includeNumbers = $event"
    @update:includeSpecial="includeSpecial = $event"
  />
  <button id="btn" @click="generatePassword">Generate</button>
  <section id="password">
    <span>{{ generatedPassword }}</span>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheFilters from "./TheFilters/TheFilters.vue";
import TheSlider from "./TheSlider/TheSlider.vue";
import characters from "../stores/characters";

const minLength = 6;
const maxLength = 16;
const passwordLength = ref(minLength);

const generatedPassword = ref("");
const includeUppercase = ref(false);
const includeLowercase = ref(true);
const includeNumbers = ref(false);
const includeSpecial = ref(true);

const { lowercaseChars, uppercaseChars, numbers, symbols } = characters;

const generatePassword = () => {
  generatedPassword.value = "";
  let randomChars = "";
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

<style>
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
}
</style>
