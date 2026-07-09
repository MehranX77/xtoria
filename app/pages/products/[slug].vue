<template>
    <div class="md:mt-44 mt-10">
        <UContainer>

            <UBreadcrumb :items="items" :ui="{link:'text-rose-500'}">
                <template #separator>
                    <span class="mx-2 text-muted">
                        <UIcon class="align-middle" name="solar:alt-arrow-left-linear" />
                    </span>
                </template>
            </UBreadcrumb>

            <!-- بنر پیشنهاد شده -->
                 <UBanner v-if="p?.data?.suggested" title="پیشنهاد شگفت انگیز"  color="error" class="rounded-md mt-4 z-0" :ui="{title:'font-bold'}"/>
                <UBanner v-if="p?.data?.special_discount" title="تخفیف ویژه"   color="success" class="rounded-md mt-4 z-0" :ui="{title:'font-bold'}"/>
            <div class="flex lg:flex-nowrap flex-wrap gap-x-3">

                <div class="flex lg:flex-col gap-y-2 mt-5 lg:order-first order-last">
                    <UButton @click="shareThisProduct" size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="solar:share-line-duotone" />
                    <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:telegram" />
                    <UButton size="xl" variant="ghost" color="neutral" class="self-start text-2xl rounded-lg" icon="mage:instagram-square" />
                </div>

                <div class="flex md:flex-nowrap flex-wrap dark:bg-slate-800 bg-slate-100 w-full p-4 rounded-lg mt-5 gap-x-5">

                    <div class="gallery basis-110">
                        <NuxtImg class="lg:w-80 lg:h-80 lg:max-h-80 w-40 h-40 max-h-40 mx-auto lg:mx-0 object-cover rounded-lg" :src="galleryRef"/>
                        <div class="flex justify-center sub-img gap-x-5">
                            <template v-for="(items, index) in p?.data?.product.images.slice(0,3)" :key="index">
                               <NuxtImg class="w-20 h-20 max-h-20 hover:cursor-pointer transition-all object-cover rounded-lg border border-slate-300 dark:border-slate-700/90 hover:border-rose-700/90 p-2" :src="items.image" @click="changeImg(items)" />
                                <!-- {{ items.image }} -->
                            </template>
                        </div>
                    </div>

                    <div class="basis-full mt-8">
                        <div class="flex justify-between">
                            <!-- مشخصات محصول -->
                            <div class="flex flex-col gap-y-3">
                                <h3 v-html="[p?.data?.product?.name, p?.data?.product?.description]" class="text-2xl font-bold text-slate-900 dark:text-slate-200" />
                                <div class="flex gap-x-2">
                                    <h4 class="text-lg font-bold">مدل:</h4>
                                    <span class="self-center text-muted">{{ p?.data?.product?.brand?.name || 'بدون نام' }} {{ p?.data?.product?.brand?.description || 'بدون توضیحات'}} </span>
                                </div>
                                <div class="flex gap-x-2">
                                    <h4 class="text-lg font-bold">تولید کننده:</h4>
                                    <span class="self-center text-sky-500">{{ p?.data?.product?.brand?.name || 'بدون نام' }}</span>
                                </div>
                                <ul class="flex space-x-2">
                                    <li v-for="(options, index) in p?.data?.options" :key="index" class="lg:text-xl md:text-lg text-base"><UIcon class="align-middle me-1 text-2xl text-green-500" name="solar:check-circle-line-duotone" />{{ options?.value }}</li>
                                </ul>
                                <USeparator class="mt-2"/>
                                <div class="flex flex-col gap-y-2 mt-2">
                                    <div v-for="(property, index) in p?.data?.properties" :key="index" class="flex gap-x-2">
                                        <span class="text-muted text-sm">{{ property?.key }}: </span>
                                        <span class="text-neutral-700 dark:text-neutral-200 text-sm">{{ property?.value }}</span>
                                    </div>
                                </div>
                                <div class="flex lg:flex-nowrap flex-wrap lg:gap-x-12 gap-y-3 mt-4">
                                    <UFormField orientation="vertical" label="انتخاب رنگ" class="lg:text-xl text-base">
                                        <div class="flex gap-x-2">
                                            <div v-for="color in p.data?.colors" :key="color.id" class="rounded-full w-8 h-8 hover:cursor-pointer self-center flex justify-center items-center" :style="{background:`${color.value}`}" @click="changeProductColor(color.id)">
                                                <UIcon v-show="color.id === colorSelected" name='material-symbols-light:check' class="text-slate-100 text-2xl" />
                                            </div>
                                        </div>
                                    </UFormField>

                                    <UFormField orientation="vertical" label="تعداد" class="lg:text-xl text-base">
                                        <UInputNumber v-model="options.quantity" size="xl" :min="1" />
                                    </UFormField>
                                </div>
                                <UFormField label="انتخاب گارانتی" required :hint="p?.data?.guanranty[0].days + ' روز گارانتی '" class="space-y-4 lg:text-xl text-base" :ui="{hint:'text-rose-500 text-sm font-bold'}">
                                    <URadioGroup v-for="(key,index) in p?.data?.guanranty" :key="index" v-model="options.selectedGuanranty" size="xl" dir="rtl" class="text-end w-fit " :items="[key.name]" color="neutral"/>
                                </UFormField>
                                <div class="flex gap-x-3">
                                <UButton v-if="p?.data?.stock !== 0"  variant="subtle" size="xl" color="neutral" class="lg:w-[40%] w-full text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone" @click="AddToBasket(p.data.id)">{{ numberFormater(p?.data.price || 0) }} <span class="text-sm text-muted">تومان</span></UButton>
                                <UButton v-else disabled variant="subtle" size="xl" color="error" class="lg:w-[40%] w-full text-xl my-3 place-content-center" trailing icon="solar:cart-large-2-line-duotone">اتمام موجودی</UButton>
                                <span v-if="p?.data?.discount !== 0" class="text-md text-muted self-center "> تخفیف: {{ numberFormater(p?.data?.discount || 0) }} تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="p?.data?.product.score !==0" class="flex basis-3xs gap-x-1 flex-wrap h-fit mt-8">
                        <UIcon v-for="(star, index) in p?.data?.product.score" :key="index" class="text-2xl text-orange-400" name="solar:star-bold" />
                        <span class="text-muted self-start mt-2">(از 27 نفر)</span>
                    </div>
                </div>
            </div>
            <USeparator color="neutral" class="mt-10" />
            <div class="flex lg:flex-nowrap flex-wrap lg:justify-around lg:gap-y-0 gap-y-3 mt-5">
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="mdi:truck-fast-outline" />
                    <span class="dark:text-slate-500/90 text-md  self-center">امکان تحویل اکسپرس</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg" name="mdi:headset" />
                    <span class="dark:text-slate-500/90 text-md  self-center">پشتیبانی آنلاین</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="streamline-ultimate:cash-payment-bills" />
                    <span class="dark:text-slate-500/90 text-md  self-center">پرداخت درب محل</span>
                </div>
                <div class="flex gap-x-2">
                    <UIcon class="dark:text-slate-600/70 lg:text-5xl md:text-3xl text-lg"
                        name="solar:medal-ribbon-star-outline" />
                    <span class="dark:text-slate-500/90 text-md  self-center">ضمانت اصل بودن کالا</span>
                </div>
            </div>

            <div class="mt-8 w-full border dark:border-slate-800/70 border-slate-200 rounded-lg p-5">
                <h1 class="text-xl dark:text-slate-300">کالاهای مشابه</h1>
                <UCarousel v-slot="{ item }" dir="ltr" class="mt-10" :items="relatedProducts" loop arrows :autoplay="{ delay: 2000 }"
                    :ui="{ item: 'xl:basis-1/8 lg:basis-1/4 md:basis-1/3 lg:mx-3', controls: 'absolute md:inset-x-16 inset-x-0 bottom-1/2' }">
                    <NuxtImg :src="`${baseURLAssets}${item.product.picture}`" width="234" height="234" class="rounded-lg object-contain" />
                    <span dir="rtl" class="dark:text-slate-300 text-center line-clamp-2 mt-4">{{ item.product.name }}</span>
                    <div dir="rtl" class="flex justify-center mt-3 text-end">
                        <span class="dark:text-slate-300 text-xl self-center">{{ numberFormater(item.price) }}</span>
                        <span class="dark:text-slate-300 self-center">تومان</span>
                    </div>
                </UCarousel>
            </div>
            <UTabs variant="link" dir="rtl" size="xl" color="neutral" class="mt-10" :items="tabsItem">
                <template #ProductOverview>
                    <div class="flex flex-col mt-5 gap-y-4">
                        <p class="text-xl font-bold">معرفی محصول</p>
                        <p v-if="p.data.product.description.length > 0" class="text-base" v-html="p.data.product?.description"/>
                        <p v-else class="text-base">برای این محصول هنوز توضیحاتی منتشر نشده!</p>
                        <USeparator />
                        <p class="text-xl font-bold my-5">مشخصات محصول</p>
                        <template v-if="p.data.properties.length > 0">
                        <div v-for="(property, index) in p.data?.properties" :key="index" class="flex justify-around gap-x-3 md:w-1/3 w-full">
                                <span class="text-slate-500 dark:text-slate-300">{{ property.key }}</span>
                                <USeparator />
                                <span :class="{'text-red-500': property.value === 'ندارد'}" class="text-base">{{ property.value }}</span>
                        </div>
                        </template>
                        <template v-else>برای این محصول مشخصاتی تعریف نشده!</template>
                    </div>
                </template>
                <template #features>
                        <p class="text-xl font-bold my-5">خصوصیات محصول</p>
                        <template v-if="p.data.options.length > 0">
                        <div v-for="(option, index) in p.data?.options" :key="index" class="md:w-1/3 w-full">
                          <div class="flex gap-x-1 my-4">
                                 <UIcon name="mdi:tick-circle" class="self-center text-green-400 text-xl"/>
                                <span class="text-base">{{ option.value }}</span>
                          </div>
                          <USeparator />
                        </div>
                        </template>
                        <template v-else>برای این محصول خصوصیاتی هنوز تعریف نشده!</template>
                </template>
                <template #comments>
                    <div class="flex flex-col mt-5 gap-y-4">
                        <p class="text-xl font-bold">دیدگاه کاربران</p>
                        <p class="text-base">{{ p.data.comments?.length || 0 }} دیدگاه</p>
                        <USeparator />
                          <div v-for="(comment, index) in p.data.comments" :key="index" class="flex flex-col gap-y-3 dark:bg-slate-700 bg-slate-100 rounded-lg p-4 md:w-2/4 w-full">
                            <div class="flex justify-between flex-nowrap">
                                  <div class="flex gap-x-3 self-baseline">
                                  <p class="font-black text-base">{{ comment?.first_name || 'کاربر سایت'}} {{ comment?.last_name }}</p>
                                  <UBadge v-if="comment.is_admin" variant="soft" color="warning">مدیر</UBadge>
                                  <UBadge v-else variant="soft" >خریدار</UBadge>
                              </div>
                              <div class="flex flex-col gap-y-1">
                                <NuxtTime :datetime="comment.created_at" locale="fa-IR" class="text-sm font-light"/>
                               <div class="flex">
                                 <UIcon v-for="(i, index) in comment.rating" :key="index" name="material-symbols-light:star-rounded" class="text-amber-400" />
                               </div>
                              </div>
                            </div>
                              <p class="text-base">{{ comment?.comment }}</p>
                          </div>
                          <USeparator />

                          <UForm class="flex flex-col gap-y-2 max-w-2/4" @submit.prevent="sendComment">
                            <UTextarea v-model="form.comment" placeholder="دیدگاه خود را اینجا بنویسید..." variant="subtle" color="neutral" :rows="8" />
                            <div class="flex justify-between">
                                <UButton color="neutral" variant="soft" size="xl" type="submit" class="self-baseline">ارسال دیدگاه</UButton>
                                <UInputNumber v-model="form.rating" :max="5" :min="1"/>
                            </div>
                          </UForm>
                    </div>
                </template>
            </UTabs>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';
