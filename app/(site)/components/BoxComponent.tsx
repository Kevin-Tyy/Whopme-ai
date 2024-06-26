"use client";

import React from "react";
import { Option } from "@/types";

interface Props {
	option: Option;
	index: number;
	isFullWidth?: boolean;
	isBorderShown?: boolean;
}
export default function BoxComponent({ option, index, isFullWidth, isBorderShown }: Props) {
	const childVariant = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<div
			className={`py-6 px-5 sm:px-7 border-corner ${isBorderShown && 'border-corner-default'} ${
				!isFullWidth && "md:max-w-[340px]"
			} group rounded-2xl hover:bg-[#1E1E26]/40 cursor-pointer`}
			key={index}>
			<img
				src={option.icon! || option.image!}
				alt="Icon"
				width={100}
				height={100}
				className="w-16 h-16"
				draggable={false}
			/>
			<div className="mt-6">
				<h1 className="group-hover:text-primary-yellow text-xl font-semibold capitalize">
					{option.title}
				</h1>
				<p className="mt-3 text-white/50 text-sm leading-relaxed group-hover:text-white">{option.description}</p>
			</div>
		</div>
	);
}
