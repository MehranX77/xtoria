<template>
    <UDashboardSidebar
        :ui="{ footer: 'border-t border-default', root: 'border mt-2 rounded-lg max-h-dvh min-h-[90dvh]' }">
        <template #header>
            <UUser :name="me?.first_name || 'بدون نام'" description="09362762801" :avatar="{ src: me?.picture }"
                size="xl" />
        </template>
        <template #default>
            <UNavigationMenu :highlight="true" color="neutral" variant="link" :items="items[0]" orientation="vertical"
                dir="rtl"
                :ui="{ item: 'border-b border-b-slate-200 dark:border-b-slate-800', linkLabel: 'my-2 text-md/tight font-stretch-50% ', linkLeadingIcon: 'lg:text-lg/tight text-md/tight' }" />
            <UNavigationMenu :items="items[1]" orientation="vertical" class="mt-auto"
                :ui="{ linkLabel: 'my-2  text-md/tight font-stretch-50%', linkLeadingIcon: 'lg:text-lg/tight text-md/tight' }"
                dir="rtl" />
        </template>
    </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const toast = useToast()
const { authUser } = useAuth()
const { me } = useMyInfo()
const items: NavigationMenuItem[][] = [[
        {
        label: 'صفحه اصلی',
        icon: 'solar:home-angle-linear',
        to: '/',
        exact: true,
    },
    {
        label: 'خلاصه فعالیت ها',
        icon: 'si:activity-duotone',
        to: '/user',
        exact: true,
    },
    {
        label: 'اطلاعات کاربری',
        icon: 'solar:shield-user-outline',
        to: '/user/information',

    },
    {
        label: 'سفارش های من',
        icon: 'solar:cart-large-2-line-duotone',
        to: '/user/orders'
    },
    {
        label: 'آدرس های من',
        icon: 'solar:map-point-linear',
        to: '/user/address'
    },
], [{
    label: 'پشتیبانی',
    icon: 'material-symbols-light:support-agent-outline-sharp',
    to: '/user/support',
    class: 'mb-2',
    disabled:true,
    badge:'به زودی',
},
{
    label: 'خروج از حساب کاربری',
    icon: 'solar:home-angle-linear',
    class: 'text-rose-500 bg-rose-100 dark:bg-red-700 dark:text-red-100 rounded-lg',
    onSelect: async () => {
        const res = await $fetch('/api/logout', {
            method: 'GET',
            headers: useRequestHeaders(['cookie'])
        })
        authUser.value = null
        toast.add({
            description: res
        })
      return navigateTo('/')
    }

}
]]
</script>