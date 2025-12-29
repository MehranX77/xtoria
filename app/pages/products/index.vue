<template>
    <div class="md:mt-44 mt-10">
        <UContainer>
         <UBreadcrumb :items="productBreadcrumb">
                <template #separator>
                    <span class="mx-2 text-muted">
                        <UIcon class="align-middle" name="solar:alt-arrow-left-linear" />
                    </span>
                </template>
            </UBreadcrumb>
            <div class="grid md:grid-cols-12 grid-cols-1 gap-x-3 md:gap-y-0 gap-y-5 mt-5">
                <div class="filtering md:col-span-3">
                    <UCard>
                        <template #header>
                                <div class="flex gap-x-1">
                                    <UIcon name="solar:filter-linear" class="self-center text-slate-600 dark:text-slate-100"/>
                                    <span class="text-base self-center text-slate-600 dark:text-slate-100">فیلترها</span>
                                </div>
                        </template>
                        <div class="flex justify-between mb-5">
                            <span class="text-sm text-slate-700 dark:text-slate-100">فقط کالاهای موجود</span>
                            <USwitch value="kala" dir="ltr" size="sm" color="success" class="self-center"/>
                        </div>
                        <div class="flex justify-between mb-5">
                            <span class="text-sm text-slate-700 dark:text-slate-100">تخفیف ها</span>
                            <USwitch dir="ltr" size="sm" color="success" class="self-center"/>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-slate-700 dark:text-slate-100">محبوب ترین ها</span>
                            <USwitch dir="ltr" size="sm" color="success" class="self-center"/>
                        </div>
                        <USeparator class="my-5"/>
                        <UAccordion class="" :items="items" :ui="{root:'divide-none'}">
                            <template #price>
                                <div class="py-3 px-1">
                                    <USlider v-model="priceArray" dir="ltr" :min="1000" :max="5000000" tooltip />
                                </div>
                                <span class="text-muted text-xs"> محدوده قیمت از : {{ priceArray[0] }}تومان تا  {{ priceArray[1] }} تومان </span>
                            </template>
                             <template #category>
                                <div class="py-3 px-1">
                                    <UInput variant="soft" size="xl" placeholder="جستجو دسته‌بندی" icon="tabler:search" class="w-full"/>
                                    <UCheckboxGroup v-model="checkboxValue" color="neutral" :items="categoryCheckbox" dir="rtl" class="mt-3" :ui="{item:'mb-3'}"/>
                                </div>
                            </template>
                        </UAccordion>
                    </UCard>
                </div>
                <div class="content md:col-span-9">
                     <div class="bg-slate-100 dark:bg-slate-800 p-5 w-full rounded-lg flex gap-x-3">
                          <div class="flex gap-x-2">
                            <UIcon name="streamline-ultimate:filter-sort-lines-descending" class="self-center"/>
                            <span class="text-base"> ترتیب: </span>
                          </div>
                     </div>
                     <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full mt-5">
                       <UCard v-for="(val, index) in 6" :key="index">
                        hello
                       </UCard>
                     </div>

                     <!-- pagination -->

                     <UPagination v-model:page="page" :total="100" class="mt-5 flex justify-center" dir="ltr"/>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { AccordionItem, BreadcrumbItem } from '@nuxt/ui';

const productBreadcrumb :BreadcrumbItem[]= [
     {
        label: `صفحه اصلی`,
        to: '/'
    },
    {
        label: 'محصولات',
        to: '/products'
    }
]

const items = [
    {
        label:'فیلتر بر اساس قیمت',
        slot: 'price' as const
    },
    {
        label:'دسته بندی ها',
        slot: 'category' as const
    },
] satisfies AccordionItem[]

const priceArray = ref<number[]>([1000000, 15000000])

const checkboxValue = ref<string[]>([])

const categoryCheckbox = ref<string[]>(['هدفون', 'هدست', 'میکروفن'])

const page = ref<number>(5)
</script>

<style>
    input[type='text']::placeholder{
        font-size: small;
    }
</style>