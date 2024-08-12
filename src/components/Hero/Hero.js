import { Button } from "@headlessui/react";
import HeroImage from "../../img/2.jpg";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// components/IconExample.js
export default function Hero() {
  return (
    <>
      <div className="sm:grid sm:grid-rows-2 sm:grid-flow-col md:grid md:grid-rows-1 sm:grid-flow-col   lg:grid lg:grid-rows-1 lg:grid-flow-col gap-4 bg-dark-blue p-10">
        <div>
          <div>
            <h2 className="text-white text-3xl    lg:text-5xl sm:text-3xl text-center py-2 font-bold">
              MD Naimur Rahman
            </h2>
            <h3 className="text-white text-center py-3">
              _____Teacher and & web dev
            </h3>
            <p className="text-gray-text text-center lg:py-5 sm:py-4 font-semibold">
              I am passoinate web dev & seo expart on web.
              <br /> I am also a student of english literature
            </p>
          </div>
          <div className="py-4 flex justify-center gap-4 ">
            <Button className="bg-pink text-white  hover:bg-white py-3 px-3  rounded">
              <p className="hover:text-black">Say Hello</p>
            </Button>
            <Button className="bg-pink text-white  hover:bg-white px-3   rounded">
              <p className="hover:text-black">My Works</p>
            </Button>
          </div>
          {/* Social */}
          <div className="flex justify-center items-center lg:gap-5 gap-2 py-5">
            <div className="text-white w-auto text-2xl">Soical:</div>
            <div className="flex lg:gap-3">
              <a href="https://www.facebook.com/naimur202164">
                {" "}
                <FontAwesomeIcon
                  className="w-8 h-8 hover:scale-150 transition ease-in-out delay-100"
                  icon={faFacebook}
                  color="#3b5998"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a href="https://github.com/naimur202164-rony">
                {" "}
                <FontAwesomeIcon
                  className="w-8 h-8 hover:scale-150 transition ease-in-out delay-100"
                  icon={faGithub}
                  color="#333"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/naimur202164/">
                {" "}
                <FontAwesomeIcon
                  className="w-8 h-8 hover:scale-150 transition ease-in-out delay-100"
                  icon={faLinkedin}
                  color="#0077b5"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a href="https://wa.link/bymce0">
                {" "}
                <FontAwesomeIcon
                  className="w-8 h-8 hover:scale-150 transition ease-in-out delay-100"
                  icon={faWhatsapp}
                  size="2x"
                  color="#25D366"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a href="https://www.youtube.com/@naimuracademy">
                <FontAwesomeIcon
                  className="w-8 h-8 hover:scale-150 transition ease-in-out delay-100"
                  icon={faYoutube}
                  size=""
                  color="#FF0000"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="py-5 flex justify-center">
          <Image
            className="w-96 h-auto"
            src={HeroImage}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}
