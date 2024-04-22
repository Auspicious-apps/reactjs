import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Artboard25 from "../assets/Descargas/Artboard 25.png";
import Artboard26 from "../assets/Descargas/Artboard 26.png";
import Artboard27 from "../assets/Descargas/Artboard 27.png";
import Artboard28 from "../assets/Descargas/Artboard 28.png";
import Artboard29 from "../assets/Descargas/Artboard 29.png";
import Artboard30 from "../assets/Descargas/Artboard 30.png";
import Artboard31 from "../assets/Descargas/Artboard 31.png";
import Footer from "./Footer";

const Expricance = () => {
  const images = [
    {
      text: "LA NUEVA IGLE SIA FAMILIAR",
      img: Artboard25,
    },

    {
      text: "RENACE CON ASOMBRO",
      img: Artboard26,
    },

    {
      text: "COMPARTE EN INTIMIDAD",
      img: Artboard27,
    },

    {
      text: "PERCIBLE LA NATURALEZA EN TODO SU EXPLENDOR",
      img: Artboard28,
    },

    {
      text: "NO VUELVAS A DUDAR QUE ERES PARTE DE ALGO INFINITO",
      img: Artboard29,
    },

    {
      text: "FÁCILMENTE ANCLA NUEVOS PATRONES DE CONDUCTA",
      img: Artboard30,
    },

    {
      text: "VUELVETE CAPAZ DE DECIR LO NECESARIO",
      img: Artboard31,
    },
  ];

  return (
    <div>
      <div className="mb-10 sm:mb-20">
        <h1 className="font-[SunrollBold] text-[#323233] text-[44px] bg-[#dbdbdb] py-5 text-center w-full">
          EX
          <span className="text-white uppercase">PER</span>Inc
          <span className="text-white uppercase">ES</span>
        </h1>
      </div>
      <div className="hidden sm:block">
        <div className="flex-col flex-center mb-20 md:px-[50px] px-[20px] ">
          <div className="image-text-grids md:px-[60px] grid grid-cols-2 items-center justify-items-center">
            <div className="left-grid">
              <img src={Artboard25} className="" alt="illustration" />
            </div>

            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              LA NUEVA IGLE SIA FAMILIAR
            </p>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              RENACE CON ASOMBRO
            </p>
            <div className="left-grid">
              <img src={Artboard26} alt="illustration" />
            </div>
            <div className="left-grid">
              <img src={Artboard27} alt="illustration" />
            </div>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              COMPARTE EN INTIMIDAD
            </p>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              PERCIBLE LA NATURALEZA EN TODO SU EXPLENDOR
            </p>
            <div className="left-grid">
              <img src={Artboard28} alt="illustration" />
            </div>
            <div className="left-grid">
              <img src={Artboard29} alt="illustration" />
            </div>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              NO VUELVAS A DUDAR QUE ERES PARTE DE ALGO INFINITO
            </p>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              FÁCILMENTE ANCLA NUEVOS PATRONES DE CONDUCTA
            </p>
            <div className="left-grid">
              <img src={Artboard30} alt="illustration" />
            </div>
            <div className="left-grid">
              <img src={Artboard31} alt="illustration" />
            </div>
            <p className="text-white bg-[#323233] text-center text-[32px] leading-snug">
              VUELVETE CAPAZ DE DECIR LO NECESARIO
            </p>
          </div>
        </div>
      </div>

      <div className="sm:hidden grid gap-10 justify-items-center pb-10">
        {images.map((image, index) => (
          <div className="grid w-4/5  relative h-[300px] " key={index}>
            <img
              src={image.img}
              alt="illustration"
              className="absolute top-0 left-0 w-full object-cover "
            />
            <p className="text-white  bg-[#32323322] w-full text-center  flex-center text-[32px] leading-snug relative z-10 ">
              {image.text}
            </p>
          </div>

          // <div key={index}>
          //   <div>

          // <img src=P{} alt="" />

          //   </div>
          // </div>
        ))}
      </div>

      <div className="">
        <div>
          <div className="bg-[#ccccca]  flex justify-center p-10">
            <h1 className="font-[SunrollBold] text-4xl md:text-6xl">
              <span className="text-white uppercase">Re</span>CONO
              <span className="text-white uppercase">Clmient</span>OS
            </h1>
          </div>
          <div className="grey-section flex flex-col p-20 text-lg text-gray-400 gap-4 items-center justify-center">
            <p>CEPAS Y POTENCIA LOGRADA</p>
            <p>PRIMER LUGAR EN EXPO WEED 2023</p>
            <p>ARTÍCULO EN CAÑAMO 2024</p>
          </div>
        </div>
        {/* <p className="bg-black flex items-center justify-center gap-2 md:gap-5 text-lg md:text-xl p-2 w-full text-white text-center">
          CONTACTE +52 55 2799 ABRIR WHATSAPP
          <FaWhatsapp size={30} />
        </p> */}
        <Footer />
      </div>
    </div>
  );
};

export default Expricance;
