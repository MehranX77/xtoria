<template>
    <div>
        <!-- باکس اطلاعات کاربری -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full border border-slate-300/70 dark:border-slate-800 rounded-lg mt-2">
            <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">نام و نام خانوادگی</span>
                        <UBadge v-if="me?.first_name && me?.last_name" color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                        <UBadge v-else color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">{{ me?.first_name }} {{ me?.last_name || 'کاربر بدون نام'}}</p>
                </div>
                    <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>

            <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">کدملی</span>
                       <UBadge v-if="me?.national_code" color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                        <UBadge v-else color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">{{ me?.national_code || 'کدملی ثبت نشده'}}</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>

           <div class="flex justify-between lg:pe-3 pe-2 lg:border-l-0 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">شماره موبایل</span>
                        <UBadge v-if="me?.phone" color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                        <UBadge v-else color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">{{ me?.phone  || 'شماره موبایل ثبت نشده'}}</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 dark:border-slate-800 lg:border-b-0 border-b border-b-slate-200 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">ایمیل</span>
                        <UBadge v-if="me?.email" color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                        <UBadge v-else color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">{{ me?.email || 'ایمیل ثبت نشده'}}</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">تاریخ تولد</span>
                        <UBadge v-if="me?.birth_date" color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                        <UBadge v-else color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">{{ me?.birth_date || 'تاریخ تولد ثبت نشده' }}</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 lg:border-l-0 border-l border-l-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">کدپستی</span>
                        <UBadge color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">کدپستی وارد نشده</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer" @click="openModal"/>
            </div>
        </div>
        <!-- پایان باکس -->
  

    </div>
</template>

<script setup lang="ts">
import { LazyInformationModal } from '#components';
useHead({
  title:'اطلاعات کاربری'
})
    const { me } = useMyInfo()
    console.log('me.value: ', me.value);
    
    const overlay = useOverlay()

    const modal = overlay.create(LazyInformationModal)

    async function openModal(){
        return modal.open()
    }
</script>

<style scoped>
p.address:before{
    content: '';
    position: absolute;
    border-bottom: 2px solid red;
    bottom: -6px;
    width: 4rem;
}
</style>