import {
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiExpress,
    SiPostgresql
} from 'react-icons/si';

interface TecnologieProps {
    technologies?: string[];
}

export default function Tecnologie({ technologies }: TecnologieProps) {
    return (
        <div className="flex gap-1">
            {technologies?.map((technology, index) => {
                let logo;
                switch (technology.toLowerCase()) {
                    case 'javascript':
                        logo = <SiJavascript className="h-5 w-5 text-yellow-400" />;
                        break;
                    case 'nodejs':
                        logo = <SiNodedotjs className="h-5 w-5 text-green-600" />;
                        break;
                    case 'react':
                        logo = <SiReact className="h-5 w-5 text-cyan-500" />;
                        break;
                    case 'tailwind':
                        logo = <SiTailwindcss className="h-5 w-5 text-blue-500" />;
                        break;
                    case 'mongodb':
                        logo = <SiMongodb className="h-5 w-5 text-green-500" />;
                        break;
                    case 'typescript':
                        logo = <SiTypescript className="h-5 w-5 text-blue-400" />;
                        break;
                    case 'html':
                        logo = <SiHtml5 className="h-5 w-5 text-orange-600" />;
                        break;
                    case 'css':
                        logo = <SiCss3 className="h-5 w-5 text-blue-600" />;
                        break;
                    case 'git':
                        logo = <SiGit className="h-5 w-5 text-red-600" />;
                        break;
                    case 'express':
                        logo = <SiExpress className="h-5 w-5 text-white" />;
                        break;
                    case 'postgresql':
                        logo = <SiPostgresql className="h-5 w-5 text-blue-700" />;
                        break;  
                    default:
                        logo = <span className="text-white text-sm">{technology}</span>;
                        break;

                }
                return (
                    <span key={index} className="bg-[rgba(0,0,0)] rounded-lg p-2 flex items-center justify-center">
                        {logo}
                    </span>
                );
            })}
        </div>
    );
}