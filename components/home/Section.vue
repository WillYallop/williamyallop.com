<template>
    <section class="sectionCon">
        <header class="sectionHeader">
            <h2 class="typograpy-h2">{{ title }}</h2>
            <p class="body">{{ body }}</p>
        </header>
        <div class="sectionBody">
            <slot/>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: String,
        body: String
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.sectionCon {
    width: 100%;
    position: relative;
    padding-top: $siteDefaultPadding;
    .sectionHeader {
        width: 100%;
        margin-bottom: 20px;
    }
    .sectionBody {
        width: 100%;
    }
}
</style>