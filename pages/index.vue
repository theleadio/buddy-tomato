<template>
<div class="flex">
  <div class="text-center w-full">
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
      <div class='mt-10 mx-6'>
        <p>Focus is a productivity app based on the Pomodoro Technique by Francesco Cirilo. The technique breaks down your work into intervals, called a Pomodoro – each at 25 minutes.</p>
      </div>

      <div class='text-left mx-6'>
        <h2 class='text-2xl mt-5'>Why use Focus?</h2>
        <p>During each Pomodoro interval (25 minutes), put in maximum focus on your task and avoid distractions. By focusing, you will find yourself completing projects faster with less mental fatigue. </p>
        <p class='mt-4 mb-4 font-bold'>The goal of this technique is to reduce internal and external distractions when working.</p>

        <h2 class='text-2xl my-4'>Here's how to use it: </h2>
        <ol class='list-decimal ml-4'>
          <li>Decide on a task to do.</li>
          <li>Start the timer & work on your task.</li>
          <li>End your work when the timer rings. </li>
          <li>When the timer ends, take a 5 minutes break. </li>
          <li>After four pomodoros, take a 30 minutes break.</li>
      </ol>


      </div>
      
      <div class="mt-10">
        Brought to you by <a class='text-blue-500' href='https://www.thelead.io'>LEAD</a>
      </div>
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
