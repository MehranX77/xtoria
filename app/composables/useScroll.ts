export const useScroll = () => {
  const res = ref<boolean>()
  if (import.meta.client) {
    window.addEventListener('scroll', () => {
      return window.scrollY > 0 ? res.value = true : res.value = false
    })
  }

  return {res}
} 