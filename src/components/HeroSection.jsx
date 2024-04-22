import { useState, useEffect } from "react";
// import Navbar from "./Navbar";
import macroChoco from "../assets/hero-section/MAC CHOCO BLANCHE.webp";
import macroCinamon from "../assets/hero-section/MAC CINNAMON.webp";
import macroGold from "../assets/hero-section/MAC GOLDEN CACAO.webp";
import macroLemon from "../assets/hero-section/MAC LEMON.webp";
import microCacao from "../assets/hero-section/MIC CACAO.webp";
import microVanilla from "../assets/hero-section/MIC VANILLA.webp";
import microPro from "../assets/hero-section/micro-product.webp";
import rightHorse from "../assets/hero-section/right-horse.svg";
import leftHorse from "../assets/hero-section/left-horse.svg";
import CloseIcon from "./CloseIcon";

const HeroSection = () => {
  const microImages = [microCacao, microVanilla, microPro];
  const macroImages = [macroChoco, macroCinamon, macroGold];

  const [currentMacroIndex, setCurrentMacroIndex] = useState(0);
  const [currentMicroIndex, setCurrentMicroIndex] = useState(0);

  const [overlayImage, setOverlayImage] = useState(null);

  // Function to handle click on an image
  // const handleSlideClick = (image) => {
  //   setOverlayImage(image);
  // };

  // Function to close the overlay
  const closeOverlay = () => {
    setOverlayImage(null);
  };

  useEffect(() => {
    const macroInterval = setInterval(() => {
      setCurrentMacroIndex((prevIndex) => (prevIndex + 1) % macroImages.length);
    }, 3000);

    const microInterval = setInterval(() => {
      setCurrentMicroIndex((prevIndex) => (prevIndex + 1) % microImages.length);
    }, 3000);

    return () => {
      clearInterval(macroInterval);
      clearInterval(microInterval);
    };
  }, [macroImages.length, microImages.length]);

  return (
    <div className="w-full">
      <div className="flex flex-col  md:flex-row">
        <div
          style={{
            backgroundImage: `url(${leftHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-full md:w-[55%] bg-[#ccccca] bg-cover bg-center bg-no-repeat relative"
        >
          <div className="flex flex-col md:pt-[100px] items-center p-8 md:p-16">
            <h2 className="font-[SunrollBold] sm:leading-[80px] text-white text-[36px] md:text-[68px] z-10 ">
              MA<span className="text-black">CR</span>
            </h2>
            <p className="text-[#323233] font-[Claston] sm:text-[30px] mt-[20px] md:mt-[30px]">
              EL MEJOR VIAJE DE TU VIDA
            </p>
            <img
              src={macroImages[currentMacroIndex]}
              className="w-full md:max-w-lg"
              alt="left product image"
              onClick={() => setOverlayImage(macroImages[currentMacroIndex])}
            />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${rightHorse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px",
            // height: "900px",
            backgroundPositionY: "bottom",
          }}
          className="w-full md:w-[45%] md:h-[900px] bg-[#323232] bg-cover bg-center relative"
        >
          <div className="flex flex-col justify-center  items-center p-8 md:p-16">
            <img
              src={microImages[currentMicroIndex]}
              className="w-full md:max-w-lg"
              alt="right product image"
              onClick={() => setOverlayImage(microImages[currentMacroIndex])}
            />
            <h2 className="font-[SunrollBold] sm:leading-[80px] text-[36px] text-white z-10 md:text-[68px] mt-[30px] mt-8">
              MI<span className="text-gray-300">CR</span>
            </h2>
            <p className="text-[#CECECC] font-[Claston] sm:text-[30px] mt-[20px] md:mt-[50px]">
              RESTAURA TU MEJOR YO
            </p>
          </div>
        </div>
      </div>
      {overlayImage && (
        <div className="fixed top-0 z-30 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <img
            src={overlayImage}
            alt="overlay"
            className="max-h-full max-w-full"
            // onClick={closeOverlay}
          />
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 bg-white px-2 py-1 rounded"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
