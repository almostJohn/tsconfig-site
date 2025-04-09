import * as React from "react";

export function SiteFooter() {
	return (
		<footer className="bottom-0 w-full border-t border-dashed border-neutral-300 bg-transparent">
			<div className="container flex items-center justify-center max-w-7xl h-14">
				<p className="text-neutral-500 text-sm">
					Made with 💖 by{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline text-blue-500"
					>
						almostJohn
					</a>
				</p>
			</div>
		</footer>
	);
}
