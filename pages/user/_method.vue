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
                            <inputElmt :labelName="'Email'" :labelId="'username'" :focus="false" :value="email" @input="email = $event" 
                                :disabled="false" class="border-b shadow-md text-left py-1"/>
                            <div class="absolute top-0 right-0 p-4">
                                <i class="fas fa-user text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto px-10 w-full md:w-1/2 xl:w-1/4 mt-4">
                        <div class="relative">
                            <inputElmt :labelName="'Password'" :labelId="'password'" :focus="false" :inputType="'password'"
                            :value="password" @input="password = $event" class="border-b shadow-md text-left py-1" @keyup.enter="$route.params['method'] === 'login'?login():createUser()"/>
                            <div class="absolute top-0 right-0 p-4">
                                <i class="fas fa-key text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center mt-10">
                        <a @click="$route.params['method'] === 'login'?login():createUser()" href="#" class="font-bold transition duration-300 ease-in-out py-3 px-24 bg-green-500 text-white rounded-full hover:shadow-lg hover:bg-green-700 hover:outline-none hover:no-underline"
                            >{{$route.params['method'] === 'login'?"Log In": "Create Account"}}</a>
                    </div>
                </form>
            </div>
            <div class="mx-auto  px-20 w-full md:w-1/2 mt-4">
                <div class="flex items-center justify-center text-sm font-sans pb-2">
                    Social Login
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative py-4">
                        <a href="#" class="pl-10 pr-12 md:pr-12 bg-white rounded-full border-2 py-3 font-bold transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:outline-none hover:no-underline" @click="googleLogin">Log In with Google </a>
                        <div class="absolute top-0 right-0 p-1">
                            <div class="h-12 w-12 p-3">
                                <img class="h-full w-full object-cover" src="~/assets/img/google-icon.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto mt-5" v-if="$route.params['method'] === 'login'">
                <div class="flex items-center justify-center my-2 text-sm font-sans">
                    Don't have an account?
                </div>
                <div class="flex justify-center">
                    <nuxt-link to="/user/signup" class="font-bold transition duration-300 ease-in-out py-2 px-12 bg-gray-500 text-white rounded-full hover:shadow-lg hover:bg-gray-700 hover:outline-none hover:no-underline">Sign up</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputElement from "~/components/items/Input.vue";
import { mapState, mapMutations } from 'vuex';

export default {
    components:{
        inputElmt: InputElement
    },
    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },
    data: function(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        googleLogin: async function(){
            const provider = new this.$fireAuthObj.GoogleAuthProvider()
            await this.$fireAuth.signInWithPopup(provider).then(
                result => {
                    this.setIdToken(result.credential.idToken)
                    this.setAccessToken(result.credential.accessToken)
                    this.$apis.user.signIn(result)
                    this.$apis.user.getUserDetails(result.user.uid, result.credential.accessToken)
                        .then(res => this.updateDetails(res))
                    this.$router.push("/")
                }
            ).catch(e => console.error(e));
        },
        createUser: async function() {
            try {
                await this.$fireAuth.createUserWithEmailAndPassword(
                    this.email,
                    this.password
                ).then(
                    result=>{
                        this.$apis.user.signIn(result)
                        this.$router.push("/")
                    }
                )
            } catch (e) {
                console.error(e)
            }
        },
        login: async function(){
            try{
                await this.$fireAuth.signInWithEmailAndPassword(
                    this.email,
                    this.password
                ).then(
                    result=>{
                        this.setAccessToken(result.user.xa)
                        this.$apis.user.signIn(result)
                        this.$router.push("/")
                    }
                )
            } catch (e){
                console.error(e)
            }
        },
        ...mapMutations({
            setIdToken: "auth/setIdToken",
            setAccessToken: "auth/setAccessToken",
            updateDetails: "auth/updateDetails"
        })
    },
    mounted(){
        if(this.isLoggedIn){
            this.$router.push("/")
        }
    }
}
</script>