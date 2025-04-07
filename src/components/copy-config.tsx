"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { tsConfigTemplateForNextJs, tsConfigTemplateForNodeJs } from "~/lib/tsconfig";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
		<Tabs defaultValue="nextjs-config">
			<TabsList className="mx-auto grid grid-cols-2 w-full md:max-w-sm">
				<TabsTrigger value="nextjs-config">For Next.js</TabsTrigger>
				<TabsTrigger value="nodejs-config">For Node.js</TabsTrigger>
			</TabsList>
			<TabsContent value="nextjs-config" className="mt-6">
				<div className="relative block p-2 overflow-y-auto w-full max-h-96 rounded-xl border border-neutral-300 bg-transparent">
					<Button
						className="size-7 px-2 py-0.5 rounded-lg absolute top-3 right-3"
						size="icon"
						variant="outline"
						onClick={copyNextJsConfig}
					>
						{copiedConfigForNext ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
					</Button>
					<pre className="overflow-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNextJs}</code>
					</pre>
				</div>
			</TabsContent>
			<TabsContent value="nodejs-config" className="mt-6">
				<div className="relative block p-2 overflow-y-auto w-full max-h-96 rounded-xl border border-neutral-300 bg-transparent">
					<Button
						className="size-7 px-2 py-0.5 rounded-lg absolute top-3 right-3"
						size="icon"
						variant="outline"
						onClick={copyNodeJsConfig}
					>
						{copiedConfigForNode ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
					</Button>
					<pre className="overflow-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNodeJs}</code>
					</pre>
				</div>
			</TabsContent>
		</Tabs>
	);
}
