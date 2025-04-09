import * as React from "react";
import Link from "next/link";
import { SiTypescript as TypeScriptIcon, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-dashed border-neutral-300 bg-neutral-50/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/60">
			<div className="container flex max-w-7xl items-center justify-between h-14">
				<Link href="/" className="flex items-center space-x-3">
					<TypeScriptIcon className="size-6 text-blue-500" />
					<h1 className="font-bold tracking-tight">tsconfig</h1>
				</Link>
				<div className="flex items-center justify-end">
					<a
						href="https://github.com/almostJohn/tsconfig-site"
						rel="noreferrer"
						target="_blank"
						className={cn(buttonVariants({ variant: "ghost", size: "icon", className: "h-7 w-7" }))}
					>
						<GitHub className="size-4" />
					</a>
				</div>
			</div>
		</header>
	);
}
