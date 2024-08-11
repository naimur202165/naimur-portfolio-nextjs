import { Button } from "@headlessui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 bg-dark-blue ">
        <div>
          <div>
            <h2 className="text-white">Naimur Rahman</h2>
            <h3 className="text-gray-text">Teacher and & web dev</h3>
            <p className="text-gray-text">
              I am passoinate web dev and youtube content creator
            </p>
          </div>
          <div>
            <button>say hello</button>
            <button>say hello</button>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
