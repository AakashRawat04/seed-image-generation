"use server";

import { createCanvas } from "canvas";
import seedrandom from "seedrandom";

export async function generateImage(seed: string) {
	// Initialize the random number generator with the seed
	const rng = seedrandom(seed);

	// Set canvas dimensions
	const width = 500;
	const height = 500;
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext("2d");

	// Fill the background with a random color
	ctx.fillStyle = `rgb(${Math.floor(rng() * 256)}, ${Math.floor(
		rng() * 256
	)}, ${Math.floor(rng() * 256)})`;
	ctx.fillRect(0, 0, width, height);

	// Draw random circles
	for (let i = 0; i < 10; i++) {
		const x = Math.floor(rng() * width);
		const y = Math.floor(rng() * height);
		const radius = Math.floor(rng() * 50) + 10; // radius between 10 and 60

		ctx.fillStyle = `rgb(${Math.floor(rng() * 256)}, ${Math.floor(
			rng() * 256
		)}, ${Math.floor(rng() * 256)})`;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		ctx.fill();
	}

	// Convert the canvas to a base64-encoded PNG
	const buffer = canvas.toBuffer("image/png");

	// Append hidden data
	const hiddenData = "TEST DATA 123";
	const finalBuffer = Buffer.concat([buffer, Buffer.from(hiddenData)]);

	const finalBase64 = finalBuffer.toString("base64");

	return "data:image/png;base64," + finalBase64;
}
