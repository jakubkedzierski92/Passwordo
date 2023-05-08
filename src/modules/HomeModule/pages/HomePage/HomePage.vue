<script setup lang="ts">
import { TheHeader } from "..";
import { BaseCard } from "../../../../global-components";
import PasswordGenerator from "../../interfaces/PasswordGenerator.vue";
</script>

<template>
  <BaseCard>
    <TheHeader title="Password generator" />
    <PasswordGenerator />
  </BaseCard>
</template>

<style lang="scss">
@import "./HomePage";
</style>
