<template>
    <div class="lg:mt-44 md:mt-40">
        <UContainer>
            <div class="flex lg:flex-nowrap flex-wrap gap-3 w-full">
                <!-- ساید باکس -->
                <div class="flex flex-col gap-3 lg:basis-xs basis-full lg:order-1 order-2 ">
                    <div class="dark:bg-slate-700 bg-slate-50 rounded-lg p-4 flex flex-col gap-y-2">
                        <div class="flex justify-between">
                            <h3 class="text-md font-bold text-slate-600 dark:text-slate-200 self-center-safe">آدرس فعلی شما</h3>
                            <UBadge color="secondary" variant="solid">آدرس اصلی</UBadge>
                        </div>
                        <template v-for="Address in address.data.results" :key="Address.id">
                            <span v-if="Address.main_address" class="text-muted text-justify my-4">{{ Address?.province }} {{ Address?.city }} - {{ Address?.address_line }}</span>
                        </template>
                        <UButton to="/user/address" variant="outline" color="neutral" size="xl"  class="place-content-center hover:cursor-pointer">ویرایش</UButton>
                    </div>

                    <div
                        class="dark:bg-slate-700 bg-slate-50 rounded-lg p-4 flex flex-col gap-y-4 basis-full max-h-fit">
                        <div class="flex justify-between">
                            <span class="text-sm">تعداد کالاها</span>
                            <span class="text-muted">{{ products.length }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm">جمع سبد خرید</span>
                            <span class="font-bold text-sm">{{ numberFormater(totalPriceForPay) || 0 }} تومان</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-green-500">سود شما از خرید</span>
                            <span class="text-green-500 text-sm">{{ numberFormater(Tbonouse) }} تومان</span>
                        </div>
                        <UButton size="xl" color="error" variant="solid"
                            class="place-content-center hover:cursor-pointer">تایید و پرداخت وجه</UButton>


                    </div>
                </div>
                <!-- باکس محصولات -->

                <div class="dark:bg-slate-700 bg-slate-50 rounded-lg p-4 grow h-fit lg:order-2 order-1">
                    <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-3 w-full">
                        <div v-for="product in products" :key="product.id" class="flex justify-between border border-slate-200 dark:border-slate-600 rounded-lg gap-x-3 p-4">
                            <div class="flex flex-col justify-between">
                                <div class="space-y-2">

                                    <h1 class="font-black lg:text-xl md:text-lg text-md dark:text-slate-200 text-slate-600">{{ product.name }}</h1>
                                    <h3 class="font-bold text-md dark:text-slate-200 text-slate-600">{{ numberFormater(product.price) }} تومان
                                    </h3>
                                </div>
                                <div class="flex gap-x-3">
                                    <UInputNumber class="" :default-value="product.quantity" disable-wheel-change disabled
                                        variant="subtle" />
                                    <UButton size="xl" variant="ghost" color="error" class="text-xl"
                                        icon="mynaui:trash" />
                                </div>
                            </div>
                            <NuxtImg class="lg:w-35 lg:h-35 md:w-20 md:h-20 w-15 h-15 lg:self-auto self-center rounded-lg"
                                :src="product.picture" />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup>
import { addToBasket } from '../../../stores/index'
const { data: address } = await useFetch('/api/user-address')
console.log(address.value);
useHead({
    bodyAttrs: {
        'class': 'bg-slate-100 dark:bg-slate-900'
    },
    title:'تسویه حساب'
})

definePageMeta({
    middleware:['auth-middleware']
})


const store = addToBasket()

const products = computed(() => {
  return store.showProduct || null
})

const totalPrice = computed(() => {
  return store.basketCart?.map((item) => {    
    return (item?.price * item?.quantity || item?.price * 1) - item?.discount
  })
})

const totalPriceForPay = computed(() => {
  if (totalPrice.value.length <= 0) {
    return false
  } else {
    return totalPrice?.value?.reduce((cu = 0, to = 0) => {
      return cu + to
    }, 0)
  }

})


const bonouse = computed(() => {
    return store.basketCart.map((item) => {
        return item.discount
        
    })
})

const Tbonouse = computed(() => {
    return bonouse.value.reduce((current=0, total=0)=>{
        return current + total
    })
})


</script>

<style scoped></style>
