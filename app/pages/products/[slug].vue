<template>
    <div class="md:mt-44 mt-10">
        <UContainer>

            <UBreadcrumb :items="items" :ui="{link:'text-rose-500'}">
                <template #separator>
                    <span class="mx-2 text-muted">
                        <UIcon class="align-middle" name="solar:alt-arrow-left-linear" />
                    </span>
                </template>
            </UBreadcrumb>

            <!-- بنر پیشنهاد شده -->
                <UBanner v-if="product.data?.suggested" title="پیشنهاد شگفت انگیز"  color="error" class="rounded-md mt-4" :ui="{title:'font-bold'}"/>
                <UBanner v-if="product.data?.special_discount" title="تخفیف ویژه"   color="success" class="rounded-md mt-4" :ui="{title:'font-bold'}"/>
            <div class="flex lg:flex-nowrap flex-wrap gap-x-3">

                <div class="flex lg:flex-col gap-y-2 mt-5 lg:order-first order-last">
                    <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone" />
                    <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:telegram" />
                    <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:instagram-square" />
                </div>

                <div class="flex md:flex-nowrap flex-wrap dark:bg-slate-800 bg-slate-100 w-full p-4 rounded-lg mt-5 gap-x-5">

                    <div class="gallery basis-110">
                        <NuxtImg class="lg:w-80 lg:h-80 lg:max-h-80 w-40 h-40 max-h-40 mx-auto lg:mx-0 object-fit rounded-lg" :src="galleryRef" />
                        <div class="flex justify-center sub-img gap-x-5">
                            <template v-for="(items, index) in product.data.product.images" :key="index">
                               <NuxtImg class="w-20 h-20 max-h-20 hover:cursor-pointer transition-all object-fit rounded-lg border border-slate-300 dark:border-slate-700/90 hover:border-rose-700/90 p-2" :src="items.image" @click="changeImg(items)" />
                                <!-- {{ items.image }} -->
                            </template>
                        </div>
                    </div>

                    <div class="basis-full mt-8">
                        <div class="flex justify-between">
                            <!-- مشخصات محصول -->
                            <div class="flex flex-col gap-y-3">
                                <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-200">{{ product.data?.product?.name|| 'بدون نام' }} {{  product.data?.product?.description || 'بدون مدل' }}</h3>
                                <div class="flex gap-x-2">
                                    <h4 class="text-lg font-bold">مدل:</h4>
                                    <span class="self-center text-muted">{{ product.data?.product?.brand?.name || 'بدون نام' }} {{ product.data?.product?.brand?.description || 'بدون توضیحات'}} </span>
                                </div>
                                <div class="flex gap-x-2">
                                    <h4 class="text-lg font-bold">تولید کننده:</h4>
                                    <span class="self-center text-sky-500">{{ product.data?.product?.brand?.name || 'بدون نام' }}</span>
                                </div>
                                <ul class="space-y-2">
                                    <li v-for="(options, index) in product.data?.options" :key="index" class="lg:text-xl md:text-lg text-base"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone" />{{ options?.value }}</li>
                                </ul>
                                <USeparator class="mt-2"/>
                                <div class="flex flex-col gap-y-2 mt-2">
                                    <div v-for="(property, index) in product.data?.properties" :key="index" class="flex gap-x-2">
                                        <span class="text-muted text-sm">{{ property?.key }}: </span>
                                        <span class="text-neutral-700 dark:text-neutral-200 text-sm">{{ property?.value }}</span>
                                    </div>
                                </div>
                                <div class="flex lg:flex-nowrap flex-wrap lg:gap-x-6 gap-y-3 mt-4">
                                    <UFormField orientation="horizontal" label="فروشنده" class="lg:text-xl text-base">
                                        <USelect v-model="value" size="xl" :items="branch" class="w-full" />
                                    </UFormField>
                                    <UFormField orientation="horizontal" label="تعداد" class="lg:text-xl text-base">
                                        <UInputNumber v-model="deviceNumber" size="xl" :min="1" />
                                    </UFormField>
                                </div>
                                <UFormField label="انتخاب گارانتی" required :hint="product.data?.guanranty[0].name + '!'" class="space-y-4 lg:text-xl text-base" :ui="{hint:'text-rose-500 text-sm font-bold'}">
                                    <URadioGroup v-model="garantee" size="xl" dir="rtl" class="text-end w-fit " :items="garanteeList" color="neutral"/>
                                </UFormField>
                                <div class="flex gap-x-3">
                                <UButton v-if="product.data?.stock !== 0"  variant="subtle" size="xl" color="neutral" class="lg:w-[40%] w-full text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone">{{ numberFormater(product?.data.price) }} <span class="text-sm text-muted">تومان</span></UButton>
                                <UButton v-else disabled variant="subtle" size="xl" color="error" class="lg:w-[40%] w-full text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone">اتمام موجودی</UButton>
                                <span v-if="product.data?.discount !== 0" class="text-md text-muted self-center "> تخفیف: {{ numberFormater(product.data?.discount) }} تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="product.data?.product.score !==0" class="flex basis-3xs gap-x-1 flex-wrap h-fit mt-8">
                        <UIcon v-for="(star, index) in product.data?.product.score" :key="index" class="text-2xl text-orange-400" name="solar:star-bold" />
                        <span class="text-muted self-start mt-2">(از 27 نفر)</span>
                    </div>
                </div>
            </div>
            <USeparator color="neutral" class="mt-10" />
            <div class="flex lg:flex-nowrap flex-wrap lg:justify-around lg:gap-y-0 gap-y-3 mt-5">
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="mdi:truck-fast-outline" />
                    <span class="dark:text-slate-500/90 text-md  self-center">امکان تحویل اکسپرس</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="mdi:headset" />
                    <span class="dark:text-slate-500/90 text-md  self-center">پشتیبانی آنلاین</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="streamline-ultimate:cash-payment-bills" />
                    <span class="dark:text-slate-500/90 text-md  self-center">پرداخت درب محل</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="solar:medal-ribbon-star-outline" />
                    <span class="dark:text-slate-500/90 text-md  self-center">ضمانت اصل بودن کالا</span>
                </div>
            </div>

            <div class="mt-8 w-full border dark:border-slate-800/70 border-slate-200 rounded-lg p-5">
                <h1 class="text-xl dark:text-slate-300">کالاهای مشابه</h1>
                <UCarousel v-slot="{ item }" dir="ltr" class="mt-10" :items="carouselItem" loop arrows
                    :autoplay="{ delay: 2000 }"
                    :ui="{ item: 'xl:basis-1/8 lg:basis-1/4 md:basis-1/3 lg:mx-3', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }">
                    <NuxtImg :src="item" width="234" height="234" class="rounded-lg object-contain" />
                    <span dir="rtl" class="dark:text-slate-300 text-center line-clamp-2 mt-4">گوشی موبایل وکال مدل V1
                        Core دو سیم
                        کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت</span>
                    <div class="flex justify-end">
                        <UBadge class="mt-3" color="neutral" variant="subtle">موجود در انبار</UBadge>
                    </div>
                    <div dir="rtl" class="flex justify-between mt-3 text-end">
                        <span class="dark:text-slate-300 text-xl self-center">{{ numberFormater(20000) }}</span>
                        <span class="dark:text-slate-300 self-center">تومان</span>
                    </div>
                </UCarousel>
            </div>
            <UTabs dir="rtl" size="xl" color="neutral" class="mt-10" :items="tabsItem">
                <template #ProductOverview>
                    <p>ProductOverview</p>
                </template>
                <template #features>
                    <p>features</p>
                </template>
                <template #comments>
                    <p>comments</p>
                </template>
                <template #faq>
                    <p>faq</p>
                </template>
            </UTabs>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const { public: { baseURL } } = useRuntimeConfig()

const route = useRoute()

interface products{
   data:{
    product:{
        images: []
    }
   }
}

const { data: product } = await useFetch<products | undefined>(`${baseURL}/product/product/${route.params.slug}`)

console.log(product.value);

const items: BreadcrumbItem[] = [
    {
        label: `صفحه اصلی`,
        to: '/'
    },
    {
        label: 'products',
        to: '/products'
    },
    {
        label: `${route.params.slug}`,
        to: `/products/${route.params.slug}`
    }
]

const galleryRef = ref()

onMounted(() => {
   galleryRef.value = product?.value.data?.product?.images[0].image
})


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

const tabsItem = [
    {
        label: 'معرفی محصول',
        icon: 'i-lucide-user',
        slot: 'ProductOverview'
    },
    {
        label: 'خصوصیات',
        icon: 'i-lucide-user',
        slot: 'features'
    },
    {
        label: 'نظرات',
        icon: 'i-lucide-user',
        slot: 'comments'
    },
    {
        label: 'پرسش و پاسخ',
        icon: 'i-lucide-user',
        slot: 'faq'
    },
]
</script>