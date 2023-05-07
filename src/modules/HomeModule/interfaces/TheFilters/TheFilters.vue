<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";

const generatedPassword: Ref<string> = ref("");
const includeUppercase: Ref<boolean> = ref(false);
const includeLowercase: Ref<boolean> = ref(true);
const includeNumbers: Ref<boolean> = ref(false);
const includeSpecial: Ref<boolean> = ref(false);

const lowercaseChars = "abcdefghijklmnoprstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!@#$%^&*()-_+={}[]:;"<>,./?';

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

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * randomChars.length);
    generatedPassword.value += randomChars[randomIndex];
  }
};

onMounted(() => {
  generatePassword();
});
</script>

<template>
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
    <section id="password">
      <span>{{ generatedPassword }}</span>
    </section>
  </div>
</template>

<style>
#filter {
  display: flex;
}

#filters {
  display: flex;
  flex-direction: column;
}
</style>
