<template lang="">
  <div class="bg-black flex justify-between px-3 py-2 fixed w-full z-20">
    <img
      src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
      alt="logo valorant"
      class="size-10"
    />
    <div
      class="flex justify-between items-center gap-x-2 font-bebas text-lg text-white"
    >
      <RouterLink
        to="/Agent"
        class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
      >
        Agent
      </RouterLink>
      <p
        class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
      >
        Weapon
      </p>
    </div>
    <div class="flex justify-between items-center gap-x-2">
      <img :src="asset.IcSearch" class="size-6" />
      <ButtonVue class="font-semibold font-bebas text-lg">PLAY NOW</ButtonVue>
    </div>
  </div>
</template>
<script>
import asset from "@/assets/index.js";
import ButtonVue from "../Button/Button.vue";
export default {
  name: "Navbar",
  components: {
    ButtonVue,
  },
  data() {
    return { asset };
  },
};
</script>
<style lang=""></style>
