import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";


export const skillsData = [
{
    id: 1,
    icons: <ImGit />,
    text: "Git",
    color: "#F05032",
  },
  {
    id: 2,
    icons: <FaReact />,
    text: "React",
    color: "#60DAFB",
  },
  {
    id: 3,
    icons: <SiTailwindcss />,
    text: "Tailwind",
    color: "#07B7D4",
  },
  {
    id: 4,
    icons: <IoLogoHtml5 />,
    text: "HTML",
    color: "#F16529",
  },
  {
    id: 5,
    icons: <DiCss3Full />,
    text: "CSS",
    color: "#2965F1",
  },
  {
    id: 6,
    icons: <DiJavascript1 />,
    text: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: 7,
    icons: <SiTypescript />,
    text: "TypeScript",
    color: "#3074C0",
  },
//   {
//     id: 8,
//     icons: <IoLogoSass />,
//     text: "Sass",
//     color: "#C76494",
//   },
  {
    id: 9,
    icons: <TbBrandNextjs />,
    text: "NextJS",
    color: "#111",
  },
]

const Skills = () => {
  return (
    <div className="flex justify-center items-center mt-[40px] lg:mt-[0] pb-5">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-[24px] space-y-3">
        {skillsData.map(({ id, icons, text, color }) => (
          <li
            id={id}
            key={id}
            className="w-[163px] h-[77px] mt-3 bg-gray-600 flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300"
          >
            <div className="flex gap-[16px] justify-between items-center">
              <span className="w-[35px] h-[35px] flex items-center">
                {React.cloneElement(icons, { color: color, size: 24 })}
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills