import Header from "@/components/Header";
import LeftSideBar from "@/components/LeftSideBar";
import MainNavBar from "@/components/MainNavBar";
import VendorForm from "@/components/VendorForm";
import Image from "next/image";
import React from "react";

type Props = {};

// The default route
export default function Page({}: Props) {
	return (
		<div className="flex bg-white h-screen overflow-y-hidden">
			{/* Left side bar with Main Logo of h-screen height */}
			<LeftSideBar />
			<div className="w-full flex flex-col">
				{/* Main content of the vendor files route */}
				<MainNavBar />
				<Header />
				<VendorForm />
			</div>
		</div>
	);
}
