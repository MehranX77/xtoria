<template>
  <div>
    <div class="w-full rounded-lg p-4 bg-slate-100 dark:bg-slate-800 mt-3 flex justify-between">
      <div class="flex md:gap-x-3">
        <USlideover title="منو کاربری" :close="{ color: 'neutral', variant: 'soft', class: 'rounded-full' }">
          <UButton icon="quill:hamburger" color="neutral" variant="soft"
            class="text-2xl hover:cursor-pointer md:hidden flex" />
          <template #body>
            <div class="w-full">

            </div>
          </template>
        </USlideover>
        <p dir="ltr" class="font-medium text-md text-rose-500 self-center md:block hidden">سلام {{  me?.first_name || 'کاربر' }} عزیز
          <UIcon class="align-middle text-rose-500" name="streamline-plump:multiple-stars-solid" />
        </p>
        <USeparator orientation="vertical" color="error" class="md:block hidden" />
        <NuxtTime :datetime="Date.now()" locale="fa-IR" date-style="long" class="self-center md:block hidden" />
      </div>
      <div class="flex md:gap-x-5 gap-x-3">
        <UButton icon="solar:bell-outline" color="neutral" variant="soft" class="text-xl" />
        <UColorModeSwitch dir="ltr" class="self-center-safe" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { me } = useMyInfo()

console.log(me.value);


</script>