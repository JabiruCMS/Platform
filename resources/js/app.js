require('./bootstrap');

import '@babel/polyfill';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import VueEvents from 'vue-events';
import locale from 'element-ui/lib/locale/lang/en';
import VueSimplemde from 'vue-simplemde';
import PageRoutes from '../../Modules/Page/Assets/js/PageRoutes';
import MediaRoutes from '../../Modules/Media/Assets/js/MediaRoutes';
import UserRoutes from '../../Modules/User/Assets/js/UserRoutes';
import PortalVue from 'portal-vue';

Vue.use(ElementUI, { locale });
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(PortalVue);
Vue.use(require('vue-shortkey'), { prevent: ['input', 'textarea'] });

Vue.use(VueEvents);
Vue.use(VueSimplemde);
require('./mixins');

import Vuex from 'vuex';
import VuexStore from '../../Modules/Bocian/Resources/js/vuex/store';
Vue.use(Vuex);
const store = new Vuex.Store(VuexStore);

Vue.component('ckeditor', require('../../Modules/Core/Assets/js/components/CkEditor.vue').default);

Vue.component('ckeditor', require('../../Modules/Core/Assets/js/components/CkEditor.vue'));
Vue.component('DeleteButton', require('../../Modules/Core/Assets/js/components/DeleteComponent.vue'));
Vue.component('EditButton', require('../../Modules/Core/Assets/js/components/EditButtonComponent.vue'));
Vue.component('TagsInput', require('../../Modules/Tag/Assets/js/components/TagInput.vue'));
Vue.component('SingleMedia', require('../../Modules//Bocian/Resources/js/_Media/components/SingleMedia.vue'));
Vue.component('MediaManager', require('../../Modules//Bocian/Resources/js/_Media/components/MediaManager.vue'));
Vue.component('MultipleMedia', require('../../Modules/Bocian/Resources/js/_Media/components/MultipleMedia.vue'));

// register custom components to the app
Vue.component('catalog-product-colors', require('../../Modules/Catalog/Resources/js/components/Product/ProductColors.vue'));
Vue.component('catalog-product-gallery', require('../../Modules/Catalog/Resources/js/components/Product/ProductGallery.vue'));
Vue.component('catalog-product-items', require('../../Modules/Catalog/Resources/js/components/Product/ProductItems.vue'));
Vue.component('catalog-product-blocks', require('../../Modules/Catalog/Resources/js/components/Product/ProductBlocks.vue'));

Vue.component('bocian-universal-blocks', require('../../Modules/Bocian/Resources/js/components/Blocks/UniversalBlocks.vue'));
Vue.component('bocian-block-layout', require('../../Modules/Bocian/Resources/js/components/Blocks/Layout.vue'));

const { currentLocale, adminPrefix } = window.AsgardCMS;

function makeBaseUrl() {
    if (window.AsgardCMS.hideDefaultLocaleInURL === '1') {
        return adminPrefix;
    }
    return `${currentLocale}/${adminPrefix}`;
}

const router = new VueRouter({
        mode: 'history',
        base: makeBaseUrl(),
        routes: [
            ...PageRoutes,
            ...MediaRoutes,
            ...UserRoutes,
        ],
    }),
    messages = {
        [currentLocale]: window.AsgardCMS.translations,
    },
    i18n = new VueI18n({
        locale: currentLocale,
        messages,
    }),
    app = new Vue({
        el: '#app',
        router,
        i18n,
        store,
    });

window.axios.interceptors.response.use(null, (error) => {
    if (error.response === undefined) {
        console.log(error);
        return;
    }
    if (error.response.status === 403) {
        app.$notify.error({
            title: app.$t('core.unauthorized'),
            message: app.$t('core.unauthorized-access'),
        });
        window.location = route('dashboard.index');
    }
    if (error.response.status === 401) {
        app.$notify.error({
            title: app.$t('core.unauthenticated'),
            message: app.$t('core.unauthenticated-message'),
        });
        window.location = route('login');
    }
    return Promise.reject(error);
});
