<template>
  <div>


    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard v-if="show">


            <CCardBody>
              <div class="modal-body">
                <div class="form-group row">
                  <label for="dataPayment" class="col-sm-2 col-form-label">Название сайта</label>
                  <div class="col-sm-4">
                    <input type="text"   class="form-control" v-model="data.name" >
                  </div>
                </div>
                <div class="form-group row">
                  <label for="dataPayment" class="col-sm-2 col-form-label">Описание</label>
                  <div class="col-sm-10">
                    <textarea type="text"   class="form-control" v-model="data.description" ></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="dataPayment" class="col-sm-2 col-form-label">Ключевые слова</label>
                  <div class="col-sm-10">
                    <textarea type="text"   class="form-control" v-model="data.keyword" ></textarea>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="save" @click="save">
                  Сохранить
                </button>

              </div>

            </CCardBody>

          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>
<script>

    import Vue from 'vue'
    import r from '../route';

    export default {


        props: ['row'], // from the parent FriendsTable (if exists)
        data () {

            return {

                data: {
                    name:'',
                    keyword:'',
                    description:'',


                },
                show: true,
                horizontal: { label:'col-3', input:'col-9' },
                options: ['Option 1', 'Option 2', 'Option 3'],
                formCollapsed: true        ,
                total: 0,

            }
        },
        computed: {


        },
        mounted(){
        this.getData();
        },

        methods: {
            getData(){
                axios.get(r("site.index"),{
                }).then((response)=>{
                    if(response.data.result){
                        this.data=response.data.data
                    }


                })
                    .catch(error => console.log(error.message));
            },
           save(){
               axios.post(r("site.update"),this.data).then((response)=>{
                   if(response.data.result){
                       this.$fire({

                           text: "Сохранено",
                           type: "success",

                       }).then(r => {
                           console.log(r.value);
                       });
                   }


               })
                   .catch(error => console.log(error.message));

           },
          close(){

          },


        }
    }
</script>
<style>
  .w-240 {
    width: 240px;
  }
  .page-item.active .page-link {

    background-color: #3490dc;
    border-color: #3490dc;
  }
</style>