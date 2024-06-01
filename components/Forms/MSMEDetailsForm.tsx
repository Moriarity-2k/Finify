"use client";

import React from "react";
import CheckBox from "../CustomInputElements/CheckBox";
import CustomInputAttachmentField from "../CustomInputElements/CustomInputAttachmentField";
import VendorInputFile from "../CustomInputElements/VendorInputFile";


/**
 * This component is part of the different vendor forms
 * @returns MSME Form
 */
export default function MSMEDetails() {
	return (
		<div className="px-6 py-4 border-b-2 border-b-[#EBF5FF]">
			<div className="my-2 border-l-[3px] font-extrabold px-2 border-[#ED0505]">
				MSME Details
			</div>

			<div className="px-2 py-3 space-y-4 w-full">
				<div className="flex justify-between w-full">
					<div className="flex flex-col gap-8 ">
						<CheckBox name="MSME Registered" />
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								LDC Start Date*
							</label>
							<input
								type="date"
								name="vendorId"
								className="outline-none text-sm inset-0 border-none bg-[#EBF5FF] px-2 py-1"
								value={"009988AABC"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8 ">
						<VendorInputFile name="MSME Attachment*" />
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								LDC End Date*
							</label>
							<input
								type="date"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"Ola Money Pvt"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8 ">
						<CheckBox name="Lower Exception" />
					</div>

					<div className="flex flex-col gap-8 ">
						<VendorInputFile name="Lower Exception" />
						<VendorInputFile name="Lower Exception" />
					</div>

					<div className="flex flex-col gap-8 ">
						<div className="flex flex-col gap-8">
							<div className="flex flex-col space-y-2">
								<label htmlFor="TradeName" className="text-sm">
									Trade Name*
								</label>
								<input
									type="text"
									name="TradeName"
									className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
									value={"Ola Money Pvt"}
								/>
							</div>

							<div className="flex flex-col space-y-2">
								<label htmlFor="TradeName" className="text-sm">
									Payment Terms
								</label>
								<input
									type="text"
									name="TradeName"
									className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
									value={"A98DAKSKS"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
