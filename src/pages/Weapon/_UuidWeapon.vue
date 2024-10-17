<template lang="">
  <div>
    <MainlayoutVue>
      <div class="flex flex-col justify-center items-center gap-y-2 p-10">
        <p class="text-white font-bebas text-5xl font-extrabold">
          DETAIL WEAPON
        </p>
        <img :src="weapon.displayIcon" />
        <p class="text-white font-bebas text-2xl font-bold">
          {{ weapon.displayName }}
        </p>
        <p class="text-white font-bebas text-lg font-semibold">
          CATEGORY: {{ getCategory(weapon.category) }}
        </p>
        <p class="text-white font-bebas text-lg font-semibold">
          COST: {{ weapon.shopData?.cost }}
        </p>
        <div
          class="flex flex-col w-full border border-red-500 p-4 text-white font-bebas"
        >
          <div>
            <p class="text-center text-white font-bebas text-3xl font-bold">
              STAT WEAPON
            </p>
          </div>
          <div v-if="weapon.weaponStats === null">
            <p
              class="text-center text-red-500 font-bebas text-5xl font-extrabold"
            >
              THIS WEAPON NO HAVE DETAIL STATS
            </p>
          </div>
          <div class="lg:flex justify-between gap-x-4 text-center" v-else>
            <div class="w-full">
              <div v-for="(items, key) in weapon.weaponStats" :key="key">
                <div
                  class="flex justify-between items-center w-full"
                  v-if="
                    items !== null &&
                    !Array.isArray(items) &&
                    typeof items !== 'object'
                  "
                >
                  <ul>
                    <li class="">
                      <p class="text-center">
                        <strong>{{ key }} :</strong>
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li class="">
                      <p class="text-center">{{ extractKata(items) }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-full">
              <p class="text-center">ADS STATS</p>
              <div
                v-for="(items, key) in weapon.weaponStats?.adsStats"
                :key="key"
                class="flex justify-between items-center w-full"
              >
                <ul>
                  <li>
                    <p class="text-center">
                      <strong>{{ key }}:</strong>
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p class="text-center">{{ items }}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-full">
              <p class="text-center">DAMAGE RANGE</p>
              <div
                v-for="(items, key) in weapon.weaponStats?.damageRanges"
                :key="key"
                class="flex justify-between items-center w-full"
              >
                <ul>
                  <li class="flex flex-col text-center">
                    <p><strong>Start:</strong></p>
                    <p><strong>End:</strong></p>
                    <p><strong>Head Damage:</strong></p>
                    <p><strong>Body Damage:</strong></p>
                    <p><strong>Leg Damage:</strong></p>
                  </li>
                </ul>
                <ul>
                  <li class="flex flex-col text-center">
                    <p>{{ items.rangeStartMeters }} m</p>
                    <p>{{ items.rangeEndMeters }} m</p>
                    <p>{{ items.headDamage }}</p>
                    <p>{{ items.bodyDamage }}</p>
                    <p>{{ items.legDamage }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-y-3 mt-5">
          <p class="text-white font-bebas text-5xl font-extrabold">SKINS</p>

          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full h-full"
          >
            <div v-for="(skin, key) in filterSkin" :key="key">
              <router-link :to="`/Weapon/${weapon.uuid}/${skin.uuid}`">
                <div
                  class="flex flex-col justify-between h-full items-center gap-y-2 p-2 md:p-5 lg:p-10"
                >
                  <img :src="skin.displayIcon" class="max-w-full h-auto" />
                  <p
                    class="text-white font-bebas text-sm md:text-base lg:text-lg font-bold"
                  >
                    {{ skin.displayName }}
                  </p>
                </div>
              </router-link>
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
      weapon: {},
      uuId: "",
    };
  },
  mounted() {
    this.getDetailWeapon();
  },
  methods: {
    async getDetailWeapon() {
      const uuId = this.$route.params.id;
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/weapons/${uuId}`
        );
        this.weapon = res.data.data;
        this.uuId = uuId;
        console.log(this.weapon.skins);
      } catch (err) {
        console.log(err);
      }
    },

    getCategory(category) {
      return category?.split("::")[1];
    },

    extractKata(item) {
      if (typeof item === "string" && item.includes("::")) {
        return item.split("::")[1] || item;
      }
      return item;
    },
  },
  computed: {
    filterSkin() {
      return this.weapon.skins?.filter((skins) => skins.displayIcon !== null);
    },
  },
};
</script>
<style lang=""></style>
