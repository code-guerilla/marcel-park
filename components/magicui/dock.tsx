"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
	type MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import React, { type PropsWithChildren, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
	className?: string;
	magnification?: number;
	distance?: number;
	children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
	"mx-auto flex h-full w-max items-end rounded-full border p-2",
);

const Dock = ({
	className,
	children,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	ref,
	...props
}: DockProps & {
	ref?: React.Ref<HTMLDivElement>;
}) => {
	const mousex = useMotionValue(Number.POSITIVE_INFINITY);

	const renderChildren = () => {
		return React.Children.map(children, (child) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, {
					mousex,
					magnification,
					distance,
				} as DockIconProps);
			}
			return child;
		});
	};

	return (
		<motion.div
			onMouseLeave={() => mousex.set(Number.POSITIVE_INFINITY)}
			onMouseMove={(e) => mousex.set(e.pageX)}
			ref={ref}
			{...props}
			className={cn(dockVariants({ className }))}
		>
			{renderChildren()}
		</motion.div>
	);
};

Dock.displayName = "Dock";

export interface DockIconProps {
	size?: number;
	magnification?: number;
	distance?: number;
	mousex?: MotionValue<number>;
	className?: string;
	children?: React.ReactNode;
	props?: PropsWithChildren;
}

const DockIcon = ({
	size,
	magnification = DEFAULT_MAGNIFICATION,
	distance = DEFAULT_DISTANCE,
	mousex,
	className,
	children,
	...props
}: DockIconProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const defaultMouseX = useMotionValue(Number.POSITIVE_INFINITY);
	const mouseXValue = mousex ?? defaultMouseX;

	const distanceCalc = useTransform(mouseXValue, (val: number) => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const widthSync = useTransform(
		distanceCalc,
		[-distance, 0, distance],
		[40, magnification, 40],
	);

	const width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<motion.div
			className={cn(
				"flex aspect-square cursor-pointer items-center justify-center rounded-full",
				className,
			)}
			ref={ref}
			style={{ width }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