import {addToBasket} from '../../stores/index'
const { authUser } = useAuth()
const { public: { baseURL, baseURLAssets } } = useRuntimeConfig()
const toast = useToast()
const route = useRoute()
const store = addToBasket()
// *************Data Fetching*************************

interface products{
   data:{
    product:{
        images: []
    }
   }
}

const { data: product } = await useFetch<products | undefined>(`${baseURL}/product/product/${route.params.slug}`)

const p= ref<object | null>(null)
const relatedProducts = ref(null)
p.value = product.value.data
relatedProducts.value = product.value.data.related
const colorSelected = ref<number | null>(null)

const changeProductColor = (color:number) => {  
  colorSelected.value = color   
}

console.log(' c: ', p.value.data.product.id);


// *************End Data Fetching**********************

// *************BreadCrumb*************************

const items: BreadcrumbItem[] = [
    {
        label: `صفحه اصلی`,
        to: '/'
    },
    {
        label: 'products',
        to: '/products'
    },
    {
        label: `${route.params.slug}`,
        to: `/products/${route.params.slug}`
    }
]

// *************End BreadCrumb*********************

// *************Gallery*************************

const galleryRef = ref()

const changeImg = (x: string) => {
    galleryRef.value = x?.image
}



onMounted(() => {
   galleryRef.value = p?.value?.data?.product?.images[0].image
})

