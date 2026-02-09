<template>
    <div>
        <div class="w-full rounded-lg p-4 bg-slate-100 dark:bg-slate-800 mt-3 flex justify-between">
          <div class="flex md:gap-x-3">
            <USlideover title="منو کاربری" :close="{color:'neutral', variant:'soft', class:'rounded-full'}">
              <UButton icon="quill:hamburger" color="neutral" variant="soft" class="text-2xl hover:cursor-pointer md:hidden flex" />
              <template #body>
              <div class="w-full">

              </div>
             </template>
            </USlideover>
            <p dir="ltr" class="font-medium text-md text-rose-500 self-center md:block hidden">سلام مهران عزیز <UIcon class="align-middle text-rose-500" name="streamline-plump:multiple-stars-solid"/></p>
            <USeparator orientation="vertical" color="error" class="md:block hidden"/>
            <NuxtTime :datetime="Date.now()" locale="fa-IR" date-style="long" class="self-center md:block hidden"/>
          </div>
          <div class="flex md:gap-x-5 gap-x-3">
        <USlideover side="left" inset title="سبد خرید">
          <UChip :text="2" size="3xl" inset>
            <UButton class="text-2xl" color="neutral" variant="soft" icon="mdi-light:cart" />
          </UChip>
          <template #body>
            <div class="min-w-96 min-h-96 size-full">
              <div class="flex gap-x-3 w-full">
                <NuxtImg src="monitor.png" width="80" height="80" class="max-h-20" />
                <div class="w-full">
                  <span
                    class="text-slate-700 dark:text-slate-50 font-black dark:font-medium text-wrap line-clamp-2 text-sm/8">لپتاپ
                    15.6 اینچی اچ‌ پی مدل fc0171nia-15-Athlon 7120U-8GB LPDDR5 3200MHz-512GB SSD-TFT- کاستوم شده</span>
                  <div class="mt-3">
                    <p class="text-muted text-nowrap">
                      <UIcon name="icon-park-twotone:color-filter" class="align-middle me-1" /> رنگ سفید
                    </p>
                    <p class="text-muted text-nowrap mt-2">
                      <UIcon name="akar-icons:truck" class="align-middle me-1 text-green-500" /> ارسال ایکستور
                    </p>
                    <p class="text-xl dark:text-slate-50 text-slate-800 text-end mt-3">5,000,000 تومان</p>
                    <div class="flex justify-between items-center w-full">
                      <UInputNumber v-model="basketItemCount" :min="1" :max="1" class="w-25" variant="subtle" />
                      <p class="text-sm dark:text-rose-400 text-rose-500 text-end mt-2">4,300,000 تومان تخفیف</p>
                    </div>
                  </div>
                </div>
              </div>
              <USeparator class="my-4" />
            </div>
          </template>
          <template #footer>
            <div class="flex justify-between w-full">
              <div class="flex flex-col gap-y-2">
                <span class="text-muted text-xs">مبلغ قابل پرداخت</span>
                <p class="text-xl dark:text-slate-50 text-slate-700">5,000,000 تومان</p>
              </div>
              <UButton :to="{ name: 'checkout-cart', params: { id: '1' } }" color="success"
                class="md:w-30 place-content-center-safe" variant="solid">ثبت سفارش</UButton>
            </div>
          </template>
        </USlideover>
            <UButton icon="solar:bell-outline" color="neutral" variant="soft" class="text-xl"/>
            <UColorModeSwitch dir="ltr" class="self-center-safe" />
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const basketItemCount = ref(2)

</script>