<template>
  <div>
    <MainlayoutVue>
      <div class="flex justify-center items-center">
        <video autoplay loop muted playsinline class="background-video w-full">
          <source
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
            type="video/mp4"
          />
        </video>
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
