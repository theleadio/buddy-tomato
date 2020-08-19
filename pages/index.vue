<template>
    <div class="flex flex-col py-5">
        <div class="mx-auto">
            <img class="w-40 object-cover cursor-pointer" src="~/assets/img/tomato.png" @click="instruction=!instruction"/>
        </div>
        <div class="mx-auto">
            <div class="text-6xl font-bold font-sans tracking-wide md:text-8xl">
                Focus
            </div>
        </div>
        <div class="mx-auto px-5 md:px-10">
            <div class="text-2xl font-bold font-sans tracking-wide text-center md:text-4xl">
                Boost Productivity with your friends!
            </div>
        </div>
        <div class="mx-auto my-10">
            <nuxt-link to="/timer" class="transition duration-300 ease-in-out rounded-full bg-green-400 py-3 px-6 text-white text-sm font-bold hover:no-underline hover:bg-green-600 focus:outline-none active:outline-none">
                Create a New Timer
            </nuxt-link>
        </div>
        <div class="mx-auto md:mt-20 px-12 md:px-24 lg:px-64">
            <div class="font-semibold font-sans text-center">
                Focus is a productivity app based on the Pomodoro Technique by Francesco Cirilo. 
                The technique breaks down your work into intervals, called a Pomodoro - each at 25 minutes.
            </div>
        </div>
        <div class="absolute h-screen w-screen bg-gray-800 top-0 z-20 px-6" v-if="instruction">
            <div class='relative flex justify-center items-center text-white font-sans'>
                <div class="flex flex-col md:w-2/3 lg:w-1/2">
                    <div class="text-3xl tracking-wide pt-10 font-semibold text-center md:text-5xl">Why use Focus?</div>
                    <div class="text-justify tracking-wide">
                        <p class="py-2 md:px-20 lg:px-32">
                            During each Pomodora interval (25 minutes), put in maximum focus on your task
                            and avoid distractions. By focusing, you will find yourself completing projects
                            faster with less mental fatigue.
                        </p>
                        <p class="py-2 md:px-20 lg:px-32">
                            The goal of this technique is to reduce intenal and external distractions when working.
                        </p>
                    </div>
                    <div class="mt-12 text-3xl tracking-wide pt-10 font-semibold text-center md:text-5xl">
                        Here's how to use it:
                    </div>
                    <div class="px-2 tracking-wide md:px-20 lg:px-32">
                        <ul class="py-4">
                            <li class="py-2">1. Decide on a task to do.</li>
                            <li class="py-2">2. Start the timer & work on your task.</li>
                            <li class="py-2">3. End your work when timer rings.</li>
                            <li class="py-2">4. When the timer ends, take a 5 minutes break.</li>
                            <li class="py-2">5. After 4 pomodoros, take a 30 minutes break.</li>
                        </ul>
                    </div>
                </div>
                <div class="absolute top-0 right-0 pt-10 pr-5">
                    <i class="fas fa-times text-white text-xl cursor-pointer" @click="instruction=!instruction"></i>
                </div>
            </div>
        </div>
        <div class="absolute h-screen w-screen top-0 z-20 px-6 loading" v-if="loadingMessage">
            <div class="flex h-screen">
                <div class="m-auto">
                    <div class="text-white font-sans font-bold text-4xl">Loading Timer...</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    transition:{
      name:"focus",
      mode:"out-in",
      duration: { enter: 1000, leave: 300 },
      enterActiveClass: "animated fadeInLeft",
      leaveActiveClass: "animated fadeOutLeft"
    },
    data: function(){
        return{
            instruction: false,
            loadingMessage: false
        }
    },
    computed:{
        ...mapState({
            task: state => state.timer.task
        })
    },
    mounted(){
        if(this.task.status === "START"){
            this.loadingMessage = true;
            setTimeout(() =>{
                this.$router.push("/timer")
            }, 3000);
        }
    }
}
</script>
<style>
.loading{
    background-color: rgb(0,0,0, .45);
    backdrop-filter: blur(3px);
    transition: all 0.1s ease-in-out;
}
</style>