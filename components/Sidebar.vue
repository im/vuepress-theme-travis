<template>
    <header class="sidebar">
        <div class="layout-inner">
            <h1 class="logo">
                <a href="#">Travis CI</a>
            </h1>
            <nav class="nav">
                <div class="nav-item">
                    <a href="#">Blog</a>
                </div>
                <div class="nav-item">
                    <a href="#">About Us</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Sidebar',

    components: {}
}
</script>

<style lang="stylus">
.sidebar
    background-color: #f1f1f1;
    padding 10px 0px
    .layout-inner
        display flex
        align-items: center;
.logo
    padding: 0 1em;
    padding-left 0
    a
        display block
        font-size 28px
        color #9d9d9d
.nav
    display: flex;
    align-items: center;
    .nav-item
        padding: 0 1em;
        a
            display block
            font-size 18px
            white-space: nowrap;
            display: inline-block;
            &:hover
                text-decoration: underline;
</style>
