<template>
  <main>
    <headerBar/>
    <rating/>
    <task/>
    <categories/>
    <rewards/>
    <footerBar/>
    <!-- <Nuxt /> -->
  </main>
</template>

<script>
  import headerBar from '@/components/headerBar'
  import rating from '@/components/rating'
  import task from '@/components/task'
  import categories from '@/components/categories'
  import rewards from '@/components/rewards'
  import footerBar from '@/components/footerBar'

  export default {
    components: {
      headerBar,
      rating,
      task,
      categories,
      rewards,
      footerBar
    }
  }
</script>

<style>

</style>