// *************End Gallery*********************

// *****************options wrapper*************

const options = reactive({
 productId:p.value?.data.id,
 productSlug:p.value?.data.slug,
 productName:p.value?.data.product.name,
//  productColor:'سفید',
 productImage:p?.value?.data?.product?.images[0].image,
 price:p.value?.data.price || 0,
 discount:p.value?.data.discount || 0,
 quantity: 0,
//  selectedGuanranty:'',
 guanrantyId: p.value?.data?.guanranty[0].id || 0
})

// *****************End Options Wrapper***********

// ***************Tabs Items **************************

const tabsItem = [
    {
        label: 'معرفی محصول',
        icon: 'i-lucide-user',
        slot: 'ProductOverview'
    },
    {
        label: 'خصوصیات',
        icon: 'i-lucide-user',
        slot: 'features'
    },
    {
        label: 'نظرات',
        icon: 'i-lucide-user',
        slot: 'comments'
    },
]

// ***************End Carousel And Tabs Items **********************

// ***************Add To Basket Code **********************
const AddToBasket = async (id: number) => {
    if (authUser.value !== null) {     
        const res = store.showProduct.find(item => item.pId === id || item.id === id)
        
        if (res !==undefined) {
            
       toast.add({
        description:'محصول به سبد خرید افزوده نشد',
        color:'error'
       })
        }

        else{
          await store.addToBasket(options, colorSelected.value)
            toast.add({
                description: 'کالا به سبد خرید اضافه شد'
            })
        }
    } 
    else {
        return navigateTo('/auth/authentication', {
            redirectCode: 401,
        })
    }

}

