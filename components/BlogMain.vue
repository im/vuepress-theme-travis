<template>
    <main class="layout-main">
        <div class="layout-inner blog-layout">
            <form action="/search" method="get" class="search">
                <input type="search" name="q" placeholder="Search" autocomplete="off" required="true">
            </form>
            <nav class="blog-nav">
                <div class="nav-item">
                    <a href="/" class="is-active">Latest</a>
                </div>
                <div class="nav-item">
                    <a href="#">Latest</a>
                </div>
                <div class="nav-item">
                    <a href="#">Latest</a>
                </div>
            </nav>
        </div>
    </main>
</template>

<script>
export default {
    name: 'BlogMain',

    components: {}
}
</script>

<style lang="stylus">
.layout-main
    min-height: 110vh;
    // background-image: url(../images/bg-pattern.svg);
    background-position: center 80px;
    background-repeat: no-repeat;
.blog-layout
    display: grid;
    grid-gap: 35px;
    grid-template-columns: 1fr 200px;
    grid-template-rows: 70px 1fr 75px;
    .search
        grid-column-start: 2;
        grid-row-start: 1;
        margin: 55px 0;
    .blog-nav
        grid-column-start: 1;
        grid-row-start: 1;
        margin-top: 25px;
        display flex
        border-bottom: 2px solid #f1f1f1;
        .nav-item
            margin-right 25px
            display flex
            a
                position relative
                top 2px
                display flex
                align-items center
                border-bottom: 2px solid #f1f1f1;
                font-size 16px
                &:hover, &.is-active
                    border-color: #3eaaaf;
                    color: #3eaaaf;
input[type=search]
    display: inline-block;
    width: 100%;
    padding: 0.1em 0.5em 0.1em;
    border-radius: 2px;
    border: 2px solid #f1f1f1;
    font: inherit;
    background-color: white;
    background-size: 15px;
    background-position: 96% center;
    background-repeat: no-repeat;
    background-image: url(../images/icon-search.svg);
</style>
