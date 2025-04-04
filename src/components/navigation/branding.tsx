import * as React from "react";
import Link from "next/link";
import { SiTypescript as TypeScriptIcon } from "@icons-pack/react-simple-icons";

export function Branding() {
	return (
		<Link href="/" className="flex space-x-1.5 items-end">
			<TypeScriptIcon className="size-8 text-blue-500 rounded" />
			<span className="font-bold text-xl leading-none tracking-tighter">Config</span>
		</Link>
	);
}
