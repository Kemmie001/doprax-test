<!-- @format -->

<template>
  <div>
    <div class="">
      <h4 class="text-base font-medium">Resource Configuration</h4>
      <p class="text-gray-100 pt-2 text-xs font-normal">
        Configure the compute resources for your service.
      </p>
      <div>
        <div class="py-6 mt-2">
          <h4 class="text-sm font-medium">Instance Type</h4>
          <p class="text-gray-100 py-1 text-xs font-normal">
            Select the type of instance that best fits your workload
          </p>
        </div>
        <div>
          <div class="flex flex-col gap-6 mb-10 leading-[20px]">
            <label class="flex items-center gap-4">
              <input
                type="radio"
                value="Standard (General Purpose)"
                v-model="formStore.formData.instanceType"
              />
              <div>
                <h4 class="text-xs font-medium">Standard (General Purpose)</h4>
                <p class="text-gray-100 text-xs font-normal pt-1">
                  Balanced compute, memory, and networking
                </p>
              </div>
            </label>
            <label class="flex items-center gap-4">
              <input
                type="radio"
                value="Compute Optimized"
                v-model="formStore.formData.instanceType"
              />
              <div>
                <h4 class="text-xs font-medium">Compute Optimized</h4>
                <p class="text-gray-100 text-xs pt-1 font-normal">
                  High performance processors
                </p>
              </div>
            </label>
            <label class="flex items-center gap-4">
              <input
                type="radio"
                value="Memory Optimized"
                v-model="formStore.formData.instanceType"
              />
              <div>
                <h4 class="text-xs font-medium">Memory Optimized</h4>
                <p class="text-gray-100 text-xs pt-1 font-normal">
                  Fast performance for memory-intensive workloads
                </p>
              </div>
            </label>
            <label class="flex items-center gap-4">
              <input
                type="radio"
                value="Storage Optimized"
                v-model="formStore.formData.instanceType"
              />
              <div>
                <h4 class="text-xs font-medium">Storage Optimized</h4>
                <p class="text-gray-100 text-xs pt-1 font-normal">
                  Low latency, high disk throughput
                </p>
              </div>
            </label>
          </div>
          <div class="flex flex-col md:flex-row gap-8 md:gap-4 w-full">
            <div class="w-full">
              <label class="flex gap-1 mb-1 text-xs" for="vCPU"
                >vCPU
                <p class="text-[#EF4444]">*</p></label
              >
              <input
                type="text"
                name="vCPU"
                id="vCPU"
                required
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-4 py-2 w-full"
                v-model="formStore.formData.resources.vCPU"
              />
            </div>
            <div class="w-full">
              <label class="flex gap-1 mb-1 text-xs" for="memory"
                >Memory (GB)
                <p class="text-[#EF4444]">*</p></label
              >
              <input
                type="text"
                name="memory"
                id="memory"
                required
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-4 py-2 w-full"
                v-model="formStore.formData.resources.memory"
              />
            </div>

            <div class="w-full">
              <label class="flex gap-1 mb-1 text-xs" for="storage"
                >Storage (GB)
                <p class="text-[#EF4444]">*</p></label
              >
              <input
                type="text"
                name="storage"
                id="storage"
                required
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-4 py-2 w-full"
                v-model="formStore.formData.resources.storage"
              />
            </div>
          </div>
        </div>
        <div
          v-if="!isEdit"
          class="mt-12 md:mt-16 border-t border-gray-200 py-6 flex justify-between"
        >
          <button
            @click="handlePrev"
            class="border cursor-pointer border-gray-200 font-medium py-3 px-5 rounded-md"
          >
            <p class="text-sm">Back</p>
          </button>
          <button
            @click="handleNext"
            class="bg-secondary cursor-pointer text-white text-sm font-medium py-3 px-5 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useFormStore } from "../stores/useFormStore";
  const emit = defineEmits(["next", "prev"]);
  const props = defineProps({
    isEdit: {
      type: Boolean,
      default: false,
    },
  });

  const formStore = useFormStore();
  const handlePrev = () => {
    emit("prev");
  };
  const handleNext = () => {
    emit("next");
  };
</script>

<style lang="scss" scoped></style>
