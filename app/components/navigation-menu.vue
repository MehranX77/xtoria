<template>
  <div>
    <div class="md:flex dark:bg-slate-800 bg-slate-50/70 backdrop-blur-3xl lg:p-4 p-3 fixed z-50 w-full top-0 hidden">
      <div class="flex justify-between w-full">
        <ClientOnly>
          <template #default>
            <div v-if="authUser !== '' && authUser !== null"  class="lg:basis-3xs basis-lg max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
              <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-id-broken" />
              <ULink to="/user">پروفایل</ULink>
            </div>
            <div v-else class="lg:basis-3xs basis-lg max-w-fit border dark:border-slate-600 border-slate-200 px-5 py-3 rounded-xl flex self-center gap-x-2">
              <UIcon class="text-xl hover:cursor-pointer self-center" name="solar:user-broken" />
              <ULink to="/auth/authentication">حساب کاربری</ULink>
            </div>
          </template>
          <template #fallback>
            <USkeleton class="h-12 w-40 rounded-xl self-center bg-slate-200/85 dark:bg-slate-700/85" />
          </template>
        </ClientOnly>
        <div class="logo basis-7xl self-center">
          <NuxtImg height="30" width="150" class="mx-auto" src="logos.png" />

          <div class="mt-5 text-center" :class="{'hidden' : res}">
            <ul class="flex justify-center gap-x-4">
              <template v-for="category in pCategories.data.results" :key="category.id">
                <li v-if="category.header === null" @mouseenter="changeData(category.id, category.has_sub)"><UIcon v-if="category.has_sub" name="iconamoon:arrow-down-2-fill" class="align-middle me-1"/><ULink :to="{name:'category-slug', params:{slug:category.slug}}" class="font-black">{{ category.name }}</ULink></li>
              </template>
            </ul>
            <div :class="{'hidden': currentTab ===0}" class="rounded-lg md:w-2/5 mt-5 w-full absolute left-[50%] translate-x-[-50%] h-auto bg-slate-100 dark:bg-slate-700 p-4 shadow-sm " @mouseleave="clearCurrentTab">
                <ul class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                  <li v-for="item in activeTab" :key="item.id" class="text-slate-700 dark:text-slate-300 text-lg hover:cursor-pointer p-2 rounded-lg hover:bg-slate-200/65 transition-all"><ULink>{{item.name}}</Ulink><span class="text-xs text-rose-400 line-clamp-1" v-html="item.description"/></li>
                </ul>
            </div>
          </div>

        </div>
          <!-- منوی سبد خرید کاربر -->
        <div dir="ltr" class="flex self-center gap-x-3">
          <USlideover side="left" inset title="سبد خرید">
            <UChip color="error" :text="products?.length || 0" size="3xl">
              <UButton class="text-2xl" color="neutral" variant="subtle" icon="mdi-light:cart" />
            </UChip>
            <template #body>
              <div v-if="products?.length > 0" class="min-w-96 min-h-96 size-full">
                <div v-for="(product, index) in products" :key="product?.id" class="flex gap-x-3 w-full">
                  <!-- {{ product.product.product.picture }} -->
                  <NuxtImg :src="`${product?.picture}`" width="80" height="80" class="max-h-20" />
                  <div class="w-full">
                    <span class="text-slate-700 dark:text-slate-50 font-black dark:font-medium text-wrap line-clamp-2 text-sm/8">{{ product?.name }}</span>
                    <div class="mt-3">
                      <!-- <p class="text-muted text-nowrap">
                        <UIcon name="icon-park-twotone:color-filter" class="align-middle me-1" /> {{
                        product?.productColor }}
                      </p> -->
                      <p class="text-muted text-nowrap mt-2">
                        <UIcon name="akar-icons:truck" class="align-middle me-1 text-green-500" /> ارسال ایکستور
                      </p>
                      <p class="text-xl dark:text-slate-50 text-slate-800 text-end mt-3">{{
                        numberFormater(product?.price) }} تومان</p>
                      <div class="flex justify-between items-center w-full">
                        <UInputNumber :default-value="product.quantity" disabled readonly class="w-25" variant="subtle" />
                        <p v-if="product?.discount" class="text-sm dark:text-rose-400 text-rose-500 text-end mt-2">{{
                          numberFormater(product?.discount) }} تومان تخفیف</p>
                      </div>
                    </div>
                    <USeparator class="my-4" />
                  </div>
                </div>
              </div>
              <div v-else>
                <p>هنوز محصولی به سبد خرید اضافه نشده</p>
              </div>
            </template>
            <template #footer>
              <div class="flex justify-between w-full">
                <div class="flex flex-col gap-y-2">
                  <span class="text-muted text-xs">مبلغ قابل پرداخت</span>
                  <p v-if="totalPriceForPay" class="text-xl dark:text-slate-50 text-slate-700">{{ numberFormater(totalPriceForPay) }} تومان</p>
                  <p v-else class="text-sm dark:text-slate-50 text-slate-700">سبد خرید خالی است!</p>
                </div>
                <UButton v-if="totalPriceForPay" color="success" class="md:w-30 place-content-center-safe" variant="solid" @click="() => navigateTo('/checkout/cart')">ثبت سفارش</UButton>
              </div>
            </template>
          </USlideover>
          <div class="max-h-10 w-0.5 dark:bg-slate-600 bg-slate-200" />
          <UColorModeSwitch class="m-auto" />
          <UButton class="text-2xl" color="neutral" variant="subtle" icon="i-lucide-search" />
        </div>

      </div>
      <!-- mobile navigation -->

    </div>
    <div
      class="mobile flex justify-around md:hidden fixed dark:bg-slate-700/80 bg-gray-200/50 backdrop-blur-3xl w-full bottom-0 z-50 py-3">
      <div class="flex flex-col text-2xl">
        <UIcon name="mdi:about-variant" class="self-center" @click="() => navigateTo('/about-us')"/>
        <span class="text-sm font-medium self-center">درباره ما</span>
      </div>
      <div class="flex flex-col text-2xl" @click="() => navigateTo('/')">
        <UIcon name="mdi-light:home" class="self-center" />
        <span class="text-sm font-medium self-center">صفحه اصلی</span>
      </div>
      <div class="flex flex-col text-2xl" @click="() => navigateTo('/checkout/cart')">
        <UIcon name="mdi-light:cart" class="self-center" />
        <span class="text-sm font-medium self-center">سبد خرید</span>
      </div>
      <div class="flex flex-col text-2xl" @click="open">
        <UIcon name="system-uicons:menu-hamburger" class="self-center" />
        <span class="text-sm font-medium self-center">منو</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { LazyMobileSlideover } from '#components'
