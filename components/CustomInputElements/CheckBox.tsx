import React from "react";

/**
 *
 * @param name : The checkbox label
 * @returns custom reusable checkbox
 */
export default function CheckBox({ name }: { name: string }) {
	return (
		<div className="flex flex-col space-y-2">
			<span className="inline-flex items-center cursor-pointer text-sm">
				{name}
			</span>

			<label className="inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					value=""
					className="sr-only peer"
					checked={true}
				/>
				<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0A920A]"></div>
			</label>
		</div>
	);
}
