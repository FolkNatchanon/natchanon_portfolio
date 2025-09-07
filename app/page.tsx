import DynamicText from "@/components/animation/dynamic-text"
import { FaLaptopCode } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import Image from 'next/image';

const HomePage = () => {
	return (
		<section className="flex w-full flex-col">
			{/* Home */}
			<div
				id="home"
				className="flex h-screen flex-col items-center justify-center"
			>
				<h1 className="text-[40px] leading-none font-bold">
					NATCHANON SRIJUDANU
				</h1>

				<DynamicText texts={["SOFTWARE DEVELOPER", "UX/UI DESIGNER"]} />
			</div>
			{/* About Me */}
			<div
				id="aboutme"
				className="flex h-screen items-center justify-center bg-gray-200"
			>
				<div className="items-center justify-center">
					<div className="flex items-center justify-between gap-2">
						{/* Left */}
						<div className="flex w-1/2 flex-col gap-6">
							<div>
								<h1 className="text-[32px] font-semibold">My Story</h1>
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
								<h2 className="text-[32px] font-semibold">Education</h2>
								<p className="text-[16px]">
									School of Information Technology and Innovation | Bangkok
									University
								</p>
								<p className="text-[16px]">2022 - Present</p>
							</div>
						</div>
						{/* Right */}
						<div className="justify-center items-center">
							<Image className="rounded-full"
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
				<div className="mt-30 flex flex-col justify-center gap-24">
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									JavaScript
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									TypeScript
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Tailwind CSS
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Python
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									C#
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Node.js
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
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
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Figma
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Git/Github
								</div>
								<div className="flex h-32 w-32 flex-col items-center justify-center rounded-[10px] border-1 p-4">
									Vercel
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Project */}
			<div className="h-screen bg-gray-200"></div>
		</section>
	)
}

export default HomePage
