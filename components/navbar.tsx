import { getDefaultAutoSelectFamily } from "net"

const NavBar = () => {
    return (
        <nav className="flex p-8 w-full fixed justify-between items-center">
            {/* Left */}
            <div className="ml-10 text-gray-900 text-[20px] font-extrabold">
            <h1>HOME</h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-[30px] text-white text-[20px] font-extrabold">
                <p >ABOUT ME</p>

                <p>PROJECT</p>

                <p>CONTACT</p>
            </div>
        </nav>
    )
}

export default NavBar