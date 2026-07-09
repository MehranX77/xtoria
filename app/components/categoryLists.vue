<template>
     <div>
        <div v-if="categoryList !== undefined" class="grid xl:grid-cols-12 lg:grid-cols-9 md:grid-cols-4 grid-cols-2  gap-y-10 mt-10">
           <div v-for="(item) in categoryList" :key="item.id" class="col-span-1 ">
            <div class="rounded-full w-32 h-32 mx-auto">
                <ULink :to="{ name: 'category-slug', params: { slug: item?.slug } }" class="flex flex-col items-center">
                    <NuxtImg class="md:w-25 w-20 md:h-25 h-20 aspect-square" :src="`${baseURLAssets}${item?.picture}`" />
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
const {categoryList} = defineProps(['categoryList'])

// const {public:{baseURL}} = useRuntimeConfig()
const {public:{baseURLAssets}} = useRuntimeConfig()


</script>