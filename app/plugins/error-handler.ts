export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error: any) => {
        showError({
            statusCode:500, // اگر ارور کد داشت که هیچ، وگرنه ۵۰۰
            statusMessage: 'An unexpected error occurred', // متن وضعیت
            message: error.message || 'یک خطای ناشناخته رخ داده است.', // پیامی که در صفحه ارور چاپ می‌شود
            fatal: true, // مهم: این باعث می‌شود کل برنامه متوقف و صفحه ارور رندر شود
        });
    }
})