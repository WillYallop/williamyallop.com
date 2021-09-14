<template>
    <div class="gridCon">

        <div class="row">
            <div class="projectCon">

            </div>

            <div class="projectCon">

            </div>
        </div>

        <div class="row alt">
            <div class="projectCon">

            </div>

            <div class="projectCon">

            </div>
        </div>

        <div class="row">
            <div class="projectCon">

            </div>

            <div class="projectCon">

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {


            projects: [


            ]


        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.gridCon {
    width: 100%;
    .row {
        width: 100%;
        display: grid;
        grid-template-columns: 6fr 4fr;
        grid-template-rows: auto auto;
        gap: 0 20px;
        margin-bottom: 20px;
        &.alt {
            grid-template-columns: 4fr 6fr;
        }
        &:last-child {
            margin-bottom: 0;
        }
        .projectCon {
            width: 100;
            height: 100px;
            background-color: white;
        }
        @media only screen and (max-width: 1200px) {
            grid-template-columns: 1fr !important;
        }
    }

}
</style>