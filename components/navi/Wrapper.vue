<template>
    <div class="p-5 border-b shadow-md">
        <div class="flex justify-between items-center">
            <logo />
            <div v-if="!(['/user/login','/user/signup'].indexOf($route.path)>=0)">
                <a href="/user/login" class="transition duration-300 eas-in-out mr-2 font-sans font-semibold rounded-full px-6 py-2 bg-gray-400 text-white text-sm tracking-wide hover:bg-gray-600 hover:outline-none focus:outline-none">Log in</a>
                <a href="/user/signup" class="transition duration-300 eas-in-out font-sans font-semibold rounded-full px-6 py-2 bg-green-400 text-white text-sm tracking-wide hover:bg-green-600 hover:outline-none focus:outline-none">Sign Up</a>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from "~/components/navi/Logo"

export default {
    components:{
        logo: Logo
    }
}
</script>