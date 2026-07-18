<template>
    <div class="flex flex-col gap-y-3">
        <h2 class="dark:text-slate-200 text-slate-700  lg:text-2xl font-bold mt-5">مدیریت سفارشات</h2>
        <div v-if="res?.data?.results" class="flex flex-col gap-y-3 mt-5">
            <!-- i must set v-for on this component for render data -->
            <UCard v-for="product in res?.data?.results" :key="product.id">
                <template #header>
                   <div class="flex justify-between">
                    <p class="font-bold dark:text-slate-200 text-slate-700 text-md">کدپیگیری: {{ product.tracking_code || 0 }}</p>
                    <div class="flex gap-x-1">
                    <UBadge color="secondary">{{ product.status }}</UBadge>
                     <UBadge v-if="product.is_paid" color="secondary">پرداخت شده</UBadge>
                    <UBadge v-else color="error">پرداخت نشده</UBadge>
                    </div>
                   </div>
                </template>
                <template #default>
                    <div v-for="p in product.basket" :key="p.id" class="flex justify-between my-2">
                        <div class="flex gap-x-4">
                           <NuxtImg class="w-20 max-w-20 h-20 max-h-20 rounded-lg" :src="`${baseURLAssets}${p.product.product.picture}`"/>
                           <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center max-w-min">{{ p.product.product.name }}</span>
                        </div>

                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center ">قیمت: {{ numberFormater(p.price) }} تومان</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center ">تعداد: {{ p.quantity }}</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center ">تخفیف:{{ p.discount }}</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center ">قیمت نهایی: {{ p.price * p.quantity }}</span>
                    </div>
                    <USeparator class="my-2" />
                </template>
                <template #footer>
                    <div class="flex justify-between">
                        <p class="dark:text-slate-200 text-slate-600 text-md text-base self-center">مجموع قیمت</p>
                        <p class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">{{ numberFormater(product.final_price) }} تومان</p>
                    </div>
                </template>
            </UCard>
            <!-- end data rendered -->
        </div>
        <div v-else class="flex flex-col gap-y-5 justify-center items-center h-full">
          <UIcon class="text-5xl text-slate-400 dark:text-slate-600" name="line-md:moon-alt-twotone-loop"/>
          <p class="font-black text-muted">تاکنون سفارشی ثبت نشده!</p>
        </div>
    </div>

</template>

<script setup lang="ts">
useHead({
  title:'سفارشات'
})
const {public:{baseURLAssets}} = useRuntimeConfig()
const headers = useRequestHeaders(['cookie'])

    const res = await $fetch('/api/order-list', {
        method:'GET',
        headers
    })

    console.log(res);
    





</script>