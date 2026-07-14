<template>
 <UContainer class="md:mt-44">
   <NuxtImg src="banner.jpg" class="w-full rounded-lg"/>
   <h1 class="font-black lg:text-5xl md:text-2xl text-lg mt-6">تایتل مقاله</h1>
   <div class="flex mt-4 justify-between">
    <UUser name="mehran" size="2xl" :avatar="{src:'logo.png'}"/>
    <div class="flex gap-x-1">
        <UIcon name="mdi-light:clock" class="text-lg text-muted self-center"/>
        <span class="text-sm text-muted self-center">تاریخ انتشار</span>
    </div>
</div>
<p class="text-justify mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti, at enim dignissimos laborum assumenda adipisci! Labore suscipit, excepturi autem soluta maiores, recusandae, dolores aperiam optio voluptatem nulla nostrum dolorum?
Aut sed repudiandae quis, numquam sequi quidem, expedita maiores dolorum at, eius exercitationem odio eveniet veritatis quos dolore aspernatur et maxime? Quasi quos temporibus quae, atque neque molestiae quidem ducimus?
Quas, placeat repellendus? Ea, est quae! Perferendis deleniti mollitia, dignissimos ipsa nemo sapiente itaque nulla earum culpa hic accusantium quo? Dicta quibusdam placeat nemo quam animi esse eaque, sapiente nam.
Inventore adipisci, eaque reiciendis quam odit tenetur corrupti quos magnam, tempore facilis velit optio minus, mollitia magni eveniet harum sed debitis molestiae impedit ex modi natus voluptatum. Hic, ea assumenda!
Aut dolorum nesciunt nostrum enim quidem temporibus rerum vel voluptas. Voluptas rerum accusamus a similique corrupti. Quos, quasi nulla. Vel provident voluptatum deleniti, velit recusandae nemo perspiciatis aut reprehenderit hic!
Molestiae, delectus. Asperiores quas iste mollitia molestiae earum architecto, sequi esse voluptatem maiores dolorem nihil explicabo blanditiis accusantium ullam fugiat quod, qui rem inventore quibusdam ducimus reprehenderit natus possimus perspiciatis.
Cupiditate iusto animi, odio qui eaque fugit repellendus veniam. Perspiciatis ipsa temporibus nam vitae, laudantium libero officiis reiciendis eius. Officiis dolores ratione tempora beatae totam. Veritatis velit tempora doloremque enim.
Asperiores esse minus temporibus obcaecati quod quos, aspernatur iure ipsum reprehenderit vitae quasi accusantium perspiciatis labore corrupti, porro atque. Omnis, aut. Vitae impedit, ut eos delectus nobis ullam similique iusto.
Debitis reprehenderit aut, amet provident nisi cum corporis culpa. Id dolores expedita explicabo aperiam deserunt tenetur rem voluptatem eum animi at. Tenetur qui optio harum officiis sed. Excepturi, dolorem dicta.
Deserunt, eaque, labore inventore dolorem quod possimus voluptate magnam provident veniam at voluptates amet corrupti similique hic libero minus officiis dolores asperiores nostrum praesentium! Excepturi impedit vero sit nam officia.
Dolorem esse possimus eveniet cupiditate reprehenderit ipsum quisquam est perferendis laudantium tempore, libero, voluptatum eligendi dignissimos minima. Amet, eius rem et incidunt eum totam veritatis doloremque quisquam vitae iste officia.
Quia quod enim ipsa voluptatibus praesentium libero magni quo est asperiores provident porro nostrum adipisci perspiciatis perferendis, temporibus minus culpa id ipsum nemo debitis suscipit et tempora quis neque. Ipsum.
Dolorem tempora suscipit repudiandae ad sit debitis consequatur! Iure repudiandae sint eum praesentium enim debitis quae, odio nesciunt quasi perferendis esse! Sint aliquid consequuntur at nesciunt consectetur nostrum maxime mollitia.
Voluptas, fugiat? Iusto, itaque corporis. Suscipit est quae doloremque, quis laboriosam quod repellendus itaque sapiente totam perferendis dolor atque aut magni, laborum voluptatem. Magni provident molestias natus dolor corrupti in!
Eaque recusandae expedita reprehenderit omnis iusto minima, officia fuga porro praesentium deleniti, doloribus incidunt quo dolorum voluptates, laboriosam placeat! Omnis impedit fuga asperiores eligendi ullam. Consectetur ab veniam necessitatibus hic!
Facilis tempore autem maiores id reprehenderit facere iure ex! Et suscipit explicabo reprehenderit atque blanditiis totam dolorum quia animi voluptate, aperiam doloribus, minus corrupti, soluta in asperiores rerum unde ipsum.
Non similique quam qui modi perspiciatis doloribus beatae laudantium earum mollitia molestias ratione quod fugit, odio porro magnam eius deleniti nisi amet tempora aliquam illo dolorem! Facere praesentium ratione tempore.
Commodi architecto dignissimos ut quas at doloremque dolorem et, nobis unde optio eos assumenda necessitatibus. Excepturi neque perspiciatis maxime, a veritatis ipsum libero quas placeat dolorem in consequatur vitae cupiditate.
Perspiciatis hic ipsa voluptate corrupti atque ea, eaque sequi tenetur iure commodi, repellendus, quibusdam magnam sunt explicabo maiores doloremque autem. Ducimus ratione eos veniam inventore velit illo nemo, quisquam quibusdam.
Et quidem tempora possimus, repellat dolor repudiandae tenetur excepturi exercitationem aliquam, nostrum officiis! Error, provident itaque. Sint iusto, consectetur dolorem obcaecati, eos nemo velit, mollitia officia esse temporibus dolor odio.</p>
 </UContainer>
</template>

<script setup>
const route = useRoute()
const {public:{baseURL}} = useRuntimeConfig()
const {data:blog, error} = await useFetch(`${baseURL}/article/${route.params.slug}`)


console.log('blog post: ', blog.value);

console.log(route.params.slug);

</script>