<template>
    <div>
        <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg p-6 mt-2">
            <div class="flex justify-between">
                <p class="address relative text-neutral-800 dark:text-neutral-300">آدرس فعلی شما</p>
                <UModal>
                    <UButton variant="link" color="error" size="xl" icon="ic:outline-plus"
                        class="hover:cursor-pointer self-center">افزودن آدرس جدید</UButton>
                    <template #body>
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">

                            <UFormField label="استان محل سکونت">
                                <USelect v-model="createNewAddress.province" class="w-full" variant="subtle"
                                    :items="['مرکزی', 'کرمانشاه']" />
                            </UFormField>
                            <UFormField label="شهر محل سکونت">
                                <USelect v-model="createNewAddress.city" class="w-full" variant="subtle"
                                    :items="['ساوه', 'کرمانشاه']" />
                            </UFormField>

                            <UFormField class="col-span-full" label="آدرس کامل">
                                <UTextarea v-model="createNewAddress.lineAddress" class="w-full" />
                            </UFormField>

                            <UFormField label="کدپستی">
                                <UInput v-model="createNewAddress.postalCode" class="w-full" variant="subtle" />
                            </UFormField>
                            <UFormField label="نام کامل گیرنده">
                                <UInput v-model="createNewAddress.fullname" class="w-full" variant="subtle" />
                            </UFormField>

                            <div class="col-span-2 m-auto">
                                <UButton class="lg:w-50 w-full place-content-center" color="secondary" variant="subtle"
                                    @click="newAddress"> ثبت آدرس </UButton>
                            </div>
                        </div>
                    </template>
                </UModal>
            </div>
            <URadioGroup v-model="selectedAddress" dir="rtl" class="mt-8" color="info" variant="card" size="xl"
                :default-value="currentAddress" :items="items" :ui="{ item: 'mb-2' }">
                <template #label="{ item }">

                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <span class="text-sky-500 text-md mb-2">{{ item?.label }}</span>
                            <span class="text-muted mb-2">کدپستی: {{ item?.postal_code }}</span>
                            <span class="text-muted mb-2">آدرس: {{ item?.province }} - {{ item?.city }} - {{
                                item?.address_line }}</span>
                        </div>
                        <UDropdownMenu :items="dropDownItems" dir="rtl" :ui="{ content: 'w-48' }">
                            <UButton icon="tabler:dots-vertical" class="self-start text-xl" variant="ghost"
                                color="neutral" />
                            <template #edit>
                                <UButton variant="link" color="neutral" icon="i-lucide-edit" class="w-full">ویرایش
                                </UButton>
                            </template>
                            <template #remove>
                                <UButton variant="link" color="error" icon="i-lucide-trash" class="w-full"
                                    @click.self="open(item.value)">حذف</UButton>
                            </template>
                        </UDropdownMenu>
                    </div>
                </template>
                <template #description="{ item }">
                    <div>
                        <span class="text-md">گیرنده: {{ item?.fullname }}</span>
                    </div>
                </template>
            </URadioGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RadioGroupItem, DropdownMenuItem } from '@nuxt/ui';

useHead({
  title:'آدرس'
})

const token = useRequestHeaders(['cookie'])
const toast = useToast()
const currentAddress = ref()
// دریافت لیست ادرس های ثبت شده کاربر
const { data: address } = await useFetch('/api/user-address')
console.log(address.value);



const items = ref<RadioGroupItem[]>([])
address.value?.data?.results.forEach(address => {
    items.value.push(address)
    if (address.main_address) {
        currentAddress.value = address.value

    }
});


const dropDownItems = [
    {
        label: 'ویرایش',
        slot: 'edit' as const
    },
    {
        color: 'error',
        slot: 'remove' as const
    }
] satisfies DropdownMenuItem[]



// آپدیت ادرس در سرور
const selectedAddress = ref()
watch(selectedAddress, async (newVal, oldVal) => {
    try {
        const addressStatus = await $fetch('/api/update-address', {
            method: 'PUT',
            body: {
                mainAddress: true,
                addressId: newVal
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (addressStatus?.status == 200) {
            toast.add({
                title: 'ارسال موفق',
                description: `آدرس به آیدی شماره ${newVal} بروزرسانی شد`
            })
        } else {
            toast.add({
                title: addressStatus.message,
                description: addressStatus.data[0]
            })
        }
    } catch (error) {
        console.log(error);

    }





    console.log('new : ', newVal);
    console.log('old : ', oldVal);

})



// حذف ادرس انتخاب شده از لیست
const open = (Id: string | number | any) => {
    items.value = items.value.filter(item => item?.id !== Id)
    toast.add({
        title: 'موفق',
        description: 'آدرس مورد نظر با موفقیت حذف شد',
        color: 'success'
    })
}


//ثبت ادرس جدید

const createNewAddress = reactive({
    fullname: null,
    province: null,
    city: null,
    lineAddress: null,
    postalCode: null,
})

const newAddress = async () => {
    const { data: res } = await useFetch('/api/create-address', {
        method: 'post',
        headers: token,

        body: createNewAddress
    })
    if (res.value.status === 201) {
        toast.add({
            title: 'عملیات موفق',
            description: 'آدرس با موفقیت ثبت شد'
        })
    } else {
        toast.add({
            title: 'خطایی رخ داد',
            description: 'آدرس ثبت نشد، مجدداٌ ثبت کنید.',
            color: 'error'
        })
    }
    console.log(res);
}



</script>

<style scoped>
p.address:before {
    content: '';
    position: absolute;
    border-bottom: 2px solid red;
    bottom: 0;
    width: 4rem;
}
</style>