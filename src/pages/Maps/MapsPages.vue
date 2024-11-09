<template lang="">
  <div>
    <MainlayoutVue>
      <div class="relative flex flex-col gap-10 p-10">
        <p class="font-bebas font-extrabold text-white text-5xl">MAPS</p>
        <div class="absolute -top-10 right-0">
          <p class="font-bebas font-extrabold text-white text-9xl opacity-10">
            WE ARE
          </p>
          <p class="font-bebas font-extrabold text-white text-9xl opacity-10">
            VALORANT
          </p>
        </div>
        <div class="relative flex h-full gap-x-10 overflow-hidden">
          <div class="w-screen h-screen relative flex-shrink-0">
            <img
              :src="currentMap?.splash || ''"
              class="object-cover w-full h-full rounded-lg overflow-hidden"
            />
            <div
              class="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-80"
            >
              <p
                class="NameMaps text-white font-bebas text-5xl font-extrabold shadow-lg text-center"
              >
                {{ currentMap?.displayName || "loading..." }}
              </p>
              <div class="flex justify-between items-center gap-x-4">
                <div
                  class="rounded-full bg-white bg-opacity-50 w-12 h-12 flex items-center justify-center"
                  @click.prevent="prevMaps"
                >
                  <img
                    src="@/assets/Icons/arrow-sm-right-svgrepo-com.svg"
                    class="rotate-180 opacity-80"
                  />
                </div>
                <div
                  class="rounded-full bg-white bg-opacity-50 w-12 h-12 flex items-center justify-center"
                  @click.prevent="nextMaps"
                >
                  <img
                    src="@/assets/Icons/arrow-sm-right-svgrepo-com.svg"
                    class="opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
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
      dataMaps: [],
      currentIndexMaps: 0,
    };
  },
  mounted() {
    this.getMaps();
  },
  methods: {
    async getMaps() {
      try {
        const res = await this.$axios.get(`https://valorant-api.com/v1/maps`);
        this.dataMaps = res.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    nextMaps() {
      if (this.currentIndexMaps < this.dataMaps.length - 1) {
        this.currentIndexMaps += 1;
      } else {
        this.currentIndexMaps = 0;
      }
    },
    prevMaps() {
      if (this.currentIndexMaps > 0) {
        this.currentIndexMaps -= 1;
      } else {
        this.currentIndexMaps = this.dataMaps.length - 1;
      }
    },
  },
  computed: {
    currentMap() {
      return this.dataMaps[this.currentIndexMaps];
    },
  },
};
</script>
<style lang=""></style>
