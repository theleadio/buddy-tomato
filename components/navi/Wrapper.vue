<template>
    <div class="h-20 border-b shadow-md">
        <div class="flex justify-between items-center">
            <logo class="p-5"/>
            <client-only  class="p-5">
                <div v-if="!isLoggedIn">
                    <div v-if="!(['/user/login','/user/signup'].indexOf($route.path)>=0)">
                        <nuxt-link to="/user/login" class="transition duration-300 eas-in-out mr-2 font-sans font-semibold rounded-full px-6 py-2 bg-gray-400 text-white text-sm tracking-wide hover:bg-gray-600 hover:outline-none focus:outline-none">Log in</nuxt-link>
                        <nuxt-link to="/user/signup" class="transition duration-300 eas-in-out mr-2 font-sans font-semibold rounded-full px-6 py-2 bg-green-400 text-white text-sm tracking-wide hover:bg-green-600 hover:outline-none focus:outline-none">Sign Up</nuxt-link>
                    </div>
                </div>
                <div v-else>
                    <userProfile />
                </div>
            </client-only>
        </div>
    </div>
</template>
<script>
import Logo from "~/components/navi/Logo.vue";
import Profile from "~/components/navi/Profile.vue";
import { mapState, mapMutations } from 'vuex' 

export default {
    components:{
        logo: Logo,
        userProfile: Profile
    },
    computed:{
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn,
            user: state=> state.auth,
        })
    },
    methods:{
        ...mapMutations({
            setAccessToken: "auth/setAccessToken",
        })
    },
    async mounted(){
        if(this.isLoggedIn){
            await this.$fireAuthObj().currentUser.getIdToken(true)
                .then((token) => this.setAccessToken(token));
        }    
    }
}
</script>