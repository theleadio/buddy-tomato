<template>
    <ShareNetwork
        class="py-2 px-4 mx-2 text-white font-sans font-semibold cursor-pointer"
        style="background-color: rgb(29, 161, 242);"
        network="twitter"
        url="https://focus.thelead.io/"
        :title="`Finished another my task: ${title}`"
        description="A simple focus app that uses pomodoro technique. Take a rest after focus for 25 minutes"
        quote="A simple focus app that uses pomodoro technique. Take a rest after focus for 25 minutes"
        hashtags="leadofficial,worksmart"
        >
        <i class="fab fah fa-lg fa-twitter text-white"></i>
        Share on Twitter
    </ShareNetwork>
</template>
<script>
export default {
  // Nothing needed here
  props: {
      title:{
        type: String,
        default: "Pomodoro"
      }
  }
}
</script>
