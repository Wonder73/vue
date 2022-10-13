<template>
	<div id="cell">
		<p>{{count}}</p>
	</div>
</template>

<script>
	import {mapState} from 'Vuex';
	export default {
		name:'cell',
		computed:{
			count(){
				return this.$store.getters.count;
			}
		}
	}
</script>

<style type="text/css">
	
</style>