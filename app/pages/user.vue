<template>
  <div>
    <NuxtLoadingIndicator />
    <UContainer>
        <LazyUserHeaderSection />
        <div class="flex gap-x-4">
          <UserSideDashboard class="md:basis-xs"/>
          <NuxtPage :transition="{name:'page', mode:'out-in'}" class="md:basis-full"/>
        </div>
    </UContainer>
  </div>
</template>



<script setup lang="ts">
definePageMeta({
    middleware:'auth-middleware',
    layout:'custom'
})
</script>

<style>

</style>