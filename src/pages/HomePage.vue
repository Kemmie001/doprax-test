<!-- @format -->

<script setup>
  import { computed, ref } from "vue";
  import Step from "../components/Step.vue";
  import ReviewStep from "../components/ReviewStep.vue";
  import ResourcesStep from "../components/ResourcesStep.vue";
  import { useFormStore } from "../stores/useFormStore";
  import ServiceBasicsStep from "../components/ServiceBasicsStep.vue";
  import NetworkStep from "../components/NetworkStep.vue";

  const steps = [
    {
      id: 1,
      title: "Service Basics",
      description: "Define your service details",
    },
    {
      id: 2,
      title: "Resources",
      description: "Configure compute resources",
    },
    {
      id: 3,
      title: "Network",
      description: "Set up network configuration",
    },
    {
      id: 4,
      title: "Review",
      description: "Review and deploy",
    },
  ];
  const currentStep = computed(() => {
    return formStore.step;
  });

  const formStore = useFormStore();
  const currentStepComponent = computed(() => {
    switch (formStore.step) {
      case 1:
        return ServiceBasicsStep;
      case 2:
        return ResourcesStep;
      case 3:
        return NetworkStep;
      case 4:
        return ReviewStep;
      default:
        return ServiceBasicsStep;
    }
  });

  const handleNext = () => formStore.nextStep();
  const handlePrev = () => formStore.prevStep();
</script>

<template>
  <div>
    <div class="shadow-sm bg-white rounded-lg m-4 md:m-8 p-4 md:p-8">
      <h4 class="text-base font-medium text-primary mt-4">
        Configure New Cloud Service
      </h4>
      <div
        class="flex flex-col md:flex-row justify-between gap-5 lg:gap-12 mt-6 mb-14"
      >
        <Step
          v-for="step in steps"
          :key="step.id"
          :step="step.id"
          :title="step.title"
          :description="step.description"
          :active="
            step.id === currentStep ||
            formStore.completedSteps.includes(step.id)
          "
        />
      </div>
      <div>
        <component
          :is="currentStepComponent"
          @next="handleNext"
          @prev="handlePrev"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
