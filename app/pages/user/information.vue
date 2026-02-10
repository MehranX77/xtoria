<template>
    <div>
        <!-- باکس اطلاعات کاربری -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full border border-slate-300/70 dark:border-slate-800 rounded-lg mt-2">
            <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">نام و نام خانوادگی</span>
                        <UBadge color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">مهران مهرابی فر</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>

            <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">کدملی</span>
                        <UBadge color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">3241565708</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>

           <div class="flex justify-between lg:pe-3 pe-2 lg:border-l-0 border-l border-l-slate-200 border-b border-b-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">شماره موبایل</span>
                        <UBadge color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">09361236548</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 dark:border-slate-800 lg:border-b-0 border-b border-b-slate-200 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">ایمیل</span>
                        <UBadge color="warning" variant="soft" class="rounded-full">در انتظار تایید</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">user@gmail.com</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 border-l border-l-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">تاریخ تولد</span>
                        <UBadge color="success" variant="soft" class="rounded-full">تایید شده</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">1377/07/18</p>
                </div>
                <UButton icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>

             <div class="flex justify-between lg:pe-3 pe-2 lg:border-l-0 border-l border-l-slate-200 dark:border-slate-800 py-1">
                <div class="flex gap-y-2 flex-col py-5 px-5">
                    <div class="flex gap-x-2">
                        <span class="text-muted text-md">کدپستی</span>
                        <UBadge color="neutral" variant="soft" class="rounded-full">نامشخص</UBadge>
                    </div>
                    <p class="text-neutral-800 dark:text-neutral-300">کدپستی وارد نشده</p>
                </div>
                <UButton to="/user/address" icon="solar:pen-2-line-duotone" variant="ghost" color="neutral" class="text-xl self-center-safe hover:cursor-pointer"/>
            </div>
        </div>
        <!-- پایان باکس -->
       <!-- باکس آدرس کاربر -->

      <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg mt-5 p-4">
        <p class="address relative text-neutral-800 dark:text-neutral-300">آدرس فعلی شما</p>
        <p class="text-muted mt-10 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus iure sed. Dolores id error, sequi dolore porro rem, molestiae ad harum voluptates ex amet incidunt iusto quidem fuga sunt.</p>            
        <div class="flex gap-x-1 mt-4">
            <ULink class="text-sm text-sky-500 hover:text-sky-600 hover:cursor-pointer">ویرایش آدرس</ULink>
            <UIcon class="self-center text-sky-500" name="solar:alt-arrow-left-line-duotone"/>
        </div>
      </div>

       <!-- پایان باکس -->

    </div>
</template>

<script setup lang="ts">
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