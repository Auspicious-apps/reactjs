import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Zobrez1 from "../assets/Illustraciones/Zobrez y La Manita-1.png";
import Zobrez2 from "../assets/Illustraciones/Zobrez y La Manita-2.png";
import Zobrez3 from "../assets/Illustraciones/Zobrez y La Manita-3.png";
import Zobrez4 from "../assets/Illustraciones/Zobrez y La Manita-4.png";
import Zobrez5 from "../assets/Illustraciones/Zobrez y La Manita-5.png";
import Zobrez6 from "../assets/Illustraciones/Zobrez y La Manita-6.png";
import Zobrez7 from "../assets/Illustraciones/Zobrez y La Manita-7.png";
import Zobrez8 from "../assets/Illustraciones/Zobrez y La Manita-8.png";
import Zobrez9 from "../assets/Illustraciones/Zobrez y La Manita-9.png";
import Zobrez10 from "../assets/Illustraciones/Zobrez y La Manita-10.png";
import Zobrez11 from "../assets/Illustraciones/Zobrez y La Manita-11.png";
import Zobrez12 from "../assets/Illustraciones/Zobrez y La Manita-12.png";
import Zobrez13 from "../assets/Illustraciones/Zobrez y La Manita-13.png";
import Zobrez14 from "../assets/Illustraciones/Zobrez y La Manita-14.png";
import Zobrez15 from "../assets/Illustraciones/Zobrez y La Manita-15.png";
import Zobrez16 from "../assets/Illustraciones/Zobrez y La Manita-16.png";
import Zobrez17 from "../assets/Illustraciones/Zobrez y La Manita-17.png";
import Zobrez18 from "../assets/Illustraciones/Zobrez y La Manita-18.png";

const Ilustraciones = () => {
  return (
    <div>
      <div className="bg-[#ccccca] flex justify-center p-10">
        <h1 className="font-[SunrollBold] leading-[82px] text-4xl md:text-[68px]">
          <span className="text-white uppercase">i</span>US
          <span className="text-white uppercase">TRACION</span>ES
        </h1>
      </div>
      <div className="bg-[#f9f9f6] gap-5 md:gap-10 text-gray-400 text-lg md:text-xl flex flex-col justify-center items-center p-5 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-[100px] gap-5 md:gap-10">
          {[
            Zobrez1,
            Zobrez2,
            Zobrez3,
            Zobrez4,
            Zobrez5,
            Zobrez6,
            Zobrez7,
            Zobrez8,
            Zobrez9,
            Zobrez10,
            Zobrez11,
            Zobrez12,
            Zobrez13,
            Zobrez14,
            Zobrez15,
            Zobrez16,
            Zobrez17,
            Zobrez18,
          ].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Illustration ${index + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ilustraciones;
