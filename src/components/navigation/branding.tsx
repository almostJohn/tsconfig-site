import * as React from "react";
import Link from "next/link";

export function Branding() {
	return (
		<Link href="/" className="flex items-center">
			<h1 className="font-mono text-xl font-bold">
				<span className="text-blue-500">ts</span>config
			</h1>
		</Link>
	);
}
