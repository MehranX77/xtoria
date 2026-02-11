<template>
    <div>
        <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg p-6 mt-2">
            <div class="flex justify-between">
                <p class="address relative text-neutral-800 dark:text-neutral-300">آدرس فعلی شما</p>
                <UButton variant="link" color="error" size="xl" icon="ic:outline-plus" class="hover:cursor-pointer self-center">افزودن آدرس جدید</UButton>
            </div>
            <URadioGroup  v-model="selectedAddress" dir="rtl" class="mt-8" color="info" variant="card" size="xl" :items="addressList">
                <template #label="{item}">
                  <div class="flex justify-between">
                   <div class="flex flex-col">
                   <span class="text-sky-500 text-md mb-2">{{ item?.label }}</span>
                   <span class="text-muted mb-2">کدپستی: {{ item?.postalCode }}</span>
                   <span class="text-muted mb-2">کدپستی: {{ item?.ListId }}</span>
                   </div>
                <UDropdownMenu :items="dropDownItems" dir="rtl" :ui="{content:'w-48'}">
                 <UButton icon="tabler:dots-vertical" class="self-start text-xl" variant="ghost" color="neutral"/>
                  <template #edit>
                    <UButton variant="link" color="neutral" icon="i-lucide-edit" >ویرایش</UButton>
                 </template>
                 <template #remove>
                    <UButton variant="link" color="error" icon="i-lucide-trash" @click.self="open(item.ListId)">حذف</UButton>
                 </template>
                </UDropdownMenu>
                </div>
                </template>
                <template #description="{item}">
                   <div>
                   <span class="text-md">گیرنده: {{ item?.description }}</span>
                   </div>
                </template>
            </URadioGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RadioGroupItem, DropdownMenuItem } from '@nuxt/ui';


const addressList = ref<RadioGroupItem[]>([
    {
        label:'item-1',
        description:'item-1 description',
        value:0,
        ListId:0,
        postalCode:3914850185
    },
    {
        label:'item-2',
        description:'item-2 description',
        value:1,
        ListId:1,
        postalCode:3914850195
    }
])

const selectedAddress = ref()

const open = (ListId:string | number | any) => {    
   addressList.value = addressList.value.filter((item, index)=> item.ListId !== ListId)
}


const dropDownItems = [
    {
        label:'ویرایش',
        slot:'edit' as const
    },
    {
        color:'error',
        slot:'remove' as const
    }    
] satisfies DropdownMenuItem[]


</script>

<style scoped>
p.address:before{
    content: '';
    position: absolute;
    border-bottom: 2px solid red;
    bottom: 0;
    width: 4rem;
}
</style>