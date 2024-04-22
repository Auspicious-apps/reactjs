import React from "react";
import Download from "./Download";
import LaManita from "../assets/pdfs/La Manita Preguntas Frecuentes .pdf";
import cited from "../assets/pdfs/CITED FAQ ABOUT PSILOCYBIN.pdf";
import protocol from "../assets/pdfs/PROTOCOLO DE MICRODOSIS DE PAUL STAMETS.pdf";
import pdf1 from "../assets/Ventajas/VideoLamanita.mp4";
// import illustraciones from "../assets/file.zip";

const Descargas = () => {
  const files = [
    {
      name: "PREGUNTAS FRECUENTES Y RESPUESTAS CON CITAS (PDF)",
      file: LaManita,
    },
    {
      name: "PROTOCOLO DE MICRODÓSIS DE PAUL STAMETS (PDF)",
      file: protocol,
    },
    {
      name: "IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (JPG)",
      file: cited,
    },
    {
      name: "VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)",
      file: pdf1,
    },
    // {
    //   name: "IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (Zip)",
    //   file: "../assets/file.zip",
    // },
    // {
    //   name: "VIDEO DEMOSTRANDO EL PRODUCTO Y SUS USOS (MP4)",
    //   file: null,
    // },
  ];

  const downloadZip = () => {
    const link = document.createElement("a");
    link.href = "../assets/whatsapp.rar";
    link.download = "whatsapp.rar";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid gap-10 text-white p-10 md:p-20 bg-[#333]">
      <div className="flex justify-center">
        <h1 className="font-[SunrollBold] leading-[80px] tracking-[1px] text-4xl text-[#fff] md:text-6xl p-1">
          D<span className="text-[#CECECC]"></span>
          RAS
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 font-semibold">
        <div className="grid gap-8">
          {files.map((file, index) => (
            <DownloadItem title={file.name} file={file.file} key={index} />
          ))}
          {/* <DownloadItem
            title={"IMÁGENES ILUSTRATIVAS PARA INSTAGRAM (Zip"}
            key={"zip"}
            handler={downloadZip}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Descargas;

const DownloadItem = ({ title, file, handler }) => (
  <a
    onClick={handler}
    href={file}
    className="flex text-gray-300 gap-10 md:text-[22px] items-center"
    download // Add download attribute to make the link downloadable
  >
    <span className="">
      <Download />
    </span>
    {title}
  </a>
);
