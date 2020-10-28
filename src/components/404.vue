<template>
  <div class="component">
    404: Component not found
  </div>
</template>

<script>
// import DataService from "../services/DataService";

export default {
  name: '404',
  data () {
    return {
        publicPath: process.env.BASE_URL
    }
  }
}
</script>
