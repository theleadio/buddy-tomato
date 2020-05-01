<template>
    <div class="h-screen w-screen">
        <naviWrapper />
        <div class="flex flex-col py-5">
            <div class="mx-auto">
                <img class="w-40 object-cover" src="~/assets/svg/tomato.svg" />
            </div>
            <div class="mx-auto">
                <div class="text-8xl font-bold font-sans tracking-wide">
                    Focus
                </div>
            </div>
            <div class="mx-auto px-10">
                <div class="text-4xl font-bold font-sans tracking-wide text-center">
                    Boost Productivity with your friends!
                </div>
            </div>
            <div class="mx-auto my-10">
                <a class="transition duration-300 ease-in-out rounded-full bg-green-400 py-3 px-6 text-white text-sm font-bold hover:no-underline hover:bg-green-600" href="/timer">
                    Create a New Timer
                </a>
            </div>
            <div class="mx-auto mt-20 px-12 md:px-24 lg:px-64">
                <div class="font-semibold font-sans text-center lg:px-64">
                    Focus is a productivity app based on the Pomodoro Technique by Francesco Cirilo. 
                    The technique breaks down your work into intervals, called a Pomodoro - each at 25 minutes.
                </div>
            </div>
        </div>
    <footerWrapper />
    </div>
</template>
<script>
import NaviWrapper from "~/components/navi/Wrapper.vue";
import FooterWrapper from "~/components/footer/Wrapper.vue";

export default {
    components:{
        naviWrapper: NaviWrapper,
        footerWrapper: FooterWrapper
    }
}
</script>