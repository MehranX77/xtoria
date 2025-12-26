<template>
    <div class="md:mt-44 mt-10">
        <UContainer>
            <UBreadcrumb :items="items">
                <template #separator>
                    <span class="mx-2 text-muted">
                        <UIcon class="align-middle" name="solar:alt-arrow-left-linear" />
                    </span>
                </template>
            </UBreadcrumb>
           <div class="flex lg:flex-nowrap flex-wrap gap-x-3">
                    <div class="flex lg:flex-col gap-y-2 mt-5 lg:order-first order-last">
                     <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone"/>
                     <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:telegram"/>
                     <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:instagram-square"/>
                    </div>
            <div class="flex md:flex-nowrap flex-wrap dark:bg-slate-800 bg-slate-100 w-full p-4 rounded-lg mt-5 gap-x-5">
                <div class="gallery basis-110">
                    <NuxtImg class="lg:w-80 lg:h-80 lg:max-h-80 w-40 h-40 max-h-40 mx-auto lg:mx-0 object-fit rounded-lg" :src="galleryRef" />
                    <div class="flex justify-center sub-img gap-x-5">
                        <NuxtImg v-for="(value, index) in galleryList" :key="index" class="w-20 h-20 max-h-20 hover:cursor-pointer transition-all object-fit rounded-lg border border-slate-300 dark:border-slate-700/90 hover:border-rose-700/90 p-2" :src="value" @click="changeImg(value)" />
                    </div>
                </div>
                <div class="basis-full mt-8">
                    <div class="flex justify-between">
                        <!-- مشخصات محصول -->
                       <div class="flex flex-col gap-y-3">
                        <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-200">خرید مانیتور - مشکی</h3>
                       <div class="flex gap-x-2">
                         <h4 class="text-lg font-bold">مدل:</h4>
                        <span class="self-center text-muted">دوال سنس مشکی</span>
                       </div>
                        <div class="flex gap-x-2">
                         <h4 class="text-lg font-bold">تولید کننده:</h4>
                        <span class="self-center text-sky-500">Sony</span>
                       </div>
                        <ul class="space-y-2">
                            <li class="lg:text-xl md:text-lg text-base"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                            <li class="lg:text-xl md:text-lg text-base"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                        </ul>
                        <div class="flex lg:flex-nowrap flex-wrap lg:gap-x-6 gap-y-3 mt-4">
                            <UFormField orientation="horizontal" label="فروشنده" class="lg:text-xl text-base">
                                <USelect v-model="value" size="xl" :items="branch" class="w-full"/>
                            </UFormField>
                            <UFormField orientation="horizontal" label="تعداد" class="lg:text-xl text-base">
                                 <UInputNumber v-model="deviceNumber" size="xl" :min="1" />
                            </UFormField>
                        </div>
                        <UFormField label="انتخاب گارانتی" required class="space-y-4 lg:text-xl text-base">
                           <URadioGroup v-model="garantee" size="xl" dir="rtl" class="text-end w-fit " :items="garanteeList" />  
                        </UFormField>
                         <UButton variant="solid" size="xl" color="success" class="lg:w-[40%] w-full text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone">76000 تومن</UButton>
                    </div>
                    </div>
                </div>
                <div class="flex basis-3xs gap-x-1 mt-8">
                    <UIcon class="text-2xl text-orange-400" name="solar:star-bold"/>
                    <UIcon class="text-2xl text-orange-400" name="solar:star-bold"/>
                    <UIcon class="text-2xl text-orange-400" name="solar:star-bold"/>
                    <span class="text-muted">(از 27 نفر)</span>
                </div>
            </div>
           </div>
           <USeparator color="neutral" class="mt-10"/>
           <div class="flex lg:flex-nowrap flex-wrap lg:justify-around lg:gap-y-0 gap-y-3 mt-5">
            <div class="flex gap-x-2">
                <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="mdi:truck-fast-outline"/>
                <span class="dark:text-slate-600/70 text-md  self-center">امکان تحویل اکسپرس</span>
            </div>
              <div class="flex gap-x-2">
                <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="mdi:headset"/>
                <span class="dark:text-slate-600/70 text-md  self-center">پشتیبانی آنلاین</span>
            </div>
            <div class="flex gap-x-2">
                <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="streamline-ultimate:cash-payment-bills"/>
                <span class="dark:text-slate-600/70 text-md  self-center">پرداخت درب محل</span>
            </div>
             <div class="flex gap-x-2">
                <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="solar:medal-ribbon-star-outline"/>
                <span class="dark:text-slate-600/70 text-md  self-center">ضمانت اصل بودن  کالا</span>
            </div>
           </div>

           <div class="mt-10 w-full border dark:border-slate-800/70 border-slate-200 rounded-lg p-5">
                <h1 class="text-xl dark:text-slate-300">کالاهای مشابه</h1>
                <UCarousel v-slot="{ item }" dir="ltr"  class="mt-10" :items="carouselItem" loop arrows :autoplay="{ delay: 2000 }"  :ui="{ item: 'xl:basis-1/8 lg:basis-1/4 md:basis-1/3 lg:mx-3' , controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2'  }">
                    <NuxtImg :src="item" width="234" height="234" class="rounded-lg object-contain"/>
                    <span dir="rtl" class="dark:text-slate-300 text-center line-clamp-2 mt-4">گوشی موبایل وکال مدل V1 Core دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت</span>
                    <div class="flex justify-end">
                        <UBadge class="mt-3" color="success" variant="subtle">موجود در انبار</UBadge>
                    </div>
                   <div dir="rtl" class="flex justify-between mt-3 text-end">
                    <span class="dark:text-slate-300 text-xl self-center">20000</span>
                    <span class="dark:text-slate-300 self-center">تومان</span>
                   </div>
                </UCarousel>
           </div>
           <!-- <UTabs class="mt-5 w-full" :items="TabsItem">
            <template #content="{ item }">
                   
            </template>
           </UTabs> -->
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const route = useRoute()

const items: BreadcrumbItem[] = [
    {
        label: `صفحه اصلی`,
        to: '/'
    },
    {
        label: 'category',
        to: '/category'
    },
    {
        label: `${route.params.slug}`,
        to: `/category/${route.params.slug}`
    }
]

const galleryRef = ref<string>('case.png')

const galleryList: string[] = [
    'case.png',
    'monitor.png'
]

const changeImg = (x: string) => {
    galleryRef.value = x

}

const branch = ref<string[]>(['شعبه میدان انار'])
const value = ref<string>('شعبه میدان انار')

const deviceNumber = ref<number>(1)

const garanteeList = ref<string[]>(['10 روز مهلت تست', '1 سال گارانتی آبی'])
const garantee = ref<string>('10 روز مهلت تست')

const carouselItem = [
'mobile-1.webp',
'mobile-2.webp',
'mobile-1.webp',
'mobile-2.webp',
'mobile-1.webp',
'mobile-2.webp',
'mobile-1.webp',
'mobile-2.webp',
'mobile-1.webp',
'mobile-2.webp',
]
</script>