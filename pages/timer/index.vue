<template>
    <div class="h-screen w-screen">
        <naviWrapper />
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
                <div class="text-9xl tracking-wide">{{ timeLeft | pretty }}</div>
            </div>
            <div class="mx-auto">
                <button class="hover:bg-blue-600 transition duration-300 ease-in-out bg-blue-400 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none hover:outline-none" @click="toggleTimer"> {{timeInterval? 'Pause': 'Start'}} </button>
                <button class="hover:bg-red-600 transition duration-300 ease-in-out bg-red-400 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none hover:outline-none" @click="resetTimer"> Reset </button>
                <button class="hover:bg-gray-700 transition duration-300 ease-in-out bg-gray-500 text-white font-bold font-sans rounded-full py-2 px-6 mx-2 focus:outline-none hover:outline-none"> History </button>
            </div>
        </div>
        <footerWrapper />
    </div>
</template>
<script>
import NaviWrapper from "~/components/navi/Wrapper.vue";
import InputElement from "~/components/items/Input.vue";
import FooterWrapper from "~/components/footer/Wrapper.vue";

export default {
    components:{
        naviWrapper: NaviWrapper,
        inputElmt: InputElement,
        footerWrapper: FooterWrapper
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
