import { Button } from "@headlessui/react";
import HeroImage from "../../img/2.jpg";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <>
      <div className="sm:grid sm:grid-rows-2 sm:grid-flow-col md:grid md:grid-rows-1 sm:grid-flow-col   lg:grid lg:grid-rows-1 lg:grid-flow-col gap-4 bg-dark-blue p-10">
        <div>
          <div>
            <h2 className="text-white text-4xl text-center p-2">
              Naimur Rahman
            </h2>
            <h3 className="text-white text-center">
              _____Teacher and & web dev
            </h3>
            <p className="text-gray-text text-center p-3">
              I am passoinate web dev and youtube <br></br> content creator. I
              am also Wordpress dev
            </p>
          </div>
          <div className="py-4 flex justify-center">
            <Button className="bg-pink text-white ms-1  py-3 px-4 hover:bg-white   rounded">
              <p className="hover:text-black">Say Hello</p>
            </Button>
            <Button className="bg-pink text-white py-3 px-4 mx-5 hover:bg-white   rounded">
              <p className="hover:text-black">My Works</p>
            </Button>
          </div>
          {/* Social */}
          <div>
            <div>follow me:</div>
            <div>
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
            <div>linkedin</div>
            <div>insta</div>
          </div>
        </div>

        <div>
          <Image
            className="w-80 h-auto"
            src={HeroImage}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}
