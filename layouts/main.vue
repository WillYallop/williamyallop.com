<template>
<div class="page">
    <SideNav/>
    <main class="pageMain">
        <Nuxt/>
    </main>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
    background-color: $siteBg;
    min-height: 100%;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.pageMain {
    padding: 0 $siteDefaultPadding 0 400px + $siteDefaultPadding;
    @include forBreakpoint(map-get($media-queries, 'mobile-tablet')) {
        padding: $mobileHeaderDefaultSize $siteTabletPadding 0;
    }
        @include forBreakpoint(map-get($media-queries, 'mobile')) {
        padding: $mobileHeaderDefaultSize $siteMobilePadding 0;
    }
}
</style>