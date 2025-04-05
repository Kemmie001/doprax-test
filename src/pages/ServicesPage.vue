<!-- @format -->

<template>
  <div class="shadow-sm bg-white rounded-lg m-4 md:m-8 p-4 md:p-8 md:h-[80vh]">
    <div class="">
      <h1 class="text-base py-2 font-medium leading-[28px] mb-5">
        Your Cloud Services
      </h1>
      <div
        v-if="formStore.deploymentDetails"
        class="rounded-lg border border-[#E1E3E6] leading-[20px] md:w-[446px] w-full"
      >
        <div class="p-4">
          <div
            class="w-30 h-30 bg-gray-200 flex justify-center items-center rounded-sm"
          >
            <img
              v-if="formStore.deploymentDetails?.coverImage"
              :src="formStore.deploymentDetails?.coverImage"
              alt="cover image"
              class="w-30 h-30 object-cover rounded-sm"
            />
            <p v-else class="text-sm font-normal text-gray-100">
              No cover image
            </p>
          </div>
          <div class="pt-5">
            <h2 class="text-lg font-medium text-black capitalize">
              {{ formStore.deploymentDetails?.serviceName }}
            </h2>
            <p class="text-sm font-normal text-gray-100 capitalize pt-2">
              {{ formStore.deploymentDetails?.description }}
            </p>
          </div>
        </div>
        <div
          class="border-t border-[#E1E3E6] flex items-center justify-between p-4"
        >
          <div class="flex items-center gap-6">
            <button
              class="cursor-pointer"
              @click="$router.push('/edit-services')"
            >
              <img src="../assets/edit-icon.svg" alt="edit" class="w-5 h-5" />
            </button>
            <button class="cursor-pointer" @click="showDelModal = true">
              <img
                src="../assets/trash-icon.svg"
                alt="delete"
                class="w-5 h-5"
              />
            </button>
          </div>
          <button
            @click="showModal = true"
            class="bg-secondary cursor-pointer text-white text-sm font-medium py-3 px-5 rounded-md"
          >
            View details
          </button>
        </div>
      </div>
      <div v-else class="mt-20">
        <div class="flex flex-col justify-center text-center align-center">
          <img
            src="../assets/cloud-settings.svg"
            alt="delete"
            class="w-6 mx-auto mb-2"
          />
          <h6 class="font-medium leading-[24px] py-2 text-base">
            No cloud services yet
          </h6>
          <p class="mb-4 text-gray-100 text-xs leading-[20px] font-normal">
            Click on the button below to create and manage a cloud service
          </p>
          <div class="flex justify-center gap-6 mt-6">
            <button
              @click="$router.push('/')"
              class="bg-secondary cursor-pointer text-white text-xs font-medium py-3 px-5 rounded-md"
            >
              Create a cloud service
            </button>
          </div>
        </div>
      </div>
    </div>
    <DeleteModal
      :show="showDelModal"
      @confirm="handleDelete"
      @cancel="showDelModal = false"
    />
    <ViewDetailsModal
      :show="showModal"
      @openDeleteModal="showDelModal = true"
      @openEditModal="showEditModal = true"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
  import ViewDetailsModal from "../components/ViewDetailsModal.vue";
  import DeleteModal from "../components/DeleteModal.vue";
  import { useFormStore } from "../stores/useFormStore";
  import { ref } from "vue";
  const formStore = useFormStore();
  const showDelModal = ref(false);

  const handleDelete = async () => {
    formStore.deleteCloudService();
    showDelModal.value = false;
  };
  const showEditModal = ref(false);

  const showModal = ref(false);
</script>

<style scoped></style>
