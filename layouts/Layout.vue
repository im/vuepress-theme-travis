<template>
    <div class="theme-container">
        <Sidebar></Sidebar>

        <BlogMain></BlogMain>
    </div>
</template>

<script>
import Sidebar from '@theme/components/Sidebar.vue'
import BlogMain from '@theme/components/BlogMain.vue'
export default {
    components: { 
        Sidebar,
        BlogMain
    },

    data() {
        return {
        }
    },

    computed: {
    },

    mounted() {
    },

    methods: {
        
    }
}
</script>

<style lang="stylus">
</style>
