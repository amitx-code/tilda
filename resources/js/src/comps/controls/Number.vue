<template>
  <div class="form-field">
    <div class="label form-label">{{property.title}}</div>
    <div class="col-10">
      <b-input type="number" :placeholder="property.placeholder" :min="property.min" :max="property.max"
        v-model="target" @input="$emit('input', target)">
      </b-input>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'form-control-number',

  props: {
    value: null,
    property: Object
  },

  data () {
    return {
      target: Number(this.value)
    }
  }
}
</script>
