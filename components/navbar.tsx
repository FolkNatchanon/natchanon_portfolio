import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="flex p-8 w-full fixed justify-between items-center text-[#03045E]">
            {/* Left */}
            <div className="ml-10 text-[32px] font-extrabold">
                <Link href={"/"}><h1 className="hover:underline cursor-pointer">HOME</h1></Link>
            </div>

            {/* Right */}
            <div className="flex items-center gap-[30px] text-[20px]">
                <Link href={"/about"}><p className="hover:underline cursor-pointer">ABOUT ME</p></Link>

                <Link href={"/skill"}><p className="hover:underline cursor-pointer">SKILL</p></Link>

                <Link href={"/project"}><p className="hover:underline cursor-pointer">PROJECT</p></Link>

            </div>
        </nav>
    )
}

export default NavBar