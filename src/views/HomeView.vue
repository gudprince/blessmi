<template>
    <main class="mb-10 font-montserrat">
        <div class="header md:mb-3">
            <div class="px-2 md:px-4 grid grid-cols-2 gap-4 py-3 container mx-auto">
                <div>
                    <img src="../assets/image/logo.png" style="height: 20px">
                </div>
                <div class="text-right font-semibold">Sign In</div>
            </div>  
        </div>
        <div class="md:px-4 xl:px-2 grid grid-cols-1  md:grid-cols-3 gap-8 pt-4 container mx-auto">
            <div class="md:col-span-2">
                <div >
                    <img src="../assets/image/hero-image.png" class="w-full" >
                    <div class="header text-sm">
                        <div class="py-3 grid grid-cols-2 gap-4 container mx-auto px-6">
                            <div>
                                <span class="title">Organised By:</span> <span class="font-semibold">Mustapha Mohammed</span>
                            </div>
                            <div class="text-right font-semibold">One-Off</div>
                        </div>  
                    </div>
                    <div class="rounded-lg border pb-3">
                        <div class="px-6 container mx-auto">
                            <div class="border-b grid grid-cols-2 gap-4 container mx-auto pt-2 pb-2">
                                <div>
                                    <div class="text-gray-700 flex flex-wrap gap-3 font-semibold">
                                        <div class="mt-1">
                                            <img src="../assets/image/tag.png" class="" style="height: 15px">
                                        </div>
                                        <div class="">
                                            <div class="font-semibold">Ceremony</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right text-gray-600">10 days left</div>
                            </div>
                            <div>
                                <div class="mt-4 title text-2xl md:text-3xl font-semibold">Bless Chike and Shayo’s wedding</div>
                                <p class="mt-3">{{text}}<span v-show="hide==true" class="text-lg font-semibold" @click="toggleVisible"><button>...See more</button></span>
                                </p>
                            </div>
                        </div>
                        <div class="header mt-6">
                            <div class="pt-3 text-gray-700 text-md px-6 flex flex-wrap gap-4 md:gap-6 lg:gap-10 font-semibold">
                                <div class="w-24" @click="toggleActive(1)">
                                    <div class="text-center">
                                        <button :class="[active ==1? 'title' : 'text-gray-500']">Overview</button>
                                    </div>
                                    <div  v-show="active ==1" class="md:mt-2 tab-hover rounded-t-lg"></div>
                                </div>
                                <div class="w-24" @click="toggleActive(2)">
                                    <div class="text-center">
                                        <button :class="[active ==2 ? 'title' : 'text-gray-500']">Blessors</button>
                                    </div>
                                    <div  v-show="active ==2" class="md:mt-2 tab-hover rounded-t-lg"></div>
                                </div>
                                <div class="w-24" @click="toggleActive(3)">
                                    <div class="text-center">
                                        <button :class="[active ==3 ? 'title' : 'text-gray-500']">Rewards</button>
                                    </div>
                                    <div  v-show="active ==3" class="md:mt-2 tab-hover rounded-t-lg"></div>
                                </div>
                                <div class="w-24" @click="toggleActive(4)">
                                    <div class="text-center">
                                        <button :class="[active ==4 ? 'title' : 'text-gray-500']">Comments</button>
                                    </div>
                                    <div  v-show="active ==4" class="md:mt-2 tab-hover rounded-t-lg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="px-6 " v-show="active==1">
                            <div class="grid grid-cols-2 gap-4 container mx-auto mt-5">
                                <div>
                                    <span class="title font-semibold text-2xl">Updates</span>
                                </div>
                                <div class="text-right font-semibold">
                                    <div class="text-gray-700 text-md pt-5 flex flex-wrap gap-3 font-semibold flex-row-reverse">
                                        <div class="mt-1">
                                            <img src="../assets/image/arrow.png" class="" style="height: 15px">
                                        </div>
                                        <div class="">
                                            <div class="font-semibold text-sm">View All</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-b pb-2">
                                <p class="mt-4">I need to raise 5 million naira for a wedding ceremony, that is scheduled to hold on the 26th June 2020, i need this money to support this couple and their newly born quadruplets in the earliest stages of their life.</p>
                                <p class="mt-6">I appreaciate every little amount that you can use to bless me.</p>
                                <p class=" mt-2 text-md font-semibold"><span v-show="readMore==false" class="text-lg font-semibold" @click="toggleReadMore"><button>Read More.</button></span></p>
                                <p class="mt-4" v-show="readMore==true">I need to raise 5 million naira for a wedding ceremony, that is scheduled to hold on the 26th June 2020, i need this money to support this couple and their newly born quadruplets in the earliest stages of their life.</p>
                            </div>  
                        </div>
                        <div class="px-6 " v-show="active==2">
                            <div class="border-b pb-4 pt-6 text-center text-gray-700">
                                <span class="title font-semibold text-2xl">Sorry No item found</span>
                            </div> 
                        </div>
                        <div class="px-6 " v-show="active==3">
                            <div class="border-b pb-4 pt-6 text-center text-gray-700">
                                <span class="title font-semibold text-2xl">Sorry No item found</span>
                            </div> 
                        </div>
                        <div class="px-6 " v-show="active==4">
                            <div class="border-b pb-4 pt-6 text-center text-gray-700">
                                <span class="title font-semibold text-2xl">Sorry No item found</span>
                            </div> 
                        </div> 
                        <div class="px-6 ">
                            <div>
                                <p class="mt-4 text-xl font-semibold title">Fundraiser Members</p>
                                <div class="pb-4 border-b grid grid-cols-2 gap-4 container mx-auto mt-5">
                                    <div>
                                        <div class="text-md pt-4 flex flex-wrap gap-4">
                                            <div class="">
                                                <img src="../assets/image/hj.png" class="" style="height: 40px">
                                            </div>
                                            <div class="-mt-1">
                                                <div class="text-gray-400 text-sm">Organiser</div>
                                                <div class="font-semibold text-sm title">Fawale Gbolahan T</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-md pt-4 flex flex-wrap gap-4">
                                            <div class="">
                                                <img src="../assets/image/gb.png" class="" style="height: 40px">
                                            </div>
                                            <div class="-mt-1">
                                                <div class="text-gray-400 text-sm">Beneficiary</div>
                                                <div class="font-semibold text-sm title">Fawale Gbolahan T</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" text-md pt-4 flex flex-wrap gap-4">
                                            <div class="">
                                                <img src="../assets/image/lk.png" class="" style="height: 40px">
                                            </div>
                                            <div class="-mt-1">
                                                <div class="text-gray-400 text-sm">Observer</div>
                                                <div class="font-semibold text-sm title">Fawale Gbolahan T</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class=" text-md pt-4 flex flex-wrap gap-4">
                                            <div class="">
                                                <img src="../assets/image/em.png" class="" style="height: 40px">
                                            </div>
                                            <div class="-mt-1">
                                                <div class="text-gray-400 text-sm">Observer</div>
                                                <div class="font-semibold text-sm title">Fawale Gbolahan T</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="title mt-4 text-xl font-semibold">
                                <p>Fundraiser on Social Media</p>
                                <div class="border-b pb-4 text-gray-700 text-md pt-4 flex flex-wrap font-semibold">
                                    <div class="mr-4">
                                        <img src="../assets/image/fb.png" class="" style="height: 20px">
                                    </div>
                                    <div class="mr-4">
                                        <img src="../assets/image/instagram.png" class="" style="height: 20px">
                                    </div>
                                    <div class="mr-4">
                                        <img src="../assets/image/twitter.png" class="" style="height: 20px">
                                    </div>
                                    <div class="">
                                        <img src="../assets/image/youtube.png" class="" style="height: 20px">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-600 text-sm mt-5">Fundraiser ID: <span class="title font-semibold">548757458ID</span></p>
                                <div class="grid grid-cols-2 gap-4 container mx-auto pt-2 pb-2">
                                    <div>
                                        <div class="text-gray-700 text-md pt-4 flex flex-wrap font-semibold">
                                            <div class="mt-1 mr-3">
                                                <img src="../assets/image/flag-2.png" class="" style="height: 20px">
                                            </div>
                                            <div class="">
                                                <div class="border-b border-black">Report Project</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" text-gray-600">
                                        <div class="text-gray-700 text-md pt-5 flex flex-wrap font-semibold flex-row-reverse">
                                            <div class="">
                                                <div class="text-red-600 font-semibold">2.5K</div>
                                            </div>
                                            <div class="mt-1 mr-1">
                                                <img src="../assets/image/love.png" class="" style="height: 15px">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="border rounded-lg py-6">
                    <div class="px-4">
                        <div class="border-b pb-4 border-gray-300">
                            <div class="grid grid-cols-2 md:gap-8 container mx-auto md:px-6">
                                <div>
                                    <span class="font-semibold">N2,000,320,000</span>
                                </div>
                                <div class="text-right font-semibold">N5,000,000,000</div>
                            </div>
                            <div class="mt-1">
                                <img src="../assets/image/progress.png" class="w-full" style="height: 10px">
                            </div>
                            <div class="grid grid-cols-2 gap-4 container mx-auto pt-2 px-6">
                                <div>
                                    <span class="text-gray-500 ">Raise</span>
                                </div>
                                <div class="text-gray-500 text-right ">Target</div>
                            </div>  
                        </div>
                        <div>
                            <div class="">
                                <p class="py-3">Bless this Fundraiser by making a transfer to the bank account below or use the <strong>“Bless”</strong> button.</p>
                            </div>
                            <div class="rounded mb-2 text-center text-white" style="background-color: #567286">
                                <div class="py-6">
                                    <p class="mb-2 text-md">STERLING BANK</p>
                                    <div class="mb-2 flex flex-wrap gap-2 font-semibold justify-center">
                                        <div class="">
                                            <div class="text-lg font-semibold">0046748389</div>
                                        </div>
                                        <div class="mt-2">
                                            <img src="../assets/image/copy.png" class="" style="height: 15px">
                                        </div>
                                    </div>
                                    <p class="font-semibold">Gbolahan Fawale</p>
                                </div>
                            </div>
                            <div class="py-2 grid grid-cols-12 font-semibold">
                                <div class="col-span-5">
                                    <div class="mt-3  border-gray-300 border-b"></div>
                                </div>
                                <div class="text-center col-span-2">
                                    Or
                                </div>
                                <div class="col-span-5">
                                    <div class="mt-3 border-b border-gray-300"></div>
                                </div>
                            </div>
                            <div>
                                <p class="-mt-1 mb-2">You can also bless this fundraiser from anywhere in the world by using Paypal or Card.</p>
                                <div class="mb-2">
                                    <img src="../assets/image/paypal.png" class="w-full" style="height: 60px">
                                </div>
                                <div class="mb-6">
                                    <img src="../assets/image/visa.png" class="w-full" style="height: 60px">
                                </div>
                                <button class="text-white py-3 w-full text-md rounded" style="background-color: #3E3C3C;">Share this Fundraisar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: "app",
    data() {
        return {
            active: 1,
            readMore: false,
            hide: true,
            text: 'I need to raise 5 million naira for a wedding ceremony, that is scheduled to hold on the 26th June 2020, i need this money to support this couple and their newly born quadruplets in th',
            joinText: 'e earliest stages of their life',  
        }
    },
    methods: {
       toggleActive(n){
            this.active = n;
       },
       toggleVisible(){
            this.text = this.text+this.joinText;
            this.hide =false;
       },
       toggleReadMore(){
            this.readMore = true
       }
    },
};
</script>

<style>

.header{
    background-color: #E0F2FF;
}
.tab-hover{
    background-color: #536F84;
    height: 5px;
}
.title{
    color: #161722; 

}
</style>
