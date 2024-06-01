import React, { useRef, useState } from "react";

/**
 *
 * @param name : The label for file input fields
 * @returns Custom input fields for accepting files of diff types ( as of now only pdf )
 */
export default function VendorInputFile({ name }: { name: string }) {
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
					className="bg-[#EBF5FF] px-1 py-1.5 text-sm font-bold lowercase w-[10rem] text-[#2E5A75] border-[#2E5A75] border-[1px]"
				>
					{file
						? file.name.length > 13
							? `${file.name.slice(0, 10)}...`
							: file.name
						: "Browse or drop Files"}
				</button>
			</div>
		</div>
	);
}
