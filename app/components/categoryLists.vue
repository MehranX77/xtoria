<template>
     <div>
        <div v-if="categoryList !== undefined">
           <div v-for="(item) in categoryList" :key="item.id" class="col-span-1 ">
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
const {categoryList} = defineProps(['categoryList'])



console.log('category products: ', categoryList);


</script>