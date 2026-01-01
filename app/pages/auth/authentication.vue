<template>
    <div>
        <UContainer class="flex flex-col justify-center items-center min-h-screen">
            <UCard class="md:w-lg w-full">
                <template #default>
                    <div class="flex justify-between">
                        <UButton icon="solar:arrow-right-bold" color="neutral" variant="ghost" size="xl" @click="router.back()"/>
                        <NuxtImg width="150" height="150" src="logo.svg" />
                        <div />
                    </div>
                    <div class="mt-10 flex flex-col gap-y-3">
                        <h3 class="text-base font-semibold text-black dark:text-slate-50">ورود یا ثبت نام در ایکستوریا</h3>
                        <span class="text-muted text-sm">لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
                        <UInput v-model="phoneNumber" variant="outline" color="info" :ui="{base:'md:py-4 py-3'}" placeholder="شماره موبایل"/>
                        <UButton class="place-content-center text-lg" color="info" :ui="{base:'md:py-4 py:3'}" @click="sendOtpCode">ورود به ایکستوریا</UButton>
                        <span class="text-center text-xs text-muted">ورود شما به معنای پذیرش شرایط ایکس توریا و قوانین حریم‌خصوصی است</span>
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

const phoneNumber = ref<string>('')

const sendOtpCode = async () => {
    if(phoneNumber.value !== ''){
         router.push('/auth/otp-code')
    }
}

</script>