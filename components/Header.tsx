import Image from "next/image";
import React from "react";


/**
 * 
 * @returns a header component for the main Files route
 */
export default function Header() {
	return (
		<>
			<div className="px-8 pb-2 pt-4 flex items-center justify-between">
				<div className="flex items-center gap-6">
					<Image
						src={"clarity_arrow-line.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
					<div className="text-xl ml-4 font-bold">
						OlaMoney Technologies India PvtLtd
					</div>
					<button className="text- rounded-full border-2 border-[#5E4CFE] text-[#5E4CFE] px-3 py-1 font-semibold">
						Awaited Bussiness Approval
					</button>

					<Image
						src={"I_Icon.svg"}
						alt="arrow"
						width={25}
						height={25}
						className=""
					/>
					<Image
						src={"gg_loadbar-doc.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
					<Image
						src={"Timereload.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
					<Image
						src={"basil_comment-outline.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
					<Image
						src={"material-symbols-light_download.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
					<Image
						src={"solar_forward-linear.svg"}
						alt="arrow"
						width={25}
						height={25}
					/>
				</div>

				<div className="flex items-center gap-4">
					<button className="text-[#0A920A] bg-[#e1fce1] gap-4 px-3 py-1.5 rounded-md flex items-center">
						<Image
							src={
								"material-symbols_sync-saved-locally-outline-rounded.svg"
							}
							alt="arrow"
							width={25}
							height={25}
						/>
						<span className="font-semibold">Save Draft</span>
					</button>

					<button className="text-[#fff] bg-[#017194] flex items-center px-3 py-1.5 rounded-md gap-4">
						<span className="font-semibold">Submit</span>
						<Image
							className="font-thin"
							src={"down_arrow_heavy.svg"}
							alt="arrow"
							width={10}
							height={10}
						/>
					</button>
				</div>
			</div>
		</>
	);
}
