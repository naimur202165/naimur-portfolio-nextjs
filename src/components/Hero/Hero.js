import { Button } from "@headlessui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 bg-dark-blue ">
        <div>
          <div>
            <h2 className="text-white text-4xl text-center">Naimur Rahman</h2>
            <h3 className="text-white text-center">
              _____Teacher and & web dev
            </h3>
            <p className="text-gray-text text-center">
              I am passoinate web dev and youtube <br></br> content creator. I
              am also Wordpress dev
            </p>
          </div>
          <div>
            <Button>say hello</Button>
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
          <img src={"../../img/2.jpg"} alt="naimur rahman durjoy" />
        </div>
      </div>
    </>
  );
}
