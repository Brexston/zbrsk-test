<template>
	<article>
	  	<rating/>
	    <task/>
	    <categories/>
	    <rewards/>
	</article>
</template>

<script>
	import rating from '@/components/rating'
	import task from '@/components/task'
	import categories from '@/components/categories'
	import rewards from '@/components/rewards'
	
	export default {
		components: {
			rating,
			task,
			categories,
			rewards
		}
	}
</script>
