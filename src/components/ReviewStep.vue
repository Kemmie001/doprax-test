<!-- @format -->

<template>
  <div class="">
    <div class="flex items-center gap-2">
      <img src="../assets/green-tick.svg" alt="green tick" />

      <h4 class="text-base font-medium">Review Configuration</h4>
    </div>
    <p class="text-gray-100 pt-6 text-xs font-normal">
      Please review your service configuration before deployment.
    </p>
    <div class="my-6 bg-gray-400 shadow-xs rounded-md">
      <h5
        class="text-base font-medium px-3 md:px-5 py-4 md:py-6 border-b border-gray-200"
      >
        Service Summary
      </h5>
      <div
        class="px-3 md:px-5 py-3 md:py-6 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-4"
      >
        <p class="text-gray-100 pt-4 text-xs leading-md font-medium md:w-4/12">
          Cover Image
        </p>
        <div class="md:w-8/12">
          <img
            :src="formStore.formData.coverImage"
            alt="cover image"
            class="w-30 h-30 object-cover rounded-sm"
          />
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Service Name
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            {{ formStore.formData.serviceName }}
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Description
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            {{ formStore.formData.description }}
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Region
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            {{ formStore.formData.region }}
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Instance Type
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            {{ formStore.formData.instanceType }}
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Resources
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            {{ formStore.formData.resources.vCPU }} vCPU,
            {{ formStore.formData.resources.memory }} GB Memory,
            {{ formStore.formData.resources.storage }} GB Storage
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 md:border-b items-start border-gray-200 flex flex-col md:flex-row gap-2 md:gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Network
        </p>
        <div class="md:w-8/12">
          <p class="text-xs font-normal text-primary">
            VPC: {{ formStore.formData.network.vpc }}
          </p>
          <p class="text-xs font-normal text-primary py-1">
            Subnet: {{ formStore.formData.network.subnet }}
          </p>
          <p class="text-xs font-normal text-primary">
            Public IP: {{ formStore.formData.publicIP ? "Yes" : "No" }}
          </p>
        </div>
      </div>
      <div
        class="px-3 md:px-5 py-4 md:py-7 items-start flex flex-col md:flex-row gap-4"
      >
        <p class="text-gray-100 text-xs leading-md font-medium md:w-4/12">
          Security Groups
        </p>
        <div class="md:w-8/12 w-full">
          <p
            class="text-xs font-normal text-primary border border-gray-200 p-3 rounded-sm"
          >
            {{ formStore.formData.securityGroups.join(", ") }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[#EFF6FF] rounded-md px-3 md:px-5 py-4 md:py-8">
      <p class="text-[#1E40AF] text-sm font-medium pb-1">Ready to deploy</p>
      <p class="text-[#1D4ED8] text-xs font-normal pt-1">
        Your service is ready for deployment. Click the Deploy button below to
        start the deployment process.
      </p>
    </div>
    <div
      class="mt-12 md:mt-16 border-t border-gray-200 py-6 flex justify-between"
    >
      <button
        @click="handlePrev"
        class="border border-gray-200 font-medium py-3 px-5 rounded-md"
      >
        <p class="text-sm">Back</p>
      </button>
      <button
        @click="formStore.saveDeploymentDetails()"
        class="bg-[#16A34A] text-white text-sm font-medium py-3 px-5 rounded-md"
      >
        Deploy
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useFormStore } from "../stores/useFormStore";

  const emit = defineEmits(["next", "prev"]);
  const formStore = useFormStore();
  const handlePrev = () => {
    emit("prev");
  };
</script>

<style lang="scss" scoped></style>
