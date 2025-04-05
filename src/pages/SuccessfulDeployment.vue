<!-- @format -->

<template>
  <div
    class="shadow-sm bg-white rounded-lg m-4 md:m-8 p-4 md:p-8 md:h-[80vh] flex justify-center"
  >
    <div class="text-center md:py-10 p-3 md:px-10">
      <img src="../assets/green-tick.svg" class="mx-auto mb-2" />
      <h1 class="text-base py-2 font-medium leading-[24px]">
        Cloud Service Successfully Deployed
      </h1>
      <p class="text-gray-100 text-xs font-normal leading-[20px]">
        Your application has been successfully deployed!
      </p>
      <button
        @click="$router.push('/services')"
        class="bg-secondary cursor-pointer text-white text-sm font-medium mt-10 py-3 px-5 rounded-md"
      >
        View cloud service
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
</script>

<style scoped></style>
