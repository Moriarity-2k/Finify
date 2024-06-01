import React from "react";
import VendorDetails from "./VendorDetails";
import VendorAttachments from "./VendorAttachments";

/**
 *
 * @returns This component holds the whole container of both the attachments and different vendow forms
 */
export default function VendorForm() {
	return (
		// Container div for the VendorForm component
		<div className="px-8 h-full pt-2 overflow-hidden pb-4 flex gap-2">
			{/* Render the VendorDetails component */}
			<VendorDetails />
			{/* Render the VendorAttachments component */}
			<VendorAttachments />
		</div>
	);
}
