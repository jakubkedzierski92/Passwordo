<template>
  <TheSlider
    :value="passwordLength"
    :min="minLength"
    :max="maxLength"
    @input="
      passwordLength = $event.target.valueAsNumber;
      generatePassword();
    "
  />
  <TheFilters
    :includeUppercase="includeUppercase"
    :includeLowercase="includeLowercase"
    :includeNumbers="includeNumbers"
    :includeSpecial="includeSpecial"
    @update:includeUppercase="
      includeUppercase = $event;
      generatePassword();
    "
    @update:includeLowercase="
      includeLowercase = $event;
      generatePassword();
    "
    @update:includeNumbers="
      includeNumbers = $event;
      generatePassword();
    "
    @update:includeSpecial="
      includeSpecial = $event;
      generatePassword();
    "
  />
  <button id="btn" @click="generatePassword">Generate</button>
  <section id="password">
    <span id="holder">{{ generatedPassword }}</span>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheFilters from "./TheFilters/TheFilters.vue";
import TheSlider from "./TheSlider/TheSlider.vue";
import characters from "../stores/characters";

const minLength = 4;
const maxLength = 16;
const passwordLength = ref(6);

const generatedPassword = ref("");
const includeUppercase = ref(true);
const includeLowercase = ref(false);
const includeNumbers = ref(true);
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

<style lang="sass">
#holder
  color: var(--color-black)

#filters
  display: flex
  flex-direction: column
  padding: 10px
  padding-left: 0


#password
  margin-top: 20px
  border: 1px solid var(--color-stroke)
  border-radius: 12px
  padding: 12px


#btn
  background-color: var(--color-black)
  color: var(--color-white)
  border-radius: 12px
  padding: 12px
  width: 100%

  &:hover
    background-color: var(--color-black-on-hover)
</style>
