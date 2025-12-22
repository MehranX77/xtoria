<template>
    <div>
        <UContainer class="md:mt-44 mt-10">
            <UCard variant="outline">
                <template #header>
                    <h3 class="text-base dark:text-slate-50 text-black border-b border-rose-500 w-fit pb-2">تماس با
                        دیجی استور</h3>
                    <div class="flex justify-between mt-6">
                        <p class="text-muted self-center">لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا<span
                                class="text-blue-400 mx-1">پرسش‌‌های متداول</span> را مشاهده کنید.</p>
                        <UButton to="/" size="lg" variant="outline" color="secondary">پرسش های متدوال</UButton>
                    </div>
                </template>
                <template #default>
                    <UPageGrid>
                        <UFormField label="آدرس ایمیل" required>
                            <UInput class="w-full" size="xl" placeholder="user@gmail.com ..." :ui="{ base: 'py-4' }"
                                color="secondary" />
                        </UFormField>
                        <UFormField label="نام و نام خانوادگی" required>
                            <UInput class="w-full" size="xl" placeholder="سجاد امامی ..." :ui="{ base: 'py-4' }"
                                color="secondary" />
                        </UFormField>
                        <UFormField label="شماره تماس" required>
                            <UInput class="w-full" size="xl" placeholder="09181234567" :ui="{ base: 'py-4' }"
                                color="secondary" />
                        </UFormField>
                        <UFormField label="موضوع" required>
                            <USelect v-model="subject" :items="items" class="w-full" size="xl" :ui="{ base: 'py-4' }"
                                color="secondary" />
                        </UFormField>
                    </UPageGrid>
                    <UFormField label="متن پیام" required class="mt-5">
                        <UTextarea class="w-full" size="xl" :rows="11" color="secondary" />
                    </UFormField>
                    <UButton class="mt-5" size="xl" variant="subtle" color="secondary" trailing icon="solar:map-arrow-left-broken">ارسال پیام</UButton>
                </template>
            </UCard>
          <div class="grid lg:grid-cols-2 grid-cols-1 my-10 gap-x-10">
                 <ClientOnly>
                <div style="height:60vh; width:100%">
                    <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]" :use-global-leaflet="false">
                        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors" layer-type="base" name="OpenStreetMap" />
                    </LMap>
                </div>
            </ClientOnly>
            <div class="flex flex-col justify-center items-start lg:gap-y-10 gap-y-3">
                  <div class="flex gap-x-3">
                        <div class="bg-green-500/70 flex justify-center items-center rounded-full lg:w-25 lg:h-25 md:w-20 md:h-20 w-15 h-15 basis-3xs">
                            <UIcon class="text-5xl" name="solar:phone-calling-outline"/>
                        </div>
                       <span class="text-base text-muted self-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum! Modi eos atque molestias, cumque ratione debitis sed, repellendus autem architecto ullam quos nesciunt mollitia? Iusto dolore repudiandae sint explicabo?</span>
                  </div>
                                    <div class="flex gap-x-3">
                        <div class="bg-green-500/70 flex justify-center items-center rounded-full lg:w-25 lg:h-25 md:w-20 md:h-20 w-15 h-15 basis-3xs">
                            <UIcon class="text-5xl" name="solar:map-point-wave-broken"/>
                        </div>
                       <span class="text-base text-muted self-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum! Modi eos atque molestias, cumque ratione debitis sed, repellendus autem architecto ullam quos nesciunt mollitia? Iusto dolore repudiandae sint explicabo?</span>
                  </div>
                                    <div class="flex gap-x-3">
                        <div class="bg-green-500/70 flex justify-center items-center rounded-full lg:w-25 lg:h-25 md:w-20 md:h-20 w-15 h-15 basis-3xs">
                            <UIcon class="text-5xl" name="solar:point-on-map-perspective-line-duotone"/>
                        </div>
                       <span class="text-base text-muted self-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dolorum! Modi eos atque molestias, cumque ratione debitis sed, repellendus autem architecto ullam quos nesciunt mollitia? Iusto dolore repudiandae sint explicabo?</span>
                  </div>
            </div>
          </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const subject = ref('Backlog')

const zoom = ref(12)
</script>