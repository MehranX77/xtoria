<template>
    <div>
        <UContainer class="flex flex-col justify-center items-center min-h-screen">
            <UCard class="md:w-lg w-full">
                <template #default>
                    <div class="flex justify-between">
                        <UButton icon="solar:arrow-right-bold" color="neutral" variant="ghost" size="xl"
                            @click="router.back()" />
                        <NuxtImg width="150" height="150" src="logo.svg" />
                        <div />
                    </div>
                    <div class="mt-10 flex flex-col gap-y-3">
                        <h3 class="text-base font-semibold text-black dark:text-slate-50">کد یکبار مصرف را وارد کنید</h3>
                        <span class="text-muted text-sm">کد به شماره 09362762801 ارسال شد</span>
                         <UPinInput class="self-center" placeholder="*" color="info" :ui="{ base:'w-14 h-14 text-2xl' }"/>
                         <UButton variant="link" color="info" class="text-sm self-center">ارسال دوباره کد</UButton>
                    </div>
                </template>
            </UCard>
        </UContainer>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'custom'
})

const router = useRouter()

</script>