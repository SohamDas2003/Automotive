"use client";

import { motion } from "framer-motion";
import {
	Facebook,
	Twitter,
	Linkedin as LinkedIn,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
	const footerLinks = {
		Products: [
			"Gearbox",
			"Differential",
			"Propeller Shaft",
			"Hydraulic System",
		],
		Support: [
			"Customer Area",
			"Technical Support",
			"Documentation",
			"Warranty",
		],
		Company: ["About Us", "News", "Careers", "Contact"],
		Legal: [
			"Privacy Policy",
			"Terms of Service",
			"Cookie Policy",
			"Disclaimer",
		],
	};
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const socialLinks = [
		{ icon: Facebook, href: "#", label: "Facebook" },
		{ icon: Twitter, href: "#", label: "Twitter" },
		{ icon: LinkedIn, href: "#", label: "LinkedIn" },
		{ icon: Instagram, href: "#", label: "Instagram" },
	];

	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-16">
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-1">
						<div className="flex items-center space-x-2 mb-6">
							<span
								className={`text-2xl font-bold ${
									isScrolled ? "text-gray-900" : "text-white"
								}`}>
								<Image
									src="/logo2.png"
									alt="Logo"
									width={300}
									height={120}
									className="object-cover"
								/>
							</span>
						</div>
						<p className="text-gray-300 mb-6 leading-relaxed">
							Premium automotive spare parts for heavy-duty trucks and
							commercial vehicles. Quality, reliability, and performance you can
							trust.
						</p>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-amber-500" />
								<span className="text-gray-300">+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="w-5 h-5 text-amber-500" />
								<span className="text-gray-300">info@jaaps.com</span>
							</div>
							<div className="flex items-center space-x-3">
								<MapPin className="w-5 h-5 text-amber-500" />
								<span className="text-gray-300">Detroit, MI, USA</span>
							</div>
						</div>
					</motion.div>

					{/* Footer Links */}
					{Object.entries(footerLinks).map(([category, links], index) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<h3 className="text-lg font-semibold mb-6 text-amber-400">
								{category}
							</h3>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link}>
										<a
											href="#"
											className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
											{link}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Bottom Footer */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 mb-4 md:mb-0">
							© 2024 JAAPS. All rights reserved. Made with precision and care.
						</p>

						{/* Social Links */}
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-200"
									aria-label={social.label}>
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
