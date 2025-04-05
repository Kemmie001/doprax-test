/** @format */

import {
  deleteService,
  editService,
  sendDeploymentData,
} from "../service/apis";
import { defineStore } from "pinia";
import router from "../router/index";
import { useToastStore } from "../stores/useToast";

export const useFormStore = defineStore("form", {
  state: () => ({
    step: 1,
    formData: {
      coverImage: "",
      serviceName: "",
      description: "",
      region: "",
      instanceType: "",
      resources: {
        vCPU: 0,
        memory: 0,
        storage: 0,
      },
      network: {
        vpc: "",
        subnet: "",
        publicIp: false,
      },
      securityGroups: [],
    },
    errors: {} as Record<string, string>,
    completedSteps: [] as any,
    deploymentDetails: null,
    isLoading: false,
  }),
  actions: {
    validateStep(): boolean {
      const toast = useToastStore();
      this.errors = {};

      if (this.step === 1) {
        if (!this.formData.serviceName || !this.formData.region) {
          this.errors.step1 = "Service name and region are required.";
          toast.triggerToast(this.errors.step1, "error");
          return false;
        }
      }

      if (this.step === 2) {
        if (
          !this.formData.instanceType ||
          !this.formData.resources.vCPU ||
          !this.formData.resources.memory ||
          !this.formData.resources.storage
        ) {
          this.errors.step2 =
            "Instance type and resource specifications are required.";
          toast.triggerToast(this.errors.step2, "error");
          return false;
        }
      }

      if (this.step === 3) {
        if (!this.formData.network.vpc || !this.formData.network.subnet) {
          this.errors.step3 = "VPC and subnet are required.";
          toast.triggerToast(this.errors.step3, "error");
          return false;
        }
      }

      return true;
    },
    markStepComplete(step: number) {
      if (!this.completedSteps.includes(step)) {
        this.completedSteps.push(step);
      }
    },
    nextStep() {
      if (this.validateStep()) {
        this.markStepComplete(this.step);
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) this.step--;
    },
    goToStep(target: number) {
      if (this.completedSteps.includes(target)) {
        this.step = target;
      }
    },
    async saveDeploymentDetails() {
      const toast = useToastStore();
      this.isLoading = true;
      try {
        const response = await sendDeploymentData(this.formData);
        this.deploymentDetails = response?.data;
        toast.triggerToast("Deployment saved successfully!", "success");
      } catch (error: any) {
        toast.triggerToast(
          "Error saving deployment. Please try again.",
          "error"
        );
      } finally {
        this.isLoading = false;
        router.push("/success");
        this.resetForm();
      }
    },
    async editDeploymentDetails() {
      const toast = useToastStore();

      try {
        const response = await editService(
          this.deploymentDetails?.id,
          this.formData
        );
        this.deploymentDetails = response?.data;
        toast.triggerToast("Service details edited successfully!", "success");
      } catch (error: any) {
        toast.triggerToast(
          "Error editing deployment. Please try again.",
          "error"
        );
      } finally {
        router.push("/services");
      }
    },
    async deleteCloudService() {
      const toast = useToastStore();
      try {
        const response = await deleteService(this.deploymentDetails?.id);
        this.deploymentDetails = null;
        toast.triggerToast("Service deleted successfully!", "success");
      } catch (error: any) {
        toast.triggerToast(
          "Error deleting service. Please try again.",
          "error"
        );
      } finally {
        router.push("/services");
        this.resetForm();
      }
    },
    resetForm() {
      this.step = 1;
      this.formData = {
        serviceName: "",
        description: "",
        region: "",
        instanceType: "",
        resources: {
          vCPU: 0,
          memory: 0,
          storage: 0,
        },
        network: {
          vpc: "",
          subnet: "",
          publicIp: false,
        },
        securityGroups: [],
      };
      this.errors = {};
      this.completedSteps = [];
    },
  },
});