import { addToBasket } from '../stores/index'
const { authUser } = useAuth()
const overlay = useOverlay()
const slideover = overlay.create(LazyMobileSlideover)
const store = addToBasket()
const {public:{baseURL}} = useRuntimeConfig()

async function open() {
  const instance = slideover.open()
  await instance.result
}


const {data:pCategories, error:pError} = await useFetch(`${baseURL}/product/categories `)

console.log('pcategory: ', pCategories.value.data.results);
console.log(pError);

const currentTab = ref(0)
const changeData = (id: number, hasSub: boolean) => {
if(hasSub){
  currentTab.value= id
}
return
  
}

const clearCurrentTab = () => {
  currentTab.value = 0
}


const activeTab = computed(() => {
 return pCategories.value.data.results.filter(ct => ct.header === currentTab.value)
})

onMounted(() => {
  console.log(activeTab.value);
})


const { res } = useScroll()

// نمایش تعداد محصولات افزوده شده به سبد خرید
const products = computed(() => {
  return store.showProduct || null
})

console.log('product list: ',products.value);



// محاسبه قیمت جزء و قیمت نهایی

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


</script>

<style>
.mobile nav {
  width: 100%;
}

.mobile nav div {
  width: 100%;
}

.isolate {
  justify-content: space-around !important;
  width: 100%;
}

/* تنظیم فونت فارسی اگر در پروژه لود شده باشد */
.dir-rtl {
  direction: rtl;
}
</style>
