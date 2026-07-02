<template>
    <div>
        <UContainer dir="ltr" class="md:mt-44 mt-10">
            <UCarousel :items="items" arrows loop autoplay :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }">
                <NuxtImg width="1024" src="banner.jpg" class="rounded-lg w-full md:h-87.5 h-40" />
            </UCarousel>

            <div dir="rtl" class="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-5 mt-5">
                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit">
                    <h3 class="text-xl dark:text-slate-300">جدیدترین کالاها</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="homeData?.data?.newest" arrows loop autoplay :ui="{ item: 'xl:basis-1/3 md:basis-1/2', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }" :prev-icon="prevIcon" :next-icon="nextIcon">
                        <div class="flex flex-col gap-y-2 bg-slate-50 dark:bg-slate-700 items-center rounded-lg">
                            <NuxtImg :src="`${baseURLAssets}${item?.product?.picture}`" class="rounded-lg md:min-w-46 md:min-h-46 md:max-w-46 max-w-full md:max-h-46 min-h-56 max-h-56 bg-cover md:mx-0 mx-auto" />
                            <span class="text-sm font-bold text-center">{{ item?.product?.name }}</span>
                            <span v-html="item?.product?.description" class="text-sm text-muted text-center" />
                            <UButton :to="{ name: 'products-slug', params: { slug: item?.slug }, query: { p_id: item?.id } }" dir="rtl" color="neutral" variant="soft" size="lg" class="rounded-lg place-content-center w-[86%] mx-auto mb-1"> {{numberFormater(item?.price) }} تومن</UButton>
                        </div>

                    </UCarousel>
                </div>

                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4">
                    <h3 class="text-xl text-rose-500">تخفیف های ویژه</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="homeData?.data?.special_discount" arrows loop  dots :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2', dots: 'absolute md:-bottom-38 -bottom-60 md:flex hidden', dot: 'w-10 h-1.5' }" :prev-icon="prevIcon" :next-icon="nextIcon">
                        <div class="bg-white dark:bg-slate-700 rounded-lg p-4 flex md:flex-row flex-col justify-between items-center">
                           <NuxtImg :src='`${baseURLAssets}${item?.product?.picture}`' class="md:min-w-46 md:min-h-46 md:max-w-46 max-w-full md:max-h-46 min-h-56 max-h-56 bg-cover rounded-lg" />
                           <div dir="rtl" class="flex-col space-y-2 ">
                            <UBadge v-if="item?.discount > 0" size="md" color="error" variant="soft" class="text-sm ">50% OFF </UBadge>
                            <h2 class="font-bold md:text-start text-center md:mt-0 mt-3">{{ item?.product?.name }}</h2>
                             <p class="font-bold line-clamp-2 md:text-start text-center" v-html="item?.product?.description" />
                             <span v-if="item?.discount" class="self-center text-xl line-through text-muted md:text-start text-center">{{ item?.discount }} تومان</span>
                             <Countdown class="md:text-start text-center font-bold text-xl text-rose-500" :date="new Date('feb 14, 2026 16:50:30')" v-slot="{ hours, minutes, seconds }">{{ hours }} : {{ minutes }} : {{ seconds }}</Countdown>
                              <UButton :to="{ name: 'products-slug', params: { slug: item?.slug }, query: { p_id: item?.id } }" dir="rtl" class="place-content-center lg:text-xl rounded-md" color="error" variant="subtle">{{ numberFormater(item?.price) }} تومان</UButton>
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

                    <MainProducts :main-product="homeData?.data.products" />
            </div>
            <div class="mt-5 bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                <div class="flex justify-between">
                    <UButton disabled color="neutral" variant="ghost" size="xl" icon="solar:arrow-left-bold-duotone"
                        class="self-center text-md hover:cursor-pointer">مشاهده همه</UButton>
                    <h3 class="text-xl text-end self-center-safe">محصولات پرفروش</h3>
                </div>
                    <LazyMostSold :most-sold="homeData?.data.most_sold" hydrate-on-visible />
            </div>

            <!-- banners -->
             <div class="grid md:grid-cols-2 grid-cols-1 mt-10 gap-x-3">
                <NuxtImg class="rounded-lg self-center max-w-full w-full md:max-h-52 bg-cover" v-for="banner in banner1" :key="banner.id" :src="`${baseURLAssets}${banner?.media}`"/>
             </div>

            <div class="my-8">
                <h1 class="text-center text-xl">خرید بر اساس دسته بندی</h1>
                <NuxtErrorBoundary>
                        <!-- defualt component -->
                        <LazyCategoryLists :category-list="homeData?.data?.categories" class="col-span-12"  hydrate-on-visible />
                    <!-- error handler -->
                    <template #error="{ error, clearError }">
                        <UAlert class="mt-5" orientation="horizontal" dir="rtl" title="خطایی رخ داد" :description="error?.message" color="warning" variant="soft"
                            :actions="[{ label: 'تلاش محدد', color: 'neutral', variant: 'soft', onClick: () => clearError() }]" />
                    </template>
                </NuxtErrorBoundary>

            </div>
            <div
                class="md:grid md:grid-cols-2 hidden gap-x-4 mt-30 border dark:border-slate-700/70 border-slate-200 lg:p-5 p-3">
                <NuxtImg v-for="banner in banner2" :key="banner.id" :src="`${baseURLAssets}${banner?.media}`" class="lg:w-full rounded-lg border-r dark:border-slate-700/70 border-slate-200 lg:h-87.5 w-55 h-40 mx-auto bg-cover" />
            </div>

            <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit md:mt-8 mt-14">
                <h3 class="text-xl text-rose-500 text-end">پیشنهاد ویژه</h3>
                <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="homeData?.data?.suggested_products" arrows
                    loop autoplay
                    :ui="{ item: 'xl:basis-1/7 lg:basis-1/4 md:basis-1/3', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }"
                    :prev-icon="prevIcon" :next-icon="nextIcon">
                    <div class="flex flex-col items-center gap-y-2 bg-slate-50 dark:bg-slate-700">
                        <NuxtImg :src="`${baseURLAssets}${item?.product?.picture}`" 
                            class="rounded-lg md:min-w-46 md:min-h-46 md:max-w-46 max-w-full md:max-h-46 min-h-40 max-h-40 bg-cover  md:mx-0 mx-auto" />
                        <span class="text-sm font-bold text-center">{{ item?.product?.name }}</span>
                        <span v-html="item?.product?.description" class="text-sm text-muted text-center" />
                        <UButton :to="{ name: 'products-slug', params: { slug: item?.slug }, query: { p_id: item?.id } }"
                            dir="rtl" size="lg" color="error" variant="subtle"
                            class="rounded-md place-content-center w-[86%] mx-auto mb-1">{{
                            numberFormater(item?.price) }} تومان</UButton>
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
// import {addToBasket} from '../stores/index'
const { public: { baseURL } } = useRuntimeConfig()
const {public:{baseURLAssets}} = useRuntimeConfig()
// const store = addToBasket()

defineProps<{
    prevIcon?: 'i-lucide-chevron-right',
    nextIcon?: 'i-lucide-chevron-left'
}>()



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

const items = [
    'banner.jpg',
    'banner.jpg',
    'banner.jpg',
    'banner.jpg',
]

interface home_data {
    data: {
        most_sold: any[],
        suggested_products: any[],
        categories:any[],
        products:any[],
        special_discount:any[],
        newest:any[],
        banners:any[]
    }
}

const { data: homeData } = await useFetch<home_data>(`${baseURL}/home-data`)

    const banner1 = ref(homeData.value?.data?.banners.slice(0,2))
    const banner2 = ref(homeData.value?.data?.banners.slice(2,4))



    // محاسبه ی نهایی مبلغ قابل پرداخت 


</script>
