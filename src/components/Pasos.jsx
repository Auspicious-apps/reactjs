import React from "react";

const Pasos = () => {
  return (
    <div>
      <div className="bg-[#ccccca] flex justify-center p-10">
        <h1 className="font-[SunrollBold] text-4xl md:text-6xl">
          <span className="text-white uppercase">PASOS</span>DEL{" "}
          <span className="text-white uppercase">PROTO</span>CO
          <span className="text-white uppercase"></span>
        </h1>
      </div>
      <div className="text-data bg-[#f9f9f6] gap-3 md:gap-10 text-gray-400 text-lg md:text-xl flex flex-col justify-center items-center p-10 md:p-20">
        <p className="w-full text-[#CACAC8] md:w-[80%]">
          1 . TERAPIA EN CONJUNTO CON MICRODÓSIS PRODUCE CAMBIOS RÁPIDOS.
        </p>
        <p className="w-full md:w-[80%]">
          2 . EL MEDICAMENTO SE TOMA POR 7 SEMANAS Y SE DESCANSA LA OCTAVA.
        </p>
        <p className="w-full md:w-[80%]">
          3 . SE INTERCALA LA TOMA (UN DÍA SÍ Y UN DÍA NO).
        </p>
        <p className="w-full md:w-[80%]">
          4 . SEMANA 1: DIVIDIR UN SOBRE EN 2 TOMAS AL DÍA (SIN TOLERANCIA)
        </p>
        <p className="w-full md:w-[80%]">
          5 . SEMANA 2-7: TOMAR 1 SOBRE ENTERO (CON O SIN ALIMENTO)
        </p>
        <p className="w-full md:w-[80%]">
          6 . REPETIR LAS VECES DESEADAS AL AÑO.
        </p>
      </div>
    </div>
  );
};

export default Pasos;
