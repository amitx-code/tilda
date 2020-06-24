<template>
  <div class="btn-group btn-group-sm">
    <button class="btn btn-default" style="background-color: rgba(0, 0, 0, 0);" title="Редактировать"

            @click="openLink"  >
      <i class="fa fa-pencil fa-fw"></i>
    </button>
    <button class="btn btn-default" style="background-color: rgba(0, 0, 0, 0);" title="Удалить"
            @click="delItem">

      <i class="fa fa-window-close"></i>
    </button>

  </div>
</template>
<script>
    import axios from 'axios';

    import r from '../../route';
export default {
  props: ['row', 'nested'],
  mounted () {
    $(this.$el).find('button[title]').tooltip()
  },
  computed: {

  },
  data () {

      return {
              dat:{},
          }

  },
  methods: {

      delItem(){
          this.$fire({


              text: "Вы действительно хотите удалить?",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Удалить'

          }).then(r => {
              if(r.value){
                  this.deleteInServer(this.row.id);
              }


          });



      },
      deleteInServer(){
          this.dat.method='delete',
          this.dat.id=this.row.id,
          axios.post(r('pages.update'),this.dat
              ).then((response)=>{
              if (response.data.result==true){
                  this.$store.dispatch('getDataPages');

                  this.$fire({

                      text: "Удалено",
                      type: "success",

                  })


              }

          })

      },
      openLink(){
          var path="/pages/"+this.row.id;
          this.$router.push({ path: path })
      },
    toggleNestedComp (comp) {
      const { nested } = this
      if (nested.comp === comp) return nested.$toggle()
      nested.$toggle(comp, true)
    }
  }
}
</script>
<style>
.-nested-comp-open-btn {
  color: #fff !important;
  background-color: #337ab7 !important;
}
</style>
