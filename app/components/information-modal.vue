<template>
  <UModal :close="{ onClick: () => emit('close', false) }">
    <template #title>
      <p>ثبت اطلاعات کاربری</p>
    </template>
    <template #body>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <UInput v-model="userInfo.first_name" color="neutral" variant="subtle" size="xl" placeholder="نام و نام خانوادگی" />
        <UInput v-model="userInfo.nationalCode" color="neutral" variant="subtle" size="xl" placeholder="کدملی" />
        <UInput color="neutral" variant="subtle" size="xl" placeholder="شماره موبایل" readonly disabled />
        <UInput v-model="userInfo.email" color="neutral" variant="subtle" size="xl" placeholder="ایمیل" />
        <UInputDate v-model="userInfo.birthDate" :is-date-unavailable="isDateUnavailable" color="neutral" variant="subtle" size="xl" />
        <UInput v-model="userInfo.postalCode" color="neutral" variant="subtle" size="xl" placeholder="کدپستی" />
      </div>
    </template>
    <template #footer>
      <div class="flex gap-2">
        <UButton color="neutral" size="xl" variant="solid" label="بررسی اطلاعات" @click="checkData" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date'

const emit = defineEmits<{ close: [boolean] }>()

const currentYear = new Date()

// convert persian shamsi date digit to En shamsi date digit
const toEnglishDigits = (str: string) => {

  const map: Record<string, string> = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
  }

  return str.split('').map((ch) => map[ch] ?? ch).join('')
}

const shamsi_year: any = Intl.DateTimeFormat('fa-IR', {year:'numeric'}).format(currentYear)


const isDateUnavailable = (date: DateValue) => {  
  return date.year <= 1300 || date.year > parseInt(toEnglishDigits(shamsi_year),10)
}


const userInfo = reactive({
  first_name: 'mehran',
  nationalCode: null,
  email: 'mail@gmail.com',
  birthDate: null,
  postalCode: null,
  picture: null
})

const checkData = async () => {
const userFormData = new FormData()
userFormData.append('user', JSON.stringify(userInfo))
if (userInfo.picture){
  userFormData.append('picture', userInfo.picture)
}  
  try {
    const res = await $fetch('/api/user-information', {
      method:'POST',
      body: userFormData,
    })

    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }
  
}
</script>