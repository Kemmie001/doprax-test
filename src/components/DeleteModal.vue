<!-- @format -->

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-[#00000040] z-50"
    @click.self="onCancel"
  >
    <div
      class="bg-white text-center p-5 py-10 md:px-10 rounded-md shadow-lg max-w-[90%] md:max-w-md w-full flex flex-col justify-center align-center"
    >
      <img
        src="../assets/trash-icon.svg"
        alt="delete"
        class="w-6 mx-auto mb-2"
      />
      <h6 class="font-medium leading-[24px] py-2 text-base">
        Delete this cloud service
      </h6>
      <p class="mb-4 text-gray-100 text-xs leading-[20px] font-normal">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      <div class="flex justify-center gap-6 mt-6">
        <button
          @click="onCancel"
          class="px-4 cursor-pointer py-2 text-xs bg-[#F3F4F6] text-[#9CA3AF] border border-[#D1D5DB] rounded"
        >
          No, cancel
        </button>
        <button
          @click="onConfirm"
          class="px-4 py-2 bg-[#EF4444] text-xs cursor-pointer text-white rounded"
        >
          Yes delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    show: Boolean,
  });
  const emit = defineEmits(["confirm", "cancel"]);

  const onConfirm = () => emit("confirm");
  const onCancel = () => emit("cancel");
</script>
