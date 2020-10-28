<template>
  <div class="component">
    General information will go here
  </div>
</template>

<script>
// import DataService from "../services/DataService";

export default {
  name: 'info',
  data () {
    return {
        publicPath: process.env.BASE_URL
    }
  }  
}
</script>
