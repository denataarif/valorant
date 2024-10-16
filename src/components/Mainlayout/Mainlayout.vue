<template lang="">
  <div>
    <Navbar />
    <div class="bg-[#0F1923] pt-16 h-full">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Navbar from "../Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang=""></style>
