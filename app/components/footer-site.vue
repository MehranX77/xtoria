<template>
<UFooter bottom>
    <template #left>
        <p class="text-muted text-sm">Copyright © <NuxtTime :datetime="Date.now()" locale="fa-IR" year="numeric"/> </p>
    </template>
    <UNavigationMenu :items="items" variant="link"/>
    <template #right>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
</UFooter>
</template>


<script setup lang="ts">
import type { NavigationMenuItem  } from '@nuxt/ui';

const items : NavigationMenuItem[] = [
 {
    label: 'درباره‌ما',
    to: '/about-us',
    target: '_blank'
  },
  {
    label: 'ارتباط باما',
    to: '/contact-us',
    target: '_blank'
  },
  {
    label: 'صفحه اصلی',
    to: '/',
    target: '_blank'
  }
]
</script>