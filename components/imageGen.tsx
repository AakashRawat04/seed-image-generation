"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { generateImage } from "../app/actions/generateImage";

export default function ImageGenerator() {
	const [hash, setHash] = useState("");
	const [image, setImage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const base64Image = await generateImage(hash);
			setImage(base64Image);
		} catch (error) {
			console.error("Error generating image:", error);
		}
	};

	const downloadImage = () => {
		if (image) {
			const link = document.createElement("a");
			link.href = image;
			link.download = `generated-image-${hash}.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#1a1a0e] text-[#b3b3a6]">
			<div className="w-full max-w-md p-8 space-y-6 rounded-lg border border-[#b3b3a6]">
				<div className="space-y-4 p-6 rounded-lg border border-[#b3b3a6]">
					<p className="text-center">Generate image based on user hash</p>
					{image && (
						<div className="flex flex-col items-center space-y-4">
							<Image
								width={500}
								height={500}
								src={image}
								alt="Generated image"
								className="max-w-full h-auto"
							/>
							<Button
								onClick={downloadImage}
								variant="outline"
								className="text-[#b3b3a6] border-[#b3b3a6] hover:bg-[#b3b3a6] hover:text-[#1a1a0e]"
							>
								download
							</Button>
						</div>
					)}
				</div>
				<form onSubmit={handleSubmit} className="flex space-x-2">
					<Input
						type="text"
						placeholder="enter the hash:"
						value={hash}
						onChange={(e) => setHash(e.target.value)}
						className="flex-grow bg-transparent text-[#b3b3a6] border-[#b3b3a6] focus:border-[#b3b3a6] focus:ring-0"
					/>
					<Button
						type="submit"
						variant="outline"
						className="text-[#b3b3a6] border-[#b3b3a6] hover:bg-[#b3b3a6] hover:text-[#1a1a0e]"
					>
						submit
					</Button>
				</form>
			</div>
		</div>
	);
}
