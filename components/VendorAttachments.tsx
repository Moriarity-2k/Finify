"use client";

import Image from "next/image";
import React from "react";
import CustomInputAttachmentField from "./CustomInputElements/CustomInputAttachmentField";

// Default fileds for the Top part of attachments
const AttachmentsTopPart: string[] = [
	"GST Certificate",
	"PAN Number",
	"MSME Certificate",
];

// Default fileds for the Top part of attachments
const AttachmentsBottomPart = ["Vendor Contract", "Vendor Final Proposal"];

/**
 *
 * @returns a components that takes the different attachemtn inputs
 */
export default function VendorAttachments() {
	return (
		<div className="border-[#2E5A7526] border-[0.5px] w-1/5">
			<div className="flex px-4 py-2 items-center justify-between text-[#2E5A75] border-[#2E5A7526] border-b-[0.5px]">
				<div className="font-semibold">Attachments</div>
				<Image
					width={20}
					height={20}
					alt="doc"
					src={"attachment.svg"}
				/>
			</div>

			<div className="px-6 py-6 space-y-6 border-[#2E5A7526] border-b-[0.5px]">
				{/* REndering the attachments fields 1 */}
				{AttachmentsTopPart.map((name, i) => {
					return <CustomInputAttachmentField key={i} name={name} />;
				})}
			</div>

			<div className="px-6 py-6 space-y-6">
				{/* REndering the attachments fields 2 */}
				{AttachmentsBottomPart.map((name, i) => {
					return <CustomInputAttachmentField key={i} name={name} />;
				})}
			</div>
		</div>
	);
}
