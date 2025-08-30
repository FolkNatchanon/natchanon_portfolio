import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="flex fixed w-full items-center justify-between backdrop-blur-xs py-5 px-8 bg-black/50 text-white">


            {/* Left */}
            <div className="text-[30px] font-bold">
                <Link href={"/#home"}><h1 className="hover:underline cursor-pointer">HOME</h1></Link>
            </div>

            {/* Right */}
            <div className="flex items-center gap-[30px] text-[20px]">
                <Link href={"/about"}><p className="hover:underline cursor-pointer">ABOUT ME</p></Link>

                <Link href={"/#skill"}><p className="hover:underline cursor-pointer">SKILL</p></Link>

                <Link href={"/project"}><p className="hover:underline cursor-pointer">PROJECT</p></Link>

            </div>
        </nav>
    )
}

export default NavBar