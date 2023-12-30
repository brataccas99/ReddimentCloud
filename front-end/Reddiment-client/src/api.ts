const apiUrl = 'https://testreddycloud.azurewebsites.net';
export async function fetchComments(): Promise<Response> {
	try {
		const response = await fetch(apiUrl + '/api/dataset');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response;
	} catch (error) {
		if (error instanceof Error) console.error('Error fetching comments:', error.message);
		throw error;
	}
}

export async function fetchBarChart(): Promise<string[]> {
	try {
		const response = await fetch(apiUrl + '/api/barChart');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json(); // Assuming your API returns JSON

		if (data.success && data.data.length > 0) {
			// Get the base64 image data from the response
			const imageBase64 = data.data[0].image_base64;

			// Return the image base64 data as an array
			return [imageBase64];
		} else {
			console.error('Invalid data format received from the API');
			return [];
		}
	} catch (error) {
		console.error('Error fetching barChart data:', error);
		throw error;
	}
}
// Update fetchBarGraph function
export async function fetchBarGraph(): Promise<string[]> {
	try {
		const response = await fetch(apiUrl + '/api/barGraph');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json(); // Assuming your API returns JSON

		if (data.success && data.data.length > 0) {
			// Get the base64 image data from the response
			const imageBase64 = data.data[0].image_base64;

			// Return the image base64 data as an array
			return [imageBase64];
		} else {
			console.error('Invalid data format received from the API');
			return [];
		}
	} catch (error) {
		console.error('Error fetching barGraph data:', error);
		throw error;
	}
}

// Update fetchHistogram function
export async function fetchHistogram(): Promise<string[]> {
	try {
		const response = await fetch(apiUrl + '/api/histogram');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json(); // Assuming your API returns JSON

		if (data.success && data.data.length > 0) {
			// Get the base64 image data from the response
			const imageBase64 = data.data[0].image_base64;

			// Return the image base64 data as an array
			return [imageBase64];
		} else {
			console.error('Invalid data format received from the API');
			return [];
		}
	} catch (error) {
		console.error('Error fetching histogram data:', error);
		throw error;
	}
}

// Update fetchScatter function
export async function fetchScatter(): Promise<string[]> {
	try {
		const response = await fetch(apiUrl + '/api/scatter');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json(); // Assuming your API returns JSON

		if (data.success && data.data.length > 0) {
			// Get the base64 image data from the response
			const imageBase64 = data.data[0].image_base64;

			// Return the image base64 data as an array
			return [imageBase64];
		} else {
			console.error('Invalid data format received from the API');
			return [];
		}
	} catch (error) {
		console.error('Error fetching scatter data:', error);
		throw error;
	}
}

// Update fetchWordCloud function
export async function fetchWordCloud(): Promise<string[]> {
	try {
		const response = await fetch(apiUrl + '/api/wordcloud');
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		if (data.success && data.data.length > 0) {
			// Extract all base64 image data from the response
			const imageBase64Array = data;
			// Return the image base64 data as an array
			return imageBase64Array;
		} else {
			console.error('Invalid data format received from the API');
			return [];
		}
	} catch (error) {
		console.error('Error fetching wordcloud data:', error);
		throw error;
	}
}
