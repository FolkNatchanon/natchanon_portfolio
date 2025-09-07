// Icons
import { Laptop, Database } from "lucide-react"

const Frontend = [
	{
		name: "Next.js",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "React",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "TypeScript",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "Tailwind CSS",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "Shadcn/ui",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
]

const Backend = [
	{
		name: "Node.js",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "Nest.js",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "PostgreSQL",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "MongoDB",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
	{
		name: "C#",
		icon: <Laptop className="text-[#9381ff]" size={24} />,
	},
]

const TestPage = () => {
	return (
		<section className="flex w-full flex-col bg-[#1b263b]">
			{/* Skills & Technologies */}
			<div className="flex h-screen w-full flex-col items-center justify-center">
				<div className="flex flex-col items-center">
					<h1 className="text-[64px] leading-none font-semibold text-[#f8f7ff]">
						Skills & Technologies
					</h1>

					<p className="text-[18px] text-[#DADADA]">
						Technologies I work with to build amazing digital experiences
					</p>
				</div>

				{/* Frontend & UI */}
				<div className="flex flex-col">
					<div className="mt-[24px] flex items-center gap-[16px]">
						<div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#0D131D]">
							<Laptop className="text-[#9381ff]" size={24} />
						</div>

						<h2 className="text-[24px] font-semibold text-[#f8f7ff]">
							Frontend & UX/UI
						</h2>
					</div>

					<p className="mt-[16px] text-[14px] text-[#DADADA]">
						Modern web development and user interface technologies
					</p>

					<div className="mt-[24px] flex items-center gap-[8px]">
						{Frontend.map((item, index) => {
							return (
								<div
									key={index}
									className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-[8px] rounded-[8px] bg-[#0D131D]"
								>
									{item.icon}

									<p className="text-[14px] text-white">{item.name}</p>
								</div>
							)
						})}
					</div>
				</div>

				{/* Backend & Database */}
				<div className="flex flex-col">
					<div className="mt-[24px] flex items-center gap-[16px]">
						<div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#0D131D]">
							<Database className="text-[#9381ff]" size={24} />
						</div>

						<h2 className="text-[24px] font-semibold text-[#f8f7ff]">
							Backend
						</h2>
					</div>

					<p className="mt-[16px] text-[14px] text-[#DADADA]">
						Server-side development and data management
					</p>

					<div className="mt-[24px] flex items-center gap-[8px]">
						{Backend.map((item, index) => {
							return (
								<div
									key={index}
									className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-[8px] rounded-[8px] bg-[#0D131D]"
								>
									{item.icon}

									<p className="text-[14px] text-white">{item.name}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestPage
