import React, { useRef, useState } from "react";

export default function CustomInputAttachmentField({ name }: { name: string }) {
	const ref = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);
	return (
		<div className="">
			<label className="block mb-2 font-semibold text-sm">{name}</label>
			<div className="relative">
				<input
					ref={ref}
					type="file"
					accept=".pdf"
					className="hidden"
					onChange={(e) => {
						if (e.target.files && e.target.files[0]) {
							setFile(e.target.files[0]);
						}
					}}
				/>
				<button
					onClick={() => {
						if (ref) ref.current?.click();
					}}
					className="bg-[#01719426] px-2.5 py-1.5 text-sm lowercase w-[10rem]"
				>
					{file
						? file.name.length > 13
							? `${file.name.slice(0, 10)}...`
							: file.name
						: "choose a file"}
				</button>
			</div>
		</div>
	);
}
