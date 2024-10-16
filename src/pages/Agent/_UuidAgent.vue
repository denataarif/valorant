<template lang="">
  <div>
    <MainlayoutVue>
      <div class="px-5">
        <div class="lg:flex justify-between items-center">
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
            <div class="flex">
              <RolecardVue class="p-2">
                <div
                  class="bg-gray-800 flex flex-col justify-center items-center p-5"
                >
                  <img
                    :src="agent.role?.displayIcon"
                    alt="Logo Role"
                    style="
                      filter: brightness(0) saturate(100%) invert(52%)
                        sepia(76%) saturate(3537%) hue-rotate(331deg)
                        brightness(93%) contrast(102%);
                    "
                    class="size-8"
                  />
                  <span class="text-white">ROLE</span>
                  <span class="text-red-500 uppercase">{{
                    agent.role?.displayName
                  }}</span>
                </div>
              </RolecardVue>
            </div>
          </div>
        </div>

        <div class="lg:flex justify-around items-center gap-4 py-10">
          <div class="flex flex-col justify-center items-center">
            <p class="text-white text-5xl font-extrabold font-bebas my-10">
              SPECIAL ABILITIES
            </p>
            <div
              class="flex lg:gap-x-10 gap-x-1 justify-between items-center w-full"
            >
              <img
                v-for="(items, key) in abilities"
                :key="key"
                :src="items.displayIcon"
                :class="
                  items.displayName === this.abilitiesName
                    ? 'size-10 md:size-14 lg:size-20 transform scale-100 transition-transform duration-500 ease-in-out hover:cursor-pointer'
                    : 'opacity-50 size-10 md:size-14 lg:size-20 transform scale-100 hover:scale-125 transition-transform duration-500 ease-in-out hover:cursor-pointer'
                "
                @click="changeName(items.displayName, items.description)"
              />
            </div>
          </div>

          <div
            class="flex flex-col gap-y-6 items-center justify-center w-full lg:w-1/2 mt-2"
          >
            <p class="text-white text-2xl font-bold font-bebas">
              {{ abilitiesName }}
            </p>
            <p class="text-white font-bebas">{{ abilitiesDesc }}</p>
          </div>
        </div>
      </div>
    </MainlayoutVue>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
import RolecardVue from "@/components/Rolecard/Rolecard.vue";
export default {
  components: {
    MainlayoutVue,
    RolecardVue,
  },
  data() {
    return {
      agent: {},
      abilities: {},
      abilitiesName: "",
      abilitiesDesc: "",
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
        this.abilities = res.data.data.abilities;
        this.abilitiesName = this.abilities[0].displayName;
        this.abilitiesDesc = this.abilities[0].description;
        console.log(this.abilities);
      } catch (err) {
        console.log(err);
        // console.log(err.data.data.role);
      }
    },

    changeName(newName, desc) {
      this.abilitiesName = newName;
      this.abilitiesDesc = desc;
      console.log(this.abilitiesName);
    },
  },
};
</script>
<style lang=""></style>
