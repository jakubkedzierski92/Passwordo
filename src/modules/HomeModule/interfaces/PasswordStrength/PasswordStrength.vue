<template>
  <section id="passwordStrength">
    <div id="info">
      <TheParagraph text="Strength" />
      <span :class="passwordInformation">{{ info }}</span>
    </div>
    <div id="strengthVolume">
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
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
  },
  computed: {
    info() {
      return this.information;
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

#passwordStrength
    margin: 20px 0 60px 0
</style>
