import * as React from "react";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { navSocial } from "~/lib/data";
import { buttonVariants } from "../ui/button";
import { cn } from "~/lib/utils";

export function NavSocial() {
	return (
		<div className="flex items-center justify-end">
			<a
				href={navSocial.github}
				rel="noreferrer"
				target="_blank"
				className={cn(buttonVariants({ size: "icon", variant: "ghost", className: "size-8 rounded-lg" }))}
			>
				<GitHub className="size-4" />
			</a>
		</div>
	);
}
