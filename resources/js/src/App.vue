<template>
  <div>
  <router-view></router-view>
  <notifications group="foo" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
