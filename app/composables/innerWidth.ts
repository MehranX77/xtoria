export const computeInnerWidth = () => {
    const inner_width = ref<number>(720);
    if(import.meta.client) {
      window.addEventListener('resize', () => {
        inner_width.value = window.innerWidth
    })
}
return {inner_width}
}