<template>
  <div class="md:flex dark:bg-slate-800 bg-slate-50/70 backdrop-blur-3xl lg:p-4 p-3 fixed z-50 w-full top-0 hidden">
    <div class="flex justify-between w-full">
      <div
        class="basis-3xs max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
        <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-broken" />
        <ULink to="/auth/authentication">ثبت نام</ULink>
        <div class="max-h-7 w-0.5 dark:bg-slate-600 bg-slate-200" />
        <ULink to="/auth/authentication">ورود</ULink>
      </div>
      <div class="logo transition-all basis-7xl self-center">
        <NuxtImg height="30" width="150" class="mx-auto" :class="{ 'hidden': res }" src="logos.png" />
        <!-- navigation menu items -->
        <UNavigationMenu content-orientation="horizontal" :unmount-on-hide="true" :items="items" class="transition-all w-[60%] mx-auto justify-center mt-4" :class="{ 'mt-0': res }" :ui="{ linkLabel: 'text-md', linkLeadingIcon: 'text-md', childList: 'grid grid-cols-3', childLink: 'text-md' }" />
      </div>

      <div dir="ltr" class="flex self-center gap-x-3">
        <USlideover side="left" inset title="سبد خرید">
          <UChip :text="1" size="3xl">
            <UButton class="text-2xl" color="neutral" variant="subtle" icon="mdi-light:cart"/>
          </UChip>
          <template #body>
            <div class="min-w-96 min-h-96 size-full">
              <div class="flex gap-x-3 w-full">
                 <NuxtImg src="monitor.png" width="80" height="80" class="max-h-20" />
                <div class="w-full">
                  <span
                    class="text-slate-700 dark:text-slate-50 font-black dark:font-medium text-wrap line-clamp-2 text-sm/8">لپ
                    تاپ 15.6 اینچی اچ‌ پی مدل fc0171nia-15-Athlon 7120U-8GB LPDDR5 3200MHz-512GB SSD-TFT- کاستوم
                    شده</span>
                  <div class="mt-3">
                      <p class="text-muted text-nowrap"><UIcon name="icon-park-twotone:color-filter" class="align-middle me-1"/> رنگ سفید</p>
                      <p class="text-muted text-nowrap mt-2"><UIcon name="akar-icons:truck" class="align-middle me-1 text-green-500"/> ارسال ایکستور</p>
                      <p class="text-xl dark:text-slate-50 text-slate-800 text-end mt-3">5,000,000 تومان</p>
                     <div class="flex justify-between items-center w-full">
                         <UInputNumber v-model="basketItemCount" :min="1" :max="1" class="w-25" variant="subtle"/>
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
            <UButton color="success" class="md:w-30 place-content-center-safe" variant="solid">ثبت سفارش</UButton>
           </div>
          </template>
        </USlideover>
        <div class="max-h-10 w-0.5 dark:bg-slate-600 bg-slate-200" />
        <UColorModeSwitch class="m-auto" />
        <UButton class="text-2xl" color="neutral" variant="subtle" icon="i-lucide-search" />
      </div>
    </div>


  </div>

  <!-- mobile navigation -->
  <div class="mobile md:hidden fixed dark:bg-slate-700/80 backdrop-blur-3xl w-full bottom-0 z-50">
    <UNavigationMenu :items="mobileMenu" :ui="{ linkLeadingIcon: 'text-2xl', link: 'flex flex-col' }" />
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'لوازم دیجیتال',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
    children: [
      {
        label: 'ایتم 1',
        icon: 'i-lucide-house',
        to: '/about'
      },
      {
        label: 'Installation',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      }
    ]
  },
  {
    label: 'لوازم دیجیتال',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
    children: [
      {
        label: 'ایتم 1',
        icon: 'i-lucide-house',
        to: '/about'
      },
      {
        label: 'Installation',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      }
    ]
  },
  {
    label: 'لوازم دیجیتال',
    icon: 'i-lucide-book-open',
    to: '/docs/getting-started',
    children: [
      {
        label: 'ایتم 1',
        icon: 'i-lucide-house',
        to: '/about'
      },
      {
        label: 'Installation',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
      }
    ]
  },
])

const mobileMenu = ref<NavigationMenuItem[]>([
  [

    {

      icon: 'i-lucide-database',
      label: 'item',
      to: '/about'
    },
    {

      icon: 'i-lucide-box',
      to: '/docs/components',
      label: 'item',
    },
    {

      icon: 'i-lucide-box',
      to: '/docs/components',
      label: 'item',
    },
    {

      icon: 'solar:home-angle-2-outline',
      to: '/',
      label: 'item',
    },

  ],
])

const { res } = useScroll()

const basketItemCount = ref(1)

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
</style>
