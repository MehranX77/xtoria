<template>
     <div>
        <div v-if="category?.data?.results !== undefined">
           <div v-for="(item) in category?.data?.results" :key="item.id" class="col-span-1 ">
            <div class="rounded-full w-32 h-32 mx-auto">
                <ULink :to="{ name: 'category-slug', params: { slug: item?.slug } }" class="flex flex-col items-center">
                    <NuxtImg class="w-30 h-30 rounded-full" :src="item.picture" />
                    <span class="text-sm text-slate-800 dark:text-slate-50 text-center mt-8">{{
                        item?.name }}</span>
                </ULink>
            </div>
        </div>
        </div>

        <div v-else>
            <UAlert orientation="horizontal" dir="rtl" class="col-span-12" title="خطا در بارگذاری" description="بارگذاری دسته بندی محصولات با خطا مواجه شد" color="error" variant="soft" :actions="[{label:'تلاش محدد', color:'neutral', variant:'solid', onClick: ()=> refresh({timeout:2000})}]"/>
        </div>
     </div>
</template>


<script setup lang="ts">
const { public: { baseURL } } = useRuntimeConfig()

// category types
interface Category {
    name: string,
    picture: string,
    id: number,
    slug: string
}

interface CategoryResponse {
    data: {
        results: Category[]
    }
}
const { data: category, refresh } = await useFetch<CategoryResponse>(`${baseURL}/product/categories/`, {
    pick: ['data']
})


</script>