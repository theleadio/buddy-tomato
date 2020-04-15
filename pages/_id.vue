<template>
  <div class="w-screen flex-col">
    <div class="flex">
      <div class="w-full mt-5">
        <h1 class='text-5xl text-center'>🍅 Buddy Tomato 🍅 </h1>
        <h2></h2>
      </div>
    </div>
      <div class="flex">
      <div class="w-full justify-center">
        <Timer id='udMJEWnSp8ZIAz0mTlvT' />
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from "../components/Timer.vue"

  export default {
    components: {
      Timer
    }
  }
</script>