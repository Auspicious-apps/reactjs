import React, { useState } from "react";
import CloseIcon from "../components/CloseIcon";
import CountrySelect from "./CountrySelect";

const FormData = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component with form data
    onSubmit({ name, phoneNumber });
    // Clear the form fields
    setName("");
    setPhoneNumber("");
  };

  return (
    <div className="form-popup absolute top-0 left-0 right-0 w-full h-full z-10 bg-white grid place-items-center">
      <div className="inner-popup bg-[#CACAC8] py-3 px-5 max-w-[70%] mx-auto w-full ">
        <span className="close-icon float-right" onClick={onCancel}>
          {" "}
          <CloseIcon />{" "}
        </span>
        <h2 className="font-[SunrollBold] sm:leading-[80px] tracking-[1px] my-[30px] text-[#323233] text-center text-[30px] sm:text-[68px]">
          DIS<span className="text-white">TRI</span>BU
          <span className="text-white">DOR</span>?
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 mb-4 justify-end">
            <label
              htmlFor="name"
              className="w-[40%] text-[#323233] md:text-[30px] text-right"
            >
              NOMBRE O NEGOCIO
            </label>
            <input
              className="w-[60%] p-2"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mb-4 justify-end">
            <label
              htmlFor="phoneNumber"
              className="w-[40%] text-[#323233] md:text-[30px] text-right"
            >
              TELEFONO COMPLETO
            </label>
            <input
              className="w-[60%] p-2"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <CountrySelect />
          <div className="flex gap-4 my-[30px] justify-end items-center">
            <button
              type="button"
              onClick={onCancel}
              className="bg-[#323233] text-[#fff] md:text-[22px] px-4 py-2 "
            >
              SALIR
            </button>
            <input
              type="submit"
              value="INGRESAR"
              className="bg-[#323233] text-[#fff] md:text-[22px] px-4 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
