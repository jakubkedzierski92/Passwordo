<script setup lang="ts">
import { TheHeader } from "..";
import { BaseCard } from "../../../../global-components";
import TheFilters from "../../interfaces/TheFilters/TheFilters.vue";
import TheSlider from "../../interfaces/TheSlider/TheSlider.vue";
</script>

<template>
  <BaseCard>
    <TheHeader title="Password generator" />
    <TheSlider />
    <TheFilters />
  </BaseCard>
</template>

<style lang="scss">
@import "./HomePage";
</style>
