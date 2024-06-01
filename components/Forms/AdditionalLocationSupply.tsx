"use client";
import React from "react";

import VendorInputFile from "../CustomInputElements/VendorInputFile";


/**
 * This component is part of the different vendor forms
 * @returns form for taking locations as input
 */
export default function AdditionalLocationSupply() {
	return (
		<div className="px-6 py-4 border-b-2 border-b-[#EBF5FF]">
			<div className="my-2 border-l-[3px] font-extrabold px-2 border-[#ED0505]">
				Additional Location Supply
			</div>

			<div className="px-2 py-3 space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorLocation" className="text-sm">
								Select State
							</label>
							<select
								name="states"
								id="states"
								className="block w-max bg-white border-[#2E5A7599] text-black border inset-0 outline-none rounded-md px-3 py-1"
							>
								<option className="" value="Bengaluru">
									Karnataka
								</option>
								<option value="AndhraPradesh">
									AndhraPradesh
								</option>
								<option value="Kerala">Kerala</option>
								<option value="Gujarat">Gujarat</option>
								<option value="Rajasthan">Rajasthan</option>
								<option value="Others">Others</option>
							</select>
						</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								POC Name*
							</label>
							<input
								type="text"
								name="vendorId"
								className="outline-none text-sm inset-0 border-none bg-[#EBF5FF] w-max px-2 py-1"
								value={"Finance"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								Location
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"A909IKIS"}
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								POC Designation*
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"Finance Manager"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								Location GSTIn
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={""}
							/>
						</div>

						<div className="flex flex-col space-y-2">
							<label htmlFor="LegalName" className="text-sm">
								POC Email ID*
							</label>
							<input
								type="text"
								name="LegalName"
								className="outline-none text-sm inset-0 px-2 py-1 border-2 border-[#EBF5FF]"
								value={"finance@growthquest.in"}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<VendorInputFile name="Location GST In Certificate*" />
						<div className="flex flex-col space-y-2">
							<label htmlFor="vendorId" className="text-sm">
								POC Mobile Number*
							</label>
							<input
								type="text"
								name="vendorId"
								className="outline-none text-sm inset-0 border-[#EBF5FF] border-2 px-2 py-1 w-[40%]"
								value={"1234567890"}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
