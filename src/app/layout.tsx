import "~/styles/globals.css";
import type { Metadata } from "next";
import { geist } from "~/lib/fonts";
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
		],
	},
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		creator: siteConfig.creator,
	},
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geist.className} bg-white text-black min-h-screen antialiased`}>
				<div className="mx-auto max-w-7xl px-6 md:px-8 pt-6 md:pt-8 pb-16 md:pb-24 lg:pb-32">{children}</div>
			</body>
		</html>
	);
}
