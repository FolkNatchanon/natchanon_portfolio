import Link from "next/link"

const NavBar = () => {
	return (
		<nav className="fixed flex w-full items-center justify-between bg-black/50 px-8 py-5 text-white backdrop-blur-xs">
			{/* Left */}
			<div className="text-[30px] font-bold">
				<Link href={"/#home"}>
					<h1 className="cursor-pointer hover:underline">HOME</h1>
				</Link>
			</div>

			{/* Right */}
			<div className="flex items-center gap-[30px] text-[20px]">
				<Link href={"/#aboutme"}>
					<p className="cursor-pointer hover:underline">ABOUT ME</p>
				</Link>

				<Link href={"/#skill"}>
					<p className="cursor-pointer hover:underline">SKILL</p>
				</Link>

				<Link href={"/project"}>
					<p className="cursor-pointer hover:underline">PROJECT</p>
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
