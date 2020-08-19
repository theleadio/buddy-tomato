<template>
    <div class="flex uppercase justify-between items-center">
        <div :class="{
                'transition-all':true,
                'duration-500':true,
                'ease-in-out':true,
                'flex-1':true,
                'w-0':!menu,
                'w-84':menu,
                'overflow-x-hidden':true
            }">
            <div class="flex">
                <div class="mx-5 text-sm">Home</div>
                <div class="mx-5 text-sm">Stats</div>
                <div class="mx-5 text-sm">About</div>
                <div class="mx-5 text-sm">Login</div>
            </div>
        </div>
        <div class='mx-5'>
            <i 
                :class="{
                    'fa':!menu,
                    'fa-bars':!menu,
                    'fas':menu,
                    'fa-times':menu,
                    'text-gray-400':menu,
                    'hover:text-gray-400':true,
                    'cursor-pointer':true,
                    'transform':true,
                    'transition-all':true,
                    'duration-300':true,
                    'ease-in-out':true,
                    }" 
                aria-hidden="true"
                @click="toggleMenu"></i>
        </div>
    </div>
</template>
<script>
export default {
    data : function () {
        return {
            menu: false
        }
    },
    methods : {
        toggleMenu() {
            this.menu = !this.menu
        }
    }
}
</script>