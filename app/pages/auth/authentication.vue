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
                        <UForm :schema="schema" :state="auth" @submit.prevent="sendOtpCode">
                            <UFormField name="phone" class="w-full">
                                <UInput v-model="auth.phone" class="w-full" variant="outline" color="info"
                                    :ui="{ base: 'md:py-4 py-3' }" placeholder="شماره موبایل" />
                            </UFormField>
                            <UButton type="submit" class="place-content-center text-lg w-full mt-3" color="info"
                                :ui="{ base: 'md:py-3 py:3' }">ورود به ایکستور</UButton>
                        </UForm>
                        <span class="text-center text-xs text-muted">ورود شما به معنای پذیرش شرایط ایکستور و قوانین
                            حریم‌خصوصی است</span>
                    </div>
                </template>
            </UCard>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import Joi from 'joi'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
    layout: 'custom'
})


const router = useRouter()

const toast = useToast()

const { userPhone } = usePhone()

const schema = Joi.object({
    phone: Joi.number().min(11).required()
})

interface user_register {
    phone: string,
}

const auth = reactive<user_register>({
    phone: ''
})

const sendOtpCode = async (event: FormSubmitEvent<typeof auth>) => {


    const { data, error } = await useFetch('/api/user-register/requestOtp', {
        method: 'POST',
        body: auth,
    })


    if (data.value?.status === 200) {
        toast.add({
            color: 'success',
            description: data.value?.message
        })




        userPhone.value = auth.phone
        router.push('/auth/otp-code')

    } else if (error.value?.data.data?.status === 400) {

        toast.add({
            color: 'error',
            title: error.value?.data.data.message,
            description: error.value?.data.data.data.errors[0]
        })
    } else {
        toast.add({
            color: 'error',
            title: 'خطایی رخ داد',
            description: 'ارتباط با سرور برقرار نشد'
        })
    }




}

</script>