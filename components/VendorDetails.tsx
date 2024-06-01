import React from "react";
import BusinessDetailsForm from "./Forms/BusinessDetailsForm";
import MSMEDetails from "./Forms/MSMEDetailsForm";
import AdditionalLocationSupply from "./Forms/AdditionalLocationSupply";
import AccountDetails from "./Forms/AccountDetails";

/**
 * VendorDetails Component
 * 
 = @returns a component that renders the Different Vendor forms 
 */
export default function VendorDetails() {
	return (
		<div className="border-[#2E5A7526] overflow-y-scroll custom-scrollbar border-[0.5px] w-4/5">
			<div className="flex items-center gap-8 text-sm px-6 py-2 border-[#2E5A7526] border-b-[0.5px] font-bold">
				<button className=" text-[#2E5A7599]">
					Vendor Request Details
				</button>

				<button className=" text-[#2E5A75]">Vendor Form Details</button>

				<button className=" text-[#00000033]">
					Add Finance Details
				</button>
			</div>

			{/* Rendering the BusinessDetailsForm component */}
			<BusinessDetailsForm />
			{/* Rendering the MSMEDetails component */}
			<MSMEDetails />
			{/* Rendering the AdditionalLocationSupply component */}
			<AdditionalLocationSupply />
			{/* Rendering the AccountDetails component */}
			<AccountDetails />
		</div>
	);
}
