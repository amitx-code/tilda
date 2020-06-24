import Vue from 'vue'
import Vuex from 'vuex'

import pages from './modules/pages'
import tree from './modules/tree'

Vue.use(Vuex);
export default new Vuex.Store({

    modules: {
        pages,
	    tree

    }
})
