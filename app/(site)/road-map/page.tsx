import Image from "next/image";
import React from "react";
import { mileStones } from "./constants";
import MileStoneComponent from "./components/MileStoneComponent";
import Contact from "../components/Contact";

export default function RoadMapPage() {
	//limit to separate completed and incomplete milestones
	const doneLimit = 7;
	return (
		<main>
			<div className="w-full min-h-[60vh] sm:min-h-fit h-[50vh] relative">
				<div className="bg-[#0a0a0e]/90 absolute inset-0 z-[-1]" />
				<video
					className="w-full h-full absolute inset-0 object-cover z-[-2]"
					loop={true}
					autoPlay={true}>
					<source
						src="/video/-1af2-4fbf-b389-3d379703d080.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="bg-gradient-to-b from-transparent to-[#16161b] h-40 absolute bottom-0 w-full z-1" />
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Roadmap
					</h1>
				</div>
			</div>
			<section className="xl:max-w-[1400px] xl:mx-auto sm:mt-20 p-3 sm:p-4">
				<div>
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[900px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative text-center uppercase  sm:mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Achieved milestones
						</h1>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[900px] h-[70px] absolute right-0 -translate-y-12 hidden lg:block"
						/>
					</div>
					<div className="mt-20">
						<div>
							{mileStones.slice(0, doneLimit).map((item) => (
								<MileStoneComponent {...item} isComplete={true} />
							))}
						</div>
					</div>
				</div>
				<div className="mt-20">
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[900px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Future plans
						</h1>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[900px] h-[70px] absolute right-0 -translate-y-12 hidden md:block"
						/>
					</div>
					<div className="mt-20">
						<div>
							{mileStones.slice(doneLimit).map((item) => (
								<MileStoneComponent {...item} isComplete={false} />
							))}
						</div>
					</div>
				</div>
				<Contact />
			</section>
		</main>
	);
}
