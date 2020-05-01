<template>
    <div class="relative">
        <input v-bind:class="{
            'input': true,
            'appearance-none': true,
            'rounded-sm': true,
            'text-gray-600': true,
            'w-full': true,
            'px-3': true,
            'py-3': true,
            'pt-4': true,
            'pb-1': true,
            'focus': false,
            'font-sans': true,
            'text-center':true,
            'focus:outline-none': true,
            'active:outline-none': true,
            'text-2xl':true,
            'filled':(this.value.length > 0)? true : false,
            
            }" 
            :id="labelId" 
            :type="(inputType)?inputType:'text'" 
            v-bind:autofocus="focus"
            v-model="inputModel"
            :disabled="disabled"
            >
        <label 
            :for="labelId" 
            class="
                label 
                absolute 
                mb-0 
                -mt-2 
                pt-3 
                pl-10 
                leading-tighter 
                text-gray-400
                text-2xl
                mt-2 
                cursor-text
                font-sans
                "
            >
            {{(labelName)?labelName:"Debug"}}
        </label>
        <div class="absolute top-0 right-0 p-4">
            <i class="fas fa-pencil-alt text-gray-400"></i>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        labelName: String,
        labelId: String,
        inputType: String,
        focus: Boolean,
        value: String,
        disabled:Boolean
    },
    computed:{
        inputModel:{
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
}
</script>
<style>
.input {
        transition: border 0.2s ease-in-out;
        min-width: 280px
    }

.input:focus+.label,
.input:active+.label,
.input.filled+.label {
    font-size: .55rem;
    transition: all 0.2s ease-out;
    top: -0.1rem;
    color: #323232;
}

.label {
    transition: all 0.2s ease-out;
    top: 0.2rem;
    left: 0;
}
</style>
