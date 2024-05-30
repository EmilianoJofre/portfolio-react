import { FaAngular, FaDocker, FaAws, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiRubyonrails, SiReact, SiGooglecloud, SiPython, SiCplusplus } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl" style={{ color: '#dd0031' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl" style={{ color: '#306998' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiRubyonrails className="text-7xl" style={{ color: '#cc0000' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl" style={{ color: '#2496ed' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl" style={{ color: '#f34f29' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGooglecloud className="text-7xl" style={{ color: '#4285f4' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl" style={{ color: '#ff9900' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiReact className="text-7xl" style={{ color: '#61dafb' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl" style={{ color: '#00599c' }} />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl" style={{color: '#336791'}}/>
            </div>
        </div>
    </div>
  )
};

export default Technologies