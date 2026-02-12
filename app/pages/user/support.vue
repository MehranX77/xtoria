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
                        <div class="flex background justify-between w-full transition-all hover:cursor-pointer dark:border-slate-800 border-slate-300/70 hover:border-sky-700 hover:bg-sky-400/10 border-2 rounded-lg py-8 px-6" @click="saveToClipboard">
                            <p class="dark:text-neutral-300 text-neutral-600 self-center">تلفن واحد فروش:</p>
                            <h3 class="font-bold text-xl dark:text-neutral-400 text-neutral-700 self-center">025-32098000</h3>
                        </div>
                        <UButton to="tel:025-32098000" size="xl" variant="soft" color="neutral" class="self-end" icon="solar:phone-linear">تماس با واحد فروش</UButton>
                        </div>
                    </template>
                </UModal>
            </div>
           <div class=" w-full mx-auto rounded-lg dark:bg-slate-800/40 dark:border-0 border border-slate-300/70 p-6 mt-10">
             <div class="grid grid-cols-5">
                <p class="dark:text-neutral-400 text-neutral-700 text-sm">#</p>
                <p class="dark:text-neutral-400 text-neutral-700 text-sm">موضوع</p> 
                <p class="dark:text-neutral-400 text-neutral-700 text-sm">وضعیت</p>
                <p class="dark:text-neutral-400 text-neutral-700 text-sm">تاریخ بروزرسانی</p>
                <p class="dark:text-neutral-400 text-neutral-700 text-sm">لینک تیکت</p>
             </div>
             <USeparator color="neutral" class="mt-3"/>
               <div class="grid grid-cols-5 mt-4 hover:dark:bg-slate-800/50 hover:bg-slate-100 transition-all">
                <p class="dark:text-neutral-300 text-md self-center">#1404</p>
                <p class="dark:text-neutral-300 text-md self-center">تیکت تستی</p>
                <p class="dark:text-neutral-300 text-md self-center"><UBadge color="success" variant="outline">تایید شده</UBadge></p>
                <p class="dark:text-neutral-300 text-md self-center">1404/11/24</p>
                <UButton to="/user/tickets" color="neutral" variant="ghost" icon="solar:arrow-left-bold" size="xl" class="w-fit hover:cursor-pointer text-xl self-center"/>
             </div>
             <USeparator color="neutral" class="mt-3"/>
             <div class="grid grid-cols-5 mt-4 hover:dark:bg-slate-800/50 hover:bg-slate-100 transition-all">
                <p class="dark:text-neutral-300 text-md self-center">#1404</p>
                <p class="dark:text-neutral-300 text-md self-center">تیکت تستی</p>
                <p class="dark:text-neutral-300 text-md self-center"><UBadge color="warning" variant="outline">در انتظار تایید</UBadge></p>
                <p class="dark:text-neutral-300 text-md self-center">1404/11/24</p>
                <UButton to="/user/tickets" color="neutral" variant="ghost" icon="solar:arrow-left-bold" size="xl" class="w-fit hover:cursor-pointer text-xl self-center"/>
             </div>
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