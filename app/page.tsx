const HomePage = () => {
  return (
    <div id="home" className="flex flex-col w-screen text-[#088395]">
      {/* Title */}
      <div className="flex justify-center item-center h-screen w-screen">
        <div className="flex justify-between item-center gap-40 mt-90">
          {/* Left */}
          <div className="item-center w-full">
            <div><p className="text-[40px] text-white font-extrabold">Hello, I am</p></div>
            <div className="mt-10"><p className="text-[50px] font-extrabold">Natchanon Srijudanu</p></div>
            <div><p className="text-[20px]">Computer Science student with an interest in Full-Stack Web Development. Eager to gain real-world experience,<br />learn from teamwork, and grow into a professional Full-Stack Developer.</p></div>
          </div>
          {/* Center */}
          <div className="flex">
            <div className="border-1 border-white mx-2 h-100"></div>
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
          <div className="flex flex-col items-center mt-15">
            <div className="flex gap-4 py-5 items-center">
              <div className="border-b-[2px] w-[300px] text-white"></div>
              <span className="flex-shrink mx-4 text-[50px] font-extrabold text-white">Skill and Technology</span>
              <div className="border-b-[2px] w-[300px] text-white"></div>
            </div>
          </div>
          {/* Programming Language */}
          <div className="flex flex-col items-center w-full mt-40">
            <div>
              <p className="text-[38px] font-extrabold">Programming Language</p>
            </div>
            <div className="flex items-center gap-20 mt-10 text-[20px] font-bold ">
              <div className="border-2 rounded-[10] p-3"><p>Python</p></div>
              <div className="border-2 rounded-[10] p-3"><p>Java</p></div>
              <div className="border-2 rounded-[10] p-3"><p>JavaScript</p></div>
              <div className="border-2 rounded-[10] p-3"><p>TypeScript</p></div>
              <div className="border-2 rounded-[10] p-3"><p>C++</p></div>
            </div>
          </div>
          {/* Framework */}
          <div className="flex flex-col items-center w-full mt-25">
            <div>
              <p className="text-[38px] font-extrabold">Framework</p>
            </div>
            <div className="flex items-center gap-20 mt-10 text-[20px] font-bold">
              <div className="border-2 rounded-[10] p-3"><p>Tailwind CSS</p></div>
              <div className="border-2 rounded-[10] p-3"><p>Next.js</p></div>
              <div className="border-2 rounded-[10] p-3"><p>React</p></div>
              <div className="border-2 rounded-[10] p-3"><p>Node.js</p></div>
            </div>
          </div>
          {/*Tools*/}
          <div className="flex flex-col items-center w-full mt-25">
            <div>
              <p className="text-[38px] font-extrabold">Tools</p>
            </div>
            <div className="flex items-center gap-20 mt-10 text-[20px] font-bold">
              <div className="border-2 rounded-[10] p-3"><p>Git/Github</p></div>
              <div className="border-2 rounded-[10] p-3"><p>Figma</p></div>
              <div className="border-2 rounded-[10] p-3"><p>MySQL</p></div>
              <div className="border-2 rounded-[10] p-3"><p>PowerBI</p></div>
              <div className="border-2 rounded-[10] p-3"><p>RapidMiner</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage