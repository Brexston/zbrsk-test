<template>
	<main>
		<headerBar/>
			<Nuxt /> 
		<footerBar/>
	</main>
</template>

<script>
	import headerBar from '@/components/headerBar'
	import footerBar from '@/components/footerBar'

	export default {
		components: {
			headerBar,
			footerBar
		}
	}
</script>

<style>

</style>
