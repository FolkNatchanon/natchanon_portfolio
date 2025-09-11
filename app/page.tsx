import DynamicText from "@/components/animation/dynamic-text"

import Link from "next/link"
import Image from "next/image"

import { FaLaptopCode } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

const HomePage = () => {
	return (
		<section className="flex w-full flex-col bg-black text-white">
			{/* Home */}
			<div
				id="home"
				className="flex h-screen flex-col items-center justify-center"
			>
				<h1 className="text-[44px] font-extrabold">NATCHANON SRIJUDANU</h1>
				<DynamicText texts={["A passionate full-stack developer"]} />
				<div className="mt-20 flex items-center justify-center gap-4">
					<div className="flex items-center justify-center gap-2">
						<IoIosMail className="text-[20px] text-white" />
						<p>natchanon.srij@gmail.com</p>
					</div>
					<div className="flex items-center justify-center gap-2">
						<FaLocationDot className="text-[20px] text-white" />
						<p>Nonthaburi,Thailand</p>
					</div>
				</div>
				<div className="mt-5 flex items-center justify-center gap-4">
					<h1 className="text-[18px]">Follow Me:</h1>
					<Link href="https://github.com/FolkNatchanon">
						<div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
							<FaGithub className="text-[20px] text-black" />
						</div>
					</Link>
					<Link href="https://www.linkedin.com/in/natchanon-srijudanu-412731383/">
						<div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
							<FaLinkedin className="text-[20px] text-black" />
						</div>
					</Link>
					<Link href="https://www.instagram.com/n_t_h_n_n/">
						<div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
							<FaInstagram className="text-[20px] text-black" />
						</div>
					</Link>
					<Link href="https://www.facebook.com/natchanon.srijudanu">
						<div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white">
							<FaFacebook className="text-[20px] text-black" />
						</div>
					</Link>
				</div>
			</div>
			{/* About Me */}
			<div
				id="aboutme"
				className="flex h-screen items-center justify-center p-10"
			>
				<div className="items-center justify-center">
					<div className="flex items-center justify-center">
						{/* Left */}
						<div className="flex w-1/2 flex-col">
							<div>
								<h1 className="text-[32px] font-bold">My Story</h1>
								<div className="text-[20px]">
									<p>
										Hello, my name is Folk. I am currently studying Computer
										Science and have a strong interest in developing Full-Stack
										Software Applications.
									</p>
									<p>
										I have a foundation in HTML, CSS, JavaScript, as well as
										frameworks such as Tailwind CSS and Next.js,and
									</p>
									<p>
										I am working to further develop my skills toward building
										fully functional systems.
									</p>
								</div>
							</div>
							<hr className="border-t border-black"></hr>
							<div>
								<h2 className="text-[32px] font-bold">Education</h2>
								<p className="text-[18px]">
									School of Information Technology and Innovation | Bangkok
									University
								</p>
								<p className="text-[18px]">2022 - Present</p>
							</div>
						</div>
						{/* Right */}
						<div className="flex w-1/2 flex-col items-center justify-center">
							<Image
								className="rounded-full"
								src="/profile.jpg"
								width={500}
								height={500}
								alt="Profile"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Skill */}
			<div id="skill" className="flex flex-col p-10">
				<div className="mt-20 flex flex-col justify-center gap-24">
					{/* Title */}
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-[40px] font-extrabold">Skills & Tools</h1>
					</div>
					{/* Header */}
					<div className="flex flex-col items-center justify-center gap-18">
						{/* Frontend */}
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-2">
								<div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gray-200">
									<FaLaptopCode className="text-[24px] text-black" />
								</div>
								<h2 className="text-[28px] font-semibold">
									Frontend Development
								</h2>
							</div>
							<div className="mt-6 flex items-center justify-center gap-5 text-[16px]">
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									JavaScript
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									TypeScript
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Tailwind CSS
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Next.js
								</div>
							</div>
						</div>
						{/* Backend */}
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-2">
								<div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gray-200">
									<FaDatabase className="text-[24px] text-black" />
								</div>
								<h2 className="text-[28px] font-semibold">
									Backtend Development
								</h2>
							</div>
							<div className="mt-6 flex items-center justify-center gap-5 text-[16px]">
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Python
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									C#
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Node.js
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									MySQL
								</div>
							</div>
						</div>
						{/* Tool */}
						<div className="flex flex-col items-center justify-center">
							<div className="flex items-center gap-2">
								<div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gray-200">
									<FaTools className="text-[24px] text-black" />
								</div>
								<h2 className="text-[28px] font-semibold">
									Tools & Technologies
								</h2>
							</div>
							<div className="mt-6 flex items-center justify-center gap-5 text-[16px]">
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Figma
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Git/Github
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									Rapid Miner
								</div>
								<div className="bg-gray-dark flex h-32 w-32 transform flex-col items-center justify-center rounded-[10px] p-4 transition-transform hover:scale-105 hover:shadow-lg">
									PowerBI
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Project */}
			<div id="project" className="flex h-screen w-screen flex-col p-10">
				<div className="mt-20 flex flex-col items-center justify-center">
					{/* Title */}
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-[40px] font-extrabold">Projects</h1>
					</div>
					{/* ProjectList */}
					<div className="mt-20 flex items-center justify-center gap-8">
						<div className="bg-gray-dark flex h-100 w-80 transform flex-col items-center gap-4 rounded-[20px] p-5 transition-transform hover:scale-105 hover:shadow-lg">
							<h1 className="text-[20px] font-semibold">Airtag with ESP32</h1>
							<p className="">
								A simplified tracking system was developed using ESP32 devices
								broadcasting BLE signals. Mobile phones acted as receivers,
								sending the location data to Firebase, for real-time position
								tracking.
							</p>
							<div className="mt-auto flex gap-2">
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">C#</h1>
								</div>
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">ArduinoIDE</h1>
								</div>
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">ESP32</h1>
								</div>
							</div>
						</div>
						<div className="bg-gray-dark flex h-100 w-80 transform flex-col items-center justify-center gap-4 rounded-[20px] p-5 transition-transform hover:scale-105 hover:shadow-lg">
							<h1 className="text-[20px] font-semibold">
								Basil vs. Holy Basil Classification
							</h1>
							<p className="">
								This project applied deep learning techniques to classify basil
								leaves (Thai holy basil) and sweet basil, which are visually
								similar but have distinct culinary uses. A CNN model was trained
								on an image dataset with enhancements such as data augmentation,
								dropout layers, and early stopping to improve generalization and
								accuracy. The goal was to demonstrate how AI can be used in
								agriculture and food industries for plant identification.
							</p>
							<div className="mt-auto flex gap-2">
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">Python</h1>
								</div>
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">TensorFlow</h1>
								</div>
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">NumPy</h1>
								</div>
								<div className="flex items-center justify-center rounded-[10px] bg-white px-2 text-black">
									<h1 className="font-extrabold">Matplotlib</h1>
								</div>
							</div>
						</div>
						<div className="bg-gray-dark flex h-100 w-80 flex-col rounded-[20px]"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage