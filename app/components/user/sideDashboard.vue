<template>
    <UDashboardSidebar :ui="{ footer: 'border-t border-default', root: 'border mt-2 rounded-lg max-h-dvh min-h-[90dvh]'}">
        <template #header>
            <UUser name="mehran" description="09362762801" :avatar="{ src: 'https://i.pravatar.cc/150?u=john-doe' }" size="xl" />
        </template>
        <template #default>
            <UNavigationMenu :highlight="true" color="neutral" variant="link"  :items="items[0]" orientation="vertical" dir="rtl" :ui="{item:'border-b border-b-slate-200 dark:border-b-slate-800', linkLabel:'my-2 text-md/tight font-stretch-50% ' , linkLeadingIcon:'lg:text-lg/tight text-md/tight'}"/>
            <UNavigationMenu :items="items[1]" orientation="vertical" class="mt-auto" :ui="{linkLabel:'my-2  text-md/tight font-stretch-50%' , linkLeadingIcon:'lg:text-lg/tight text-md/tight'}" dir="rtl"/>
        </template>
    </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[][] = [[
    {
        label: 'خلاصه فعالیت ها',
        icon: 'solar:home-angle-linear',
        to: '/user',
        exact:true,
    },
    {
        label: 'اطلاعات کاربری',
        icon: 'solar:home-angle-linear',
        to: '/user/information',

    },
    {
        label: 'سفارش های من',
        icon: 'solar:home-angle-linear',
        to: '/user/orders'
    },
    {
        label: 'تیکت ها',
        icon: 'solar:home-angle-linear',
        to: '/user/tickets'
    },
    {
        label: 'آدرس های من',
        icon: 'solar:home-angle-linear',
        to: '/user/address'
    },
    {
        label: 'امنیت',
        icon: 'solar:home-angle-linear',
        to: '/user/privacy'
    },
], [{
    label: 'پشتیبانی',
    icon: 'solar:home-angle-linear',
    to: '/user/support'
},
{
    label: 'خروج از حساب کاربری',
    icon: 'solar:home-angle-linear',
    to: '/',
    class:'text-rose-500 bg-rose-100 dark:bg-rose-950 dark:text-rose-500 rounded-lg'
}
]]
</script>