<template>
  <div>


    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard v-if="show">
            <CCardHeader  @click="formCollapsed=!formCollapsed">
              <CIcon  name="cil-calculator"/>Список страниц
              <div class="card-header-actions">


                <CLink href="#" class="card-header-action" v-on:click="show = !show">

                </CLink>
              </div>
            </CCardHeader>

            <CCardBody>
              <div class="row" style="margin-top: 10px">
                <div class="col-sm-12">
                  <button type="button" class="btn btn-info pull-right"     @click.prevent="$router.push( `new` )">
                    Новая страница
                  </button>
                </div>

              </div>

              {{dataNew}}
              <datatable v-bind="$data" />



            </CCardBody>

          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>
<script>


    import Opt from'./comps/Operation.vue';
    import Vue from 'vue'
    import r from '../route';

    export default {
        components:{
            Opt
        },

        props: ['row'], // from the parent FriendsTable (if exists)
        data () {
            const amINestedComp = !!this.row;
            return {
                supportBackup: true,
                supportNested: true,
                tblClass: 'table-bordered',
                tblStyle: 'color: #666',
                pageSizeOptions: [5, 10, 15, 20],
                columns: (() => {
                    const cols = [

                        { title: 'ID', field: 'id',  tdStyle: { color: 'black' },  visible:true},
                        { title: 'Название', field: 'name',  tdStyle: { color: 'black' } },
                        { title: 'Operation',  tdComp: 'Opt' , tdStyle: { color: 'black' },visible:true}
                    ]
                    const groupsDef = {

                    }
                    return cols.map(col => {
                        Object.keys(groupsDef).forEach(groupName => {
                            if (groupsDef[groupName].includes(col.title)) {
                                col.group = groupName
                            }
                        })
                        return col
                    })
                })(),
                data: [],
                show: true,
                horizontal: { label:'col-3', input:'col-9' },
                options: ['Option 1', 'Option 2', 'Option 3'],
                formCollapsed: true        ,
                total: 0,
                query: amINestedComp ? { uid: this.row.friends } : {},
                xprops: {
                    eventbus: new Vue()
                }
            }
        },
        computed: {
            dataNew () {

                this.data=this.$store.state.pages.data;
                this.total=this.$store.state.pages.total;

                return
            },

        },
        watch: {
            query: {
                handler () {
                    this.handleQueryChange()
                },
                deep: true
            }
        },
        methods: {

            handleQueryChange(){

                this.$store.state.pages.query=this.query;
                this.$store.dispatch('getDataPages');

            },
            alertSelectedUids () {
                alert(this.selection.map(({ uid }) => uid))
            }
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