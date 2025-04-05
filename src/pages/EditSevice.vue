<!-- @format -->

<template>
  <div class="shadow-sm bg-white rounded-lg m-4 md:m-8 p-4 md:p-8">
    <h4 class="text-base font-medium text-primary mt-4 mb-14">
      Edit Service Configuration
    </h4>
    <div class="flex flex-col gap-15">
      <ServiceBasicsStep :isEdit="true" />
      <ResourcesStep :isEdit="true" />
      <NetworkStep :isEdit="true" />
    </div>
    <div
      class="mt-12 md:mt-16 border-t border-gray-200 py-6 flex justify-end gap-5"
    >
      <button
        @click="$router.push('/services')"
        class="border border-gray-200 font-medium cursor-pointer py-3 px-5 rounded-md"
      >
        <p class="text-sm">Cancel</p>
      </button>
      <button
        @click="formStore.editDeploymentDetails()"
        class="bg-secondary text-white text-sm font-medium cursor-pointer py-3 px-5 rounded-md"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import NetworkStep from "../components/NetworkStep.vue";
  import ResourcesStep from "../components/ResourcesStep.vue";
  import ServiceBasicsStep from "../components/ServiceBasicsStep.vue";
  import { useFormStore } from "../stores/useFormStore";
  const formStore = useFormStore();
  onMounted(() => {
    if (formStore?.deploymentDetails) {
      formStore.formData.serviceName =
        formStore?.deploymentDetails?.serviceName;
      formStore.formData.description =
        formStore?.deploymentDetails?.description;
      formStore.formData.region = formStore?.deploymentDetails?.region;
      formStore.formData.coverImage = formStore?.deploymentDetails?.coverImage;
      formStore.formData.network.vpc =
        formStore?.deploymentDetails?.network.vpc;
      formStore.formData.network.subnet =
        formStore?.deploymentDetails?.network?.subnet;
      formStore.formData.network.publicIP =
        formStore?.deploymentDetails?.network?.publicIP;
      formStore.formData.securityGroups =
        formStore?.deploymentDetails?.securityGroups;
      formStore.formData.resources.vCPU =
        formStore?.deploymentDetails?.resources.vCPU;
      formStore.formData.resources.memory =
        formStore?.deploymentDetails?.resources?.memory;
      formStore.formData.resources.storage =
        formStore?.deploymentDetails?.resources?.storage;
      formStore.formData.instanceType =
        formStore?.deploymentDetails?.instanceType;
    }
  });
</script>

<style lang="scss" scoped></style>
