<!-- WordCloud.svelte -->
<script>
	import { onMount } from 'svelte';
	import { fetchWordCloud } from '../../api';
	import ImageGrid from '../../ImageGrid.svelte';

	/**
	 * @type {any[]}
	 */
	let images = [];

	onMount(async () => {
		try {
			const response = await fetchWordCloud();
			images = response;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<div>
	<ImageGrid {images} />
</div>
