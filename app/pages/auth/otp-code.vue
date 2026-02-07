<template>
    <div>
        <UContainer class="flex flex-col justify-center items-center min-h-screen">
            <UCard class="md:w-lg w-full">
                <template #default>
                    <div class="flex justify-between">
                        <UButton icon="solar:arrow-right-bold" color="neutral" variant="ghost" size="xl" class="self-center" @click="router.back()" />
                        <NuxtImg width="150" height="60" src="logos.png" />
                        <div />
                    </div>
                    <div class="mt-10 flex flex-col gap-y-3">
                        <h3 class="text-base font-semibold text-black dark:text-slate-50">کد یکبار مصرف را وارد کنید
                        </h3>
                        <span class="text-muted text-sm">کد به شماره {{ userPhone }} ارسال شد</span>
                        <UPinInput v-model="otpCode" class="self-center" placeholder="*" :length="6" color="info" :ui="{ base: 'w-14 h-14 text-2xl' }"  @complete="confirmOtpCode" />
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

    try {
        const res = await $fetch('/api/user-register/confirmOtp', {
            method: 'POST',
            body: {
                phone: userPhone.value,
                otp: normalizedOtp.value
            },  
            headers: {
                'Accept': 'application/json'
            }
        })

        if(res.status === 200 && res.status !== 'undefined') {
            toast.add({
                description: res.message,
                color:'success'
            })
            
           authUser.value = userId
           console.log(authUser.value);
           
            return navigateTo('/')
        }

    } catch (error) {
        // showError(String(error))
        toast.add({
            color:'error',
            description:'در ارسال کد یکبار مصرف خطایی رخ داد'
        })
    }
}
</script>