import * as React from "react";
import type { Metadata } from "next";
import { inter } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";
import { Navbar } from "~/components/navigation/navbar";
import { Footer } from "~/components/footer";
import "~/styles/globals.css";

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
			<body className={cn("bg-neutral-50 text-neutral-950 antialiased", inter.className)}>
				<main className="min-h-screen flex flex-col">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
