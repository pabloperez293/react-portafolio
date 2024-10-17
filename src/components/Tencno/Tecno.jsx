import { RiReactjsLine } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Tecno = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl"> Tecnologias </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaAngular className="text-7xl text-red-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <RiReactjsLine className="text-7xl text-cyan-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <RiJavaFill className="text-7xl text-red-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <AiOutlineConsoleSql className="text-7xl text-black-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiSpringboot className="text-7xl text-green-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaCss3Alt className="text-7xl text-cyan-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaGithub className="text-7xl text-black-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </div>
        
      </div>
    </div>
  );
};

export default Tecno;
