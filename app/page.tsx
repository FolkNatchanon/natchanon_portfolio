const HomePage = () => {
	return (
		<div id="home" className="flex w-screen flex-col text-[#088395]">
			{/* Title */}
			<div className="item-center flex h-screen w-screen justify-center">
				<div className="item-center mt-90 flex justify-between gap-40">
					{/* Left */}
					<div className="item-center w-full">
						<div>
							<p className="text-[40px] font-extrabold text-white">
								Hello, I am
							</p>
						</div>
						<div className="mt-10">
							<p className="text-[50px] font-extrabold">Natchanon Srijudanu</p>
						</div>
						<div>
							<p className="text-[20px]">
								Computer Science student with an interest in Full-Stack Web
								Development. Eager to gain real-world experience,
								<br />
								learn from teamwork, and grow into a professional Full-Stack
								Developer.
							</p>
						</div>
					</div>
					{/* Center */}
					<div className="flex">
						<div className="mx-2 h-100 border-1 border-white"></div>
					</div>
					{/* Right */}
					<div className="item-center w-full">
						<p className="text-[60px]">Picture</p>
					</div>
				</div>
			</div>
			{/* Skill and Technology */}
			<div id="skill" className="flex w-screen p-20">
				<div className="w-full">
					{/* Skills Title*/}
					<div className="mt-15 flex flex-col items-center">
						<div className="flex items-center gap-4 py-5">
							<div className="w-[300px] border-b-[2px] text-white"></div>
							<span className="mx-4 flex-shrink text-[50px] font-extrabold text-white">
								Skill and Technology
							</span>
							<div className="w-[300px] border-b-[2px] text-white"></div>
						</div>
					</div>
					{/* Programming Language */}
					<div className="mt-40 flex w-full flex-col items-center">
						<div>
							<p className="text-[38px] font-extrabold">Programming Language</p>
						</div>
						<div className="mt-10 flex items-center gap-20 text-[20px] font-bold">
							<div className="rounded-[10] border-2 p-3">
								<p>Python</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>Java</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>JavaScript</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>TypeScript</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>C++</p>
							</div>
						</div>
					</div>
					{/* Framework */}
					<div className="mt-25 flex w-full flex-col items-center">
						<div>
							<p className="text-[38px] font-extrabold">Framework</p>
						</div>
						<div className="mt-10 flex items-center gap-20 text-[20px] font-bold">
							<div className="rounded-[10] border-2 p-3">
								<p>Tailwind CSS</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>Next.js</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>React</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>Node.js</p>
							</div>
						</div>
					</div>
					{/*Tools*/}
					<div className="mt-25 flex w-full flex-col items-center">
						<div>
							<p className="text-[38px] font-extrabold">Tools</p>
						</div>
						<div className="mt-10 flex items-center gap-20 text-[20px] font-bold">
							<div className="rounded-[10] border-2 p-3">
								<p>Git/Github</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>Figma</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>MySQL</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>PowerBI</p>
							</div>
							<div className="rounded-[10] border-2 p-3">
								<p>RapidMiner</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
