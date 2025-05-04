import "~/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "~/lib/fonts";
import { siteConfig } from "~/config/site";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: {
		other: [
			{
				url: "/tsconfig.svg",
				sizes: "32x32",
				type: "image/svg",
			},
			{
				url: "/tsconfig.svg",
				sizes: "16x16",
				type: "image/svg",
			},
		],
	},
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} bg-[#fafafa] text-[#090909] antialiased`}>
				<main className="min-h-screen">{children}</main>
			</body>
		</html>
	);
}
