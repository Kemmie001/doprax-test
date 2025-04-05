<!-- @format -->

<template>
  <div>
    <div class="">
      <h4 class="text-base font-medium">Service Basics</h4>
      <p class="text-gray-100 pt-2 text-xs font-normal">
        Provide basic information about your cloud service.
      </p>
      <div>
        <div>
          <div class="flex flex-col gap-10 mt-6 w-full">
            <div class="flex items-center gap-4" v-if="!isEdit">
              <!-- Image Preview -->
              <div
                class="bg-[#F3F4F6] w-25 h-25 rounded-md flex items-center justify-center"
              >
                <img
                  v-if="formStore.formData.coverImage"
                  :src="formStore.formData.coverImage"
                  alt="cover image"
                  class="w-25 h-25 object-cover rounded-md"
                />
                <div v-else>
                  <img
                    src="../assets/image-icon.svg"
                    alt="icon"
                    class="mx-auto"
                  />
                  <p class="text-gray-100 pt-2 text-xs font-normal">
                    Cover image
                  </p>
                </div>
              </div>
              <!-- Upload Icon -->
              <button
                @click="triggerFileInput"
                class="border border-[#F3F4F6] rounded-md p-3"
              >
                <img
                  src="../assets/upload-icon.svg"
                  class="w-5 h-5 cursor-pointer"
                  alt=""
                />
              </button>

              <!-- Hidden Input -->
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageUpload"
              />

              <div class="">
                <!-- Delete Icon -->
                <button
                  @click="removeImage"
                  class="border border-[#F3F4F6] rounded-md p-3"
                >
                  <img
                    src="../assets/delete-icon.svg"
                    class="w-5 h-5 cursor-pointer"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div class="w-full">
              <label class="flex gap-1 text-xs" for="serviceName"
                >Service Name
                <p class="text-[#EF4444]">*</p></label
              >
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                :disabled="isEdit"
                required
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-2 py-2 w-full md:w-6/12"
                :class="[isEdit ? 'text-gray-100' : 'text-primary']"
                v-model="formStore.formData.serviceName"
              />
            </div>
            <div class="w-full">
              <label class="flex gap-1 text-xs" for="description"
                >Description</label
              >
              <input
                type="text"
                name="description"
                id="description"
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-2 py-2 w-full md:w-6/12"
                :class="[isEdit ? 'text-gray-100' : 'text-primary']"
                :disabled="isEdit"
                v-model="formStore.formData.description"
              />
            </div>

            <div class="w-full">
              <label class="flex gap-1 text-xs" for="region"
                >Region
                <p class="text-[#EF4444]">*</p></label
              >
              <select
                id="region"
                required
                name="region"
                v-model="formStore.formData.region"
                class="shadow-[0px_2px_0px_0px_#0000000D] text-xs rounded-md outline-none px-2 py-2 w-full md:w-6/12"
              >
                <option value="US West (N. California)">
                  US West (N. California)
                </option>
                <option value="US East (N. Virginia)">
                  US East (N. Virginia)
                </option>
                <option value="US East (Ohio)">US East (Ohio)</option>
                <option value="US West (Oregon)">US West (Oregon)</option>
                <option value="Africa (Cape Town)">Africa (Cape Town)</option>
                <option value="Asia Pacific (Hong Kong)">
                  Asia Pacific (Hong Kong)
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          v-if="!isEdit"
          class="mt-12 md:mt-16 border-t border-gray-200 py-6 flex justify-between"
        >
          <button
            disabled
            class="border cursor-not-allowed bg-[#F3F4F6] border-gray-200 font-medium py-3 px-5 rounded-md"
          >
            <p class="text-sm text-[#9CA3AF]">Back</p>
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
  import { ref } from "vue";
  import { useFormStore } from "../stores/useFormStore";

  const emit = defineEmits(["next", "prev"]);
  const props = defineProps({
    isEdit: {
      type: Boolean,
      default: false,
    },
  });

  const formStore = useFormStore();
  const handleNext = () => {
    emit("next");
  };
  const fileInput = ref(null);
  const CLOUD_NAME = "kemiassets";
  const UPLOAD_PRESET = "doprax";

  const triggerFileInput = () => {
    fileInput.value?.click();
  };
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    formStore.formData.coverImage = data.secure_url;
  };

  const removeImage = () => {
    formStore.formData.coverImage = null;
  };
</script>

<style lang="scss" scoped></style>
