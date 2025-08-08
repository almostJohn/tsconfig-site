export function Footer() {
	return (
		<footer className="bottom-0 w-full">
			<div className="mx-auto max-w-7xl flex items-center justify-center h-16">
				<div className="text-sm text-neutral-500">
					Built by{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium underline-offset-4 underline"
					>
						almostjohn
					</a>
					. The source code is available on{" "}
					<a
						href="https://github.com/almostJohn/tsconfig-site"
						rel="noreferrer"
						target="_blank"
						className="text-sm font-medium underline-offset-4 underline"
					>
						GitHub
					</a>
					.
				</div>
			</div>
		</footer>
	);
}
