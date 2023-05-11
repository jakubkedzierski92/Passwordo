<template>
  <section
    id="passwordStrength"
    :class="[
      'passwordStrength-' + generatePasswordStrength,
      { expanded: isExpanded },
    ]"
    :style="{ backgroundColor: bgColor }"
  >
    <div id="info">
      <TheParagraph text="Strength" />
      <span :class="passwordInformation">{{ info }}</span>
    </div>
    <div id="strengthVolume">
      <div
        class="strengthBox"
        :class="{
          superweak: generatePasswordStrength === 'superweak',
          weak: generatePasswordStrength === 'weak',
          medium: generatePasswordStrength === 'medium',
          strong: generatePasswordStrength === 'strong',
        }"
      ></div>
      <div
        class="strengthBox"
        :class="{
          weak: generatePasswordStrength === 'weak',
          medium: generatePasswordStrength === 'medium',
          strong: generatePasswordStrength === 'strong',
        }"
      ></div>
      <div
        class="strengthBox"
        :class="{
          medium: generatePasswordStrength === 'medium',
          strong: generatePasswordStrength === 'strong',
        }"
      ></div>
      <div
        class="strengthBox"
        :class="{ strong: generatePasswordStrength === 'strong' }"
      ></div>
    </div>
  </section>
</template>

<script lang="ts">
import TheParagraph from "../../components/TheParagraph/TheParagraph.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PasswordStrength",
  components: {
    TheParagraph,
  },
  props: {
    generatePasswordStrength: {
      type: String,
      required: true,
    },
    passwordInformation: {
      type: Function,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
      bgColor: "var(--color-grey)",
    };
  },
  computed: {
    info() {
      return this.information;
    },
    passwordStrengthClass() {
      return "passwordStrength-" + this.generatePasswordStrength;
    },
  },
  watch: {
    generatePasswordStrength(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.isExpanded = true;
        this.bgColor = "white";
        this.$nextTick(() => {
          const passwordStrengthElement =
            document.getElementById("passwordStrength");
          if (passwordStrengthElement) {
            passwordStrengthElement.style.transform = "scale(1.15)";
            passwordStrengthElement.style.transition =
              "transform 0.3s ease-in-out";
          }
        });
      }
      setTimeout(() => {
        this.isExpanded = false;
        this.bgColor = "var(--color-grey)";
        this.$nextTick(() => {
          const passwordStrengthElement =
            document.getElementById("passwordStrength");
          if (passwordStrengthElement) {
            passwordStrengthElement.style.transform = "";
            passwordStrengthElement.style.transition =
              "transform 0.3s ease-in-out";
          }
        });
      }, 1000);
    },
  },
});
</script>

<style lang="sass">
#strengthVolume
  display: flex
  align-items: flex-end
  justify-content: space-between
  margin-bottom: 10px
  padding: 5px

.strengthBox
    height: 6px
    background-color: var(--color-stroke)
    width: 24%
    border: solid 1px var(--color-stroke)
    border-radius: 12px
    margin-bottom: 20px
    transition: width 0.5s, background-color 0.5s

#passwordStrength
    margin: 20px 0 60px 0
    padding: 10px
    padding-left: 0
    border-radius: 12px

.passwordStrength-superweak
  background-color: var(--color-white)



.passwordStrength-weak
  background-color: var(--color-white)



.passwordStrength-medium
  background-color: var(--color-white)



.passwordStrength-strong
  background-color: var(--color-white)
</style>
