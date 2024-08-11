import { Button } from "@headlessui/react";
import HeroImage from "../../img/2.jpg";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 bg-dark-blue p-10">
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
          <div>
            <Button className="bg-">say hello</Button>
            <Button>My Works</Button>
          </div>
          {/* Social */}
          <div>
            <div>follow me:</div>
            <div>fb</div>
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
