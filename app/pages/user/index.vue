<template>
  <div>
    <!-- باکس خلاصه وضعیت سفارشات -->
    <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg p-6 mt-2">
      <div class="flex justify-between">
        <p class="order self-baseline-safe text-neutral-900 dark:text-neutral-100 relative mb-16">سفارش های من</p>
      </div>
      <div class="flex justify-around ">
        <div class="flex gap-x-2">
          <NuxtImg width="70" height="70" src="status-delivered.svg" />
          <div class="flex flex-col self-center gap-y-2">
            <p class="text-neutral-800 dark:text-neutral-100">{{ data?.data?.delivered || 0}}</p>
            <span class="text-xs text-muted">تحویل شده</span>
          </div>
        </div>
        <USeparator orientation="vertical" color="neutral" class="h-19" />
        <div class="flex gap-x-2">
          <NuxtImg width="70" height="70" src="status-processing.svg" />
          <div class="flex flex-col self-center gap-y-2">
            <p class="text-neutral-800 dark:text-neutral-100">{{ data?.data?.current_order || 0}}</p>
            <span class="text-xs text-muted">جاری</span>
          </div>
        </div>
        <USeparator orientation="vertical" color="neutral" class="h-19" />
        <div class="flex gap-x-2">
          <NuxtImg width="70" height="70" src="status-returned.svg" />
          <div class="flex flex-col self-center gap-y-2">
            <p class="text-neutral-800 dark:text-neutral-100">{{ data?.data?.refered || 0 }}</p>
            <span class="text-xs text-muted">مرجوع شده</span>
          </div>
        </div>
      </div>
    </div>
    <!-- باکس خلاصه خرید های کاربر -->
    <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg p-6 mt-6">
      <div class="flex justify-between">
        <p class="order self-baseline-safe text-neutral-900 dark:text-neutral-100 relative mb-16">خرید های اخیر</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
try {
  const data = await $fetch('/api/summary')

  console.log(data.data.refered);

} catch (error) {
   console.log(error);
   
}
</script>

<style scoped>
p.order::before {
  content: '';
  position: absolute;
  border-bottom: 2px solid red;
  bottom: -7px;
  right: 0;
  width: 70%;
}
</style>