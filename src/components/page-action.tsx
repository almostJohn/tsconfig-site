"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { tsConfigTemplateForNextJs, tsConfigTemplateForNodeJs } from "~/lib/template";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function PageAction() {
	const [copiedNextJsTsConfig, setCopiedNextJsTsConfig] = React.useState(false);
	const [copiedNodeJsTsConfig, setCopiedNodeJsTsConfig] = React.useState(false);

	async function copyNextJsTsConfig() {
		try {
			await navigator.clipboard.writeText(tsConfigTemplateForNextJs);
			setCopiedNextJsTsConfig(true);
			setTimeout(() => setCopiedNextJsTsConfig(false), 2_000);
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
		}
	}

	async function copyNodeJsTsConfig() {
		try {
			await navigator.clipboard.writeText(tsConfigTemplateForNodeJs);
			setCopiedNodeJsTsConfig(true);
			setTimeout(() => setCopiedNodeJsTsConfig(false), 2_000);
		} catch (error_) {
			const error = error_ as Error;
			console.error(error, error.message);
		}
	}

	return (
		<Tabs defaultValue="nextjs">
			<TabsList className="grid grid-cols-2 w-full">
				<TabsTrigger value="nextjs">Next.js</TabsTrigger>
				<TabsTrigger value="nodejs">Node.js</TabsTrigger>
			</TabsList>
			<TabsContent value="nextjs" className="mt-6">
				<div className="relative block p-3 overflow-y-auto w-full max-h-96 rounded-lg border border-neutral-300">
					<Button
						variant="outline"
						size="icon"
						className="h-7 w-7 rounded-lg absolute top-3 right-3"
						onClick={copyNextJsTsConfig}
					>
						{copiedNextJsTsConfig ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
					</Button>
					<pre className="overflow-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNextJs}</code>
					</pre>
				</div>
			</TabsContent>
			<TabsContent value="nodejs" className="mt-6">
				<div className="relative block p-3 overflow-y-auto w-full max-h-96 rounded-lg border border-neutral-300">
					<Button
						variant="outline"
						size="icon"
						className="h-7 w-7 rounded-lg absolute top-3 right-3"
						onClick={copyNodeJsTsConfig}
					>
						{copiedNodeJsTsConfig ? <Check className="text-green-600 size-4" /> : <Copy className="size-4" />}
					</Button>
					<pre className="overflow-auto">
						<code className="text-sm/relaxed">{tsConfigTemplateForNodeJs}</code>
					</pre>
				</div>
			</TabsContent>
		</Tabs>
	);
}
