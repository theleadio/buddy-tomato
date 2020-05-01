<template>
    <div class="h-full w-full md:h-screen md:w-screen">
        <div class="flex flex-col py-5">
            <div class="mx-auto">
                <img class="w-36 object-cover" src="~/assets/svg/tomato.svg" />
            </div>
            <div class="mx-auto">
                <div class="text-6xl font-bold font-sans tracking-wide">
                    Focus
                </div>
            </div>
            <div class="mx-auto">
                <form class="w-screen">
                    <div class="mx-auto w-full px-10 md:w-1/2 xl:w-1/4">
                        <div class="relative">
                            <inputElmt :labelName="'Username'" :labelId="'username'" :focus="false" :value="username" @input="username = $event" 
                                :disabled="false" class="border-b shadow-md text-left py-1"/>
                            <div class="absolute top-0 right-0 p-4">
                                <i class="fas fa-user text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto px-10 w-full md:w-1/2 xl:w-1/4 mt-4">
                        <div class="relative">
                            <inputElmt :labelName="'Password'" :labelId="'password'" :focus="false" :inputType="'password'"
                            :value="password" @input="password = $event" class="border-b shadow-md text-left py-1" />
                            <div class="absolute top-0 right-0 p-4">
                                <i class="fas fa-key text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-10">
                        <a href="#" class="font-bold transition duration-300 eas-in-out py-3 px-24 bg-green-500 text-white rounded-full hover:bg-green-700 hover:outline-none hover:no-underline">Log In</a>
                    </div>
                </form>
            </div>
            <div class="mx-auto mt-5">
                <div class="flex items-center justify-center my-2">
                    Don't have an account?
                </div>
                <div class="flex justify-center">
                    <a href="#" class="font-bold transition duration-300 eas-in-out py-2 px-12 bg-gray-500 text-white rounded-full hover:bg-gray-700 hover:outline-none hover:no-underline">Sign up</a>
                </div>
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
    data: function(){
        return{
            username: "",
            password: ""
        }
    },
    methods:{
    }
}
</script>