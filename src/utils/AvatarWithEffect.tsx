import { useState } from "react";

export default function AvatarWithEffect() {
    const [style, setStyle] = useState({ transform: "translate(0px, 0px)" });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) * 0.05;
        const moveY = (clientY - window.innerHeight / 2) * 0.05;
        setStyle({ transform: `translate(${moveX}px, ${moveY}px)` });
    };

    return (
        <div className="relative flex justify-center items-center m-10 pt-4" onMouseMove={handleMouseMove}>
            {/* Fondo animado */}
            <div className="text-sm text-gray-400 font-mono mt-2 ml-4">
                    {/* Comentario tipo código */}
                    {/* <span>{'// Wily Ramos'}</span> */}
                </div>
 
            <div
                className="absolute w-[100px] h-[320px] bg-gray-800 opacity-30 rounded"
                style={style}
            ></div>

            {/* Imagen */}
            <img
                src="/avatar.svg"
                alt="Wily Ramos"
                className="transition-transform duration-300"
                width={200}
                height={200}
            />
        </div>
    );
}
