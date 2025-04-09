import * as React from "react";
import { PageAction } from "~/components/page-action";

export default function Page() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center py-12 md:py-24 lg:py-32">
				<div className="w-full max-w-3xl space-y-6 px-4">
					<h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
						Effortless TypeScript Configuration Setup
					</h1>
					<p className="mx-auto text-lg text-neutral-500 text-center md:text-xl">
						tsconfig is a simple site for easily copying and pasting TypeScript configuration file. No setup, no
						fuss—just grab the tsconfig.json you need and get coding.
					</p>
					<PageAction />
				</div>
			</div>
		</>
	);
}