// ***************End Add To Basket Code **********************

// ***************share urls products **********************

const shareThisProduct = () => {
    if(import.meta.client) {
    if(window.navigator.share && window.navigator){
        try {
            window.navigator.share({
            title: p.value?.data?.product.name,
            url:route.fullPath,
            text:p.value?.data.product.brand?.description || 'بدون توضیح'
        })
        } catch (error) {
            throw showError({
                name:'عملیات با خطا مواجه شد',
                message:error?.message
            })
        }
    }else{
        throw showError({
          name:'عملیات با خطا مواجه شد',
           message:'عملیات با خطا مواجه شد لطفا مجدداً تلاش کنید'
        })
    }
    }
}

// ***************send comment **********************

const form = reactive({
    comment: null,
    rating: 1,
    varient: p.value.data.product.id
})

const sendComment = async () =>{
    if(authUser.value !== null){
      const token = useRequestHeaders(['cookie'])
try {
    const res = await $fetch('/api/send-comment', {
        method:'POST',
        headers:token,
        body:form
    })

    if (res.status === 201){
        toast.add({
            description:'با موفقیت ارسال شد'
        })
    }else if(res.status === 400){
             toast.add({
                title:res.message,
                description:res.data.errors[0]
        })
    }

    console.log(res);
    
} catch (error) {
    console.log(error);
    
}
    }else{
        toast.add({
            description:'برای ارسال نظر ابتدا وارد حساب خود شوید'
        })
    }


}
</script>

