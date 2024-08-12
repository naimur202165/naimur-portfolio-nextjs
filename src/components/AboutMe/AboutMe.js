import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="bg-pink">
        <div className="lg:flex justify-center">
          <div className="">Image will be here</div>
          <div className="p-10">
            <div>
              <h2 className="text-white lg:text-4xl sm:text-3xl text-4xl">
                About Me___
              </h2>
              <p className="text-gray-text text-md py-3">
                With 10 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white p-4 rounded text-lg">
                Download CV
              </button>
              <h2>Signature will be here </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
