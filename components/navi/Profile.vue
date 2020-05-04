<template>
    <div class="relative pr-6">
        <button @click="profileDropDown = !profileDropDown" class="rounded-full overflow-hidden h-12 w-12 border-2 focus:outline-none hover:shadow-2xl md:mr-1 lg:mr-1 xl:mr-1">
            <img class="h-full w-full object-cover" :srcset="userImg?userImg:'../img/user.png'" >
        </button>
        <div class="absolute shadow-xl border bg-white rounded-lg mt-2 w-48 py-2 shadow-card right-0 z-500 mr-3 md:mr-1 lg:mr-1 xl:mr-1" v-if="profileDropDown">
            <nuxt-link to="/user" class="text-center transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-white-400 hover:no-underline">Profile</nuxt-link>
            <button @click="signOut" class="w-full text-center transition duration-300 ease-in-out block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-white-400 focus:outline-none active:outline-none">Sign out</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    middleware: 'authenticate',
    computed:{
        ...mapState({
            userImg:  state => state.auth.user.imgUrl
        })
    },
    data: function(){
        return{
            profileDropDown: false,
            
        }
    },
    methods:{
        signOut:async function() {
            try {
                await this.$fireAuth.signOut()
                this.$router.push("/")
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>