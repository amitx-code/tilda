<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="img/brand/logo2.jpg"
      width="90"
      height="80"
      alt="CoreUI Logo"
    />
    <CHeaderNav class="d-md-down-none mr-auto">


    </CHeaderNav>
    <CHeaderNav class="mr-4">


      <CHeaderNavItem class="d-md-down-none mx-2">

      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon />
          <span  @click="logout">Выход</span>


        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
    methods:{

        logout:function(){
            window.location.href = "/"
            
        },
    },

}
</script>
