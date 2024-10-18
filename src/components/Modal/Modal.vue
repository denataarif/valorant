<template lang="">
  <div class="overflow-hidden" v-show="showModal">
    <div class="fixed inset-0 z-20">
      <div
        class="flex bg-black bg-opacity-50 fixed inset-0 w-full h-full justify-center items-center"
      >
        <div
          class="bg-black rounded-lg shadow-lg flex flex-col p-2 z-30 w-[90%]"
        >
          <div
            className="flex justify-end items-center hover:cursor-pointer"
            @click="handleClose"
          >
            <img :src="asset.IcClose" class="size-4" />
          </div>
          <div><slot></slot></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import asset from "@/assets";

export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { asset };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
<style lang=""></style>
