<!-- @format -->

<template>
  <Transition name="slide-modal">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center md:justify-end bg-[#00000040] z-50"
      @click.self="emitClose"
    >
      <div
        class="bg-white text-center py-5 md:px-6 h-[80vh] md:h-[100vh] shadow-lg max-w-[90%] md:max-w-md w-full"
      >
        <div class="overflow-y-auto h-full">
          <div class="flex justify-between px-4 items-center mb-4">
            <h2 class="text-base text-[#111827] font-semibold">
              Cloud service details
            </h2>
            <div class="flex flex-row-reverse items-center gap-6">
              <button
                @click="emitClose"
                class="text-gray-500 bg-[#EBEFF4] cursor-pointer rounded-full p-2"
              >
                <img
                  src="../assets/close-icon.svg"
                  alt="close"
                  class="w-5 h-5"
                />
              </button>
              <div class="md:flex gap-6 hidden">
                <button
                  class="cursor-pointer"
                  @click="$router.push('/edit-services')"
                >
                  <img
                    src="../assets/edit-icon.svg"
                    alt="edit"
                    class="w-5 h-5"
                  />
                </button>
                <button class="cursor-pointer" @click="emitDelete">
                  <img
                    src="../assets/trash-icon.svg"
                    alt="delete"
                    class="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end pt-5 px-4 border-t border-[#E1E3E6] gap-6 md:hidden"
          >
            <button
              class="cursor-pointer"
              @click="$router.push('/edit-services')"
            >
              <img src="../assets/edit-icon.svg" alt="edit" class="w-5 h-5" />
            </button>
            <button class="cursor-pointer" @click="emitDelete">
              <img
                src="../assets/trash-icon.svg"
                alt="delete"
                class="w-5 h-5"
              />
            </button>
          </div>
          <div class="my-6 p-4 bg-gray-400 shadow-xs rounded-md">
            <div
              class="px-5 py-3 md:py-6 md:border-b items-start border-gray-200 flex flex-col gap-4"
            >
              <p class="text-gray-100 pt-4 text-xs leading-md font-medium">
                Cover Image
              </p>
              <div
                class="w-30 h-30 bg-gray-200 flex justify-center items-center rounded-sm"
              >
                <img
                  v-if="formStore?.deploymentDetails?.coverImage"
                  :src="formStore?.deploymentDetails?.coverImage"
                  alt="cover image"
                  class="w-30 h-30 object-cover rounded-sm"
                />
                <p v-else class="text-xs font-normal text-gray-100">
                  No cover image
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">
                Service Name
              </p>
              <div class="">
                <p class="text-xs font-normal text-primary">
                  {{ formStore?.deploymentDetails?.serviceName }}
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">
                Description
              </p>
              <div class="">
                <p class="text-xs font-normal text-primary">
                  {{ formStore?.deploymentDetails?.description }}
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">Region</p>
              <div class="">
                <p class="text-xs font-normal text-primary">
                  {{ formStore?.deploymentDetails?.region }}
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">
                Instance Type
              </p>
              <div class="">
                <p class="text-xs font-normal text-primary">
                  {{ formStore?.deploymentDetails?.instanceType }}
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">
                Resources
              </p>
              <div class="text-left">
                <p class="text-xs font-normal text-primary">
                  {{ formStore?.deploymentDetails?.resources.vCPU }} vCPU,
                  {{ formStore?.deploymentDetails?.resources.memory }} GB
                  Memory,
                  {{ formStore?.deploymentDetails?.resources.storage }} GB
                  Storage
                </p>
              </div>
            </div>
            <div
              class="px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col gap-2 md:gap-4"
            >
              <p class="text-gray-100 text-xs leading-md font-medium">
                Network
              </p>
              <div class="text-left">
                <p class="text-sm font-normal text-primary">
                  VPC: {{ formStore?.deploymentDetails?.network.vpc }}
                </p>
                <p class="text-sm font-normal text-primary py-1">
                  Subnet: {{ formStore?.deploymentDetails?.network.subnet }}
                </p>
                <p class="text-sm font-normal text-primary">
                  Public IP:
                  {{ formStore?.deploymentDetails?.publicIP ? "Yes" : "No" }}
                </p>
              </div>
            </div>
            <div class="px-5 py-4 md:py-7 items-start flex flex-col gap-4">
              <p class="text-gray-100 text-xs leading-md font-medium">
                Security Groups
              </p>
              <div class="w-full">
                <p
                  class="text-xs text-left font-normal text-primary border border-gray-200 p-3 rounded-sm"
                >
                  {{ formStore?.deploymentDetails?.securityGroups.join(", ") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
  import { useFormStore } from "../stores/useFormStore";
  import { ref, onMounted, onUnmounted } from "vue";
  const formStore = useFormStore();

  const props = defineProps({
    show: Boolean,
  });

  const emit = defineEmits(["close", "openDeleteModal", "openEditModal"]);
  const emitClose = () => emit("close");
  const emitDelete = () => {
    emit("close");
    emit("openDeleteModal");
  };

  const isMobile = ref(window.innerWidth < 768);

  const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<style scoped>
  .slide-modal-enter-active,
  .slide-modal-leave-active {
    transition: all 0.3s ease;
  }

  .slide-modal-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }
  .slide-modal-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  @media (max-width: 768px) {
    .slide-modal-enter-from {
      transform: translateY(100%);
    }
    .slide-modal-leave-to {
      transform: translateY(100%);
    }
  }
</style>
