import CloseIcon from "./CloseIcon";
import MicBox from "../assets/Acercade/mic_box.png";
import LaManita from "../assets/pdfs/La Manita Preguntas Frecuentes .pdf";
// import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import protocol from "../assets/pdfs/PROTOCOLO DE MICRODOSIS DE PAUL STAMETS.pdf";
import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import LamanitaVIdeo from "../assets/Ventajas/VideoLamanita.mp4";

import { useRef, useState } from "react";
import Download from "./Download";

const Acercade = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayImage, setOverlayImage] = useState(null);

  // const closeOverlaye = () => {
  //   setOverlayImage(null);
  // };
  const video = useRef();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const closeOverlay = () => {
    if (video.current) {
      console.log(video.current);
      video.current.pause();

      video.current.currentTime = 0;
    }

    setShowOverlay(false);
    setOverlayImage(null);
    // DELETE VIDEO FROM DOM
  };

  const files = [
    {
      name: "PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS",
      file: LaManita,
      typ: "(PDF)",
    },
    {
      name: "PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS",
      file: protocol,
      typ: "(PDF)",
    },
    {
      name: "MÁGENES ILUSTRATIVAS PARA INSTAGRAM",
      file: cited,
      typ: "(JPG)",
    },
    {
      name: "VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS",
      file: LamanitaVIdeo,
      typ: "(MP4)",
    },
  ];
  return (
    <div className="pdf-section-grid relative px-4 md:px-10 md:pt-[80px] md:pb-[150px] pb-[30px] pt-[40px]">
      <div className="left-column-1 w-full flex justify-center flex-col">
        <div className="flex mb-[20px] md:mb-[90px]">
          <h1 className="font-[SunrollBold] text-[36px] md:text-[68px] text-[#323233]">
            ACER
            <span className="text-gray-200"></span> 
          </h1>
        </div>
        <p className="max-w-[1000px] text-[18px] md:text-[22px] text-[#000]">
          Históricamente se ha comprobado que los hongos mágicos (Psilocibe
          Cubensis) son responsables por varios avances mentales de nuestra
          especie. Ahora, científicamente se está comprobando la efectividad de
          esta molécula en curar a pacientes con drogadicción, depresión,
          ansiedad y anti-sociabilidad, entre otras. ¡Sane el pasado y retome su
          esencia!
        </p>
        <div className="gap-5 grid mt-[30px]">
          <div className="flex flex-col gap-3 ">
            {files.map((file, index) => (
              <DownloadItem
                title={file.name}
                file={file.file}
                key={index}
                filetype={file.typ}
              />
            ))}
          </div>
          <div className="flex md:flex-nowrap gap-3 flex-wrap justify-between items-center">
            <div
              className=" text-center cursor-pointer w-full md:w-[50%] md:max-w-[500px] "
              onClick={() => setShowOverlay(true)}
            >
              <p className="bg-[#323233] p-2 md:px-5 pt-2.5 text-white">
                REPRODUZCA EL VIDEO E NINFORMESE
              </p>
            </div>
            <p className="max-w-[550px] text-[18px] text-[#000]">
              * <span className="text-[#CACAC8]">Dato curioso</span>: Fué vuelta
              ilegal en 1973 precisamente porque libera la mente de sistemas de
              pensar que atan.
            </p>
          </div>
        </div>
      </div>
      <div className="right-column-1 absolute top-[20%] right-[5%]">
        <img
          src={MicBox}
          alt=""
          className="hidden md:block w-full min-w-[300px]"
          onClick={() => setOverlayImage(MicBox)}
        />
      </div>
      {overlayImage && (
        <div className="fixed top-10 z-30 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
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
      {/* overlay section with video tag  */}
      {showOverlay && (
        <div className="fixed top-0 z-30 left-0 w-[100%] h-[100%] flex items-center justify-center bg-black bg-opacity-75">
          <video
            ref={video}
            src={LamanitaVIdeo}
            // src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay // Add autoPlay attribute
            className="w-full h-full"
            onPause={handlePause}
            onPlay={handlePlay}
            // onClick={closeOverlay}
          ></video>
          <button
            onClick={closeOverlay}
            className="absolute top-4 right-4 text-black bg-white px-2 py-2 "
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

const DownloadItem = ({ title, file, filetype }) => (
  <a
    href={file}
    className="flex text-sm md:text-[22px] text-[#000] items-center uppercase"
    download // Add download attribute to make the link downloadable
  >
    <span className="text-[#CECECC] pr-[20px]">
      <Download />
    </span>
    {title}
    <span className="text-[#CECECC] pl-[20px]"> {filetype} </span>
  </a>
);

export default Acercade;
