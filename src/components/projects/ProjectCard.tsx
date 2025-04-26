import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";
import Tecnologie from "./Tecnologie";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
	technologies?: string[];
}

export default function ProjectCard({ title, description, imageUrl, link, technologies }: ProjectCardProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ once: true }}
			className="pt-10 mx-auto space-y-4"
		>
			<motion.div
				whileHover={{ scale: 1.03 }}
				className="relative flex justify-center"
			>
				<img className="h-48 w-80 object-cover rounded-xl" alt="hero" src={imageUrl} />
				<div className="absolute flex justify-between items-center bottom-2 left-2 right-2">
					<button className="flex items-center gap-2 text-white py-2 px-2 rounded-full bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] transition-colors duration-200">
						<FaGithub className="text-xl" />
					</button>
					<button
						className="flex items-center gap-2 text-white py-2 px-2 rounded-full bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] transition-colors duration-200"
						onClick={() => window.open(link, '_blank')}
					>
						<FaEye className="h-5 w-5" />
					</button>
				</div>
			</motion.div>
			<div>
				<h2 className="text-lg font-medium text-white">{title}</h2>
				<p className="text-xs text-gray-300">{description}</p>
				<Tecnologie technologies={technologies} />
			</div>
		</motion.section>
	);
}
