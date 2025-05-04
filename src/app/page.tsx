import * as React from "react";
import { PageAction } from "~/components/page-action";

export default function Page() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center py-10 md:py-16 lg:py-24">
				<div className="flex flex-col space-y-6">
					<div className="container flex flex-col gap-6">
						<h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
							Copy & Paste TSConfig
						</h1>
						<p className="mx-auto max-w-lg text-lg text-gray-500 text-balance text-center md:text-xl">
							tsconfig is a simple site for easily copying and pasting TypeScript configuration file. No setup, no
							fuss—just grab the tsconfig.json you need and get coding.
						</p>
					</div>
					<div className="px-4 md:px-10">
						<PageAction />
					</div>
				</div>
			</div>
		</>
	);
}
