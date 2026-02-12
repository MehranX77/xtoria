<template>
    <div>
        <div class="mt-5">
            <div class="flex justify-end gap-x-3">
                <!-- مودال ایجاد پرسش -->
                <UModal fullscreen title="ایجاد پرسش">
                    <UButton variant="soft" color="info" size="xl" icon="material-symbols:add-2">ارسال تیکت</UButton>
                    <template #body>
                       <UContainer>
                        <div class="flex flex-col gap-y-2">
                        <h1 class="dark:text-neutral-200 text-neutral-600 text-2xl">دسته بندی</h1>
                        <span class="text-sm text-muted">لطفا واحد مورد نظر را انتخاب کنید</span>
                        <USelect v-model="unitSelected" :items="['واحد فروش']" size="xl" color="neutral" variant="soft" class="lg:w-1/2 w-full" :ui="{base:'py-4'}"/>
                        <h1 class="dark:text-neutral-200 text-neutral-600 text-2xl mt-4">محتوای تیکت</h1>
                        <span class="text-sm text-muted">لطفا موضوع و متن تیکت خود را وارد کنید.</span>
                        <UCard variant="soft" class="lg:w-1/2 w-full mt-3">
                            <template #default>
                               <UForm @submit.prevent="sendTicket">
                                <UFormField required label="موضوع تیکت">
                                    <UInput variant="outline" size="xl" placeholder="مثال: پیگیری سفارش" class="w-full mt-2" color="neutral" :ui="{base:'py-3'}" trailing-icon="uit:subject"/>
                                </UFormField>
                                 <UFormField required label="متن تیکت" class="mt-3">
                                    <UTextarea variant="outline" size="xl" placeholder="مثال: پیگیری سفارش" class="w-full mt-2" color="neutral" :rows="10" />
                                </UFormField>  
                                <UButton type="submit" color="neutral" variant="subtle" size="xl" class="mt-3">ارسال تیکت</UButton> 
                               </UForm> 
                            </template>
                        </UCard>
                       </div>
                       </UContainer>
                    </template>
                </UModal>
                <!-- مودال  تماس با واحد فروش -->
                <UModal>
                    <UButton variant="soft" color="info" size="xl" icon="solar:phone-linear">تماس با واحد فروش
                    </UButton>
                    <template #header>
                        <div class="flex flex-col gap-y-5 grow">
                        <div class="flex background justify-between w-full transition-all hover:cursor-pointer dark:border-slate-800 border-slate-300/70 hover:border-teal-700 hover:bg-green-400/10 border-2 rounded-lg py-8 px-6" @click="saveToClipboard">
                            <p class="dark:text-neutral-300 text-neutral-600 self-center">تلفن واحد فروش:</p>
                            <h3 class="font-bold text-xl dark:text-neutral-400 text-neutral-700 self-center">025-32098000</h3>
                        </div>
                        <UButton to="tel:025-32098000" size="xl" variant="soft" color="neutral" class="self-end" icon="solar:phone-linear">تماس با واحد فروش</UButton>
                        </div>
                    </template>
                </UModal>
            </div>
            <!-- باکس پرسش و پاسخ مشتریان -->
             
                <div class="flex md:w-4/5 md:mx-auto w-full mt-16">
                    <UCard variant="soft" class="w-full">
                        <template #header>
                            <div class="flex justify-between">
                                <div class="flex flex-col gap-y-4">
                                    <h1 class="text-2xl">تیکت تستی</h1>
                                    <span class="text-muted text-md">ایجاد شده در چهارشنبه 22 بهمن 1404</span>
                                </div>
                                <div class="flex flex-col gap-y-4">
                                 <UBadge variant="outline" color="warning" size="xl">در انتظار پاسخ واحد فروش</UBadge>
                                 <span class="text-muted text-sm">آیدی تیکت : #14256</span>
                                </div>
                            </div>
                        </template>
                        <template #default>
                                <UTextarea variant="subtle" color="neutral" placeholder="متن تیکت" :rows="10" class="w-full"/>
                                <div class="flex justify-between mt-6">
                                     <div class="flex flex-col gap-y-3">
                                        <p class="dark:text-neutral-300 text-neutral-700 text-base">پیوست‌ها</p>
                                        <span class="text-muted text-sm">اگر تصویر محصول خریداری شده دارید که برای حل مشکل به ما کمک می‌کند. لطفا آن را پیوست کنید</span>
                                        <UFileUpload accept="image/*" label="فایل پیوست خود را وارد کنید" description="(png, jpeg)" icon="i-lucide-image" class="w-96"/>
                                     </div>
                                     <UButton class="self-baseline" size="xl" color="neutral" variant="subtle">ارسال پاسخ</UButton>
                                </div>
                        </template>
                    </UCard>
                </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

const toast = useToast()

const saveToClipboard = () => {
    const phoneNumber: string = "021320986660"
    if(import.meta.client){
        navigator.clipboard.writeText(phoneNumber).then(() => toast.add({
            title:'شماره با موفقیت ذخیره شد',
            description:`شماره موبایل: ${phoneNumber}`
        }))
    }
}

const unitSelected = ref('واحد فروش')


const sendTicket = async () => {
     toast.add({
            title:'موفق',
            description:'تیکت شما با موفقیت ارسال شد'
        })
}

</script>

<style scoped>
.background{
    background-image: url('../../../public/paper.png');
}
</style>