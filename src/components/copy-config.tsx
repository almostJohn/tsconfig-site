"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { tsConfigTemplateForNextJs, tsConfigTemplateForNodeJs } from "~/lib/tsconfig";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";

export function CopyConfig() {
	const [copiedConfigForNext, setCopiedConfigForNext] = React.useState(false);
	const [copiedConfigForNode, setCopiedConfigForNode] = React.useState(false);

	function copyNextJsConfig() {
		navigator.clipboard.writeText(tsConfigTemplateForNextJs).then(() => {
			setCopiedConfigForNext(true);

			setTimeout(() => {
				setCopiedConfigForNext(false);
			}, 2_000);
		});
	}

	function copyNodeJsConfig() {
		navigator.clipboard.writeText(tsConfigTemplateForNodeJs).then(() => {
			setCopiedConfigForNode(true);

			setTimeout(() => {
				setCopiedConfigForNode(false);
			}, 2_000);
		});
	}

	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div className="flex flex-col space-y-4">
				<h1 className="text-lg font-semibold leading-snug text-center md:text-left">
					<span className="text-blue-500">TS</span>Config for Next.js Projects.
				</h1>
				<div className="relative block p-3 overflow-y-auto w-full max-h-96 rounded-lg border border-neutral-300 bg-transparent">
					<button
						className={cn(
							buttonVariants({
								variant: "outline",
								size: "icon",
								className: "size-7 px-2 py-0.5 absolute top-3 right-3 rounded-lg",
							}),
						)}
						onClick={copyNextJsConfig}
					>
						{copiedConfigForNext ? <Check className="size-4" /> : <Copy className="size-4" />}
					</button>
					<pre className="overflow-auto">
						<code className="font-mono text-sm/relaxed">{tsConfigTemplateForNextJs}</code>
					</pre>
				</div>
			</div>
			<div className="flex flex-col space-y-4">
				<h1 className="text-lg font-semibold leading-snug text-center md:text-left">
					<span className="text-blue-500">TS</span>Config for Node.js Projects.
				</h1>
				<div className="relative block p-3 overflow-y-auto w-full max-h-96 rounded-lg border border-neutral-300 bg-transparent">
					<button
						className={cn(
							buttonVariants({
								variant: "outline",
								size: "icon",
								className: "size-7 px-2 py-0.5 absolute top-3 right-3 rounded-lg",
							}),
						)}
						onClick={copyNodeJsConfig}
					>
						{copiedConfigForNode ? <Check className="size-4" /> : <Copy className="size-4" />}
					</button>
					<pre className="overflow-auto">
						<code className="font-mono text-sm/relaxed">{tsConfigTemplateForNodeJs}</code>
					</pre>
				</div>
			</div>
		</div>
	);
}
