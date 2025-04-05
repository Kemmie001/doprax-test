/** @format */

// stores/toast.ts
import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  }),
  actions: {
    triggerToast(message: string, type: "success" | "error" = "success") {
      this.message = message;
      this.type = type;
      this.show = true;

      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
});
