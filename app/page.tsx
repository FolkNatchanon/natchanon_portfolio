const HomePage = () => {
	return (
		<div id="home" className="bg-blue-dark flex w-screen flex-col text-white">
			{/* Title */}
			<div className="item-center flex h-screen w-screen justify-center">
				<div className="item-center mt-90 flex justify-center">
					<div className="px-4 text-center">
						<div className="">
							<h1 className="mb-6 text-4xl md:text-6xl">
								Hello, I am{" "}
								<h1 className="text-blue-400"> Natchanon Srijudanu</h1>
							</h1>
						</div>
						<div>
							<p className="text-[20px]">
								Passionate about building innovative web applications with
								modern technologies.
								<br />
								Currently seeking opportunities to grow and contribute to
								meaningful projects.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* AboutMe */}
			<div
				id="aboutme"
				className="bg-blue-fade flex h-screen flex-col justify-center p-20"
			>
				<div className="flex flex-col items-center justify-center">
					<div>
						<h1 className="text-[40px] font-extrabold">About Me</h1>
					</div>
					<div className="mt-20 flex items-center justify-between text-[24px]">
						<div className="w-1/2">Picture</div>
						<div className="flex w-1/2 flex-col gap-2">
							<p>
								Hey there! I'm a studying in Bangkok University with a passion
								for web development. I interest in frontend and backend,
							</p>
							<p>
								enjoying the process of building functional and scalable web
								applications.
							</p>
							<p>With expertise in modern JavaScript frameworks</p>
						</div>
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
					{/* Frontend Dev */}
					<div className="mt-40 flex w-full flex-col items-center">
						<div>
							<p className="text-[38px] font-extrabold">Frontend Development</p>
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
							<p className="text-[38px] font-extrabold">Backend Developer</p>
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
