<template>
    <div class="relative">
        <textarea v-bind:class="{
            'textarea':true,
            'appearance-none': true,
            'rounded-sm': true,
            'text-gray-600': true,
            'w-full': true,
            'px-3': true,
            'py-3': true,
            'pt-4': true,
            'pb-1': true,
            'focus': false,
            'font-sans':true,
            'focus:outline-none': true,
            'active:outline-none': true,
            'filled':(this.value.length > 0)? true : false
            }" 
            rows="3"
            :id="labelId" 
            :type="(inputType)?inputType:'text'" 
            v-bind:autofocus="focus"
            v-model="inputModel"
            :disabled="disabled"
            >
        </textarea>
        <label 
            :for="labelId" 
            class="
                label 
                absolute 
                mb-0 
                -mt-2 
                pt-4 
                pl-4 
                leading-tighter 
                text-gray-400 
                text-lg
                mt-2 
                cursor-text
                "
            >
            {{(labelName)?labelName:"Debug"}}
            </label>
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
.textarea {
        transition: border 0.2s ease-in-out;
        min-width: 280px
    }

.textarea:focus+.label,
.textarea:active+.label,
.textarea.filled+.label {
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
