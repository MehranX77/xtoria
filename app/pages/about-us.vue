<template>
    <div>
        <NuxtImg class="h-full w-full md:mt-32" src="banner.jpg" />
        <UContainer>
            <!-- <UPageSection class="border-0" title="فروشگاه اینترنتی ایکستوریا" :description="about.data?.text" /> -->
             <h1 class="text-center font-black xl:text-5xl lg:text-4xl md:text-xl text-lg mt-10">فروشگاه اینترنتی ایکستور</h1>
             <p class="text-center mt-5 text-xl"  v-html="about.data?.text"/>
        </UContainer>
    </div>
</template>

<script setup>
const { public: { baseURL } } = useRuntimeConfig()
const { data: about } = await useFetch(`${baseURL}/about`)

</script>

<style scoped>
h1{
  font-family: var(--heading-extra-bold);
}
</style>