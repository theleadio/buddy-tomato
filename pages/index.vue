<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Focus
      </h1>
      <h2 class="subtitle">
        Boost productivity with your friends!
      </h2>
      <div class="links">
       <button class="button--green" v-on:click="createTimer()">
          Create a New Timer
        </button>        
      </div>
      <div class='mt-10'>Focus is a timer based on Pomodoro techniques. It increases your productivity and allows your friends to monitor your progress and support!</div>
      <div>Don't forget to take your deserve break after 25 minutes of hardwork!</div>
      <div class="mt-10">
        Brought to you by <a class='text-blue-500' href='https://www.thelead.io'>LEAD</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
   methods: {
      async createTimer() {
        console.log('create new timer');
        var timerRef = this.$fireDb.ref('timers/');
        var key = timerRef.push().key;
        var newRef = this.$fireDb.ref('timers/' + key); 
        newRef.set({
          reactions: {
            clap:0,
            heart:0,
            bottle:0,
            run:0
          }
        })
        console.log('New timer created, redirecting...')
        this.$router.push(key);
      }
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
