import React, { ReactNode } from "react";

import { RiGithubFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";

interface CardProps {
	github?: string;
	href?: string;
	image?: string;
	title: string;
	array?: {
		name: string;
		experience?: string;
	}[];
	description?: string;
	variant: "project" | "skill";
	children?: ReactNode;
}

export const Cards: React.FC<CardProps> = ({
	github,
	href,
	image,
	title,
	array,
	description,
	variant,
	children,
}) => {
	return (
		<>
			{variant === "skill" && (
				<section className="w-44 mx-5 mb-5 flex flex-col items-center">
					<h3 className="text-sm font-semibold uppercase text-gray-200">
						{title}
					</h3>

					{array?.map(arrays => (
						<div
							className={`w-full h-14 mt-2 rounded flex flex-col justify-center bg-color-3 ${
								!arrays.experience ? "p-5" : "p-2"
							}`}
						>
							<h4 className="text-sm font-semibold text-white">
								{arrays.name}
							</h4>

							{arrays?.experience && (
								<p className="text-xs font-medium text-gray-300">
									{arrays.experience}
								</p>
							)}
						</div>
					))}
				</section>
			)}

			{variant === "project" && (
				<div
					className="w-44 h-72 mx-5 mb-5 relative flex flex-col justify-end rounded overflow-hidden group"
					style={{
						backgroundImage: `url(${image})`,
						backgroundPosition: "top",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 group-hover:bg-opacity-30 duration-300" />
					<span className="w-full absolute top-0 flex items-center justify-end">
						{github && (
							<a
								href={github}
								target="_blank"
								className="w-7 h-7 rounded-full mr-4 my-4 flex items-center justify-center bg-white"
							>
								<RiGithubFill className="w-5 h-5 text-gray-800" />
							</a>
						)}
						<a
							href={href}
							className="w-7 h-7 rounded-full mr-4 my-4 flex items-center justify-center bg-white"
						>
							<ImEye className="w-5 h-5 text-gray-800" />
						</a>
					</span>
					<span className="w-full relative flex justify-center px-5 py-3">
						{children}
					</span>
					<div className="w-full max-h-28 relative flex flex-col items-center p-3 bg-white">
						<h1 className="text-sm font-semibold text-gray-800">{title}</h1>
						<p className="w-full font-medium break-words overflow-hidden text-ellipsis text-gray-500">
							{description}
						</p>
					</div>
				</div>
			)}
		</>
	);
};
