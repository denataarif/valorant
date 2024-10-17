<template lang="">
  <div>
    <MainlayoutVue>
      <div class="flex flex-col justify-center items-center gap-y-5 mt-10">
        <img :src="dataSkin?.displayIcon" />
        <p class="text-white text-4xl font-bebas font-bold">
          {{ dataSkin?.displayName }}
        </p>
      </div>
      <p class="text-red-500 text-5xl font-bebas font-bold my-5 text-center">
        VARIANT
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 px-2 lg:px-5">
        <div
          v-for="(items, key) in varianSkin"
          :key="key"
          class="flex flex-col justify-between items-center gap-y-5"
        >
          <img :src="items.displayIcon" />
          <p class="font-bebas font-semibold text-2xl text-white text-center">
            {{ items.displayName }}
          </p>
        </div>
      </div>
    </MainlayoutVue>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
export default {
  components: {
    MainlayoutVue,
  },
  data() {
    return {
      dataSkin: null,
      varianSkin: null,
      levelSkin: null,
    };
  },
  mounted() {
    this.getDetailSkin();
  },
  methods: {
    async getDetailSkin() {
      const uuid = this.$route.params.uuid;
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/weapons/skins/${uuid}`
        );
        this.dataSkin = res.data.data;
        this.varianSkin = res.data.data.chromas;
        this.levelSkin = res.data.data.levels;
        console.log(this.varianSkin);
      } catch (err) {
        console.log(err);
      }
    },

    extractKata(item) {
      if (typeof item === "string" && item.includes("::")) {
        return item.split("::")[1] || item;
      }
      return item;
    },
  },
};
</script>
<style lang=""></style>
