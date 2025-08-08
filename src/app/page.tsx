import { PageAction } from "~/components/page-action";
import { cn } from "~/lib/utils";
import { geistMono } from "~/lib/fonts";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center py-12 md:py-24">
			<div className="flex flex-col space-y-12 w-full md:max-w-5xl">
				<div className="space-y-6">
					<h1 className="text-4xl text-center font-bold leading-tight tracking-tighter sm:text-xl md:text-6xl">
						.
						<span className={cn("text-blue-600", geistMono.className)}>ts</span>
						config
					</h1>
					<p className="mx-auto max-w-xl px-6 md:px-0 text-xl text-center text-neutral-500">
						A typescript configuration that you can copy and paste into your
						projects.
					</p>
				</div>
				<div className="px-4 md:px-0">
					<PageAction />
				</div>
			</div>
		</div>
	);
}
