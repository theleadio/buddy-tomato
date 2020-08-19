<template>
    <div class="w-full h-full py-10 px-2">
        <div class="flex flex-col">
            <span class="text-2xl font-medium tracking-wide">LEAD | focus<span class="text-3xl text-focus-yellow">.</span></span>
            <div class="mt-12 text-gray-600 text-sm font-light tracking-wide">
                support@thelead.io <br/>
                +6016-473 7281
            </div>
            <span class="mt-12 text-lg font-medium tracking-wide">find us here</span>
            <div class="flex">
                <SocialButton class="m-2" url="https://www.facebook.com/thelead.io">
                    <template v-slot:icon>
                        <i class="fab fa-facebook-f"></i>
                    </template>
                </SocialButton>
                <SocialButton class="m-2" url="https://thelead.io">
                    <template v-slot:icon>
                        <i class="far text-xs fa-window-maximize"></i>
                    </template>
                </SocialButton>
            </div>
        </div>
    </div>
</template>