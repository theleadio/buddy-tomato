<template>
    <div class="h-full w-full md:h-screen md:w-screen">
        <div class="flex flex-col py-5">
            <div class="mx-auto">
                <img class="w-24 object-cover" src="~/assets/img/tomato.png" />
            </div>
            <div class="mx-auto">
                <div class="text-6xl font-bold font-sans tracking-wide">
                    Focus
                </div>
            </div>
            <div class="mx-auto w-full px-10 md:w-1/2 lg:w-1/3">
                <div class="relative">
                    <inputElmt :labelName="'Tasks Name'" :labelId="'title'" :focus="false" :value="task.title" @input="setTitle($event); showMessage=false" 
                        :disabled="false" class="border-b shadow-md text-2xl" :textCenter="true" :blur="updateTask"/>
                    <div class="absolute top-0 right-0 p-4">
                        <i class="fas fa-pencil-alt text-gray-400"></i>
                    </div>
                </div>
                <div class="flex justify-start items-center p-2" v-if="showMessage">
                  <label class="font-sans text-sm text-red-500 tracking-wide font-medium">Please name your task before starting the timer</label>
                </div>
            </div>
            <div class="mx-auto my-5 items-center">
                <div class="text-7xl tracking-wide md:text-9xl">{{ timeLeft | pretty }}</div>
            </div>
            <div class="mx-auto flex items-center justify-center" v-if="task.status !=='DONE'">
                <a href="#" :class="{
                  'transition':true,
                  'duration-300':true,
                  'ease-in-out':true,
                  'bg-blue-400':true,
                  'text-white':true,
                  'font-bold':true,
                  'font-sans':true,
                  'rounded-full':true,
                  'py-2':true,
                  'px-6':true,
                  'mx-2':true,
                  'hover:bg-blue-600':task.title!=='',
                  'cursor-default':task.title==='',
                  'focus:outline-none':true,
                  'active:outline-none':true,
                  }" @click="toggleTimer"> {{timeInterval? 'Pause': 'Start'}} </a>
                <a href="#" :class="{
                  'transition':true,
                  'duration-300':true,
                  'ease-in-out':true,
                  'bg-red-400':true,
                  'text-white':true,
                  'font-bold':true,
                  'font-sans':true,
                  'rounded-full':true,
                  'py-2':true,
                  'px-6':true,
                  'mx-2':true,
                  'hover:bg-red-600':task.title!=='',
                  'cursor-default':task.title==='',
                  'focus:outline-none':true,
                  'active:outline-none':true,
                  }" @click="resetTimer"> Reset </a>
                <div v-if="task.startTime === 0">  
                  <nuxt-link to="/user" class="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-500 text-white font-bold font-sans rounded-full py-3 px-6 mx-2 focus:outline-none active:outline-none"> History </nuxt-link>
                </div>
                <div v-else>
                  <a href="#" :class="{
                    'transition':true,
                    'duration-300':true,
                    'ease-in-out':true,
                    'bg-green-500':true,
                    'text-white':true,
                    'font-bold':true,
                    'font-sans':true,
                    'rounded-full':true,
                    'py-3':true,
                    'px-6':true,
                    'mx-2':true,
                    'hover:bg-green-700':task.title!=='',
                    'cursor-default':task.title==='',
                    'focus:outline-none':true,
                    'active:outline-none':true,
                  }" @click="finishedTask(true)">Finished</a>
                </div>
            </div>
            <div v-else>
              <div class="flex justify-center items-center">
                <div class="flex flex-col">
                  <div class="text-3xl font-sans px-2 text-center">Congrats,</div>
                  <div class="text-3xl font-sans px-2 text-center">{{user.displayName}} !</div>
                  <!-- <div class="flex flex-col">
                    <div class="mt-10 text-lg font-sans px-2 text-center">Share with your friends!</div>
                    <div class="flex items-center justify-center py-2">
                      <button class="mx-2">Facebook</button>
                      <button class="mx-2">Tweet</button>
                      <button class="mx-2">LinkedIn</button>
                    </div>
                  </div> -->
                  <div class="flex justify-center items-center mt-5">
                    <button @click="newTimer" class="transition duration-300 ease-in-out rounded-full bg-green-500 py-3 px-6 text-white text-sm font-bold hover:no-underline hover:bg-green-600 focus:outline-none active:outline-none">
                        New Timer
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputElement from "~/components/items/Input.vue";
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    transition:{
      name:"focus",
      mode:"out-in",
      duration: { enter: 1000, leave: 300 },
      enterActiveClass: "animated fadeInRight",
      leaveActiveClass: "animated fadeOut"
    },
    middleware: 'authenticate',
    components:{
        inputElmt: InputElement
    },
    data: () =>{
        return {
          timeLeft: process.env.ENVIRONMENT === "PROD"?1500:10,
          timeInterval: false,
          showMessage: false
        }
    },
    computed:{
      ...mapState({
        user: state => state.auth.user,
        task: state => state.timer.task
      })
    },
    methods:{
      getTimerValue(){
        return process.env.ENVIRONMENT === "PROD"?1500:10
      },
      setEstimateTime(){
        this.setEsteTime(
          new Date().getTime() + 1000 * this.timeLeft
        )
      },
      resumeTimer(){
        let defaultTime = this.getTimerValue();
        this.setStartTime(
          new Date().getTime() - 1000 * (defaultTime - this.timeLeft)
        );
        this.setEstimateTime();
      },
      setTime(){
        this.setStartTime(new Date().getTime());
        this.setEstimateTime();
        if(this.task.isNew){
          this.createTimer(this.user);
        }
      },
      updateTask(){
        this.$apis.task.updateTask(this.task, this.user.accessToken)
      },
      finishedTask(finished){
        this.setFinishTime();
        clearInterval(this.timeInterval);
        this.timeInterval = false;
        this.updateTask();
      },
      async toggleTimer() {
        if (this.task.title!==''){
          if (this.timeInterval) {
            clearInterval(this.timeInterval);
            this.timeInterval = false;
            this.setPauseCount()
          }
          else {
            this.timeInterval = setInterval(() => {
              this.timeLeft -= 1;
              document.cookie = "timeLeft="+ this.timeLeft
            }, 1000);
            if(this.task.isNew){
              this.setTime();
              this.createTimer(this.user)
            }else{
              this.resumeTimer();
            }
          }
          this.updateTask();
        }else{
          this.showMessage = true;
        }
      },
      newTimer(){
        this.timeLeft = this.getTimerValue();
        this.resetStore()
      },
      resetTimer() {
        if (this.title!==''){
          this.timeLeft = this.getTimerValue();
          this.setResetCount()
          this.setTime();
        }else{
          this.showMessage = true;
        }
        this.updateTask();
      },
      playSound() {
        let snd2 = new Audio("../music/done_sound_clip.mp3");
        snd2.play();
      },
      ...mapMutations({
        setTitle: "timer/setTitle",
        setResetCount: "timer/setResetCount",
        setPauseCount: "timer/setPauseCount",
        setStartTime: "timer/setStartTime",
        setEsteTime: "timer/setEsteTime",
        setFinishTime: "timer/setFinishTime",
        resetStore: "timer/resetStore",
      }),
      ...mapActions({
        createTimer: "timer/createTimer"
      })
    },
    filters:{
      pretty: function(time) {
        let minutes = Math.floor(time/60)
        let seconds = time % 60;
        return minutes + ":" + seconds.toString().padStart(2,"0")
      }
    },
    watch: {
      timeLeft(newValue) {
        if (newValue <=0) {
          if (this.timeLeft <= 0) {
            this.setFinishTime();
            this.playSound();
            clearInterval(this.timeInterval);
            this.timeInterval = false;
            this.updateTask();
          }
        }
      }
    },
    mounted(){
      if(this.task.status === "START"){
        this.timeLeft = parseInt((this.task.esteTime - (new Date().getTime()))/1000);
        this.timeInterval = setInterval(() => {
            this.timeLeft -= 1;
            document.cookie = "timeLeft="+ this.timeLeft
          }, 1000);
          this.setTime();
      }
    },
    beforeDestroy(){
      this.resetStore()
    }
}
</script>
