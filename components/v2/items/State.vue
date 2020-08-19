<template>
    <div class="flex flex-col py-6 px-4 text-center">
        <div class="px-2 text-left -mb-6">
            <span class="text-2xl md:text-3xl font-thin text-white">{{title}} <slot name='icon'></slot></span>
        </div>
        <div class='text-6xl font-medium md:text-8xl text-white px-10' :id="title">
            {{count}} 
        </div>
    </div>
</template>
<script>
// https://github.com/inorganik/CountUp.js#including-countup

import { CountUp } from '~/assets/js/countUp.min.js'

export default {
    props : {
        title : {
            type: String,
            default : 'Title'
        },
        count : {
            type: Number,
            default : 0
        }
    },
    data: function (){
        return {
            counterOptions : {
                duration: 3,
                useEasing: true
            }
        }
    },
    mounted(){
        let counter = new CountUp(this.title, this.count, this.counterOptions);
        counter.start();
    }
}
</script>