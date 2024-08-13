import React from "react";
import signature from "../../img/signature (1).png";
import Image from "next/image";
export default function AboutMe() {
  return (
    <>
      <div className="bg-pink">
        <div className="lg:flex justify-center">
          <div className="">h</div>
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
            <div className="flex items-center  justify-center gap-3">
              <button className="bg-white p-4 rounded text-lg">
                Download CV
              </button>
              <div className="h-20 w-40 flex justify-center">
                <Image src={signature} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
