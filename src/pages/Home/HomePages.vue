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
    </MainlayoutVue>
  </div>
</template>
<script>
import MainlayoutVue from "@/components/Mainlayout/Mainlayout.vue";
export default {
  components: {
    MainlayoutVue,
  },
};
</script>
<style lang=""></style>
