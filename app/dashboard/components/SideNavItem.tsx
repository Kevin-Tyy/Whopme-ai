"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";
import { navObjects } from "../main/components/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideNavItem() {
	const [activeLink, setActiveLink] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	return (
		<div className="space-y-3 mt-10 text-sm">
			{navObjects.map((item, index) => (
				<div
					key={index}
					onClick={() => {
						if (!item.items?.length && item?.link) {
							setActiveLink(item.title);
							router.push(item?.link);
						} else {
							if (item.title === activeLink) {
								setIsOpen(false);
								setActiveLink(null);
							} else {
								setIsOpen(true);
								setActiveLink(item.title);
							}
						}
					}}>
					<div
						className={clsx(
							"flex justify-between gap-3 hover:bg-[#323232b7] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer py-2 pl-2 pr-4 items-center transition duration-200 h-[48px]",
							activeLink == item.title && "bg-[#272727] ring-1"
						)}>
						<div className="flex items-center gap-1">
							<div
								className={`${
									activeLink == item.title && `bg-custom-${index} rounded-full `
								} p-1.5 transition duration-300`}>
								<Image
									src={item.icon}
									alt="Icon"
									width={200}
									height={100}
									draggable={false}
									className="w-6"
								/>
							</div>
							<p className="whitespace-nowrap">{item.title}</p>
						</div>
						{item.items?.length && (
							<div
								className={`rotate-180 transition duration-300 ${
									isOpen && activeLink === item.title && "rotate-0"
								}`}>
								<Image
									src="/main/arrow-up.svg"
									alt="Icon"
									width={200}
									height={100}
									draggable={false}
									className="w-4"
								/>
							</div>
						)}
					</div>
					{item.items?.length && (
						<Collapse isOpened={item.title === activeLink && isOpen}>
							<div
								className="ml-3 flex flex-col"
								onClick={(e) => e.stopPropagation()}>
								{item.items?.map((item, index) => (
									<div className="relative">
										<div
											className={`flex items-end `}
											style={{
												transform:
													index > 1
														? `translateY(-${10 + index * 8}px)`
														: index === 1
														? "translateY(-14px)"
														: "translateY(0)",
											}}>
											<Image
												src={`${
													pathname.includes(item.link)
														? index !== 0
															? "/main/active-bar.svg"
															: "/main/active-bar-init.svg"
														: index !== 0
														? "/main/inactive-bar.svg"
														: "/main/inactive-bar-init.svg"
												}`}
												alt="Icon"
												width={20}
												height={50}
												draggable={false}
											/>
											<Link
												href={item.link}
												key={index}
												className="cursor-pointer w-full">
												<div className="w-full flex justify-between items-center pr-4 translate-y-3">
													<p>{item.title}</p>
													<Image
														src={item.icon}
														alt="Icon"
														width={200}
														height={100}
														draggable={false}
														className="w-7"
													/>
												</div>
											</Link>
										</div>
									</div>
								))}
							</div>
						</Collapse>
					)}
				</div>
			))}
			<div className="flex justify-between gap-3 hover:bg-[#323232] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer py-2 pl-2 pr-4 items-center transition duration-200 h-[48px]">
				<div className="flex items-center gap-1">
					<div className={` p-1.5 transition duration-300`}>
						<Image
							src={"/main/drawing-tools.gif"}
							alt="Icon"
							width={200}
							height={100}
							draggable={false}
							className="w-6"
						/>
					</div>
					<p>
						WolframAlpha
						<span className="text-xs text-white/50"> (Coming Soon)</span>
					</p>
				</div>
			</div>
			<div className="!mt-10 space-y-4">
				<h1 className="text-sm uppercase pl-2">History</h1>
				<Link
					href={"/dashboard/main/documents"}
					className="flex justify-between gap-3 hover:bg-[#323232] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer pl-2 pr-4 items-center transition duration-200 h-[48px]">
					<div className="flex items-center gap-1">
						<div className={`p-1.5 transition duration-300`}>
							<Image
								src={"/main/document.gif"}
								alt="Icon"
								width={200}
								height={100}
								draggable={false}
								className="w-6"
							/>
						</div>
						<p>Documents</p>
					</div>
				</Link>
			</div>
		</div>
	);
}