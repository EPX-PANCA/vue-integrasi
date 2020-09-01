<template>
  <div class="index">
<NavBar/>
<router-view></router-view>
<Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'Index',
  components: {
    NavBar,
    Footer
  }
}
</script>
