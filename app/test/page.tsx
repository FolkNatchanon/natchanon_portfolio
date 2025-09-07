// Components
import DynamicText from "@/components/animation/dynamic-text"

const HomePage = () => {
	return (
		<section className="flex w-full flex-col">
			{/* Title */}
			<div className="flex h-screen flex-col items-center justify-center">
				<h1 className="text-[40px] leading-none font-bold">
					NATCHANON SRIJUDANU
				</h1>

				<DynamicText texts={["SOFTWARE DEVELOPER", "UX/UI DESIGNER"]} />
			</div>
		</section>
	)
}

export default HomePage
