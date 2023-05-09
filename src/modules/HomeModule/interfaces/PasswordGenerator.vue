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
  <PasswordStrength
    :generatePasswordStrength="generatePasswordStrength"
    :passwordInformation="passwordInformation"
    :information="info"
  />
  <button id="btn" @click="generatePassword">Generate</button>
  <section id="password">
    <span id="holder">{{ generatedPassword }}</span>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import TheFilters from "./TheFilters/TheFilters.vue";
import TheSlider from "./TheSlider/TheSlider.vue";
import PasswordStrength from "./PasswordStrength/PasswordStrength.vue";
import characters from "../stores/characters";

const minLength = 4;
const maxLength = 16;
const passwordLength = ref(6);

let info = "";

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

const generatePasswordStrength = computed(() => {
  if (passwordLength.value < 8) {
    return "weak";
  } else if (passwordLength.value >= 8 && passwordLength.value < 12) {
    return "medium";
  } else {
    return "strong";
  }
});

const passwordInformation = computed(() => {
  if (generatePasswordStrength.value === "weak") {
    return (info = "Low password strength");
  }
  if (generatePasswordStrength.value === "medium") {
    return (info = "Average password strength");
  } else return (info = "Strong password strength");
});
</script>

<style lang="sass">
span
    color: var(--color-body)
#holder
  color: var(--color-black)

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
  border: none

  &:hover
    background-color: var(--color-black-on-hover)

.weak
    background-color: var(--color-red)

.medium
    background-color: var(--color-yellow)

.strong
    background-color: var(--color-green)
#info
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px
</style>
