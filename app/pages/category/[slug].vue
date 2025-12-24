<template>
    <div class="md:mt-44 mt-10">
        <UContainer>
            <UBreadcrumb :items="items">
                <template #separator>
                    <span class="mx-2 text-muted">
                        <UIcon class="align-middle" name="solar:alt-arrow-left-linear" />
                    </span>
                </template>
            </UBreadcrumb>
            <div class="flex dark:bg-slate-800 bg-slate-100 w-full p-4 rounded-lg mt-5 gap-x-5">
                <div class="gallery basis-95">
                    <NuxtImg class="w-80 h-80 max-h-80 object-fit rounded-lg" :src="galleryRef" />
                    <div class="flex justify-center sub-img gap-x-5">
                        <NuxtImg v-for="(value, index) in galleryList" :key="index" class="w-20 h-20 max-h-20 hover:cursor-pointer transition-all object-fit rounded-lg border border-slate-300 dark:border-slate-700/90 hover:border-rose-700/90 p-2" :src="value" @click="changeImg(value)" />
                    </div>
                </div>
                <div class="basis-full mt-8">
                    <div class="flex justify-between">
                        <!-- مشخصات محصول -->
                       <div class="flex flex-col gap-y-3">
                        <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-200">خرید مانیتور - مشکی</h3>
                       <div class="flex gap-x-2">
                         <h4 class="text-lg font-bold">مدل:</h4>
                        <span class="self-center text-muted">دوال سنس مشکی</span>
                       </div>
                        <div class="flex gap-x-2">
                         <h4 class="text-lg font-bold">تولید کننده:</h4>
                        <span class="self-center text-sky-500">Sony</span>
                       </div>
                        <ul class="space-y-2">
                            <li class="text-xl"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                            <li class="text-xl"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                            <li class="text-xl"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                            <li class="text-xl"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone"/>قابل استفاده به صورت بی‌سیم و با کابل USB-C</li>
                        </ul>
                        <div class="flex gap-x-6 mt-4">
                            <UFormField orientation="horizontal" label="فروشنده" class="text-xl">
                                <USelect v-model="value" size="xl" :items="branch" class="w-full"/>
                            </UFormField>
                            <UFormField orientation="horizontal" label="تعداد" class="text-xl">
                                 <UInputNumber v-model="deviceNumber" size="xl" :min="1" />
                            </UFormField>
                        </div>
                        <UFormField label="انتخاب گارانتی" required class="space-y-4 text-xl">
                           <URadioGroup v-model="garantee" size="xl" dir="rtl" class="text-end w-fit " :items="garanteeList" />  
                        </UFormField>
                         <UButton variant="solid" size="xl" color="success" class="w-[40%] text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone">76000 تومن</UButton>
                    </div>

                     <div class="flex flex-col gap-y-2">
                     <UButton size="xl" variant="subtle" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone"/>
                     <UButton size="xl" variant="subtle" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone"/>
                     <UButton size="xl" variant="subtle" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone"/>
                     <UButton size="xl" variant="subtle" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone"/>
                    </div>
                    </div>

                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const route = useRoute()

const items: BreadcrumbItem[] = [
    {
        label: `صفحه اصلی`,
        to: '/'
    },
    {
        label: 'category',
        to: '/category'
    },
    {
        label: `${route.params.slug}`,
        to: `/category/${route.params.slug}`
    }
]

const galleryRef = ref<string>('case.png')

const galleryList: string[] = [
    'case.png',
    'monitor.png'
]

const changeImg = (x: string) => {
    galleryRef.value = x

}

const branch = ref<string[]>(['شعبه میدان انار'])
const value = ref<string>('شعبه میدان انار')

const deviceNumber = ref<number>(1)

const garanteeList = ref<string[]>(['10 روز مهلت تست', '1 سال گارانتی آبی'])
const garantee = ref<string>('10 روز مهلت تست')
</script>