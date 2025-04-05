<!-- @format -->

<script setup lang="ts">
  import Toast from "./components/Toast.vue";
</script>

<template>
  <div>
    <div class="px-10 py-6 bg-white shadow-sm">
      <h4 class="text-base font-semibold text-primary">
        Cloud Service Deployment
      </h4>
    </div>
    <router-view />
    <Toast />
  </div>
</template>

<style scoped></style>
