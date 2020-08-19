<template>
    <a
        :href="url"
        target="_blank"
        class="w-12 h-12 px-4 py-3 rounded-full text-gray-500 border-2 border-gray-400 hover:bg-black hover:border-black hover:text-white transition-all duration-500 ease-in-out"
    >
        <slot name="icon"></slot>
    </a>
</template>
<script>
export default {
    props:{
        url: {
            type: String,
            default: "https://thelead.io"
        }
    }
}
</script>