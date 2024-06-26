"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import SuccessPopup from "./SuccessPopup";
import PaymentDetails from "./PaymentDetails";

export default function page() {
	const payDetails = {
		Subtotal: "$49.00",
		"Taxes (0%)": "$0.00",
	};
	const [selectedPaymentMode, setSelectedPaymentMode] = useState<
		"paypal" | "stripe" | null
	>(null);
	const [isSuccessOpen, setIsSuccessOpen] = useState(false);
	const submitHandler = (e: any) => {
		e.preventDefault();
		if (!selectedPaymentMode) return alert("Please select payment mode");
		return setIsSuccessOpen(true);
	};
	return (
		<section className="mx-2 sm:mx-10 text-sm">
			<h1 className="text-white text-3xl font-semibold">Secure Checkout</h1>
			<div className="ring-2 ring-[#343434b3] flex flex-col xl:flex-row items-start p-3 sm:p-10 gap-5 sm:gap-10 rounded-lg mt-10">
				<div className="w-full bg-gradient-to-br from-[#ffffff1c] to-[#8f8f8f1e] backdrop-blur-md rounded-lg px-4 sm:px-10 py-8">
					<h1 className="text-xl font-bold text-white">
						Select Payment Option
					</h1>
					<div className="bg-gradient-to-r from-[#FFFFFF00] via-[#ffffff71] to-[#FFFFFF00] h-0.5 w-full my-4" />

					<div className="flex flex-col min-[400px]:flex-row gap-3 sm:gap-10 mt-6">
						<div
							onClick={() => setSelectedPaymentMode("paypal")}
							className={clsx(
								"w-full p-4 sm:p-6 flex justify-center items-center bg-gradient-to-br from-[#ffffff15] to-[#8F8F8F13] cursor-pointer hover:bg-[#ffffff10] transition duration-300 rounded-lg",
								selectedPaymentMode === "paypal" && "border-gradient"
							)}>
							<Image
								src="/main/paypal.png"
								alt="Paypal"
								width={100}
								height={30}
								draggable={false}
								className="w-28 sm:w-32"
							/>
						</div>
						<div
							onClick={() => setSelectedPaymentMode("stripe")}
							className={clsx(
								"w-full p-4 sm:p-6 flex justify-center items-center bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f13] cursor-pointer hover:bg-[#ffffff10] transition duration-300 rounded-lg",
								selectedPaymentMode === "stripe" && "border-gradient"
							)}>
							<Image
								src="/main/stripe.png"
								alt="Paypal"
								width={100}
								height={30}
								draggable={false}
								className="w-16 sm:w-20"
							/>
						</div>
					</div>
					<PaymentDetails selectedPayement={selectedPaymentMode} />
				</div>
				<div className="w-full bg-gradient-to-br from-[#ffffff15] to-[#8f8f8f1e] backdrop-blur-md rounded-lg px-4 py-7 sm:p-7">
					<h1 className="text-xl font-bold">
						Plan Name: Standard{" "}
						<span className="text-primary-yellow">(Monthly Plan)</span>
					</h1>
					<div className="flex items-center gap-7 mt-4">
						<div className="w-full hidden min-[420px]:block bg-white/50 h-[2px]" />
						<p className="text-lg whitespace-nowrap capitalize">
							Purchase Summary
						</p>
						<div className="w-full hidden min-[420px]:block bg-white/50 h-[2px]" />
					</div>
					<div className="mt-6 flex flex-col gap-6">
						{Object.entries(payDetails).map(([key, value]) => (
							<div
								className="flex justify-between gap-5 w-full text-right"
								key={key}>
								<h4 className="capitalize sm:text-lg">{key}</h4>
								<p className="capitalize sm:text-lg">{value}</p>
							</div>
						))}
					</div>
					<div className="flex items-center gap-7 mt-4">
						<div className="w-full bg-white/50 h-[2px]" />
						<p className="text-lg whitespace-nowrap capitalize">total</p>
						<div className="w-full bg-white/50 h-[2px]" />
					</div>
					<div className="flex justify-between gap-5 w-full text-right mt-10">
						<h4 className="capitalize text-lg">Total Payment</h4>
						<p className="capitalize text-xl font-bold text-primary-yellow">
							$49.00USD
						</p>
					</div>
					<form onSubmit={submitHandler}>
						<button className="bg-gradient-to-r from-primary-red to-primary-yellow w-full rounded-xl py-3.5 mt-6">
							Check out
						</button>
					</form>
				</div>
			</div>
			<SuccessPopup
				isOpen={isSuccessOpen}
				onClose={() => setIsSuccessOpen(false)}
			/>
		</section>
	);
}
