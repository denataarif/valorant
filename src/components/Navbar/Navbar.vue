<template lang="">
  <div
    class="bg-black flex justify-between items-center px-3 py-2 fixed w-full z-20"
  >
    <RouterLink to="/">
      <img
        src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
        alt="logo valorant"
        class="size-10"
      />
    </RouterLink>

    <div
      class="opacity-0 lg:flex lg:opacity-100 justify-between items-center gap-x-2 font-bebas text-lg text-white"
    >
      <RouterLink
        to="/Agent"
        class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
      >
        Agent
      </RouterLink>
      <RouterLink
        to="/Weapon"
        class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
      >
        Weapon
      </RouterLink>
      <div class="flex justify-between items-center gap-x-2">
        <ButtonVue class="font-semibold font-bebas text-lg">PLAY NOW</ButtonVue>
      </div>
    </div>

    <div class="flex lg:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isMenu"
      class="flex flex-col bg-black lg:hidden absolute top-14 right-0 w-1/2 h-screen text-white"
    >
      <div
        class="flex flex-col justify-between items-center gap-x-2 mb-2 font-bebas text-lg text-white"
      >
        <RouterLink
          to="/Agent"
          class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
        >
          Agent
        </RouterLink>
        <RouterLink
          to="/Weapon"
          class="hover:text-red-600 hover:bg-gray-900 rounded-md px-2 py-1 hover:border-4 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-red-600"
        >
          Weapon
        </RouterLink>
        <div class="flex justify-between items-center gap-x-2 mt-2">
          <ButtonVue class="font-semibold font-bebas text-lg"
            >PLAY NOW</ButtonVue
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import asset from "@/assets/index.js";
import ButtonVue from "../Button/Button.vue";
export default {
  name: "Navbar-component",
  components: {
    ButtonVue,
  },
  data() {
    return { asset, isMenu: false };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
  },
};
</script>
<style></style>
