import Image from "next/image"; 
import React from "react";

/**
 * MainNavBar Component
 * 
 * This component renders the main navigation bar for the application. It includes the
 * title "Manage Vendor", a notification icon, and user information such as a profile
 * icon and user email details.
 */

export default function MainNavBar() {
    return (
        <div className="flex justify-between border-[#2E5A7526] border-b-[0.5px] px-8 items-center py-4">
            
            {/* Main title  */}
            <div className="text-4xl font-semibold">Manage Vendor</div>
            
            {/* Container for notification icon and user details */}
            <div className="flex items-center">
                <div className="border-r pr-4 border-[#2E5A7526]">
                    <Image
                        src={"mingcute_notification-line.svg"}
                        alt="notification"
                        width={45}
                        height={45} 
                        className="rounded-full border p-[4px] border-[#2E5A7526]"
                    />
                </div>
                
                {/* User information section */}
                <div className="flex items-center gap-4">
                    {/* User profile icon with background color */}
                    <div className="bg-[#dcebfc86] rounded-full ml-2 text-base py-2 px-4">
                        S
                    </div>
                    
                    {/* User name and email details */}
                    <div className="text-sm font-thin">
                        <div className="font-bold">SuryaTeja</div>
                        <div>suryatejagorle1@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
