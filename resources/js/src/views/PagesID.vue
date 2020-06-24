<template>
  <div>

    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard v-if="show">
            <CCardHeader  @click="formCollapsed=!formCollapsed">
              <CIcon  name="cil-calculator"/>
                Страница:
              <div class="card-header-actions">

                <CLink
                  class="card-header-action btn-minimize"
                  @click="formCollapsed=!formCollapsed"
                >
                  <CIcon :name="`cil-chevron-${formCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink href="#" class="card-header-action" v-on:click="show = !show">

                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="formCollapsed">
              <CCardBody>
                <div class="">
                  <div class="modal-body">
                    <div class="form-group row">
                      <label for="dataPayment" class="col-sm-2 col-form-label">Название</label>
                      <div class="col-sm-4">
                        <input type="text"   class="form-control" v-model="data.name" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-12">

                    </div>
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="save" @click="save">
                      Сохранить
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">
                      Закрыть
                    </button>
                  </div>
                </div>

              </CCardBody>



            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
    <div style="background-color: white">
      <nav-bar></nav-bar>
      <editor></editor>

    </div>

  </div>
</template>

<script>
    import Editor from '../comps/Editor'
    import Navbar from '../comps/Navbar'

    import Vue from 'vue'

    import axios from 'axios';
    import Datepicker from 'vuejs-datepicker';
    import JQuery from 'jquery';
    let $ = JQuery;
    import Uploader from "vux-uploader-component";
    import r from '../route';
    import Multiselect from 'vue-multiselect';

    export default {
  name: 'Forms',
  data () {
      const amINestedComp = !!this.row
    return {

        data:{

            name:""
        },
        dataUsers:
            { name: '', id: 0 }
        ,
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        {
          value: ['some value', 'another value'],
          label: 'Selected option'
        }
      ],
      selectedOption: ['some value', 'another value'],

      formCollapsed: true        ,

      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  mounted(){

      //console.log(this.$route.params.id);

          if(this.$route.params.id=="new"){
              this.data={}

          }
          else{
              this.getData();
          }



  },


  methods: {

      getData(){

          axios.get(r("pages.index"),{
              params: {
                  method: 'getById',
                  id:    this.$route.params.id,
              }

          }).then((response)=>{
             if(response.data.result){
                 var strObj = response.data.data.data;

                var jsonStr = strObj.replace(/(\w+:)|(\w+ :)/g, function(s) {
                    return '"' + s.substring(0, s.length-1) + '":';
                });

                 var obj = JSON.parse(jsonStr);
             //    this.$store.state.tree.root=obj;
                 this.$store.dispatch('tree/load', {
                     name: 'tree-root',
                     data: jsonStr,
                 })
                 this.data=response.data.data;
             }

          })
              .catch(error => console.log(error.message));
      },
      save(){
          this.data.id=this.$route.params.id;
          this.data.method='save',
          this.data.data=this.$store.state.tree.root;

          axios.post(r("pages.update"),this.data).then((response)=>{
              if(response.data.result){
                  this.$fire({

                      text: "Сохранено",
                      type: "success",

                  }).then(r => {
                      this.$router.push({ path: 'all' })
                  });
              }


          })
              .catch(error => console.log(error.message));


      },
      close(){

          this.$router.push({ path: 'all' })
      },

    validator (val) {
      return val ? val.length >= 4 : false
    }
  },

        components: {
            Multiselect,
            editor: Editor,
            'nav-bar': Navbar,
            Datepicker,
            Uploader
        },


    }
</script>
<style lang="scss">
  $sizes: (0,5,10,15,20,25,30,35,40);
  $positions: ('top': 't','left': 'l','bottom': 'b','right': 'r');

  @each $size in $sizes {
  .b-m-#{$size} {
    margin: $size + px;
  }
  .b-p-#{$size} {
    padding: $size + px;
  }
  @each $position in $positions {
  .b-m-#{nth($position, 2)}-#{$size} {
                              margin-#{nth($position, 1)}: $size + px;
                            }
  .b-p-#{nth($position, 2)}-#{$size} {
                              padding-#{nth($position, 1)}: $size + px;
                            }
  }
  }

</style>

