<template>
    <div>
        <UContainer class="mt-5">
            <div class="flex flex-col gap-y-5">
                <h1 class="dark:text-neutral-200 text-neutral-700 font-light xl:text-2xl lg:text-lg md:text-md text-sm">ورود و امنیت</h1>
                <UCard variant="soft">
                    <template #header>
                       <div class="flex justify-between">
                         <div class="flex flex-col gap-y-2">
                            <span class="dark:text-neutral-200 text-neutral-700 text-md">تایید ورود دو مرحله ای</span>
                            <span class="text-muted text-sm">احراز هویت دو مرحله ای نیاز به تعیین رمز عبور توسط کاربر می‌باشد</span>
                         </div>
                         <USwitch dir="ltr" color="neutral" class="self-center"/>
                       </div>
                    </template>
                    <template #default>
                        <UForm>
                            <UFormField label="رمز عبور" required help="رمز عبور میبایست ترکیبی از حروف ، سیمبل ها و عدد باشد">
                                <UInput class="md:w-1/4 w-full" variant="soft" size="xl" placeholder="مثال: 123456" :ui="{base:'py-3'}"/>
                            </UFormField>
                             <UFormField label="تکرار رمز عبور" required class="mt-4">
                                <UInput class="md:w-1/4 w-full" variant="soft" size="xl" placeholder="مثال: 123456" :ui="{base:'py-3'}"/>
                            </UFormField>
                        </UForm>
                    </template>
                </UCard>
                <div class="flex gap-x-2">
                     <h1 class="dark:text-neutral-200 text-neutral-700 font-light xl:text-2xl lg:text-lg md:text-md text-sm">نشست های فعال</h1>
                     <UBadge variant="subtle">به‌زودی</UBadge>
                </div>
                <USkeleton class="w-full md:h-90 h-60 p-6 rounded-lg"/>
                <!-- <UCard variant="soft">
                    <template #header>
                       <div class="flex justify-between">
                         <div class="flex flex-col gap-y-2">
                            <span class="dark:text-neutral-200 text-neutral-700 text-md">تایید ورود دو مرحله ای</span>
                            <span class="text-muted text-sm">احراز هویت دو مرحله ای نیاز به تعیین رمز عبور توسط کاربر می‌باشد</span>
                         </div>
                         <USwitch dir="ltr" color="neutral" class="self-center"/>
                       </div>
                    </template>
                    <template #default>
                        <UForm>
                            <UFormField label="رمز عبور" required help="رمز عبور میبایست ترکیبی از حروف ، سیمبل ها و عدد باشد">
                                <UInput class="md:w-1/4 w-full" variant="soft" size="xl" placeholder="مثال: 123456" :ui="{base:'py-3'}"/>
                            </UFormField>
                             <UFormField label="تکرار رمز عبور" required class="mt-4">
                                <UInput class="md:w-1/4 w-full" variant="soft" size="xl" placeholder="مثال: 123456" :ui="{base:'py-3'}"/>
                            </UFormField>
                        </UForm>
                    </template>
                </UCard> -->
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">

</script>