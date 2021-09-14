<template>
    <div class="sideBarNavCon" :class="{ 'active' : siteNav }">
        <!-- Mobile header -->
        <header id="mobileHeader" class="mobileHeader sticky-top">
            <p class="title">WILLIAM YALLOP</p>
            <button v-on:click="siteNav = !siteNav">+</button>
        </header>
        <!-- Navigation -->
        <div class="navInner">
            <!--  -->
            <div class="headerSect">
                <img class="siteImg" src="@/images/siteLogo.jpeg" alt="Man standing infront of marina in marseille.">
                <a class="externalLink" href="https://github.com/WillYallop"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="12"><path d="M5.8 8.3c0 .6-.3 1.7-1.1 1.7S3.5 9 3.5 8.3 4 6.6 4.7 6.6s1.1 1 1.1 1.7ZM15 6.7a6.8 6.8 0 0 1-.5 3C13.3 12 10 12 7.7 12c-2.4 0-5.8 0-7-2.3a6.7 6.7 0 0 1-.7-3A5.4 5.4 0 0 1 1.3 3a4.9 4.9 0 0 1-.2-1.5A3.1 3.1 0 0 1 1.5 0 4.9 4.9 0 0 1 5 1.1 12 12 0 0 1 7.7.8a10.8 10.8 0 0 1 2.5.3A4.8 4.8 0 0 1 13.6 0a3 3 0 0 1 .4 1.6 4.8 4.8 0 0 1-.2 1.5A5.4 5.4 0 0 1 15 6.7Zm-2 1.6a2.4 2.4 0 0 0-2.3-2.6 12.8 12.8 0 0 0-1.8.2 9.2 9.2 0 0 1-1.4 0 9.2 9.2 0 0 1-1.4 0 12.6 12.6 0 0 0-1.7-.2A2.4 2.4 0 0 0 2 8.3c0 2.7 2.5 3.1 4.7 3.1h1.5c2.2 0 4.7-.4 4.7-3.1Zm-2.6-1.8c-.8 0-1.1 1.1-1.1 1.8s.3 1.7 1.1 1.7 1.2-1 1.2-1.7-.4-1.8-1.2-1.8Z" fill="#fff"/></svg></a>
                <a class="externalLink" href="https://uk.linkedin.com/in/william-yallop-633429184"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M3.4 15H.2V5h3.2ZM1.8 3.6a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8ZM15 15h-3.1v-4.9c0-1.1 0-2.6-1.6-2.6S8.4 8.7 8.4 10v5h-3V5h2.9v1.4a3.3 3.3 0 0 1 3-1.7c3.1 0 3.7 2.1 3.7 4.8V15Z" fill="#fff"/></svg></a>
            </div>
            <!-- info -->
            <div class="infoSect">
                <p class="title">William Yallop</p>
                <a class="body" href="emai:hello@williamyallop.com">hello@williamyallop.com</a>
            </div>
            <!-- nav -->
            <nav class="navCon">
                <ul>
                    <li><nuxt-link to="/#portfolio">Portfolio</nuxt-link></li>
                    <li><nuxt-link to="/#libraries">Libraries</nuxt-link></li>
                    <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                    <li><nuxt-link to="/#contact">Contact</nuxt-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { StickyHeaders } from 'functionalities.js';

export default {
    data() {
        return {
            siteNav: false,

            scrollPos: 0,
            triggerDistance: 50
        }
    },
    mounted() {
        this.headerInstance = new StickyHeaders('mobileHeader', {
            triggerDistance: this.triggerDistance,
            onChange: (data) => {
                this.scrollPos = data.scrollPos;
            }
        });
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.sideBarNavCon {
    @include gradientAnimation;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    overflow-y: auto;
    width: 400px;
    transition: 0.3s;
    @include forBreakpoint(map-get($media-queries, 'mobile-tablet')) {
        width: 100%;
        left: -100%;
        top: $mobileHeaderDefaultSize;
        &.small-header {
            top: $mobileHeaderSmall;
        }
        &.active {
            left: 0;
            .mobileHeader {
                height: $mobileHeaderDefaultSize !important;
                transform: translateY(0) !important;
                transition-delay: 0s !important;
            }
            .navInner {
                width: calc(100% - 10px);
                height: calc(100% - 10px);
                margin-top: 10px;
                margin-left: 10px; 
            }
        }
    }
    // header
    .mobileHeader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: $mobileHeaderSmall;
        background-color: $navBg;
        display: none;
        transition-duration: 0.3s;
        justify-content: space-between;
        align-items: center;
        padding: 0 $siteTabletPadding;
        &.sticky-top {
            height: $mobileHeaderDefaultSize;
            transform: translateY(0);
        }
        &.sticky-up {
            transition-delay: 0.3s;
            transform: translateY(0);
        }
        &.sticky-down {
            transform: translateY(-100%);
        }
        @include forBreakpoint(map-get($media-queries, 'mobile-tablet')) {
            display: flex;
        }
        @include forBreakpoint(map-get($media-queries, 'mobile')) {
            padding: 0 $siteMobilePadding;
        }
    }
    // 
    .navInner {
        width: calc(100% - 5px);
        height: 100%;
        margin-left: 5px;
        background-color: $navBg;
        padding: 50px;
        transition: 0.3s;
        transition-delay: 0.3s;
        @include forBreakpoint(map-get($media-queries, 'mobile-tablet')) {
            width: 100%;
            margin-left:0;
        }
        // Header sect
        .headerSect {
            width: 100%;
            display: flex;
            align-items: center;
            .siteImg {
                border-radius: 50%;
                height: 60px;
                width: 60px;
                object-fit: cover;
                margin-right: 10px
            }
            .externalLink {
                @include gradientHover;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                position: relative;
                background-color: transparent;
                svg {
                    z-index: 1;
                    position: relative;
                }
                &::after {
                    content: '';
                    @include gradientAnimation;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 0;
                    border-radius: 50%;
                    opacity: 1;
                    transition-property: opacity;
                    transition-duration: 0.3s;
                }
                &:hover {
                    &::after {
                        opacity: 0;
                    }
                }
            }
        }
        // Info
        .infoSect {
            margin-top: 20px;
            .title {
                color: $titleColour;
                font-weight: bold;
                font-size: 18px;
                margin-block: 5px;
            } 
            .body {
                color: $bodyColour;
                text-decoration: none;
                transition-duration: 0.3s;
                &:hover {
                    color: $accent1;
                }
            }
        }
        .navCon {
            margin-top: 40px;
            ul {
                list-style-type: none;
                li {
                    width: 100%;
                    height: 40px;
                    a {
                        color: #fff;
                        font-size: 18px;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
</style>