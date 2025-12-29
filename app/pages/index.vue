<template>
    <div>
        <UContainer dir="ltr" class="md:mt-44 mt-10">
            <UCarousel :items="items" arrows loop autoplay
                :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }">
                <NuxtImg width="1024" src="banner.jpg" class="rounded-lg w-full md:h-[350px] h-40" />
            </UCarousel>

            <div dir="rtl" class="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-5 mt-5">
                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit">
                    <h3 class="text-xl dark:text-slate-300">جدیدترین کالاها</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay
                        :ui="{ item: 'xl:basis-1/3 md:basis-1/2', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }" :prev-icon="prevIcon"
                        :next-icon="nextIcon">
                        <div class="flex flex-col gap-y-2 bg-slate-50 dark:bg-slate-700 items-center rounded-lg">
                            <NuxtImg :src="item" width="340" height="340" class="rounded-lg md:max-w-46 md:mx-0 max-w-44 mx-auto" />
                            <span class="text-sm font-bold text-center">stressless mouse</span>
                            <span class="text-sm text-muted text-center">موس گیمینگ- بیسیم</span>
                            <UButton size="lg" class="rounded-full place-content-center w-[86%] mx-auto mb-1">95000تومن
                            </UButton>
                        </div>
                    </UCarousel>
                </div>
                <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4">
                    <h3 class="text-xl text-rose-500">تخفیف های ویژه</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay dots
                        :ui="{ controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2', dots: 'absolute md:-bottom-38 -bottom-60 md:flex hidden', dot: 'w-10 h-1.5' }"
                        :prev-icon="prevIcon" :next-icon="nextIcon">
                        <UPageCard class="w-full" orientation="horizontal" title="مانیتور asus"
                            description=" ابلابلابابل ابل اب لاب لا بلا ب ایب ایبلایب لایبل ایب لا یبلایبلابل امانیتور خمیده مخصوص بازی asus">
                            <NuxtImg class="aspect-square xl:min-w-56 xl:max-w-56 xl:min-h-56 xl:max-h-56 lg:min-w-46 lg:max-w-46 lg:min-h-46 lg:max-h-46 md:w-[260px] md:h-[260px] w-[180px] h-[180px] mx-auto" :src="item" />
                        </UPageCard>
                    </UCarousel>
                </div>
            </div>
             <div class="mt-5 bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                <div class="flex justify-between">
                    <UButton to="/products" color="neutral" variant="ghost" size="xl" icon="solar:arrow-left-bold-duotone" class="self-center text-md hover:cursor-pointer">مشاهده همه</UButton>
                    <h3 class="text-xl text-end">لیست محصولات</h3>
                </div>
                <div class="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-x-4 xl:gap-y-0 gap-y-5 mt-4">
                    <div v-for="(item, index) in product?.data.results" :key="index" class="md:col-span-2 col-span-1 flex flex-col gap-y-1">
                        <NuxtImg class="md:max-w-46 max-w-30 mx-auto rounded-lg" :src="item?.picture" />
                        <span class="text-sm font-bold text-center">{{ item.product?.name }}</span>
                        <span class="text-sm text-muted text-center">{{ item.product?.description }}</span>
                        <UButton :to="{name:'products-slug', params:{slug: item?.slug}}" dir="rtl" size="lg" class="rounded-full place-content-center w-[86%] mx-auto mb-1">{{ item?.price }} تومن</UButton>
                    </div>
                </div>
            </div>
            <div class="mt-5 bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                <div class="flex justify-between">
                    <UButton to="/" color="neutral" variant="ghost" size="xl" icon="solar:arrow-left-bold-duotone" class="self-center text-md hover:cursor-pointer">مشاهده همه</UButton>
                    <h3 class="text-xl text-end">محصولات پرفروش</h3>
                </div>
                <div class="grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 grid-cols-2 gap-x-4 xl:gap-y-0 gap-y-5 mt-4">
                    <div v-for="(item, index) in product?.data.results" :key="index" class="md:col-span-2 col-span-1 flex flex-col gap-y-1">
                        <NuxtImg class="md:max-w-46 max-w-30 mx-auto rounded-lg" :src="item?.picture" />
                        <span class="text-sm font-bold text-center">{{ item.product?.name }}</span>
                        <span class="text-sm text-muted text-center">{{ item.product?.description }}</span>
                        <UButton dir="rtl" size="lg" class="rounded-full place-content-center w-[86%] mx-auto mb-1">{{ item?.price }} تومن</UButton>
                    </div>
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
                <h1 class="text-center  text-2xl">خرید بر اساس دسته بندی</h1>
                <div class="grid xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-y-10 mt-10">
                <div v-for="(item, index) in category?.data.results" :key="index" class="col-span-1 ">
                  <div class="rounded-full w-32 h-32 mx-auto">
                   <ULink :to="{name:'category-slug', params:{slug: item?.slug}}" class="flex flex-col items-center">
                     <NuxtImg class="w-30 h-30 rounded-full" :src="item.picture" />
                     <span class="text-sm text-slate-800 dark:text-slate-50 text-center mt-8">{{ item?.name }}</span>
                   </ULink>
                  </div>
                </div>
            </div>
            </div>
                <div class="md:grid md:grid-cols-2 hidden gap-x-4 mt-30 border dark:border-slate-700/70 border-slate-200 lg:p-5 p-3">
                    <NuxtImg src="case.png" class="lg:w-full border-r dark:border-slate-700/70 border-slate-200 lg:h-[350px] w-[260px] h-[260px] mx-auto"/>
                    <NuxtImg src="case.png" class="lg:w-full lg:h-[350px] w-[260px] h-[260px] mx-auto"/>
                </div> 
                
                  <div class="bg-slate-100 dark:bg-slate-800 rounded-lg shadow p-4 h-fit md:mt-8 mt-14">
                    <h3 class="text-xl text-rose-500 text-end">پیشنهاد ویژه</h3>
                    <UCarousel v-slot="{ item }" dir="ltr" class="mt-4" :items="items" arrows loop autoplay :ui="{ item: 'xl:basis-1/7 lg:basis-1/4 md:basis-1/3', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }" :prev-icon="prevIcon" :next-icon="nextIcon">
                        <div class="flex flex-col items-center gap-y-2 bg-slate-50 dark:bg-slate-700 relative">
                            <NuxtImg :src="item" width="340" height="340" class="rounded-lg md:max-w-46 md:mx-0 max-w-44 mx-auto" />
                            <UBadge size="lg" color="warning" label="OFF 30%" class="self-start top-3 left-3 absolute" />
                            <span class="text-sm font-bold text-center">stressless mouse</span>
                            <span class="text-sm text-muted text-center">موس گیمینگ- بیسیم</span>
                            <UButton size="lg" class="rounded-full place-content-center w-[86%] mx-auto mb-1">95000تومن
                            </UButton>
                        </div>
                    </UCarousel>
                </div>

            <!-- blog posts -->
             <USeparator class="my-10" label="آخرین مقالات" :ui="{label:'text-2xl '}"/>
            <UBlogPosts :posts="posts" />
        </UContainer>
    </div>
</template>

<script setup lang="ts">
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

// category types
interface Category {
    name:string,
    picture: string,
    id:number,
    slug: string
}

interface CategoryResponse {
    data: {
        results : Category[]
    }
}

// product types
interface productDetails {
 id: number,
 name: string,
 description: string,
 is_active: boolean,
 picture: string | null,
 score: number,
 brand: number,
 category: number
}

interface productItem {
 id: number,
 product: productDetails,
 price: number,
 stock: number,
 discount: number,
 slug: string,
  picture: string,
}
interface ProductResponse {
 data: {
    results: productItem[]
 }
}

const {data: category} = await useFetch<CategoryResponse>('https://xtoria.liara.run/api/v1/product/categories/',{
    pick:['data']
})
 
    
const {data: product} = await useFetch<ProductResponse>('https://xtoria.liara.run/api/v1/product/products/')

console.log(product.value);

// const {data:homeData} = await useFetch('https://xtoria.liara.run/api/v1/home-data')

// console.log(homeData.value);

</script>
