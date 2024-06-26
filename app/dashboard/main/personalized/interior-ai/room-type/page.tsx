import Image from "next/image";
import React from "react";
import Form from "./Form";
import NavigationButton from "@/app/dashboard/components/NavigationButton";

export default function page() {
	return (
		<section className="relative h-full">
			<div className="w-full max-w-4xl mx-auto h-full flex flex-col sm:items-center space-y-10 mt-10">
				<div className="flex  flex-col sm:flex-row gap-4">
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-[#8D8D99] bg-[#E1E1E6] h-6 w-6 grid place-content-center text-xs rounded-full">
								1
							</div>
							<p className="font-semibold text-lg text-[#8D8D99] whitespace-nowrap">
								Upload your picture
							</p>
						</div>
						<Image
							src="/main/ai/move-left.svg"
							alt="move-left"
							width={20}
							height={20}
						/>
					</div>
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-black bg-primary-yellow h-6 w-6 grid place-content-center text-xs rounded-full">
								2
							</div>
							<p className="font-semibold text-lg whitespace-nowrap">Room Type / Mode</p>
						</div>
						<Image
							src="/main/ai/move-left.svg"
							alt="move-left"
							width={20}
							height={20}
						/>
					</div>
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-[#8D8D99] bg-[#E1E1E6] h-6 w-6 grid place-content-center text-xs rounded-full">
								3
							</div>
							<p className="font-semibold text-lg text-[#8D8D99] whitespace-nowrap">
								Style & Others
							</p>
						</div>
					</div>
				</div>
				<Form/>
				<div className="flex justify-center gap-4">
					<NavigationButton link="/dashboard/main/personalized/interior-ai" styleClass="font-bold flex items-center justify-between gap-3 ring-1 ring-white/70 bg-transparent hover:bg-[#3d3d3d1c] p-3 h-[54px] ring-inset w-[220px] rounded-lg self-end">
						<Image
							src="/arrow-left.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
						<span>Back</span>
					</NavigationButton>
					<NavigationButton link="/dashboard/main/personalized/interior-ai/style" styleClass="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] h-[54px] p-3 w-[220px] rounded-lg self-end">
						<span>Next</span>
						<Image
							src="/arrow-right.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
					</NavigationButton>
				</div>
			</div>
		</section>
	);
}
