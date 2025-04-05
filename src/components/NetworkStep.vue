<!-- @format -->

<template>
  <div>
    <div class="leading-[20px]">
      <h4 class="text-base font-medium">Network Settings</h4>
      <p class="text-gray-100 pt-2 text-xs font-normal">
        Configure the network settings for your cloud service.
      </p>
      <div>
        <div>
          <div class="flex flex-col md:flex-row gap-8 md:gap-5 mt-6 w-full">
            <div class="w-full">
              <label class="flex gap-1 text-xs" for="vpc"
                >Virtual Private Cloud (VPC)
                <p class="text-[#EF4444]">*</p></label
              >
              <select
                id="vpc"
                required
                v-model="formStore.formData.network.vpc"
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-2 py-2 w-full"
              >
                <option value="Development VPC">Development VPC</option>
                <option value="Production VPC">Production VPC</option>
              </select>
            </div>
            <div class="w-full">
              <label class="flex gap-1 text-xs" for="subnet"
                >Subnet
                <p class="text-[#EF4444]">*</p></label
              >
              <select
                id="subnet"
                required
                v-model="formStore.formData.network.subnet"
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-2 py-2 w-full"
              >
                <option value="Development Subnet (AZ-b)">
                  Development Subnet (AZ-b)
                </option>
                <option value="Production Subnet (AZ-b)">
                  Production Subnet (AZ-b)
                </option>
              </select>
            </div>
          </div>
          <label class="flex items-center gap-2 mt-8">
            <input
              type="checkbox"
              value="Memory Optimized"
              v-model="formStore.formData.network.publicIP"
            />
            <div>
              <p class="text-xs font-normal">Assign public IP address</p>
            </div>
          </label>
          <p class="text-gray-100 text-xs pt-1 font-normal">
            Enable this to make your service accessible from the internet
          </p>
          <div class="mt-6">
            <h6 class="text-xs font-medium">Security Groups</h6>
            <p class="text-gray-100 text-xs pt-1 font-normal">
              Select the security groups to apply to your service
            </p>
            <label
              v-for="group in securityGroupOptions"
              :key="group"
              class="flex items-center mt-4 gap-2"
              :for="group"
            >
              <input
                type="checkbox"
                :name="group"
                :id="group"
                :value="group"
                v-model="formStore.formData.securityGroups"
                class="border-gray-300"
              />
              <p class="text-sm font-medium leading-[20px]">{{ group }}</p>
            </label>
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
  const props = defineProps({
    isEdit: {
      type: Boolean,
      default: false,
    },
  });
  const securityGroupOptions = [
    "Web Traffic (80, 443)",
    "SSH Access (22)",
    "Database (3306, 5432)",
    "Internal Only",
  ];
  const emit = defineEmits(["next", "prev"]);

  const formStore = useFormStore();
  const handlePrev = () => {
    emit("prev");
  };
  const handleNext = () => {
    emit("next");
  };
</script>

<style lang="scss" scoped></style>
