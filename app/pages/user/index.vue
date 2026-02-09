<template>
  <div>
    <UContainer>
        <LazyUserHeaderSection />
        <div class="flex gap-x-4">
          <UserSideDashboard class="basis-xs"/>
        </div>
    </UContainer>
  </div>
</template>



<script setup lang="ts">
definePageMeta({
    // middleware:'auth-middleware',
    layout:'custom'
})
</script>