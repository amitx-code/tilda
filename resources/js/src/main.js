import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import "jquery";
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.axios = require('axios');
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
import 'sweetalert2/dist/sweetalert2.min.css';
window.moment = require('moment');
import Datatable from 'vue2-datatable-component'
import Notifications from 'vue-notification'
Vue.use(Notifications)
Vue.use(Datatable);
import VueSimpleAlert from "vue-simple-alert";
import store from './store';
Vue.use(VueSimpleAlert);

Vue.config.performance = true
Vue.use(CoreuiVue)
import Tree from './comps/libs/tree.js'
import Buefy from 'buefy'
Vue.use(Buefy)
import AddElement from './comps/elements/AddElement'
import RawHTML from './comps/elements/RawHTML'
import TextBlock from './comps/elements/TextBlock'
import Heading from './comps/elements/Heading'
import Image from './comps/elements/Image'
import Button from './comps/elements/Button'
import { codemirror } from 'vue-codemirror-lite'
import Blocks from './comps/libs/blocks.js'


Vue.component('editor-tinymce', TinymceVue.default)
Vue.component('codemirror', codemirror)

require('codemirror/mode/htmlmixed/htmlmixed')
require('codemirror/mode/css/css')


Vue.prototype.$tree = Tree
Vue.prototype.$blocks = Blocks

// --------------
// basic elements
// --------------
Vue.prototype.$elements = {
    getByName: (name) => {
        var self = Vue.prototype.$elements
        return self[name]
    },

    getDefaults: (name) => {
        var self = Vue.prototype.$elements
        var element = self[name]
        if (!element) {
            return null
        }

        var res = {}
        element.element.properties.forEach(prop => {
            if (prop.default) {
                res[prop.name] = prop.default
            }
        })
        return res
    }
}

Vue.prototype.$registerElement = component => {
    Vue.prototype.$elements[component.name] = component
    Vue.component(component.name, component)
}

Vue.prototype.$registerElement(AddElement)
Vue.prototype.$registerElement(RawHTML)
Vue.prototype.$registerElement(TextBlock)
Vue.prototype.$registerElement(Heading)
Vue.prototype.$registerElement(Image)
Vue.prototype.$registerElement(Button)

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found');
}

new Vue({
  el: '#app',

  router,
  icons,
  store,
  template: '<App/>',
  components: {
    App,
  },
})
