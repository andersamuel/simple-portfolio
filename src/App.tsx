import React from "react";
import { Link } from "react-router-dom";

import { Cards } from "./components/cards";

import { interessed, studying, working } from "./utils/skills";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

import css from "./assets/img/css.svg";
import docker from "./assets/img/docker.svg";
import express from "./assets/img/express.svg";
import figma from "./assets/img/figma.svg";
import firebase from "./assets/img/firebase.svg";
import graphql from "./assets/img/graphql.svg";
import html from "./assets/img/html.svg";
import javascript from "./assets/img/javascript.svg";
import linux from "./assets/img/linux.svg";
import nestjs from "./assets/img/nestjs.svg";
import nextjs from "./assets/img/nextjs.svg";
import nodejs from "./assets/img/nodejs.svg";
import prismaImg from "./assets/img/prisma.svg";
import react from "./assets/img/react.svg";
import sass from "./assets/img/sass.svg";
import sqlserver from "./assets/img/sqlserver.svg";
import tailwindcss from "./assets/img/tailwindcss.svg";
import typescript from "./assets/img/typescript.svg";

import aaa from "./assets/img/1658594555877.png";

export const App: React.FC = () => {
	return (
		<div className="w-full min-h-screen px-5 pb-28 flex flex-col items-center font-poppins bg-color-1">
			<header className="w-full max-w-2xl h-20 flex items-center justify-between">
				<h1 className="text-lg font-semibold text-white">AO</h1>

				<div className="h-full flex items-center">
					<a
						href="https://www.linkedin.com/in/anderoliveira/"
						target="_blank"
						className="ml-5 flex items-center justify-center text-white hover:text-gray-300 duration-300"
					>
						<FaLinkedinIn className="w-5 h-5" />
					</a>
					<a
						href="https://github.com/andersamuel"
						target="_blank"
						className="ml-5 flex items-center justify-center text-white hover:text-gray-300 duration-300"
					>
						<FaGithub className="w-5 h-5" />
					</a>
					<a
						href="mailto:andersonsamueloliveira@outlook.com?Subject=Vim%20pelo%20portf%F3lio"
						target="_blank"
						className="ml-5 flex items-center justify-center text-white hover:text-gray-300 duration-300"
					>
						<MdOutlineMail className="w-6 h-6" />
					</a>
					<a
						href="https://api.whatsapp.com/send?phone=5551997873464&text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio!"
						target="_blank"
						className="ml-5 flex items-center justify-center text-white hover:text-gray-300 duration-300"
					>
						<AiOutlineWhatsApp className="w-5 h-5" />
					</a>
				</div>
			</header>

			<main className="w-full max-w-2xl flex flex-col items-center">
				<section className="mt-10 flex flex-col items-center">
					<h1 className="text-2xl font-semibold uppercase text-white">
						Anderson Oliveira
					</h1>

					<p className="text-lg font-medium uppercase text-red-600">
						Fullstack Developer
					</p>

					<h2 className="mt-14 text-xl font-medium uppercase text-white">
						Sobre
					</h2>

					<section className="w-full flex flex-col">
						<p className="text-sm font-medium leading-5 mt-3 text-gray-200">
							Olá, meu nome é Anderson Oliveira e tenho 23 anos de idade,
							apaixonado por desenvolvimento venho estudando desde 2020 e
							atualmente estou aprimorando meu conhecimento explorando o NextJS.
						</p>
						<p className="text-sm font-medium leading-5 mt-2 text-gray-200">
							Resido em Bom Retiro do Sul (RS).
						</p>
						<p className="text-sm font-medium leading-5 mt-2 text-gray-200">
							Tem algum projeto em mente?{" "}
							<a
								href="https://api.whatsapp.com/send?phone=5551997873464&text=Ol%C3%A1!%2C%20est%C3%A1%20dispon%C3%ADvel%20para%20discutir%20um%20projeto%3F"
								target="_blank"
								className="font-medium border-b-2 border-solid leading-relaxed border-red-600 text-red-600  hover:text-red-700 hover:border-red-700 duration-300"
							>
								Clique aqui
							</a>{" "}
							e vamos conversar sobre!
						</p>
					</section>

					<h2 className="mt-14 text-xl font-medium uppercase text-white">
						Skills
					</h2>

					<div className="w-full mt-3 flex justify-center flex-wrap">
						<Cards variant="skill" title="Trabalho com" array={working} />

						<Cards variant="skill" title="Estudando" array={studying} />

						<Cards variant="skill" title="Interessado" array={interessed} />
					</div>

					<h2 className="mt-14 text-xl font-medium uppercase text-white">
						Projetos
					</h2>

					<section className="w-full mt-3 flex justify-center flex-wrap">
						<Cards
							href=""
							variant="project"
							github="aaaaa"
							image={aaa}
							title="Portfólio"
						>
							<img
								src={react}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
							<img
								src={tailwindcss}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
						</Cards>
						<Cards
							href=""
							variant="project"
							github="aaaaa"
							image={aaa}
							title="Portfólio"
						>
							<img
								src={react}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
							<img
								src={tailwindcss}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
						</Cards>
						<Cards
							href=""
							variant="project"
							github="aaaaa"
							image={aaa}
							title="Portfólio"
						>
							<img
								src={react}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
							<img
								src={tailwindcss}
								alt="ReactJS"
								width={20}
								height={20}
								className="mx-2"
							/>
						</Cards>
					</section>
				</section>
			</main>
		</div>
	);
};
