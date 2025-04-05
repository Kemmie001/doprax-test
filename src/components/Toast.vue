<!-- @format -->

<template>
  <transition name="fade">
    <div
      v-if="toast.show"
      :class="[
        'fixed top-6 right-6 px-4 py-3 rounded shadow text-sm font-normal text-primary z-50 border-l-3 bg-white',
        toast.type === 'success' ? 'border-green-500' : 'border-red-500',
      ]"
    >
      {{ toast.message }}
    </div>
  </transition>
</template>

<script setup>
  import { useToastStore } from "../stores/useToast";
  const toast = useToastStore();
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
