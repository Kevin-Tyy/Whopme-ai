import { DocumentData } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
	columns: string[];
	data: Array<DocumentData>;
}
export default function Table({ columns, data }: Props) {
	return (
		<div className="w-full overflow-x-auto">
			<table className="w-full">
				<thead className="border-b-[3px] border-white/10">
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								className={`text-primary-yellow min-w-[180px] text-left p-6 ${
									index === 0 && "pl-8 sm:pl-14"
								}`}>
								<div className="flex gap-2 w-full justify-between">
									{column}
									<div className="flex flex-col justify-end">
										<Image
											src="/main/fi_chevron-up.svg"
											alt="Search"
											width={15}
											height={15}
										/>
										<Image
											src="/main/chevron-down.svg"
											alt="Search"
											width={15}
											height={15}
											className="-translate-y-2"
										/>
									</div>
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((document, index) => (
						<tr
							key={index}
							className={`${
								index % 2 &&
								"bg-gradient-to-br from-[#35353500] to-[#8f8f8f0c] backdrop-blur-sm w-full"
							}`}>
							<td className="p-6 pl-8 sm:pl-14 min-w-[300px]">
								<div>
									<div className="flex items-center gap-4">
										<div className="w-full bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f0c] backdrop-blur-sm rounded-lg p-3 max-w-fit">
											<Image
												src="/main/documents-colored.svg"
												alt="Image"
												height={30}
												width={30}
											/>
										</div>
										<div className="">
											<h1 className="text-lg font-semibold">{document.name}</h1>
											<p className="text-white/70">{document.subtitle}</p>
										</div>
									</div>
								</div>
							</td>
							<td className="p-6">{document.workbook}</td>
							<td className="p-6">
								<div className="py-2 px-6 bg-gradient-to-br from-[#ffffff10] to-[#8f8f8f00] backdrop-blur-md rounded-full max-w-fit">
									{document.category}
								</div>
							</td>
							<td className="p-6">
								<div className="text-left">
									<h3 className="font-semibold">{document.createdAt.date}</h3>
									<h4 className="text-white/50">{document.createdAt.time}</h4>
								</div>
							</td>
							<td className="p-6">{document.language}</td>
							<td className="p-6">{document.wordsUsed}</td>
							<td className="p-6 pt-10 flex gap-6">
								<button>
									<Image
										src="/main/eye.svg"
										alt="Image"
										height={20}
										width={20}
									/>
								</button>
								<button>
									<Image
										src="/main/delete.svg"
										alt="Image"
										height={20}
										width={20}
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
