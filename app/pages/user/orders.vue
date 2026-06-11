<template>
    <div class="flex flex-col gap-y-3">
        <h2 class="dark:text-slate-200 text-slate-700  lg:text-2xl font-bold mt-5">مدیریت سفارشات</h2>
        <div class="flex flex-col gap-y-3 mt-5">
            <UCard>
                <template #header>
                   <div class="flex justify-between">
                    <p class="font-bold dark:text-slate-200 text-slate-700 text-md">سفارش 1257#</p>
                    <UBadge color="secondary">در حال پردازش</UBadge>
                   </div>
                </template>
                <template #default>
                    <div class="flex justify-between">
                        <div class="flex gap-x-4">
                           <NuxtImg class="w-20 max-w-20 h-20 max-h-20" src="case.png"/>
                           <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">کیس گیمینگ</span>
                        </div>

                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">قیمت: 200/000 تومان</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">تعداد: 1</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">تخفیف: 5%</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">قیمت نهایی: 200/000 تومان</span>
                    </div>
                    <USeparator />
                       <div class="flex justify-between mt-3">
                        <div class="flex gap-x-4">
                           <NuxtImg class="w-20 max-w-20 h-20 max-h-20" src="mouse.png"/>
                           <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">کیس گیمینگ</span>
                        </div>

                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">قیمت: 200/000 تومان</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">تعداد: 1</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">تخفیف: 5%</span>
                        <span class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">قیمت نهایی: 200/000 تومان</span>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-between">
                        <UButton color="neutral" variant="subtle" size="lg">پیگیری سفارش</UButton>
                        <p class="dark:text-slate-200 text-slate-600 text-md font-bold self-center">مجموع قیمت: 400/000 تومان</p>
                    </div>
                </template>
            </UCard>
        </div>
    </div>

</template>

<script setup lang="ts">
const headers = useRequestHeaders(['cookie'])
try {
    const res = await $fetch('/api/order-list', {
        method:'GET',
        headers
    })

    console.log(res);
    
} catch (error) {
    console.log(error);
    
}





</script>