<template lang="">
  <div>
    <MainlayoutVue>
      <div class="px-5">
        <div class="flex justify-between items-center">
          <div class="flex justify-end items-center w-full">
            <img :src="agent.fullPortrait" class="" />
          </div>
          <div class="flex flex-col gap-y-10">
            <p class="text-white font-bebas font-extrabold text-5xl italic">
              {{ agent.displayName }}
            </p>
            <p class="text-white font-bebas font-semibold text-2xl">
              {{ agent.description }}
            </p>
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
      agent: [],
      //   uuId: this.$route.params.uuid,
    };
  },
  mounted() {
    this.getDetailAgent();
  },
  methods: {
    async getDetailAgent() {
      const uuId = this.$route.params.id;
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/agents/${uuId}`
        );
        this.agent = res.data.data;
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang=""></style>
