<template>
    <main class="layout-main">
        <div class="layout-inner blog-layout">
            <form action="/search" method="get" class="search" v-if="$themeConfig.search">
                <input type="search" name="q" placeholder="Search" autocomplete="off" required="true">
            </form>
            <nav class="blog-nav" v-if="$themeConfig.category">
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
            <div class="article-list">
                <dir class="article-item" v-for="(page, key) in pages" :key="key">
                    <div class="header">
                        <h2 class="title">
                            <a :href="page.path">{{page.title}}</a>
                        </h2>
                        <div class="meta">
                            <span>
                                <time :datetime="page.frontmatter.date">{{page.frontmatter.date}}</time>
                            </span>|
                            <a class="author" href="http://twitter.com/biancatwilk" title="Bianca Wilk on Twitter">
                                <img class="blog-avatar" src="https://avatars.io/twitter/biancatwilk" alt="Bianca Wilk avatar">
                                Bianca Wilk
                            </a>|
                            <a href="/" v-for="(category, key) in page.frontmatter.category" :key="key" title="Go to 'news' category" class="category-label">{{category}}</a>
                        </div>
                    </div>
                    <div class="main" v-html="page.excerpt" v-if="page.frontmatter.home"></div>
                    <Content class="theme-default-content" v-else />
                    <div class="mt36">
                        <a :href="page.path" v-if="$page.frontmatter.home" class="square-button" :title="page.title">Continue</a>
                    </div>
                </dir>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'BlogMain',

    computed: {
        isHome () {
            return this.$page.frontmatter.home;
        },
        pages () {
            return this.$site.pages.filter(item => {
                if (this.isHome) {
                    return !item.frontmatter.home
                } else {
                    return !item.frontmatter.home && item.key === this.$page.key;
                }
            });
        }
    },
    components: {},

    created () {
        console.log(this)
    }
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
.article-list
    grid-column-start: 1;
    grid-row-start: 2;
    padding-top: 20px;
    max-width: 640px;
    .article-item
        border-bottom: 2px solid #f1f1f1;
        padding 0
        padding-bottom 55px
        margin-bottom 35px
    .header
        .title
            font-size: 36px;
            line-height: 1.25;
            font-weight: 400;
            color: $baseTextColor;
        .meta
            color: #9d9d9d;
            font-size 18px
            a
                color: #9d9d9d;
            & > span:first-of-type
                margin-right: .5em;
            .author, .category-label
                margin-right: .5em;
                margin-left: .5em;
            .blog-avatar
                width: 36px;
                height: 36px;
                margin-right: .3em;
                vertical-align: middle;
                border-radius: 50%;
                border: 1px solid #f1f1f1;
            .category-label
                font-weight: 700;
                color: #3eaaaf;
    .mt36
        margin-top 36px
    .square-button
        line-height: 1.6;
        padding: .6em 1.2em;
        border-radius: 2px;
        background-color: #deecdc;
        color: #39aa56;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        transition: color 170ms ease,border-color 200ms ease,stroke 200ms ease;
</style>
