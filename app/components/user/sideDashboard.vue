<template>
    <UDashboardSidebar collapsible resizable :ui="{ footer: 'border-t border-default', root: 'border mt-2 rounded-lg'}">
        <template #header="{ collapsed }">
            <UUser v-if="!collapsed" name="mehran" description="09362762801" :avatar="{ src: 'https://i.pravatar.cc/150?u=john-doe' }" size="xl" />
        </template>
        <template #default="{ collapsed }">
            <UNavigationMenu :collapsed="collapsed" :items="items[0]" orientation="vertical" dir="rtl" :ui="{linkLabel:'my-2 text-md font-stretch-50%'}"/>
            <UNavigationMenu :collapsed="collapsed" :items="items[1]" orientation="vertical" class="mt-auto" dir="rtl"/>
        </template>
    </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[][] = [[
    {
        label: 'داشبورد',
        icon: 'solar:home-angle-linear',
        to: '/user'
    },
    {
        label: 'اطلاعات کاربری',
        icon: 'solar:home-angle-linear',
        to: '/'
    },
    {
        label: 'سفارش های من',
        icon: 'solar:home-angle-linear',
        to: '/'
    },
    {
        label: 'تیکت ها',
        icon: 'solar:home-angle-linear',
        to: '/'
    },
    {
        label: 'آدرس های من',
        icon: 'solar:home-angle-linear',
        to: '/'
    },
    {
        label: 'امنیت',
        icon: 'solar:home-angle-linear',
        to: '/'
    },
], [{
    label: 'پشتیبانی',
    icon: 'solar:home-angle-linear',
    to: '/user'
}]]
</script>