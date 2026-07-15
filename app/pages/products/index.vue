<template>
    <div class="md:mt-44 mt-10">
        <UContainer>
            <UBreadcrumb :items="productBreadcrumb" :ui="{ link: 'text-rose-500' }">
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
                                <UIcon name="solar:filter-linear"
                                    class="self-center text-slate-600 dark:text-slate-100" />
                                <span class="text-base self-center text-slate-600 dark:text-slate-100">فیلترها</span>
                            </div>
                        </template>
                        <div class="flex justify-between mb-5">
                            <span class="text-sm text-slate-700 dark:text-slate-100">فقط کالاهای موجود</span>
                            <USwitch value="kala" dir="ltr" size="sm" color="success" class="self-center" />
                        </div>
                        <div class="flex justify-between mb-5">
                            <span class="text-sm text-slate-700 dark:text-slate-100">تخفیف ها</span>
                            <USwitch v-model="isDescount" dir="ltr" size="sm" color="success"
                                class="self-center" />
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-slate-700 dark:text-slate-100">محبوب ترین ها</span>
                            <USwitch dir="ltr" size="sm" color="success" class="self-center" />
                        </div>
                        <USeparator class="my-5" />
                        <UAccordion class="" :items="items" :ui="{ root: 'divide-none' }">
                            <template #price>
                                <div class="py-3 px-1">
                                    <USlider v-model="priceArray" dir="ltr" :min="1000" :max="5000000" tooltip />
                                </div>
                                <span class="text-muted text-xs"> محدوده قیمت از : {{ numberFormater(priceArray[0]!)
                                }}تومان تا {{
                                        numberFormater(priceArray[1]!) }} تومان </span>
                            </template>
                            <template #category>
                                <div class="py-3 px-1">
                                    <UInput variant="soft" size="xl" placeholder="جستجو دسته‌بندی" icon="tabler:search"
                                        class="w-full" />
                                    <UCheckboxGroup v-model="checkboxValue" color="neutral" :items="categoryCheckbox"
                                        dir="rtl" class="mt-3" :ui="{ item: 'mb-3' }" />
                                </div>
                            </template>
                        </UAccordion>
                    </UCard>
                </div>
                <div class="content md:col-span-9">
                    <div class="bg-slate-100 dark:bg-slate-800 p-5 w-full rounded-lg flex gap-x-3">
                        <div class="flex gap-x-2">
                            <UIcon name="streamline-ultimate:filter-sort-lines-descending" class="self-center" />
                            <span class="text-base"> ترتیب: </span>
                        </div>
                    </div>

                    <TransitionGroup v-if="discountList"
                        class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 w-full mt-5" tag="div" name="list">
                        <UCard v-for="(val, index) in discountList" :key="index" variant="soft">
                            <div class="flex flex-col gap-y-3">
                                <ULink
                                    :to="{ name: 'products-slug', params: { slug: val?.slug }, query: { p_id: val?.id } }">
                                    <NuxtImg :src="val?.product?.picture" class="md:min-w-46 md:min-h-46 md:max-w-46 max-w-30 md:max-h-46 max-h-30 bg-cover rounded-lg mx-auto" />
                                </ULink>
                                <span v-html="val?.product?.description" class="text-muted text-sm line-clamp-2" />
                                <div class="flex justify-between mt-5">
                                    <UBadge v-if="val?.discount" variant="solid" color="warning"
                                        class="rounded-full self-center">
                                        45%</UBadge>
                                    <div class="flex flex-col w-full text-end gap-y-2">
                                        <span class="text-slate-700 dark:text-slate-200 font-bold sm:text-sm text-xs">{{
                                            numberFormater(val?.price) }} تومان</span>
                                        <span v-if="val?.discount"
                                            class="text-slate-600 dark:text-slate-200 text-xs text-end line-through">{{
                                                numberFormater(val?.discount) }} تومان</span>
                                    </div>
                                </div>
                            </div>
                        </UCard>
                    </TransitionGroup>
                    <div v-else>theres no product in this time</div>



                    <!-- pagination -->

                    <UPagination v-model:page="page" :items-per-page="5" :total="totalPageSize" :sibling-count="3" color="neutral" active-color="neutral"  active-variant="solid" class="mt-5 flex justify-center" dir="ltr" />
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { AccordionItem, BreadcrumbItem } from '@nuxt/ui';

const { public: { baseURL } } = useRuntimeConfig()

const productBreadcrumb: BreadcrumbItem[] = [
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
        label: 'فیلتر بر اساس قیمت',
        slot: 'price' as const
    },
    {
        label: 'دسته بندی ها',
        slot: 'category' as const
    },
] satisfies AccordionItem[]

const priceArray = ref<number[]>([1000000, 15000000])

const checkboxValue = ref<string[]>([])

const categoryCheckbox = ref<string[]>(['هدفون', 'هدست', 'میکروفن'])

const page = ref<number>()

const { data: productList} = await useFetch(`${baseURL}/product/products/`, {
    query:{
        page: page
    },
    key: `products-page-${page.value}`,

    watch: [page]
})


const totalPageSize = computed(() => {
    return Number(productList.value?.data?.count || 0)
})



// نمایش لیست محصولات دارای تخفیف
const isDescount = ref<boolean>()

const discountList = computed(() => {

    if (isDescount.value) {
        return productList.value?.data.results.filter(item => item?.discount)

    } if (productList.value) {

        return [...productList.value.data.results]

    } else {
        return false
    }

})


console.log(discountList.value);


</script>

<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

input[type='text']::placeholder {
    font-size: small;
}
</style>