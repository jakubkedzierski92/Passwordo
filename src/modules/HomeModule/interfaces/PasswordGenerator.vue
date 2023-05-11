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
    :information="passwordInformation()"
  />
  <section id="password">
    <span id="holder"
      >{{ generatedPassword }}
      <button id="refresh" @click="generatePassword"><refresh /></button
    ></span>
  </section>
  <button id="btn" @click="copyPassword">
    <span id="copyStyle"><copy /><span id="copyText">Copy Password</span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import TheFilters from "./TheFilters/TheFilters.vue";
import TheSlider from "./TheSlider/TheSlider.vue";
import PasswordStrength from "./PasswordStrength/PasswordStrength.vue";
import characters from "../stores/characters";
import copy from "../../../assets/images/copy.vue";
import refresh from "../../../assets/images/refresh.vue";

export default defineComponent({
  name: "PasswordGenerator",
  components: { TheFilters, TheSlider, PasswordStrength, copy, refresh },
  setup() {
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

    const copyPassword = () => {
      navigator.clipboard.writeText(generatedPassword.value);
    };

    const generatePasswordStrength = computed(() => {
      if (passwordLength.value < 6) {
        return "superweak";
      } else if (passwordLength.value < 9) {
        return "weak";
      } else if (passwordLength.value >= 9 && passwordLength.value < 12) {
        return "medium";
      } else {
        return "strong";
      }
    });

    const passwordInformation = () => {
      if (generatePasswordStrength.value === "superweak") {
        return "Low password strength";
      }
      if (generatePasswordStrength.value === "weak") {
        return "Low password strength";
      }
      if (generatePasswordStrength.value === "medium") {
        return "Average password strength";
      }
      return "Strong password strength";
    };

    return {
      minLength,
      maxLength,
      passwordLength,
      generatedPassword,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecial,
      generatePassword,
      copyPassword,
      generatePasswordStrength,
      passwordInformation,
    };
  },
});
</script>

<style lang="sass">
span
    color: var(--color-body)
#holder
  color: var(--color-black)
  display: flex
  justify-content: space-between
  align-items: center

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
  margin-top: 40px

  &:hover
    background-color: var(--color-black-on-hover)
.superweak
    background-color: var(--color-red)
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

#copyText
    margin-left: 10px
    color: var(--color-white)

#copyStyle
    display: flex
    justify-content: center
    align-items: center

#refresh
    border: none
    background-color: transparent
</style>
