<template>
    <UContainer class="mt-10">
        <div class="flex justify-center">
            <UCard variant="outline" class="md:w-1/3 w-full ring-0">
                <template #default>
                    <div class="flex flex-col gap-y-3">
                        <div v-if="true"  class="success rounded-full border-3 border-green-600 bg-green-100 p-4 self-center-safe">
                            <UIcon class="text-5xl align-middle text-green-600" name="material-symbols-light:check" />
                        </div>
                        <div v-else class="error rounded-full border-3 border-red-600 bg-red-100 p-4 self-center-safe">
                            <UIcon class="text-5xl align-middle text-red-600" name="icon-park-outline:error" />
                        </div>
                        <h1 v-if="true" class="extra-bold text-3xl text-center">تراکنش موفق</h1>
                        <h1 v-else class="extra-bold text-3xl text-center">تراکنش ناموفق</h1>
                        <div v-if="true" class="bg-slate-100 dark:bg-slate-700 rounded-lg p-3">
                            <p class="text-sm font-bold">جزئیات سفارش:</p>
                            <div class="flex flex-col gap-y-3 mt-4">
                                <div class="flex justify-between">
                                    <span class="text-muted text-sm">شماره سفارش</span>
                                    <span class="text-base text-sm">#125478555</span>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-3 mt-4">
                                <div class="flex justify-between">
                                    <span class="text-muted text-sm">مبلغ کل</span>
                                    <span class="text-base text-sm">{{ numberFormater(45000000) }} تومان</span>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-3 mt-4">
                                <div class="flex justify-between">
                                    <span class="text-muted text-sm">تاریخ ثبت سفارش</span>
                                    <span class="text-base text-sm">1405/04/20</span>
                                </div>
                            </div>
                            <UButton to="/" size="xl" variant="solid" color="success" class="place-content-center-safe w-full mt-4">مشاهده پروفایل</UButton>
                        </div>
                        <div v-else class="flex flex-col gap-y-4 bg-slate-100 dark:bg-slate-700 p-3">
                            <p class="text-sm font-bold">جزئیات خطا:</p>
                            <span class="text-base">{{ new Error('عجب خطایی رخ داده!') }}</span>

                            <UButton to="/" size="xl" variant="solid" color="error" class="place-content-center-safe">بازگشت به سبد خرید</UButton>
                        </div>
                    </div>
                </template>
            </UCard>
        </div>
    </UContainer>
</template>


<script setup>
definePageMeta({
    layout: false
})

useHead({
    bodyAttrs: {
        class: 'bg-slate-100 dark:bg-slate-800 h-screen',
        dir: 'rtl'
    }
})

</script>

<style>
.extra-bold {
    font-family: var(--heading-extra-bold);
}
</style>