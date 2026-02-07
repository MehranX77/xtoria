<template>
<UError :clear="{
    color:'error',
    size:'xl',
    icon:'i-lucide-arrow-left',
    class:'rounded-lg'
}"
:error="{
    statusCode: props.error.statusCode,
    message:props.error.message,
    fatal: true,
    statusMessage:props.error.statusMessage
}"
/>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{error: NuxtError}>() 
</script>