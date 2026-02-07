<template>
    <div>
        <UContainer class="flex flex-col justify-center items-center min-h-screen">
            <UCard class="md:w-lg w-full">
                <template #default>
                    <div class="flex justify-between">
                        <UButton icon="solar:arrow-right-bold" color="neutral" variant="ghost" size="xl"
                            class="self-center" @click="router.back()" />
                        <NuxtImg width="150" height="60" src="logos.png" />
                        <div />
                    </div>
                    <div class="mt-10 flex flex-col gap-y-3">
                        <h3 class="text-base font-semibold text-black dark:text-slate-50">کد یکبار مصرف را وارد کنید
                        </h3>
                        <span class="text-muted text-sm">کد به شماره {{ userPhone }} ارسال شد</span>
                        <UPinInput v-model="otpCode" class="self-center" placeholder="*" :length="6" color="info"
                            :ui="{ base: 'w-14 h-14 text-2xl' }" @complete="confirmOtpCode" />
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
const toast = useToast()
const otpCode = ref()
const normalizedOtp = ref('')
const { userPhone } = usePhone()
const { authUser } = useAuth()
const userId = useId()
const confirmOtpCode = async () => {
    Object.values(otpCode.value).forEach((item) => normalizedOtp.value += item);

    const { data, error } = await useFetch('/api/user-register/confirmOtp', {
        method: 'POST',
        body: {
            phone: userPhone.value,
            otp: normalizedOtp.value
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(data);
    console.log(error);
    

    if (data.value?.status === 200 && data.value?.status !== undefined) {
        toast.add({
            description: data.value.message,
            color: 'success'
        })

        authUser.value = userId

        return navigateTo('/')
    }

    else if (error.value!.data.data?.status === 400) {
        toast.add({
            color: 'error',
            title: error.value!.data.data.message,
            description: error.value!.data.data.data.errors[0]
        })
    }

    // console.log(error.value.data.data.message);
    // console.log(error.value.data.data.data.errors);

}
</script>