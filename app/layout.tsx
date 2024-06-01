import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jakartaSans = Plus_Jakarta_Sans({
	weight: ["400", "700"], // Specify the font weights you need
	subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
	title: "FiniFy",
	description: "FiniFy Intern Task",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jakartaSans.className} bg-white`}
			>
				<div className="h-screen">{children}</div>
			</body>
		</html>
	);
}
