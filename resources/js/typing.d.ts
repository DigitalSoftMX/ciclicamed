declare module "jquery" {
    export = $;
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'swiper/vue';


declare interface JQuery {
    horizontalTimeline(): any;
}