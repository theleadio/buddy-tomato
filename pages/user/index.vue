<template>
    <div class="-mt-4 flex flex-col">
        <div class="flex w-screen grid grid-cols-2 items-center">
            <div :class="{
                'py-3':true,
                'text-center':true,
                'cursor-pointer':true,
                'transition':true,
                'duration-300':true,
                'ease-in-out':true,
                'bg-gray-600':profile,
                'bg-gray-400':!profile,
                'border-2-gray':profile,
                'shadow-xl':profile,
                }"
                @click="profile=true;history=false"
                >
                <button class="font-bold text-white text-lg font-sans focus:outline-none active:outline-none"
                @click="profile=true;history=false"
                >Profile</button>
            </div>
            <div :class="{
                'py-3':true,
                'text-center':true,
                'cursor-pointer':true,
                'transition':true,
                'duration-300':true,
                'ease-in-out':true,
                'bg-gray-600':history,
                'bg-gray-400':!history,
                'border-2-gray':history,
                'shadow-xl':history,
                }"
                @click="profile=false;history=true"
                >
                <button class="font-bold text-white text-lg font-sans focus:outline-none active:outline-none"
                @click="profile=false;history=true"
                >Timer History</button>
            </div>
        </div>
        <div class="w-screen flex justify-center p-6">
            <div class="flex flex-col justify-center w-screen md:w-2/3 lg:w-1/3">
                <div class="flex justify-between items-center">
                    <label class="font-sans text-2xl font-medium p-5">Hi {{user.displayName}},</label>
                    <div class="relative">
                        <button @click="edit=!edit; !edit?updateUser():null" :class="{
                            'transition': true,
                            'duration-300':true,
                            'ease-in-out':true,
                            'font-sans':true,
                            'font-medium':true,
                            'text-sm':true,
                            'rounded-full':true,
                            'py-2':true,
                            'pl-6':true,
                            'pr-8':true,
                            'bg-gray-500':!edit,
                            'bg-green-500':edit,
                            'text-white':true,
                            'focus:outline-none':true,
                            'active:outline-none':true,
                            'tracking-wide':true,
                            'hidden':!profile,
                            }" 
                            >{{edit?"Done":"Edit"}}</button>
                        <div class="absolute top-0 right-0 pt-1 pr-3">
                            <i class="fas fa-pen text-white text-sm"></i>
                        </div>
                    </div>
                </div>
                <div :class="{
                    'transition': true,
                    'duration-300':true,
                    'ease-in-out':true,
                    'overflow-hidden':true,
                    'w-full':profile,
                    'w-0':!profile,
                    'h-0':!profile,
                }">
                    <div class="relative">
                        <inputElmt :labelName="'Name'" :labelId="'name'" :focus="false" :value="user.displayName" 
                            :disabled="!edit" :class="{
                                'transition':true,
                                'duration-300':true,
                                'ease-in-out':true,
                                'border-b':true,
                                'border-gray-500':edit,
                                'shadow-md':!edit,
                                'shadow-lg':edit,
                                'text-left':true,
                                'py-1':true,
                                }"
                                @input="setDisplayName($event)"
                                />
                        <div class="absolute top-0 right-0 p-4">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative mt-4">
                        <inputElmt :labelName="'Email'" :labelId="'email'" :focus="false" :value="user.email"
                            :disabled="true" :class="{
                                'transition':true,
                                'duration-300':true,
                                'ease-in-out':true,
                                'border-b':true,
                                'shadow-md':true,
                                'text-left':true,
                                'py-1':true,
                                }"
                                @input="setEmail($event)"
                                />
                        <div class="absolute top-0 right-0 p-4">
                            <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative mt-4">
                        <inputElmt :labelName="'Company Name'" :labelId="'company'" :focus="false" :value="user.company"
                            :disabled="!edit" :class="{
                                'transition':true,
                                'duration-300':true,
                                'ease-in-out':true,
                                'border-b':true,
                                'border-gray-500':edit,
                                'shadow-md':!edit,
                                'shadow-lg':edit,
                                'text-left':true,
                                'py-1':true,
                                }"
                                @input="setCompany($event)"
                                />
                        <div class="absolute top-0 right-0 p-4">
                            <i class="fas fa-building text-gray-400"></i>
                        </div>
                    </div>
                    <div class="relative mt-4">
                        <textElmt :labelName="'Bio'" :labelId="'bio'"
                            :focus="false" :value="user.bio"
                            :disabled="!edit" :class="{
                                'transition':true,
                                'duration-300':true,
                                'ease-in-out':true,
                                'border-b':true,
                                'border-gray-500':edit,
                                'shadow-md':!edit,
                                'shadow-lg':edit,
                                'text-left':true,
                                'py-1':true,
                                }"
                                @input="setBio($event)"
                                />
                        <div class="absolute top-0 right-0 p-4">
                            <i class="fas fa-address-card text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div :class="{
                    'transition': true,
                    'duration-700':true,
                    'ease-in-out':true,
                    'overflow-hidden':true,
                    'w-full':history,
                    'w-0':!history,
                    'h-0':!history,
                    'p-2':true
                }">
                    <div class="flex grid grid-cols-6 border-b border-gray-500 shadow-md">
                        <div class="p-2 font-sans text-gray-500 font-medium">Title</div>
                        <div class="col-span-2 p-2 font-sans text-gray-500 font-medium">Date</div>
                        <div class="col-span-3 p-2 font-sans text-gray-500 font-medium">Duration</div>
                    </div>
                    <div> <!--LOOP HERE-->
                        <div class="flex grid grid-cols-6 py-2 border-b border-gray-300 shadow-md">
                            <div class="p-2 font-sans text-gray-800 text-sm tracking-wider">Task 1</div>
                            <div class="col-span-2 p-2 font-sans text-gray-800 text-sm tracking-wider">May 5th, 2020</div>
                            <div class="col-span-3 p-2 font-sans text-gray-800 text-sm tracking-wider">25 minutes 00 Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputElement from "~/components/items/Input.vue";
import TextElement from '~/components/items/TextArea.vue';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    middleware: 'authenticate',
    components:{
        inputElmt: InputElement,
        textElmt: TextElement
    },
    data: function(){
        return{
            profile:true,
            history:false,
            edit:false
        }
    },
    computed:{
        ...mapState({
            user: state => state.auth.user
        })
    },
    methods:{
        ...mapMutations({
            setEmail: "auth/setEmail",
            setDisplayName: "auth/setDisplayName",
            setBio: "auth/setBio",
            setCompany: "auth/setCompany"
        }),
        ...mapActions({
            updateUser: "auth/updateUser"
        })
    }
}
</script>