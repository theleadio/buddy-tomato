<template>
  <div class="flex flex-col h-screen relative">
    <naviWrapper class="absolute top-0 z-10 w-screen"/>
    <div class="flex-1 -mt-16 mb-10">
      <nuxt class="pt-40"/>
    </div>
    <footerWrapper class="z-30" />
  </div>
</template>
<script>
import NaviWrapper from "~/components/navi/Wrapper.vue";
import FooterWrapper from "~/components/footer/Wrapper.vue";

export default {
    components:{
        naviWrapper: NaviWrapper,
        footerWrapper: FooterWrapper
    }
}
</script>
