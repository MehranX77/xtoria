<template>
    <USlideover :close="{ onClick: () => emit('close', false) }" :overlay="true" class="w-[80%]">
        <template #body>
            <UNavigationMenu dir="rtl" orientation="vertical" :items="items" class="data-[orientation=vertical]:w-full" />
        </template>

        <template #footer>
            <div class="flex gap-2">
                <UButton color="neutral" label="Dismiss" @click="emit('close', true)" />
            </div>
        </template>
    </USlideover>
</template>


<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const emit = defineEmits<{ close: [boolean] }>()

interface CategoryItem {
    id: string | number;
    name: string;
    header: string | number | null;
    has_sub: boolean;
    slug: string
}

const { public: { baseURL } } = useRuntimeConfig()

const items = ref<NavigationMenuItem[][]>([])


const childrenList = ref<CategoryItem[]>([])


const { data: pCategories, error: pError } = await useFetch<{ data: { results: CategoryItem[] } }>(
    `${baseURL}/product/categories`
)


const categoriesList = pCategories.value?.data?.results || []


for (const item of categoriesList) {
    childrenList.value.push(item)
}


const resId = childrenList.value.find(item => item.header !== null)

if (resId) {
    console.log('resId:', resId.header);
}


for (const item of categoriesList) {
    console.log(item);
    
    if (item.header === null) {
        items.value.push([
            {
                label: item.name,
                to: {name:'category-slug', params:{slug: item.slug}},
                children: item.has_sub ? [
                    {
                        label: (resId && item.id === resId.header) ? resId.name : '',
                        to: {name:'category-slug', params:{slug: item.slug}}
                    }
                ] : undefined
            }
        ])
    }

}
</script>