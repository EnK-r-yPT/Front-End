import React from "react";
import Ijlal from "../assets/members/ijlal.jpg";
import Ankur from "../assets/members/Ankur.jpeg";
import Vicky from "../assets/members/Vicky.jpg";

import { FiTarget } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const members = [
  {
    id: 0,
    name: "Shairin Meraj",
    education: "B.Tech ECE",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/682px-Pierre-Person.jpg",
    linkedInUrl: "https://www.google.com",
    githubUrl: "",
    facebookUrl: "",
  },
  {
    id: 1,
    name: "Ankur Mishra",
    education: "B.Tech CSE",
    url: Ankur,
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "",
  },
  {
    id: 2,
    name: "Priyanshu",
    education: "B.Tech ECE",
    url: "",
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "",
  },
  {
    id: 3,
    name: "Kovid Sharma",
    education: "B.Tech CSE",
    url: "",
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "",
  },
  {
    id: 4,
    name: "Ijlal Ahmed",
    education: "B.Tech CSE",
    url: Ijlal,
    linkedInUrl: "",
    githubUrl: "",
    facebookUrl: "",
  },
  {
    id: 5,
    name: "Vicky Gupta",
    education: "B.Tech CSE",
    url: Vicky,
    linkedInUrl: "https://www.linkedin.com/in/vicky-gupta-61a418175/",
    githubUrl: "https://github.com/Vicky-Guptaa",
    facebookUrl: "https://www.facebook.com/",
  },
];

const AboutUs = () => {
  const allMembers = members.map((member) => {
    return (
      <div
        className=" bg-[color:var(--main-color)] mx-6 mb-12 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] rounded-xl overflow-hidden hover:-translate-y-4 duration-700"
        key={member.id}
      >
        <div className=" border-8 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] rounded-br-[90px] overflow-hidden">
          <img
            src={member.url}
            className="w-56 h-64 object-cover object-top hover:scale-125 duration-[6s] ease-linear"
            alt=""
          />
        </div>
        <div className="text-center p-4">
          <h3 className="text-left text-[color:var(--tertiary-text-color)] font-bold tracking-wider">
            {member.name.toUpperCase()}
          </h3>
          <h4 className="text-left mt-1 text-[color:var(--color-primary)] text-md font-bold">
            {member.education}
          </h4>
          <div className="flex mt-4 gap-4 text-lg text-[color:var(--tertiary-text-color)]">
            <a href={member.facebookUrl} target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href={member.linkedInUrl} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            <a href={member.githubUrl} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-28 mx-auto">
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          About Us
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <p className="mt-6 text-center text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
        dolorum suscipit esse neque quibusdam est atque non iusto ipsam, nihil,
        provident voluptatem tempora, odit facilis consequatur dolore. Fugit
        quam adipisci quia.
      </p>

      <div className="mt-12 flex items-center justify-evenly flex-wrap">
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <FiTarget className="text-2xl" />
            <h3 className="">Mission</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p className="text-[color:var(--tertiary-text-color)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <FaServicestack className="text-2xl" />
            <h3 className="">Service</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p className="text-[color:var(--tertiary-text-color)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8 shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--color-primary)] px-4 py-3 text-white text-lg flex items-center gap-2">
            <RiMessage3Fill className="text-2xl" />
            <h3 className="">Message</h3>
          </div>
          <div className="bg-[color:var(--main-color)] p-4">
            <p className="text-[color:var(--tertiary-text-color)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          Our Team
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <div className="flex justify-evenly items-center flex-wrap mt-12">
        {allMembers}
      </div>
    </div>
  );
};

export default AboutUs;
