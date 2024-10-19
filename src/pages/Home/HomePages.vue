<template>
  <div>
    <MainlayoutVue>
      <div
        class="relative h-screen overflow-hidden flex justify-center items-center"
      >
        <video
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
            type="video/mp4"
          />
        </video>
        <div class="relative z-10 text-center p-4 flex flex-col gap-y-10">
          <p
            class="text-white font-bebas font-bold text-lg mg:text-base sm:text-sm"
          >
            A 5v5 character-based tactical shooter
          </p>
          <p
            class="text-white font-bebas font-bold text-5xl md:text-4xl sm:text-3xl"
          >
            VALORANT
          </p>
        </div>
      </div>
      <div
        class="bg-white py-10 px-8 flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center"
      >
        <div class="font-bebas flex flex-col gap-3">
          <p class="font-extrabold text-5xl">WE ARE VALORANT</p>
          <p class="font-bold text-xl">DEFY THE LIMITS</p>
          <p class="font-normal text-sm">
            Blend your style and experience on a global, competitive stage. You
            have 13 rounds to attack and defend your side using sharp gunplay
            and tactical abilities. And, with one life per-round, you'll need to
            think faster than your opponent if you want to survive. Take on foes
            across Competitive and Unranked modes as well as Deathmatch and
            Spike Rush.
          </p>
        </div>
        <div>
          <video
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover"
          >
            <source
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        class="bg-black py-10 px-8 flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center"
      >
        <div class="flex justify-start items-center">
          <div>
            <img
              src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=1232"
            />
          </div>
        </div>
        <div class="font-bebas text-white flex flex-col gap-3">
          <p class="font-extrabold text-5xl">YOUR AGENTS</p>
          <p class="font-bold text-xl">CREATIVITY IS YOUR GREATEST WEAPON.</p>
          <p class="font-normal text-sm">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
          </p>

          <router-link to="/Agent" class="flex justify-start items-center">
            <ButtonVue class="text-center">VIEW ALL AGENTS</ButtonVue>
          </router-link>
        </div>
      </div>
    </MainlayoutVue>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
import ButtonVue from "@/components/Button/Button.vue";
export default {
  components: {
    MainlayoutVue,
    ButtonVue,
  },
  data() {
    return {
      dataAgent: [],
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
        console.log(this.dataAgent);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang=""></style>
