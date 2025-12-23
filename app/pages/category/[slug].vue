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
            <div class="flex dark:bg-slate-800 bg-slate-100 w-full p-4 rounded-lg mt-5">
                <div class="gallery">
                    <NuxtImg class="w-80 h-80 max-h-80 object-fit rounded-lg" :src="galleryRef" />
                    <div class="flex justify-center sub-img gap-x-5">
                        <NuxtImg v-for="(value, index) in galleryList" :key="index" class="w-20 h-20 max-h-20 hover:cursor-pointer object-fit rounded-lg" :src="value" @click="changeImg(value)" />
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

const galleryRef = ref('case.png')

const galleryList = [
    'case.png',
    'monitor.png'
]

const changeImg = (x: string) => {
    galleryRef.value = x

}
</script>