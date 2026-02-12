<template>
    <div class="w-full mt-2">
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
                <UTextarea variant="subtle" color="neutral" placeholder="متن تیکت" :rows="10" class="w-full" />
                <div class="flex justify-between mt-6">
                    <div class="flex flex-col gap-y-3">
                        <p class="dark:text-neutral-300 text-neutral-700 text-base">پیوست‌ها</p>
                        <span class="text-muted text-sm">اگر تصویر محصول خریداری شده دارید که برای حل مشکل به ما کمک
                            می‌کند. لطفا آن را پیوست کنید</span>
                        <UFileUpload accept="image/*" label="فایل پیوست خود را وارد کنید" description="(png, jpeg)"
                            icon="i-lucide-image" class="w-96" />
                    </div>
                    <UButton class="self-baseline" size="xl" color="neutral" variant="subtle">ارسال پاسخ</UButton>
                </div>
            </template>
            <template #footer>
                  <UChatMessages :user="{side:'left', variant:'outline'}" :assistant="{side:'right', avatar:{icon:'i-lucide-bot'}}" :auto-scroll="{color:'neutral', variant:'outline'}" :should-scroll-to-bottom="false"  :messages="messages"/>
            </template>
        </UCard>
    </div>
</template>

<script setup lang="ts">
const messages = ref([
  {
    id: '6045235a-a435-46b8-989d-2df38ca2eb47',
    role: 'user',
    parts: [
      {
        type: 'text',
        text: 'Hello, how are you?'
      }
    ]
  },
  {
    id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'I am doing well, thank you for asking! How can I assist you today?'
      }
    ]
  },
])
</script>