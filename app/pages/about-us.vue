<template>
    <div>
        <NuxtImg class="h-full w-full md:mt-32" src="banner.jpg" />
        <UContainer>
            <UPageSection class="border-0" title="فروشگاه اینترنتی دیجی استور"
                description="در دیجی استور، مجموعه‌ای بی‌نظیر از به‌روزترین کالاهای دیجیتال شامل گوشی‌های هوشمند، لپ‌تاپ‌های حرفه‌ای، گجت‌های پوشیدنی و لوازم جانبی از برترین برندهای جهان را گردآوری کرده‌ایم. هدف ما فراهم آوردن تجربه‌ای متفاوت از خرید آنلاین است که در آن تضمین اصالت کالا، قیمت رقابتی و ارسال سریع، اولویت اول ماست تا شما با خیالی آسوده، هوشمندانه انتخاب کنید و از دنیای تکنولوژی لذت ببرید."
                :features="features" />
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const features = ref([
    {
        title: 'Icons',
        description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
        icon: 'i-lucide-smile',
        to: '/docs/getting-started/integrations/icons'
    },
    {
        title: 'Icons',
        description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
        icon: 'i-lucide-smile',
        to: '/docs/getting-started/integrations/icons'
    },
    {
        title: 'Icons',
        description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
        icon: 'i-lucide-smile',
        to: '/docs/getting-started/integrations/icons'
    },
])
</script>