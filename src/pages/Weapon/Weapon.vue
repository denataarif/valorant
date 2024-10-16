<template lang="">
  <div>
    <MainlayoutVue>
      <div class="flex flex-col gap-y-10 pt-10 px-8">
        <p class="font-bebas font-extrabold text-white text-5xl">WEAPON</p>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between items-center"
        >
          <router-link
            v-for="(items, key) in dataWeapon"
            :key="key"
            class="hover:cursor-pointer group"
            :to="`/Weapon/${items.uuid}`"
          >
            <CardVue
              class="h-[300px] group w-full flex flex-col justify-center items-center hover:bg-gray-800"
            >
              <img :src="items.displayIcon" class="object-cover" />
            </CardVue>
            <div class="mt-4">
              <p
                class="text-white group-hover:text-red-500 font-bebas text-2xl font-bold"
              >
                {{ items.displayName }}
              </p>
              <p
                class="text-white group-hover:text-red-500 font-bebas text-lg font-semibold"
              >
                CATEGORY: {{ items.category.split("::")[1] }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </MainlayoutVue>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
import CardVue from "@/components/Card/Card.vue";
export default {
  components: {
    MainlayoutVue,
    CardVue,
  },
  data() {
    return {
      dataWeapon: [],
      Uuid: this.$route.params.uuid,
    };
  },
  mounted() {
    this.getWeapon();
  },
  methods: {
    async getWeapon() {
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/weapons`
        );
        this.dataWeapon = res.data.data;
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>
