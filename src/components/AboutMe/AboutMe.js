import React from "react";
import signature from "../../img/signature (1).png";
import Image from "next/image";
export default function AboutMe() {
  return (
    <>
      <div className="bg-pink">
        <div className="lg:flex justify-center">
          <div className="w-full">h</div>
          <div className="p-10 w-full p-3">
            <div>
              <h2 className="text-white lg:text-4xl sm:text-3xl text-4xl">
                About Me___
              </h2>
              <p className="text-gray-text text-md py-3">
                Hi I am Naimur Rahman . I am Student of English liteature. I
                love to do coding. I love to develop web application on next js.
                I also love to make web site using wordpress.
              </p>
            </div>
            <div className="flex items-center  justify-center gap-10">
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
