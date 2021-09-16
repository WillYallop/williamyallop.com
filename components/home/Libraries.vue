<template>
    <div class="librariesBodyCon">

        <div class="libraryRow">

            <div class="textareaCon">
                <div class="imgCon">
                    <img src="@/images/libraries/functionalities.png" alt="">
                </div>
                <h3 class="typograpy-h3">Functionalities.js</h3>
                <p class="body">Functionalities is a lightweight utility library that offers solutions for a handful of common website components that you find your self building time and time again.<br><br>It only offers functionality for these components, and serves the bare minimum amount of CSS for them to function. This ensures flexibility and allows functionalities to fit your design, not your design fit them.</p>
                <div class="buttonRow">
                    <button class="btnMain">documentation</button>
                    <button class="btnMain">blog post</button>
                </div>
            </div>
        </div>


        <div class="libraryRow">
            <div class="textareaCon">
                <div class="imgCon">

                </div>
                <h3 class="typograpy-h3">Functionalities.js</h3>
                <p class="body">Functionalities is a lightweight utility library that offers solutions for a handful of common website components that you find your self building time and time again.<br><br>It only offers functionality for these components, and serves the bare minimum amount of CSS for them to function. This ensures flexibility and allows functionalities to fit your design, not your design fit them.</p>
                <div class="buttonRow">
                    <button class="btnMain">documentation</button>
                    <button class="btnMain">blog post</button>
                </div>
            </div>
        </div>

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

<style lang="scss" scoped>
.librariesBodyCon {
    width: 100%;
    .libraryRow {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        position: relative;

        &:nth-child(even) {
            .textareaCon {
                padding: 40px 240px 40px 40px;
                margin-right: 200px;
                margin-left: 0;
                .imgCon {
                    left: auto;
                    right: 0;
                    margin-right: 0;
                    margin-left: -20px;
                } 
            }
        }

        .textareaCon {
            width: calc(100% - 200px);
            background-color: $contentBg;
            padding: 40px 40px 40px 240px;
            margin-left: 200px;
            border-radius: 20px;
            h3 {
                margin-bottom: 20px;
            }
            .buttonRow {
                margin-top: 40px;
                display: flex;
                button {
                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }
            .imgCon {
                position: absolute;
                left: 0;
                bottom: 20px;
                top: 20px;
                width: 420px;
                margin-right: -20px;
                background-color: black;
                border-radius: 20px;
                overflow: hidden;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: 0.3s transform ease-in-out;
                    &:hover {
                        transform: scale(110%);
                    }
                }
            } 
        }
    }
}


</style>