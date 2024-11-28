import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { SiHibernate, SiSpring, SiSpringboot } from "react-icons/si";

const Skills = () => {
    return (
        <div id="Skills" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <FaJava color="#F24E1E" size={50} />
                        </span>
                        <p className="text-white mt-2">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <TbFileTypeSql color="#47A248" size={50} />
                        </span>
                        <p className="text-white mt-2">SQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <SiHibernate color="#FF4438" size={50} />
                        </span>
                        <p className="text-white mt-2">Hibernate</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <SiSpring color="#E34F26" size={50} />
                        </span>
                        <p className="text-white mt-2">Spring</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <SiSpringboot color="#1572B6" size={50} />
                        </span>
                        <p className="text-white mt-2">Spring Boot</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <FaReact color="#61DAFB" size={50} />
                        </span>
                        <p className="text-white mt-2">React</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <FaJs color="#F7DF1E" size={50} />
                        </span>
                        <p className="text-white mt-2">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <FaHtml5 color="#E34F26" size={50} />
                        </span>
                        <p className="text-white mt-2">HTML5</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <FaCss3 color="#1572B6" size={50} />
                        </span>
                        <p className="text-white mt-2">CSS3</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                            <DiBootstrap color="#61DAFB" size={50} />
                        </span>
                        <p className="text-white mt-2">Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
