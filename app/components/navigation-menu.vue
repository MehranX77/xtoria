<template>
  <div>
    <div class="md:flex dark:bg-slate-800 bg-slate-50/70 backdrop-blur-3xl lg:p-4 p-3 fixed z-50 w-full top-0 hidden">
      <div class="flex justify-between w-full">
        <ClientOnly>
          <template #default>
            <div v-if="authUser !== '' && authUser !== null"
              class="lg:basis-3xs basis-lg max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
              <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-id-broken" />
              <ULink to="/user">پروفایل</ULink>
            </div>
            <div v-else
              class="lg:basis-3xs basis-lg max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
              <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-broken" />
              <ULink to="/auth/authentication">حساب کاربری</ULink>
            </div>
          </template>
          <template #fallback>
            <USkeleton class="h-12 w-40 rounded-xl self-center bg-slate-200/85 dark:bg-slate-700/85" />
          </template>
        </ClientOnly>
        <div class="logo basis-7xl self-center">
          <NuxtImg height="30" width="150" class="mx-auto" src="logos.png" />

          <div class="flex justify-center gap-x-6 mt-4 dir-rtl" dir="rtl" :class="{ 'hidden': res }">
            <div class="relative group">

              <UButton variant="link"
                class="py-3 flex items-center  gap-2 text-gray-700 hover:text-red-500 transition-all ">
                <UIcon name="quill:hamburger" class="self-center" />
                <span class="text-sm font-bold">دسته‌بندی کالاها</span>
              </UButton>

              <div  class="absolute left-0 translate-x-[-64%] top-full mt-1 w-220  bg-white shadow-2xl rounded-lg border border-gray-200 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">

                <ul class="w-1/4 bg-gray-50 border-l border-gray-100 py-2">
                  <li v-for="category in categories" :key="category.id"
                      :class="['px-4 py-4 cursor-pointer flex items-center gap-2 transition-all text-sm', activeTab === category.id ? 'bg-white text-red-600 font-bold border-r-4 border-red-600' : 'text-gray-600 hover:bg-gray-100']"
                    @mouseenter="activeTab = category.id">
                    {{ category.title }}
                  </li>
                </ul>

                <div class="w-3/4 p-6 grid grid-cols-3 gap-8 content-start bg-white">
                  <div v-for="sub in activeCategory?.subGroups" :key="sub.title">
                    <h3 class="text-gray-900 font-bold border-r-2 border-red-500 pr-2 mb-4 text-sm flex items-center">
                      {{ sub.title }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </h3>
                    <ul class="space-y-3">
                      <li v-for="item in sub.items" :key="item">
                        <a href="#" class="text-gray-500 hover:text-red-500 text-xs transition-colors">
                          {{ item }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
            <!-- ادامه navbar حالت دسکتاپ -->
            <div class="flex gap-x-1 text-gray-700">
              <UIcon name="solar:gamepad-broken" class="self-center" />
              <ULink class="text-sm font-bold text-gray-700 hover:text-red-500">کنسول بازی</ULink>
            </div>
             <div class="flex gap-x-1 text-gray-700">
              <UIcon name="solar:airbuds-charge-broken" class="self-center" />
              <ULink class="text-sm font-bold text-gray-700 hover:text-red-500">هندزفری</ULink>
            </div>
            <div class="flex gap-x-1 text-gray-700">
              <UIcon name="solar:monitor-broken" class="self-center" />
              <ULink class="text-sm font-bold text-gray-700 hover:text-red-500">مانیتور</ULink>
            </div>
          </div>
        </div>

        <div dir="ltr" class="flex self-center gap-x-3">
          <USlideover side="left" inset title="سبد خرید">
            <UChip color="error" :text="1" size="3xl">
              <UButton class="text-2xl" color="neutral" variant="subtle" icon="mdi-light:cart" />
            </UChip>
            <template #body>
              <div class="min-w-96 min-h-96 size-full">
                <div class="flex gap-x-3 w-full">
                  <NuxtImg src="monitor.png" width="80" height="80" class="max-h-20" />
                  <div class="w-full">
                    <span
                      class="text-slate-700 dark:text-slate-50 font-black dark:font-medium text-wrap line-clamp-2 text-sm/8">لپتاپ
                      15.6 اینچی اچ‌ پی مدل fc0171nia-15-Athlon 7120U-8GB LPDDR5 3200MHz-512GB SSD-TFT- کاستوم
                      شده</span>
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
          <div class="max-h-10 w-0.5 dark:bg-slate-600 bg-slate-200" />
          <UColorModeSwitch class="m-auto" />
          <UButton class="text-2xl" color="neutral" variant="subtle" icon="i-lucide-search" />
        </div>
      </div>
      <!-- mobile navigation -->

    </div>
    <div
      class="mobile flex justify-around md:hidden fixed dark:bg-slate-700/80 bg-gray-200/50 backdrop-blur-3xl w-full bottom-0 z-50 py-3">
      <div class="flex flex-col text-2xl">
        <UIcon name="system-uicons:menu-hamburger" class="self-center" />
        <span class="text-sm font-medium self-center">منو</span>
      </div>
      <div class="flex flex-col text-2xl">
        <UIcon name="mdi-light:home" class="self-center" />
        <span class="text-sm font-medium self-center">صفحه اصلی</span>
      </div>
      <div class="flex flex-col text-2xl">
        <UIcon name="mdi-light:cart" class="self-center" />
        <span class="text-sm font-medium self-center">سبد خرید</span>
      </div>
      <div class="flex flex-col text-2xl" @click="open">
        <UIcon name="system-uicons:menu-hamburger" class="self-center" />
        <span class="text-sm font-medium self-center">منو</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import { LazyMobileSlideover } from '#components'
const { authUser } = useAuth()

const overlay = useOverlay()

const slideover = overlay.create(LazyMobileSlideover)

async function open() {
  const instance = slideover.open()
  await instance.result
}

const { res } = useScroll()

const basketItemCount = ref(1)

const categories = [
  {
    id: 1,
    title: 'موبایل',
    subGroups: [
      { title: 'برندهای مختلف', items: ['گوشی سامسونگ', 'گوشی شیائومی', 'گوشی اپل', 'گوشی نوکیا'] },
      { title: 'گوشی بر اساس قیمت', items: ['گوشی ارزان', 'تا ۵ میلیون', 'تا ۱۰ میلیون', 'بالای ۲۰ میلیون'] },
      { title: 'لوازم جانبی', items: ['شارژر', 'پاوربانک', 'قاب گوشی', 'هندزفری'] }
    ]
  },
  {
    id: 2,
    title: 'لپ‌تاپ',
    subGroups: [
      { title: 'برندها', items: ['ایسوس (ASUS)', 'لنوو (Lenovo)', 'اپل (MacBook)'] },
      { title: 'کاربری', items: ['گیمینگ', 'اداری', 'دانشجویی'] },
      { title: 'کاربری2', items: ['گیمینگ', 'اداری', 'دانشجویی'] }
    ]
  },
  {
    id: 3,
    title: 'کالای دیجیتال',
    subGroups: [
      { title: 'دوربین', items: ['دوربین عکاسی', 'لنز', 'تجهیزات جانبی'] },
      { title: 'صوتی', items: ['اسپیکر', 'هدفون بلوتوثی'] },
      { title: 'کاربری', items: ['گیمینگ', 'اداری', 'دانشجویی'] }
    ]
  }
]

// وضعیت تب فعال (پیش‌فرض اولین آیتم)
const activeTab = ref(1)

// پیدا کردن دیتای مربوط به تب فعال
const activeCategory = computed(() => {
  return categories.find(c => c.id === activeTab.value) || categories[0]
})




</script>

<style>
.mobile nav {
  width: 100%;
}

.mobile nav div {
  width: 100%;
}

.isolate {
  justify-content: space-around !important;
  width: 100%;
}

/* تنظیم فونت فارسی اگر در پروژه لود شده باشد */
.dir-rtl {
  direction: rtl;
}
</style>
