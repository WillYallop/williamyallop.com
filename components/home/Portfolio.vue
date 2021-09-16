<template>
    <div class="gridCon">

        <div class="row" :key="row.id" v-for="row in projects">
            <div class="projectCon" :key="project.id" v-for="project in row.projects"
            :class="{ 'nonFocus': hoverState && activeClass != project.id, 'highlight': activeClass === project.id  }"
            @mouseover="projectOver(true, project.id)" @mouseleave="projectOver(false, project.id)">
                <div class="textareaCon">
                    <h3 class="typography-portfolio">{{ project.title[0] }}<br>{{ project.title[1] }}</h3>
                    <button class="btnMain">find out more</button>
                </div>  
                <div class="imageCon">
                    <img class="deskImg" :src="project.images.desktop" :alt="project.images.alt">
                    <img class="mobImg" :src="project.images.mobile" :alt="project.images.alt">
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
            activeClass: false,

            projects: [
                { id: 0, projects: [   
                    {
                        id: 0,
                        title: ['Playlist Cover', 'Maker Tool'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    },
                    {
                        id: 1,
                        title: ['Playlist', 'Finder'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    },
                ]},
                
                { id: 1, projects: [
                    {
                        id: 2,
                        title: ['Melody', 'Melon'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    },
                    {
                        id: 3,
                        title: ['Playlist', 'Tools'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    },
                ]},
                { id: 2, projects: [
                    {
                        id: 4,
                        title: ['EXODIA', 'Fitness'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    },
                    {
                        id: 5,
                        title: ['Bassline', 'Promotions'],
                        href: '',
                        images: {
                            alt: '',
                            desktop: require('@/images/projects/bassDesktop.png'),
                            mobile: require('@/images/projects/bassMobile.png')
                        }
                    }
                ]}
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
        &:last-child {
            margin-bottom: 0;
        }
        @media only screen and (max-width: 1400px) {
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
            grid-template-columns: 4fr 6fr;
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
            &:hover {
                .imageCon {
                    .deskImg {
                        transform: scale(1.1) rotate(2deg);
                    } 
                    .mobImg {
                        transform: translateY(calc(25% - 10px)) scale(1.1) rotate(2deg);
                    }
                }
            }
            // Inner
            .textareaCon {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                min-width: 50%;
                padding: 30px;
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
                .deskImg,
                .mobImg {
                    transition: 0.3s ease-in-out;
                }
                .deskImg {
                    max-width: 80%;
                    display: none;
                    @media only screen and (max-width: 1400px) {
                        display: block !important;
                    }
                } 
                .mobImg {
                    transform: translateY(calc(25% - 20px));
                    height: calc(200%);
                    margin-right: -20px;
                    display: none;
                    @media only screen and (max-width: 1400px) {
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