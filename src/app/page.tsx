import * as React from "react";
import { PageAction } from "~/components/page-action";
import { siteConfig } from "~/config/site";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center py-12 md:py-24">
			<div className="flex flex-col space-y-12 w-full md:max-w-5xl">
				<div className="space-y-6">
					<h1 className="text-4xl text-center font-bold leading-tight tracking-tighter sm:text-xl md:text-6xl">
						.<span className="text-blue-600">ts</span>config
					</h1>
					<p className="mx-auto max-w-5xl text-xl text-center text-gray-500">{siteConfig.description}</p>
				</div>
				<PageAction />
			</div>
		</div>
	);
}
