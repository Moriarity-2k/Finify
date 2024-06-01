"use client";

import React from "react";
import CheckBox from "../CustomInputElements/CheckBox";
import CustomInputAttachmentField from "../CustomInputElements/CustomInputAttachmentField";
import VendorInputFile from "../CustomInputElements/VendorInputFile";



/**
 * This component is part of the different vendor forms
 * @returns Business details form of the customer  
 */
export default function BusinessDetailsForm() {
	return (
		<div className="px-6 py-4 border-b-2 border-b-[#EBF5FF]">
			<div className="my-2 border-l-[3px] font-extrabold px-2 border-[#ED0505]">
				Business Details
			</div>

			<div className="px-2 py-3 space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								Vendor ID
							</label>
							<input
								type="text"
								name="vendorId"
								className="outline-none text-sm inset-0 border-none bg-[#EBF5FF] w-max px-2 py-1"
								value={"009988AABC"}
							/>
						</div>
						<CheckBox name="GST" />
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								Legal Name*
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"Ola Money Pvt"}
							/>
						</div>
						<VendorInputFile name="GST Certificate*" />
					</div>

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

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorState" className="text-sm">
								Vendor State*
							</label>
							<select
								name="states"
								id="states"
								className="block w-max bg-white border-[#2E5A7599] text-black border inset-0 outline-none rounded-md px-3 py-1"
							>
								<option className="" value="Karnataka">
									Karnataka
								</option>
								<option className="" value="Telangana">
									Telangana
								</option>
								<option value="AndhraPradesh">
									Andhra Pradesh
								</option>
								<option value="Kerala">Kerala</option>
								<option value="Gujarat">Gujarat</option>
								<option value="Rajasthan">Rajasthan</option>
								<option value="Others">Others</option>
							</select>
						</div>

						<VendorInputFile name="PAN Attachment*" />
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorLocation" className="text-sm">
								Vendor Location
							</label>
							<select
								name="states"
								id="states"
								className="block w-max bg-white border-[#2E5A7599] text-black border inset-0 outline-none rounded-md px-3 py-1"
							>
								<option className="" value="Bengaluru">
									Bengaluru
								</option>
								<option value="AndhraPradesh">Hampi</option>
								<option value="Kerala">Mysore</option>
								<option value="Gujarat">Gorkana</option>
								<option value="Rajasthan">Srinvel</option>
								<option value="Others">Others</option>
							</select>
						</div>

						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorLocation" className="text-sm">
								Policy*
							</label>
							<select
								name="states"
								id="states"
								className="block w-max bg-white border-[#2E5A7599] text-black border inset-0 outline-none rounded-md px-3 py-1"
							>
								<option className="" value="Marketing">
									Marketing All
								</option>
								<option value="Coding">Coding</option>
								<option value="SDE">SDE</option>
								<option value="SDE2">SDE 2</option>
							</select>
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-2">
					<label htmlFor="vendorId" className="text-sm">
						Vendor Address
					</label>
					<input
						type="text"
						name="vendorId"
						className="outline-none text-sm inset-0 border-[#EBF5FF] border-2 px-2 py-1 w-[40%]"
						value={""}
					/>
				</div>
			</div>
		</div>
	);
}
