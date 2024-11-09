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
        <div
          class="Tittle relative z-10 text-center p-4 flex flex-col gap-y-10"
        >
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
          <p class="scrollIn scrollInFirst font-extrabold text-5xl">
            WE ARE VALORANT
          </p>
          <p class="scrollIn scrollInSecond font-bold text-xl">
            DEFY THE LIMITS
          </p>
          <p class="scrollIn scrollInThird font-normal text-sm">
            Blend your style and experience on a global, competitive stage. You
            have 13 rounds to attack and defend your side using sharp gunplay
            and tactical abilities. And, with one life per-round, you'll need to
            think faster than your opponent if you want to survive. Take on foes
            across Competitive and Unranked modes as well as Deathmatch and
            Spike Rush.
          </p>
        </div>
        <div class="">
          <video
            autoplay
            loop
            muted
            playsinline
            class="scrollVideo w-full h-full object-cover"
          >
            <source
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div
        class="py-10 px-8 flex flex-col gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center relative"
      >
        <div class="absolute bg-red-500 w-5 h-5 left-4 top-4"></div>
        <div class="absolute bg-red-500 w-5 h-5 left-20 top-4"></div>
        <div class="absolute bg-red-500 w-5 h-5 right-10 top-4"></div>
        <div
          class="absolute bg-red-500 w-5 h-5 right-20 bottom-10 rounded-full"
        ></div>
        <div class="absolute bg-red-500 w-3 h-3 right-20 top-10"></div>
        <div
          class="absolute bg-red-500 w-2 h-2 right-60 top-20 rounded-full"
        ></div>

        <!-- <div class="absolute bg-red-500 w-5 h-5 right-20 top-10"></div>
        <div class="absolute bg-red-500 w-5 h-5 right-20 top-10"></div> -->
        <div class="flex justify-start items-center z-10">
          <div class="relative">
            <div class="agent">
              <img
                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=1232"
              />
            </div>
            <div
              class="agentLine absolute bg-red-500 w-full h-1 left-0 -bottom-2 rounded-full"
            ></div>
          </div>
        </div>
        <div class="captionAgent font-bebas text-white flex flex-col gap-3">
          <p class="font-extrabold text-5xl">YOUR AGENTS</p>
          <p class="font-bold text-xl">CREATIVITY IS YOUR GREATEST WEAPON.</p>
          <p class="font-normal text-sm">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
          </p>
          <ButtonVue class="text-center w-fit cursor-pointer">
            <router-link to="/Agent"> VIEW ALL AGENTS </router-link>
          </ButtonVue>
        </div>
      </div>
      <div
        class="flex flex-col-reverse bg-white py-10 px-8 gap-10 lg:flex lg:flex-row lg:justify-between lg:items-center"
      >
        <div class="font-bebas flex flex-col gap-3 justify-center">
          <P class="font-extrabold text-5xl">YOUR MAPS</P>
          <P class="font-bold text-xl">FIGHT AROUND THE WORLD</P>
          <P class="font-normal text-sm"
            >Each map is a playground to showcase your creative thinking.
            Purpose-built for team strategies, spectacular plays, and clutch
            moments. Make the play others will imitate for years to come..</P
          >
          <ButtonVue class="text-center w-fit cursor-pointer">
            <router-link to="/Maps"> VIEW ALL Maps </router-link>
          </ButtonVue>
        </div>
        <div>
          <img
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png?auto=format&fit=fill&q=80&w=711"
            alt="maps images"
          />
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
    this.observeAgent();
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
    observeAgent() {
      const observer = new IntersectionObserver((entries) => {
        // intersectionObserver itu API js untuk melihat perubahan suatu element yang sudah masuk kedalam jarakpandang layar
        entries.forEach((entry) => {
          // entries ini tuh bentuk nya array of object, dari IntersectionObserverEntry

          if (entry.isIntersecting) {
            //dibagian looping dan bagian if ini di cek setiap entries nya entry.isIntersecting itu bernilai TRUE kalau element yang di pantau
            // mulai terlihat di layar
            entry.target.classList.add("animate");
            // bagian diatas ini menambahkan class animate pada setiap entry yang bernilai TRUE
            observer.unobserve(entry.target);
            // bagian diatas ini menghentikan observasi pada looping
          }
        });
      });
      const agents = document.querySelectorAll(".agent");
      agents.forEach((agent) => {
        observer.observe(agent);
      });
      const captionAgent = document.querySelectorAll(".captionAgent");
      captionAgent.forEach((captionAgent) => {
        observer.observe(captionAgent);
      });
      // function diatas adalah function untuk mengamati element dengan class "agent" menggunakan querySelectorAll
      // serta kita looping dan memanggil function observer untuk meng-observe(agent)
    },
  },
};
</script>
<style lang="css">
.Tittle {
  animation: fadeOutUp 4s forwards;
}
@keyframes fadeOutUp {
  0% {
    transform: translateZ(100%);
    opacity: 0;
  }
  100% {
    transform: translateZ(0%);
    opacity: 1;
  }
}
.scrollIn {
  animation: ScrollIn 4s forwards;
  opacity: 0;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
.scrollInFirst {
  animation-duration: 4s;
}
.scrollInSecond {
  animation-duration: 3.5s;
  animation-delay: 0.5s;
}
.scrollInThird {
  animation-duration: 3s;
  animation-delay: 1s;
}
.scrollVideo {
  animation: scrollFromRight 5s forwards;
  opacity: 0;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
@keyframes ScrollIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
    scale: 0.5;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
    scale: 1;
  }
}
@keyframes scrollFromRight {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.agent,
.captionAgent {
  opacity: 0;
}
.agent.animate {
  animation: fromTop 5s forwards;
}
.captionAgent.animate {
  animation: fromBottom 5s forwards;
}
@keyframes fromTop {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes fromBottom {
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
