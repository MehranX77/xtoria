<template>
    <div>
        <UContainer class="md:mt-44 mt-10">
            <UCard variant="outline">
                <template #header>
                    <h3 class="text-base dark:text-slate-50 text-black border-b border-rose-500 w-fit pb-2">تماس با
                        ایکستوریا</h3>
                    <div class="flex justify-between mt-6">
                        <p class="text-muted self-center">لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا<span
                                class="text-blue-400 mx-1">پرسش‌‌های متداول</span> را مشاهده کنید.</p>
                        <UButton to="/" size="lg" variant="outline" color="secondary">پرسش های متدوال</UButton>
                    </div>
                </template>
                <template #default>
                    <UPageGrid>
                        <UFormField label="آدرس ایمیل" required>
                            <UInput v-model.lazy="contactForm.email" class="w-full" size="xl"
                                placeholder="user@gmail.com ..." :ui="{ base: 'py-4' }" color="secondary" />
                        </UFormField>
                        <UFormField label="نام و نام خانوادگی" required>
                            <UInput v-model.lazy="contactForm.fullname" class="w-full" size="xl"
                                placeholder="سجاد امامی ..." :ui="{ base: 'py-4' }" color="secondary" />
                        </UFormField>
                        <UFormField label="شماره تماس" required>
                            <UInput v-model.lazy="contactForm.phone" class="w-full" size="xl" placeholder="09181234567"
                                :ui="{ base: 'py-4' }" color="secondary" />
                        </UFormField>
                        <UFormField label="موضوع" required>
                            <USelect v-model="contactForm.subject" :items="items" class="w-full" size="xl"
                                :ui="{ base: 'py-4' }" color="secondary" />
                        </UFormField>
                    </UPageGrid>
                    <UFormField label="متن پیام" required class="mt-5">
                        <UTextarea v-model="contactForm.text" class="w-full" size="xl" :rows="11" color="secondary" />
                    </UFormField>
                    <UButton  class="mt-5" size="xl" variant="subtle" color="secondary" trailing icon="solar:map-arrow-left-broken" @click="sendContactForm">ارسال پیام</UButton>
                </template>
            </UCard>
            <div class="flex flex-col gap-y-5 mt-5">
                <UCard variant="outline">
                    <template #header>
                        <h1 class="text-lg text-slate-700 dark:text-slate-200 mb-6">اطلاعات ایکستور</h1>
                        <p class="text-2xl mb-2">آدرس فروشگاه</p>
                        <span class="text-muted text-sm mb-2">{{ info?.data?.province }} - {{ info?.data?.city }} - {{
                            info?.data?.address }}</span>
                    </template>
                    <template #default>
                        <ClientOnly>
                            <template #default>
                                <div class="z-0" style="height:60vh; width:100%">
                                    <LMap class="z-0" ref="map" :zoom="zoom" :max-zoom="18" :center="[lat, long]"
                                        :use-global-leaflet="false">
                                        <LTileLayer class="z-0" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                                            layer-type="base" name="OpenStreetMap" />
                                    </LMap>
                                </div>
                            </template>
                            <template #fallback>
                                <USkeleton class="w-full h-full rounded-lg bg-slate-300/85" />
                            </template>
                        </ClientOnly>
                        <USeparator color="neutral" class="mt-10"/>
                        <h1 class="text-balance text-lg font-bold text-center mt-5">اطلاعات تماس</h1>
                        <div class="flex justify-center gap-x-3">
                            <div class="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 flex flex-col gap-y-4 mt-5 grow">
                               <UIcon class="self-center" name="solar:map-arrow-left-broken"/>
                               <p class="text-center text-lg font-normal">ایمیل فروشگاه</p>
                               <p class="text-center text-base text-muted">{{ info?.data?.email }}</p>
                            </div>
                            <div class="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 flex flex-col gap-y-4 mt-5 grow">
                               <UIcon class="self-center" name="solar:map-arrow-left-broken"/>
                               <p class="text-center text-lg font-normal">تلفن تماس</p>
                               <p class="text-center text-base text-muted">{{ info?.data?.phone }}</p>
                            </div>
                        </div>
                    </template>
                </UCard>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const { public: { baseURL } } = useRuntimeConfig()
const toast= useToast()
const zoom = ref(12)

const contactForm = reactive({
    subject: 1,
    fullname: '',
    phone: '',
    email: '',
    text: ''
})

interface contactResponse {
    data: string 
    status: number
}

const sendContactForm = async () => {
try {
        const res = await $fetch<contactResponse>(`${baseURL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            fullname: contactForm.fullname,
            phone:contactForm.phone,
            text:contactForm.text,
            email:contactForm.email,
            // subject: contactForm.subject
        }
    })   

    if(res.status === 201){
     toast.add({
        description:'درخواست شما ارسال شد همکاران ما به زودی با شما تماس میگیرند',
        color:'success'
     })
    }else{      
        toast.add({
        description:'درخواست شما ارسال نشد',
        color:'error'
     })
    }

    console.log(res, 'contact data');
} catch (error) {
    console.log(error.data);
    
}
    

}

//contact info

const { data: info } = await useFetch(`${baseURL}/contact-info`)

//forooshgah position on map
const position = info.value?.data?.location || '7.256545,8.452596'
const lat = position.split(',')[0];
const long = position.split(',')[1];


</script>