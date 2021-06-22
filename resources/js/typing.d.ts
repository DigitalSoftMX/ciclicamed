declare module "jquery" {
    export = $;
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module 'swiper/vue';

declare interface JQuery {
    horizontalTimeline(options?: any, options1?: any, options2?: any, options3?: any): any;
}

declare interface JQuery {
    footable(options?: any): any;
}

declare module 'vue-material/dist/components';