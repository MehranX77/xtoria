<template>
    <div>
        <UContainer dir="ltr" class="md:mt-44 mt-10">
            <UCarousel :items="items" arrows loop autoplay
                :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }">
                <NuxtImg width="1024" src="banner.jpg" class="rounded-lg w-full md:h-87.5 h-40" />
            </UCarousel>

            <div dir="rtl" class="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-5 mt-5">
                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit">
                    <h3 class="text-xl dark:text-slate-300">جدیدترین کالاها</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay
                        :ui="{ item: 'xl:basis-1/3 md:basis-1/2', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }"
                        :prev-icon="prevIcon" :next-icon="nextIcon">
                        <div class="flex flex-col gap-y-2 bg-slate-50 dark:bg-slate-700 items-center rounded-lg">
                            <NuxtImg :src="item" width="340" height="340"
                                class="rounded-lg md:max-w-46 md:mx-0 max-w-44 mx-auto" />
                            <span class="text-sm font-bold text-center">stressless mouse</span>
                            <span class="text-sm text-muted text-center">موس گیمینگ- بیسیم</span>
                            <UButton dir="rtl" color="neutral" variant="link" size="lg" class="rounded-lg place-content-center w-[86%] mx-auto mb-1"> {{ numberFormater(950000) }} تومن</UButton>
                        </div>
                    </UCarousel>
                </div>
                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4">
                    <h3 class="text-xl text-rose-500">تخفیف های ویژه</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay dots
                        :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2', dots: 'absolute md:-bottom-38 -bottom-60 md:flex hidden', dot: 'w-10 h-1.5' }"
                        :prev-icon="prevIcon" :next-icon="nextIcon">
                        <div class="discount-card w-full rounded-lg h-full bg-white dark:bg-slate-700 p-4">
                            <UBadge size="md" color="error" variant="soft" class="text-sm">50% OFF</UBadge>
                            <div class="flex justify-between gap-x-5">
                                <div class="flex flex-col justify-between text-end gap-y-2">
                                    <h2 class="lg:text-xl">هندزفری</h2>
                                    <span class="text-base text-muted line-clamp-2">Lorem ipsum dolor sit, amet
                                        consectetur adipisicing elit. Dolores natus ipsam, quaerat impedit deleniti
                                        molestiae sequi accusamus praesentium earum consequuntur incidunt iste ipsum
                                        sapiente ducimus iure recusandae atque blanditiis ipsa?</span>
                                    <div class="flex justify-start gap-x-5">
                                        <UButton dir="rtl" class="lg:w-50 place-content-center lg:text-xl rounded-md" color="error" variant="subtle">50,000 تومن</UButton>
                                        <span class="self-center text-xl line-through text-muted">100/000</span>
                                    </div>
                                    <Countdown class="text-start font-bold text-xl text-rose-500"
                                        :date="new Date('feb 14, 2026 16:50:30')" v-slot="{ hours, minutes, seconds }">
                                        {{ hours }} : {{ minutes }} : {{ seconds }}
                                    </Countdown>
                                </div>
                                <NuxtImg :src="item"
                                    class="aspect-square xl:min-w-56 xl:max-w-56 xl:min-h-56 xl:max-h-56 lg:min-w-46 lg:max-w-46 lg:min-h-46 lg:max-h-46 md:w-65 md:h-65 w-45 h-45 mx-auto" />
                            </div>
                        </div>
                    </UCarousel>
                </div>
            </div>
            <div class="mt-5 bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                <div class="flex justify-between">
                    <UButton to="/products" color="neutral" variant="ghost" size="xl"
                        icon="solar:arrow-left-bold-duotone" class="self-center text-md hover:cursor-pointer">مشاهده همه
                    </UButton>
                    <h3 class="text-xl text-end self-center-safe">لیست محصولات</h3>
                </div>
                <div  class="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-x-4 xl:gap-y-0 gap-y-5 mt-4">
                   <!-- <LazyProductLists hydrate-on-visible/> -->
                </div>
            </div>
            <div class="mt-5 bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                <div class="flex justify-between">
                    <UButton to="/" color="neutral" variant="ghost" size="xl" icon="solar:arrow-left-bold-duotone"
                        class="self-center text-md hover:cursor-pointer">مشاهده همه</UButton>
                    <h3 class="text-xl text-end self-center-safe">محصولات پرفروش</h3>
                </div>
                <div
                    class="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-x-4 xl:gap-y-0 gap-y-5 mt-4">
                     <LazyMostSold :most-sold="homeData?.data.most_sold" hydrate-on-visible />
                </div>
            </div>
            <div class="mt-5 md:grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 hidden">
                <div class="console">
                    <NuxtImg class="w-full rounded-lg" src="console.jpg" />
                </div>
                <div class="md:grid grid-cols-2 gap-x-3 gap-y-4 hidden">
                    <NuxtImg class="h-full rounded-lg object-cover object-center" src="console.jpg" />
                    <NuxtImg class="h-full rounded-lg object-cover object-center" src="console.jpg" />
                </div>
            </div>
            <div class="mt-5 md:grid grid-cols-2 gap-y-4 gap-x-4 hidden">
                <div class="grid grid-cols-2  gap-x-3 ">
                    <NuxtImg class="h-full rounded-lg object-cover object-center" src="console.jpg" />
                    <NuxtImg class="h-full rounded-lg object-cover object-center" src="console.jpg" />
                </div>
                <div class="console">
                    <NuxtImg class="w-full rounded-lg" src="console.jpg" />
                </div>
            </div>

            <div class="my-8">
                <h1 class="text-center text-xl">خرید بر اساس دسته بندی</h1>
                <NuxtErrorBoundary>
                        <div class="grid xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-y-10 mt-10">
                            <!-- defualt component -->
                            <LazyCategoryLists class="col-span-12" hydrate-on-visible/>
                        </div>
                        <!-- error handler -->
                        <template #error="{ error, clearError }">
                            <UAlert class="mt-5" orientation="horizontal" dir="rtl"  title="خطایی رخ داد" :description="error?.message" color="warning" variant="soft" :actions="[{label:'تلاش محدد', color:'neutral', variant:'soft', onClick: ()=> clearError()}]"/>
                        </template>
                    </NuxtErrorBoundary>

            </div>
            <div
                class="md:grid md:grid-cols-2 hidden gap-x-4 mt-30 border dark:border-slate-700/70 border-slate-200 lg:p-5 p-3">
                <NuxtImg src="case.png" class="lg:w-full border-r dark:border-slate-700/70 border-slate-200 lg:h-87.5 w-65 h-65 mx-auto" />
                <NuxtImg src="case.png" class="lg:w-full lg:h-87.5 w-65 h-65 mx-auto" />
            </div>

            <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit md:mt-8 mt-14">
                <h3 class="text-xl text-rose-500 text-end">پیشنهاد ویژه</h3>
                <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay
                    :ui="{ item: 'xl:basis-1/7 lg:basis-1/4 md:basis-1/3', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }"
                    :prev-icon="prevIcon" :next-icon="nextIcon">
                    <div class="flex flex-col items-center gap-y-2 bg-slate-50 dark:bg-slate-700">
                        <NuxtImg :src="item" width="340" height="340"
                            class="rounded-lg md:max-w-46 md:mx-0 max-w-44 mx-auto" />
                        <span class="text-sm font-bold text-center">stressless mouse</span>
                        <span class="text-sm text-muted text-center">موس گیمینگ- بیسیم</span>
                        <UButton dir="rtl" size="lg" color="error" variant="subtle" class="rounded-md place-content-center w-[86%] mx-auto mb-1">{{ numberFormater(95000) }} تومان</UButton>
                    </div>
                </UCarousel>
            </div>

            <!-- blog posts -->
            <USeparator class="my-10" label="آخرین مقالات" :ui="{ label: 'text-2xl ' }" />
            <UBlogPosts :posts="posts" />
        </UContainer>
    </div>
</template>

<script setup lang="ts">

import { LazyCategoryLists, UButton } from '#components';
const {public:{baseURL}} = useRuntimeConfig()
// import {addToBasket} from '../stores/index'

// const store = addToBasket()

defineProps<{
    prevIcon?: 'i-lucide-chevron-right',
    nextIcon?: 'i-lucide-chevron-left'
}>()

const items = [
    'headphone.png',
    'headphone.png',
    'monitor.png',
    'mouse.png',
    'mouse.png',
    'mouse.png',
    'mouse.png',
]

const posts = ref([
    {
        title: 'blog title',
        description: 'blog description',
        image: 'blog.webp',
        date: '2024-11-25'
    },
    {
        title: 'blog title',
        description: 'blog description',
        image: 'blog.webp',
        date: '2024-11-04'
    },
    {
        title: 'blog title',
        description: 'blog description',
        image: 'blog.webp',
        date: '2024-08-22'
    },
    {
        title: 'blog title',
        description: 'blog description',
        image: 'blog.webp',
        date: '2024-08-22'
    },
])

interface home_data {
 data:{
    most_sold:[]
 }
}

const {data: homeData} = await useFetch<home_data>(`${baseURL}/home-data`)


</script>
