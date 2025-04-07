import * as React from "react";
import { Branding } from "./branding";
import { NavSocial } from "./nav-social";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b-2 border-neutral-200/40 border-dashed bg-neutral-50/95 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-50/60">
			<div className="container max-w-7xl flex items-center justify-between h-16">
				<Branding />
				<NavSocial />
			</div>
		</header>
	);
}
