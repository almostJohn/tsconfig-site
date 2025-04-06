import * as React from "react";
import Link from "next/link";
import { SiTypescript as TypeScriptIcon, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { CopyConfig } from "~/components/copy-config";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Page() {
	return (
		<>
			<div className="px-4 md:px-6 py-12 md:py-24 lg:py-32">
				<div className="flex flex-col gap-8">
					<div className="container flex flex-col items-center justify-center space-y-4">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center">
							Effortless{" "}
							<span className="inline-flex items-center">
								<TypeScriptIcon className="text-blue-500 size-8 md:size-12" />
							</span>{" "}
							Config Setup
						</h1>
						<p className="pt-6 text-xl text-neutral-500 max-w-[900px] text-center">
							Easily find, copy, and paste the perfect{" "}
							<span className="inline-flex items-center justify-center px-1 py-0.5 rounded bg-neutral-200 font-mono">
								tsconfig.json
							</span>{" "}
							for your project. No hassle, just the right settings for TypeScript—ready to go in seconds!
						</p>
						<div className="flex items-center justify-center pt-4">
							<Link
								href="https://github.com/almostJohn"
								rel="noreferrer"
								target="_blank"
								className={cn(buttonVariants({ className: "px-6" }))}
							>
								<GitHub className="size-5" /> GitHub
							</Link>
						</div>
					</div>
					<div className="mt-8 container">
						<CopyConfig />
					</div>
				</div>
			</div>
		</>
	);
}
