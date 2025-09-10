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
import { FaLocationDot } from "react-icons/fa6";

const HomePage = () => {
	return (
		<section className="flex w-full flex-col bg-black text-white">
			{/* Home */}
			<div id="home" className="flex h-screen flex-col items-center justify-center">
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
					<div className="flex justify-center items-center">
						{/* Left */}
						<div className="flex w-1/2 flex-col gap-6">
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
						<div className="items-center justify-center">
							<Image
								className="rounded-full"
								src="/IMG_6452.jpg"
								width={300}
								height={300}
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									JavaScript
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									TypeScript
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Tailwind CSS
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Python
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									C#
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Node.js
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Figma
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Git/Github
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									Rapid Miner
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] p-4 bg-gray-dark">
									PowerBI
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Project */}
			<div id="project"className="h-screen flex flex-col p-10">
				<div className="flex flex-col justify-center items-center mt-20">
					{/* Title */}
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-[40px] font-extrabold">Projects</h1>
					</div>
					<div>

					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
