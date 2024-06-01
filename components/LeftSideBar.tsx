import Image from "next/image";
import React from "react";

/**
 * LeftSideBar Component
 *
 * This component renders the left sidebar for the application along with Main Logo
 */
export default function LeftSideBar() {
	return (
		<div className="w-[80px] h-full bg-[#dcebfc86] pt-6 px-2 flex flex-col items-center gap-6">
			<div className="w-full flex justify-center">
				<Image
					src="/Logo.svg"
					alt="Logo"
					width={25}
					height={25}
					className="mx-auto"
				/>
			</div>
			<div className="w-full flex justify-center">
				<Image
					src="/ph_compass.svg"
					alt="Compass Icon"
					width={25}
					height={25}
					className="mx-auto"
				/>
			</div>
			<div
				className="bg-[#2E5A75] w-full flex justify-center py-2"
				style={{
					borderRadius: "25px 0 0 25px",
				}}
			>
				<Image
					src="/file.svg"
					alt="File Icon"
					width={25}
					height={25}
					className="mx-auto hover:cursor-pointer"
				/>
			</div>
			<div className="w-full flex justify-center">
				<Image
					src="/carbon_scis-transparent-supply.svg"
					alt="Supply Icon"
					width={25}
					height={25}
					className="mx-auto"
				/>
			</div>
			<div className="w-full flex justify-center">
				<Image
					src="/settingicon.svg"
					alt="Settings Icon"
					width={25}
					height={25}
					className="mx-auto"
				/>
			</div>
		</div>
	);
}
