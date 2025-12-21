export default defineAppConfig({
    ui:{
    container:{
        base:'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    },
    blogPosts:{
        variants:{
            orientation:{
                horizontal:'xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'
            }
        }
    }
}
})