<template>
    <ShareNetwork
        class="py-2 px-4 mx-2 text-white font-sans font-semibold cursor-pointer"
        style="background-color: rgb(24, 119, 242);"
        network="facebook"
        url="https://focus.thelead.io/"
        :title="`Focus, helps me to finish my task ( ${title} ) in 25 minutes!` "
        description="A simple focus app that uses pomodoro technique. Take a rest after focus for 25 minutes"
        quote="A simple focus app that uses pomodoro technique. Take a rest after focus for 25 minutes"
        hashtags="leadofficial,worksmart"
        >
        <i class="fab fah fa-lg fa-facebook-f text-white"></i>
        Share on Facebook
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
