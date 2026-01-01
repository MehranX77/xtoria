<template>
    <div>
        <NuxtImg class="h-full w-full md:mt-32" src="banner.jpg" />
        <UContainer>
            <UPageSection class="border-0" title="فروشگاه اینترنتی ایکستوریا" :description="about.data?.text" />
        </UContainer>
    </div>
</template>

<script setup>
const { public: { baseURL } } = useRuntimeConfig()
const { data: about } = await useFetch(`${baseURL}/about`)

console.log(about.value);

</script>