<template>
  <div class="app_layout">
    <layout-header />
    <slot></slot>
  </div>
</template>

<script setup>
import LayoutHeader from "@/layouts/LayoutHeader.vue";
</script>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
