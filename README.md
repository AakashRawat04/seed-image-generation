# Seed Image Generation 🎨

**Seed Image Generation** is a project that generates random images based on a provided seed. It uses a seed-based random number generator to ensure the same seed produces the same image every time, making it ideal for scenarios where deterministic image generation is required. Each generated image includes random backgrounds and circles, with hidden data embedded for additional functionality.

## 🌟 Features

- **Seed-Based Determinism**: Use any string as a seed to generate a unique, repeatable image.
- **Randomized Shapes and Colors**: The image features randomly placed circles and a randomized background color.
- **Hidden Data Embedding**: Each image contains hidden data appended to the image buffer for future retrieval or processing.

## 🚀 How It Works

The core image generation function is built with the following steps:

1. **Seed Initialization**: A seed-based random number generator (`seedrandom`) is used to ensure repeatability.
2. **Canvas Setup**: A 500x500 pixel canvas is created using the `canvas` library.
3. **Background Color**: A random RGB color fills the canvas as the background.
4. **Random Circles**: Ten circles are drawn with random positions, sizes, and colors.
5. **Data Encoding**: After generating the image, hidden data is appended to the image buffer.
6. **Image Export**: The final image is returned as a base64-encoded PNG, including the hidden data.

## 🖼️ Example Image

Each image generated is unique based on the seed provided. For instance, using the seed `"example123"`, the image might look something like this:

```js
generateImage("example123");
```

## 🛠️ Tech Stack

- **Next.js 14**: Utilizes the latest features of Next.js with the app router.
- **Node Canvas**: Creates the canvas and draws the elements.
- **Seedrandom**: Generates deterministic random numbers based on a seed.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AakashRawat04/seed-image-generation.git
   ```

2. Navigate to the project folder:

   ```bash
   cd seed-image-generation
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## 📖 Usage

To generate an image based on a seed, use the `generateImage` function like this:

```js
import { generateImage } from './path-to-your-action';

const seed = "my-custom-seed";
const imageData = await generateImage(seed);
console.log(imageData); // This will output the base64-encoded image
```

## 📝 Hidden Data

The generated image includes hidden data that can be useful for storing metadata or other information:

```js
const hiddenData = "TEST DATA 123"; // Can be replaced or extended as needed.
```

This data is appended to the end of the image buffer, allowing for custom information to be embedded in the image.
