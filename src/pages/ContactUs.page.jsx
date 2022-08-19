import React from "react";

import Button from "../components/Button/Button.component";

const ContactUs = () => {
  return (
    <div className="mt-32 mx-auto md:mt-36 bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[560px] md:mx-auto shadow-gray-400 rounded-xl p-8">
      <form action="" />
      <div className="header flex flex-col items-center justify-center">
        <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2">
          Contact Us
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>

        <br />
        <h2 className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Any queries? Get in touch!
        </h2>
        <br />
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green -500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <Button type="button" className="btn-base px-6 py-2">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
