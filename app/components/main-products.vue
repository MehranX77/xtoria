<template>
    <div v-for="item in mainProduct" :key="item.id" class="md:col-span-2 col-span-1 flex flex-col gap-y-1">
        <NuxtImg class="md:max-w-46 max-w-30 mx-auto rounded-lg" :src="item?.picture" />
        <span class="text-sm font-bold text-center">{{ item.product?.name }}</span>
        <span v-html="item.product?.description" class="text-sm text-muted text-center" />
        <UButton :to="{ name: 'products-slug', params:{slug: item.slug}, query:{brand: item.slug}}" color="error" dir="rtl" size="lg" class="rounded-full place-content-center w-[86%] mx-auto mb-1">{{ numberFormater(item?.price) 
            }} تومن </UButton>
     
    </div>

</template>

<script setup lang="ts">

const {mainProduct} = defineProps(['mainProduct'])



console.log('main products: ', mainProduct);


</script>