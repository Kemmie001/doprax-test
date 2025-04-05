<!-- @format -->

<template>
  <div
    class="text-xs lg:w-1/4 leading-5 pl-3 md:pl-0 md:pt-3 border-l-3 md:border-l-0 md:border-t-3"
    :class="[active ? 'border-secondary' : 'border-gray-200']"
  >
    <h6
      class="font-medium"
      :class="[active ? 'text-secondary' : 'text-gray-100']"
    >
      Step {{ step }}
    </h6>
    <h5 class="font-medium py-0.5">{{ title }}</h5>
    <p class="font-normal text-gray-100">{{ description }}</p>
  </div>
</template>

<script setup>
  defineProps({
    step: Number,
    title: String,
    description: String,
    active: Boolean,
  });
</script>

<style lang="scss" scoped></style>
