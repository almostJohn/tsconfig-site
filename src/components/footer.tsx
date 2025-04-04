import * as React from "react";

export function Footer() {
	return (
		<footer className="bottom-0 border-t-2 border-dashed border-neutral-300/40">
			<div className="flex items-center justify-center container h-16">
				<p className="text-center text-sm">
					Made with 💖 by{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="underline underline-offset-2 text-blue-600"
					>
						@almostJohn
					</a>
				</p>
			</div>
		</footer>
	);
}
