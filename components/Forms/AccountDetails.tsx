"use client";

import React from "react";
import VendorInputFile from "../CustomInputElements/VendorInputFile";

/**
 * This component is part of the different vendor forms
 * @returns account detials form
 */
export default function AccountDetails() {
	return (
		<div className="px-6 py-4 border-b-2 border-b-[#EBF5FF]">
			<div className="my-2 border-l-[3px] font-extrabold px-2 border-[#ED0505]">
				Additional Location Supply
			</div>

			<div className="px-2 py-3 space-y-4">
				<div className="flex justify-between">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorLocation" className="text-sm">
								Select Bank
							</label>
							<select
								name="states"
								id="states"
								className="block bg-white border-[#2E5A7599] text-black border inset-0 outline-none rounded-md px-3 py-1"
							>
								<option className="" value="SBI">
									SBI
								</option>
								<option value="HDFC">HDFC</option>
								<option value="ICICI">ICICI</option>
								<option value="Others">Others</option>
							</select>
						</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								IFSC Code
							</label>
							<input
								type="text"
								name="vendorId"
								className="outline-none text-sm inset-0 border-none bg-[#EBF5FF] w-max px-2 py-1"
								value={"HDFC000111"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								Account Name
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"A909IKIS"}
							/>
						</div>

						<VendorInputFile name="Cancelled Check" />
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								Account Number
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={""}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								Confirm Account Number
							</label>
							<input
								type="text"
								name="vendorId"
								className="outline-none text-sm inset-0 border-[#EBF5FF] border-2 px-2 py-1"
								value={""}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
