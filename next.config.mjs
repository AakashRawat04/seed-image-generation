/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	webpack: (config) => {
		config.externals.push({
			canvas: "commonjs canvas",
		});
		return config;
	},
};

export default nextConfig;
