<template>
<div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    <UCard v-for="(blog, index) in blogs.data.results" :key="index" dir="rtl">
        <template #header>
            <NuxtImg :src="`${baseURLAssets}${blog.picture}`" class="md:min-w-full md:min-h-46 md:max-w-46 max-w-full md:max-h-46 object-cover min-h-40 max-h-40"/>
        </template>
        <template #default>
            <div class="flex flex-col gap-y-3">
                <h1 class="font-bold text-lg">{{ blog.category_title }}</h1>
                <div class="flex justify-between">
                    <p class="self-center" v-html="blog.short_desc"/>
                    <ULink class="text-2xl self-center hover:cursor-pointer" :to="{name:'blog-slug', params:{slug: blog.slug}}"><UIcon name="mdi-light:arrow-left" class="align-middle"/></ULink>
                </div>
            </div>
        </template>
    </UCard>
</div>
</template>

<script setup>
 const {public:{baseURL, baseURLAssets}} = useRuntimeConfig()
  const {data: blogs, error} = await useFetch(`${baseURL}/article`)
</script>