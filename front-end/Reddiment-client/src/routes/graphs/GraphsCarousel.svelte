<script>
	import { onMount } from 'svelte';
	import Carousel from 'svelte-carousel';
	import { fetchBarChart, fetchBarGraph, fetchHistogram, fetchScatter } from '../../api';
	import { ProgressBar } from 'carbon-components-svelte';

	/**
	 * @type {string | any[]}
	 */
	let images = [];
	let isLoading = false; // Initialize as false

	onMount(() => {
		isLoading = true; // Set isLoading to true before fetching data
		setTimeout(() => {
			fetchData();
		}, 1000);
	});

	async function fetchData() {
		try {
			const barChartData = await fetchBarChart();
			const barGraphData = await fetchBarGraph();
			const histogramData = await fetchHistogram();
			const scatterData = await fetchScatter();

			// Combine images from all APIs into a single array
			images = [...barChartData, ...barGraphData, ...histogramData, ...scatterData];
		} catch (error) {
			if (error instanceof Error) console.error('Error fetching graphs:', error.message);
		} finally {
			isLoading = false; // Set isLoading to false after data fetching is completed
		}
	}
</script>

{#if isLoading}
	<p style="color: white; font-weight: bold; text-align: center;">Loading Graphs...</p>
	<ProgressBar size="sm" />
{/if}
{#if images.length > 0}
	<Carousel
		autoplay
		autoplayDuration={5000}
		pauseOnFocus
		autoplayProgressVisible
		let:showPrevPage
		let:showNextPage
	>
		{#each images as image}
			<img src={`data:image/png;base64,${image}`} alt="Graphs" />
		{/each}
	</Carousel>
{/if}
