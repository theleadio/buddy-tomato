<template>
    <div class="h-full w-full md:h-screen md:w-screen">
        <div class="flex flex-col py-5">
            <div class="mx-auto">
                <img class="w-24 object-cover" src="~/assets/svg/tomato.svg" />
            </div>
            <div class="mx-auto">
                <div class="text-6xl font-bold font-sans tracking-wide">
                    Focus
                </div>
            </div>
            <div class="mx-auto w-full px-10 md:w-1/2 lg:w-1/3">
                <inputElmt :labelName="'Tasks Name'" :labelId="'title'" :focus="false" :value="title" @input="setTitle($event)" 
                    :disabled="false"/>
            </div>
            <div class="mx-auto my-5 items-center">
                <div class="text-7xl tracking-wide md:text-9xl">{{ timeLeft | pretty }}</div>
            </div>
            <div class="mx-auto">
                <a href="#" class="hover:bg-blue-600 transition duration-300 ease-in-out bg-blue-400 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none active:outline-none" @click="toggleTimer"> {{timeInterval? 'Pause': 'Start'}} </a>
                <a href="#" class="hover:bg-red-600 transition duration-300 ease-in-out bg-red-400 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none active:outline-none" @click="resetTimer"> Reset </a>
                <a href="#" class="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-500 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none active:outline-none"> History </a>
            </div>
        </div>
    </div>
</template>
<script>
import InputElement from "~/components/items/Input.vue";

export default {
    components:{
        inputElmt: InputElement
    },
    data: () =>{
        return {
            title : "",
            timeLeft: 1500,
            timeInterval: false
        }
    },
    methods:{
        setTitle(event) {
            console.log(event);
            this.title = event;
        },
        toggleTimer() {
          if (this.timeInterval) {
            clearInterval(this.timeInterval);
            this.timeInterval = false;
          }
          else {
            this.timeInterval = setInterval(() => {
              this.timeLeft -= 1;
              document.cookie = "timeLeft="+ this.timeLeft
            }, 1000);
          }
        },
        resetTimer() {
          console.log('reset timer');
          this.timeLeft = 1500;
        },
    },
    filters:{
      pretty: function(time) {
        let minutes = Math.floor(time/60)
        let seconds = time % 60;
        return minutes + ":" + seconds.toString().padStart(2,"0")
      }
    },
}
</script>
