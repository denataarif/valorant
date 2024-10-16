<template lang="">
  <div>
    <MainlayoutVue>
      <div class="flex flex-col gap-y-10 pt-10 px-8">
        <p class="font-bebas font-extrabold text-white text-5xl">AGENTS</p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardVue v-for="(item, key) in filterAgent" :key="key">
            <router-link
              :to="`/Agent/${item.uuid}`"
              class="relative w-full group flex flex-col justify-center items-center"
            >
              <div class="relative w-full h-96 overflow-hidden">
                <img
                  :src="item.background"
                  class="absolute inset-0 opacity-50 w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out"
                />
                <img
                  :src="item.bustPortrait"
                  class="object-cover absolute inset-0 w-full h-full transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out"
                />
              </div>
              <span
                class="bg-[#ECE8E1] group-hover:bg-gray-600 group-hover:transition-all group-hover:ease-in-out w-full px-2 py-1 font-semibold text-lg font-bebas"
                >{{ item.displayName }}</span
              >
            </router-link>
          </CardVue>
        </div>
      </div>
    </MainlayoutVue>
  </div>
</template>
<script>
import CardVue from "@/components/Card/Card.vue";
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";

export default {
  components: {
    CardVue,
    MainlayoutVue,
  },
  data() {
    return {
      dataAgent: [],
      Uuid: this.$route.params.uuid,
    };
  },
  mounted() {
    this.getAgent();
  },

  methods: {
    async getAgent() {
      try {
        const res = await this.$axios.get(`https://valorant-api.com/v1/agents`);
        this.dataAgent = res.data.data;
        console.log(this.$route.params.uuid);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    filterAgent() {
      return this.dataAgent.filter((agent) => agent.bustPortrait !== null);
    },
  },
};
</script>
<style lang=""></style>
