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
                        <h3 class="text-base font-semibold text-black dark:text-slate-50">ورود یا ثبت نام در ایکستور
                        </h3>
                        <span class="text-muted text-sm">لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
                        <UInput v-model="auth.phone" variant="outline" color="info" :ui="{ base: 'md:py-4 py-3' }"
                            placeholder="شماره موبایل" />
                        <UButton class="place-content-center text-lg" color="info" :ui="{ base: 'md:py-4 py:3' }"
                            @click="sendOtpCode">ورود به ایکستور</UButton>
                        <span class="text-center text-xs text-muted">ورود شما به معنای پذیرش شرایط ایکستور و قوانین
                            حریم‌خصوصی است</span>
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

interface user_register {
    phone: string,
}

const auth = reactive<user_register>({
    phone: ''
})

const {userPhone} = usePhone()
const sendOtpCode = async () => {
    
    try {
        const res = await $fetch('/api/user-register/requestOtp', {
            method: 'POST',
            body: auth,
        })

        if (res?.status === 200) {
            toast.add({
                color: 'success',
                description: res?.message
            })
            userPhone.value = auth.phone
            router.push('/auth/otp-code')
        }else{
            toast.add({
                color:'error',
                description: 'خطا هنگام ارسال اطلاعات'
            })
        }
        console.log(res, 'res');

    } catch (error) {
        console.log(error);

        //  showError(String(error))
    }


}

</script>