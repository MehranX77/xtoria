<template>
    <div class="md:flex dark:bg-slate-800 bg-slate-50/70 backdrop-blur-3xl lg:p-4 p-3 fixed z-50 w-full top-0 hidden">
        <div class="flex justify-between w-full">
          <div class="basis-3xs max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
             <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-broken"/>
            <ULink to="/register" >ثبت نام</ULink>
            <div class="max-h-7 w-0.5 dark:bg-slate-600 bg-slate-200" />
            <ULink to="/login">ورود</ULink>
          </div>
          <div class="logo transition-all basis-7xl self-center">
            <NuxtImg  width="240" class="mx-auto" :class="{'hidden': res }" src="logo.svg"/>
             <!-- navigation menu items -->
            <UNavigationMenu content-orientation="horizontal" :unmount-on-hide="true" :items="items" class="transition-all w-[60%] mx-auto justify-center mt-4" :class="{'mt-0': res}" :ui="{linkLabel:'text-md', linkLeadingIcon:'text-md', childList:'grid grid-cols-3', childLink:'text-md'}"/>
          </div>

         <div dir="ltr" class="flex self-center gap-x-3">
              <UButton class="text-2xl" color="neutral" variant="subtle" icon="mdi-light:cart" />
             <div class="max-h-10 w-0.5 dark:bg-slate-600 bg-slate-200" />
             <UColorModeSwitch class="m-auto"/>
             <UButton class="text-2xl" color="neutral" variant="subtle" icon="i-lucide-search" />
         </div>
        </div>


    </div>

    <!-- mobile navigation -->
     <div class="mobile md:hidden fixed dark:bg-slate-700/80 backdrop-blur-3xl w-full bottom-0 z-50">
      <UNavigationMenu :items="mobileMenu" :ui="{linkLeadingIcon:'text-2xl', link:'flex flex-col' }"/>
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
        to:'/about'
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
        to:'/about'
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
        to:'/about'
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
      label:'item',
      to: '/about'
    },
    {

      icon: 'i-lucide-box',
      to: '/docs/components',
      label:'item',
    },
        {

      icon: 'i-lucide-box',
      to: '/docs/components',
      label:'item',
    },
        {

      icon: 'solar:home-angle-2-outline',
      to: '/',
      label:'item',
    },

  ],
])

const { res } = useScroll()



</script>

<style>
 .mobile nav{
    width: 100%;
  }
 .mobile nav div {
    width: 100%;
  }
  .isolate{
    justify-content: space-around !important;
    width: 100%;
  }

</style>


