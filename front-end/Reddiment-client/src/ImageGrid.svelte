<!-- ImageGrid.svelte -->

<script>
	import { onMount } from 'svelte';
	import { Loading } from 'carbon-components-svelte';

	/**
	 * @type {never[]}
	 */
	export let images = [];
	/**
	 * @type {any[]}
	 */
	let base64 = [];
	/**
	 * @type {any[]}
	 */
	let columns = [];
	/**
	 * @type {null}
	 */
	let selectedImage = null;
	let isLoading = true;

	onMount(async () => {
		// Simulate loading for demonstration purposes
		await new Promise((resolve) => setTimeout(resolve, 2000));
		isLoading = false;
		base64 = images.data.map((/** @type {{ image_base64: any; }} */ image) => image.image_base64);
		columns = images.data.map((/** @type {{ chart_type: any; }} */ image) => image.chart_type);
	});

	/**
	 * @param {any} image
	 */
	function openModal(image) {
		console.log(image);
		selectedImage = image;
	}

	function closeModal() {
		selectedImage = null;
	}
</script>

<!-- Display loading message while waiting for images to be fetched -->
{#if isLoading}
	<div class="loading-container" style="display: flex;">
		<div class="loading-content">
			<p class="loading-text" style="margin-bottom: 150px; margin-left: 25px">Loading Images...</p>
			<Loading />
		</div>
	</div>
{:else}
	<!-- Once images are loaded, display the image grid -->
	<div class="image-grid">
		<div class="image-cards">
			{#each base64 as b64, i}
				<div class="image-card" on:click={() => openModal(b64)}>
					<div class="custom-header">{columns[i]}</div>
					<img src={`data:image/png;base64,${b64}`} alt="WordCloud" class="card-image" />
				</div>
			{/each}
		</div>
	</div>
{/if}

{#if selectedImage}
	<!-- Modal for displaying selected image -->
	<div class="modal" on:click={closeModal}>
		<div class="modal-content">
			<img src={`data:image/png;base64,${selectedImage}`} alt="ModalImage" />
		</div>
	</div>
{/if}

<style>
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}

	.loading-content {
		display: flex;
		align-items: center;
	}

	.loading-text {
		color: white;
		font-weight: bold;
		text-align: center;
		margin-right: 16px;
	}

	.image-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 16px;
		padding: 16px;
	}

	.image-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
	}

	.image-card {
		cursor: pointer;
		border: 1px solid #ffffff;
		padding: 8px;
		border-radius: 4px;
		transition: transform 0.2s ease-in-out;
	}

	.image-card:hover {
		transform: scale(1.1);
	}

	.custom-header {
		background-color: #47163f; /* Dark Purple */
		padding: 8px;
		text-align: center;
		border-radius: 6px;
	}

	.card-image {
		max-width: 100%;
		max-height: 100%;
		display: block;
		border-radius: 6px;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
	}

	.modal-content {
		max-width: 80%;
		max-height: 80%;
	}
</style>
