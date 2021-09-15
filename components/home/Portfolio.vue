<template>
    <div class="gridCon">

        <div class="row">
            <div class="projectCon"
            :class="{ 'nonFocus': hoverState && activeClass != 0, 'highlight': activeClass === 0  }"
            @mouseover="projectOver(true, 0)" @mouseleave="projectOver(false, 0)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">Playlist Cover<br>Maker Tool</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>

            <div class="projectCon" 
            :class="{ 'nonFocus': hoverState && activeClass != 1, 'highlight': activeClass === 1  }"
            @mouseover="projectOver(true, 1)" @mouseleave="projectOver(false, 1)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">Playlist<br>Finder</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>
        </div>

        <div class="row alt">
            <div class="projectCon" 
            :class="{ 'nonFocus': hoverState && activeClass != 2, 'highlight': activeClass === 2  }"
            @mouseover="projectOver(true, 2)" @mouseleave="projectOver(false, 2)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">Melody<br>Melon</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>

            <div class="projectCon" 
            :class="{ 'nonFocus': hoverState && activeClass != 3, 'highlight': activeClass === 3  }"
            @mouseover="projectOver(true, 3)" @mouseleave="projectOver(false, 3)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">Playlist<br>Tools</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>
        </div>

        <div class="row">
            <div class="projectCon" 
            :class="{ 'nonFocus': hoverState && activeClass != 4, 'highlight': activeClass === 4  }"
            @mouseover="projectOver(true, 4)" @mouseleave="projectOver(false, 4)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">EXODIA<br>Fitness</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>

            <div class="projectCon" 
            :class="{ 'nonFocus': hoverState && activeClass != 5, 'highlight': activeClass === 5 }"
            @mouseover="projectOver(true, 5)" @mouseleave="projectOver(false, 5)">

                <div class="textareaCon">
                    <h3 class="typography-portfolio">Bassline<br>Promotions</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" src="@/images/projects/bassDesktop.png" alt="">
                    <img class="mobImg" src="@/images/projects/bassMobile.png" alt="">
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            hoverState: false,

            projects: [


            ]


        }
    },
    methods: {
        projectOver(state, index) {
            this.hoverState = state;
            if(this.hoverState) this.activeClass = index;
            else this.activeClass = false;
        }
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
        gap: 20px;
        &.alt {
            grid-template-columns: 4fr 6fr;
        }
        &:last-child {
            margin-bottom: 0;
        }
        @media only screen and (max-width: 1200px) {
            grid-template-columns: 1fr !important;
            margin-bottom: 20px;
        }

        &:nth-child(odd) {
            // Left
            .projectCon {
                &:nth-child(1) {
                    // Left
                    .imageCon {
                        .deskImg {
                            display: block;
                        } 
                        .mobImg {
                            display: none;
                        }
                    } 
                }
                &:nth-child(2) {
                    // Right
                    .imageCon {
                        .deskImg {
                            display: none;
                        } 
                        .mobImg {
                            display: block;
                        }
                    } 
                }
            }
        }
        &:nth-child(even) {
            // Right
            .projectCon {
                &:nth-child(1) {
                    // Left
                    .imageCon {
                        .deskImg {
                            display: none;
                        } 
                        .mobImg {
                            display: block;
                        }
                    } 
                }
                &:nth-child(2) {
                    // Right
                    .imageCon {
                        .deskImg {
                            display: block;
                        } 
                        .mobImg {
                            display: none;
                        }
                    } 
                }
            }
        }

        .projectCon {
            @include gradientAnimation;
            width: 100;
            height: 300px;
            border-radius: 20px;
            transition: 0.3s;
            position: relative;
            opacity: 1;
            transform: translateX(0);
            animation-fill-mode: forwards;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba($color: #000000, $alpha: 0);
                visibility: hidden;
                pointer-events: none;
                transition: 0.3s ease-in-out;
                border-radius: 20px;
                z-index: 10;
            }
            &.nonFocus {
                &::before {
                    visibility: visible;
                    background-color: rgba($color: #000000, $alpha: 0.5);
                }
            }
            &.highlight {
                transform: scale(103%);
            }
            // Inner

            .textareaCon {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                min-width: 50%;
                padding: 50px;
                border-radius: 20px 0px 0px 20px;
                background: rgb(0,0,0);
                background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                z-index: 1;
                .typography-portfolio {
                    @include h2;
                    font-size: 44px;
                    line-height: 110%;
                }
                .btnMain {
                    margin-top: 20px;
                }
                
            }
            .imageCon {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding: 40px;
                z-index: 0;
                overflow: hidden;
                .deskImg {
                    max-width: 80%;
                    display: none;
                    @media only screen and (max-width: 1200px) {
                        display: block !important;
                    }
                } 
                .mobImg {
                    transform: translateY(calc(25% - 20px));
                    height: calc(200%);
                    margin-right: -20px;
                    display: none;
                    @media only screen and (max-width: 1200px) {
                        display: none !important;
                    }
                }
            } 

            &:nth-child(1) {
                // Left
                animation: slideFromLeft 0.3s ease-in-out;
            }
            &:nth-child(2) {
                // Right
                animation: slideFromRight 0.3s ease-in-out;
            }
            // Animations
            @keyframes slideFromLeft {
                0% {
                    opacity: 0;
                    transform: translateX(-50%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideFromRight {
                0% {
                    opacity: 0;
                    transform: translateX(50%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }
 
    }

}
</style>