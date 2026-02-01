<template>
    <USlideover :close="{ onClick: () => emit('close', false) }" :overlay="true" class="w-[80%]">
        <template #body>
            <Placeholder class="h-full" />
        </template>

        <template #footer>
            <div class="flex gap-2">
                <UButton color="neutral" label="Dismiss" @click="emit('close', true)" />
            </div>
        </template>
    </USlideover>
</template>


<script setup lang="ts">
const emit = defineEmits<{ close: [boolean] }>()
</script>