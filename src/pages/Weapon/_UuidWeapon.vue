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
              <div
                class="flex flex-col justify-between h-full items-center gap-y-2 p-2 md:p-5 lg:p-10"
                @click.prevent="handleModal(skin.uuid)"
              >
                <img :src="skin.displayIcon" class="max-w-full h-auto" />
                <p
                  class="text-white h-full font-bebas text-xs md:text-base lg:text-lg font-thin md:font-bold lg:font-bold"
                >
                  {{ skin.displayName }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainlayoutVue>
    <Modal :showModal="showModal" @close="showModal = false">
      <div class="flex flex-col justify-center items-center gap-y-5 mt-10">
        <img
          :src="dataSkin.displayIcon"
          class="size-2/5 lg:size-fit md:size-fit"
        />
        <p class="text-white text-xl lg:text-4xl font-bebas font-bold">
          {{ dataSkin.displayName }}
        </p>
      </div>
      <p
        class="text-red-500 text-xl lg:text-5xl font-bebas font-bold my-5 text-center"
      >
        VARIANT
      </p>
      <div class="grid grid-cols-4 gap-2 lg:gap-5 px-2 lg:px-5">
        <div
          v-for="(items, key) in varianSkin"
          :key="key"
          class="flex flex-col justify-between items-center gap-y-1 lg:gap-y-5"
          @click.prevent="
            (e) => {
              console.log('clicked', items);
              changeIcon(items);
            }
          "
        >
          <img :src="items.displayIcon" class="lg:size-fit md:size-fit" />
          <p
            class="font-bebas font-extralight lg:font-semibold text-xs lg:text-2xl text-white text-center mt-5"
          >
            {{ items.displayName }}
          </p>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  components: {
    MainlayoutVue,
    Modal,
  },
  data() {
    return {
      weapon: {},
      uuId: "",
      showModal: false,
      dataSkin: [],
      varianSkin: null,
    };
  },
  mounted() {
    this.getDetailWeapon();
    this.getDetailSkin();
  },
  methods: {
    handleModal(uuid) {
      this.showModal = !this.showModal;
      if (uuid) {
        this.getDetailSkin(uuid);
      }
    },

    async getDetailWeapon() {
      const uuId = this.$route.params.id;
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/weapons/${uuId}`
        );
        this.weapon = res.data.data;
        this.uuId = uuId;
        console.log(this.weapon.skins);
        console.log(this.varianSkin?.uuid);
      } catch (err) {
        console.log(err);
      }
    },
    async getDetailSkin(uuid) {
      try {
        const res = await this.$axios.get(
          `https://valorant-api.com/v1/weapons/skins/${uuid}`
        );
        this.dataSkin = res.data.data;
        this.varianSkin = res.data.data.chromas;
        console.log(this.varianSkin.uuid);
      } catch (err) {
        console.log(err);
      }
    },
    changeIcon(updateSkin) {
      this.dataSkin = { ...updateSkin };
      console.log(this.dataSkin);
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
      return this.weapon.skins?.filter(
        (skins) =>
          skins.displayIcon !== null &&
          !skins.displayName.toLowerCase().includes("standard") &&
          !skins.displayName.toLowerCase().includes("random")
      );
    },
    Skin() {
      return this.weapon.varianSkin;
    },
  },
};
</script>
<style lang=""></style>
