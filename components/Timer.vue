<template>
  <div class=" text-center px-4 py-2 m-2">
    <div class='super'>
        {{ timeLeft | pretty }}
    </div>

    <div>
      <button v-on:click="toggleTimer()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ timerStatus }}</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
    </div>

    <div class='pt-8'>
      <span class='align-middle text-3xl'>Show your support!</span>
      <CounterButton text="👏" field='clap' :counter="counter['clap']"/> 
      <CounterButton text="❤️" field='heart' :counter="counter['heart']"/>
      <CounterButton text="🍾" field='bottle' :counter="counter['bottle']"/> 
      <CounterButton text="🏃‍♂️" field='run' :counter="counter['run']"/>
    </div>

  </div>
</template>

<style>
    .super {
        font-size:200px;
    }
</style>

<script>
import CounterButton from "./CounterButton.vue"

export default {
    components: {
      CounterButton
    },
    props: ['id'],
    data: function () {
        return {
            timeLeft: 1500,
            timeInterval: null,
            counter:{}
        }
    },
    methods: {
        toggleTimer() {
          if (this.timeInterval) {
            clearInterval(this.timeInterval);
            this.timeInterval = false;
          }
          else {
            this.timeInterval = setInterval(() => (this.timeLeft -= 1), 1000);
          }
        },
        async readFireStore() {
          console.log(this.$fireStore)
          var docs = await this.$fireStore.collection("timers")
          .get()
          .then(snaps => {
            snaps.forEach(function(doc) {
              console.log(doc.data());
            })
          })
        }
    },
    computed: {
      timerStatus() {
        if (this.timeInterval) 
        { return "Stop" }
        else { return "Start" }
      }
    },
    watch: {
      timeLeft(newValue) {
      }
    },
    filters:{
      pretty(time) {
        var minutes = Math.floor(time/60)
        var seconds = time % 60;
        return minutes + ":" + seconds.toString().padStart(2,"0")
      }
    },
    mounted: function () {
      let vm = this;
      var postId = this.id;
      var starCountRef = this.$fireDb.ref('timers/' + postId + '/reaction');
      starCountRef.on('value', function(snapshot) {
        console.log('vvv: ', snapshot.val());
        vm.counter = snapshot.val();
});
    }
}
</script>