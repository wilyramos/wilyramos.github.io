export default function Tecnologie({ technologies }: { technologies?: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies?.map((tech, i) => (
                <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-900/80 text-white rounded-lg
                    shadow-sm hover:bg-gray-800 transition"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}
