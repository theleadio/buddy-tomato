<template>
    <div class="flex flex-col bg-focus-gray w-screen h-1/2 px-5 md:px-24 lg:px-36 xl:px-64 py-32">
        <span class="text-5xl font-bold text-white">statistics<span class="text-5xl text-focus-yellow">.</span></span>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-5 gap-2">
            <slot name="stats">
            </slot>
        </div>
    </div>
</template>