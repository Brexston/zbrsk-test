<template>
  <main>
    <headerBar/>
    <rating/>
    <task/>
    <categories/>
    <prizec/>
    <footerBar/>
    <!-- <Nuxt /> -->
  </main>
</template>

<script>
  import headerBar from '@/components/headerBar'
  import rating from '@/components/rating'
  import task from '@/components/task'
  import categories from '@/components/categories'
  import prizec from '@/components/prizec'
  import footerBar from '@/components/footerBar'

  export default {
    components: {
      headerBar,
      rating,
      task,
      categories,
      prizec,
      footerBar
    }
  }
</script>

<style>

</style>
