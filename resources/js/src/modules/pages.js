import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import r from '../route';
Vue.use(Vuex);

export default {
    state: {
            data: [],
            total: 0,
            query: {},


    },
    actions:{
        getDataPages({commit}, requestObject) {
            return new Promise((resolve, reject) => {





                axios.get(r("pages.index"), {
                    params: {
                        method: 'getAll',
                        param:    this.state.pages.query
                    }
                }).then((response)=>{
                    if(response.data.result){
                        this.state.pages.data=response.data.data;
                        this.state.pages.total = response.data.total;
                    }

                })



            })
        }
    }

}



