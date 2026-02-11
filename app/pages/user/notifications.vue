<template>
    <div>
        <div class="w-full border border-slate-300/70 dark:border-slate-800 rounded-lg p-6 mt-2">
           <div class="flex justify-between">
             <p class="ticket self-baseline-safe text-neutral-900 dark:text-neutral-100 relative mb-16">پیام‌ها</p>
             <UButton variant="link" color="neutral" class="self-start hover:cursor-pointer" trailing-icon="sidekickicons:check-double-solid">خواندن همه</UButton>
           </div>
         <div class="flex flex-col gap-y-3">
           <UAlert color="success" variant="outline" title="پرداخت موفق" description="پرداخت محصول موس گیمینگ 728 با موفقیت انجام شد" icon="icon-park-twotone:success"/>
           <UAlert color="error" variant="outline" title="پرداخت ناموفق" description="پرداخت محصول موس گیمینگ 728 با خطا مواجه شد" icon="icon-park-twotone:error"/>
           <UAlert color="warning" variant="outline" title="رمز عبور" description="لطفا نسبت به تغییر رمز عبور خود اقدام نمایید" icon="fluent:error-circle-24-filled"/>
           <UAlert color="neutral" variant="outline" title="وضعیت نامشخص" description="پرداخت شما هنوز تایید نشده" icon="icon-park-twotone:success"/>
         </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p.ticket::before {
  content: '';
  position: absolute;
  border-bottom: 2px solid red;
  bottom: -7px;
  right: 0;
  width: 2rem;
}</style>