import React from "react";

import { FiTarget } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const members = [
  {
    id: 0,
    name: "Shairin Meraj",
    education: "B.Tech ECE",
    position: "Team Leader",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/682px-Pierre-Person.jpg",
  },
  {
    id: 1,
    name: "Ankur Mishra",
    education: "B.Tech CSE",
    position: "Team Member",
    url: "",
  },
  {
    id: 2,
    name: "Priyanshu",
    education: "B.Tech ECE",
    position: "Team Member",
    url: "",
  },
  {
    id: 3,
    name: "Kovid Sharma",
    education: "B.Tech CSE",
    position: "Team Member",
    url: "",
  },
  {
    id: 4,
    name: "Ijlal Ahmed",
    education: "B.Tech CSE",
    position: "Team Member",
    url: "",
  },
  {
    id: 5,
    name: "Vicky Gupta",
    education: "B.Tech CSE",
    position: "Team Member",
    url: "",
  },
];

const AboutUs = () => {
  const allMembers = members.map((member) => {
    return (
      <div className=" bg-white mx-4 mb-8" key={member.id}>
        <div className="w-42 h-72 overflow-hidden">
          <img src={member.url} className="object-cover object-center w-full h-full" alt="" />
        </div>
        <div className="text-center mt-4">
          <h3>{member.name}</h3>
          <h4>{member.education}</h4>
          <h5>{member.position}</h5>
        </div>
      </div>
    );
  });
  return (
    <div className="mt-24 sm:mt-28 mx-auto md:mt-32">
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          About Us
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
      </div>
      <p className="mt-6 text-center text-[color:var(--secondary-text-color)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae
        dolorum suscipit esse neque quibusdam est atque non iusto ipsam, nihil,
        provident voluptatem tempora, odit facilis consequatur dolore. Fugit
        quam adipisci quia.
      </p>

      <div className="mt-12 flex items-center justify-evenly flex-wrap">
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8 shadow-md shadow-gray-500 hover:scale-110 duration-700 ease-in-out">
          <div className="bg-[color:var(--main-color)] px-4 py-3 text-lg flex items-center gap-2">
            <FiTarget className="text-2xl" />
            <h3 className="">Mission</h3>
          </div>
          <div className="bg-[color:var(--color-primary)] p-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8">
          <div className="bg-[color:var(--main-color)] px-4 py-3 text-lg flex items-center gap-2">
            <FaServicestack className="text-2xl" />
            <h3 className="">Service</h3>
          </div>
          <div className="bg-[color:var(--color-primary)] p-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden w-72 mx-4 mb-8">
          <div className="bg-[color:var(--main-color)] px-4 py-3 text-lg flex items-center gap-2">
            <RiMessage3Fill className="text-2xl" />
            <h3 className="">Message</h3>
          </div>
          <div className="bg-[color:var(--color-primary)] p-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              dignissimos. Quo sequi natus eaque fugit commodi.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center flex-wrap mt-12">
        {allMembers}
      </div>
    </div>
  );
};

export default AboutUs;
