import * as React from "react";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-0",
	{
		variants: {
			variant: {
				default: "bg-neutral-900 text-neutral-100 hover:bg-neutral-900/90",
				destructive: "bg-red-600 text-white hover:bg-red-600/80",
				primary: "bg-blue-500 text-white hover:bg-blue-500/90",
				ghost: "hover:bg-neutral-200",
				outline: "border border-neutral-300 hover:bg-neutral-200",
				link: "underline-offset-4 hover:underline",
			},
			size: {
				default: "px-4 py-2 h-10",
				xs: "h-8 px-2 py-0.5",
				sm: "h-9 px-3 py-1",
				lg: "h-11 px-8 py-4",
				xl: "h-16 px-12 py-6",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

export function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, className, size }))}
			{...props}
		/>
	);
}
