import { Link } from "react-router-dom";
import logo from "../assets/lamanita.svg";
import mexicoFlag from "../assets/landing-page/mexico.svg";
import colombiaFlag from "../assets/landing-page/colombia.svg";
import costaricaFlag from "../assets/landing-page/costarica.svg";
import venezuelaFlag from "../assets/landing-page/venezuela.svg";
import argentinaFlag from "../assets/landing-page/argentina.svg";
import panamaFlag from "../assets/landing-page/panama.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-transparent">
      <div className="flex flex-col justify-center items-center h-screen bg-[#CECECC] px-6 md:px-12">
        <img src={logo} className="w-3/4 max-w-[500px] h-auto" alt="logo" />
        <h1 className="text-3xl md:text-[40px] tracking-[10px] uppercase text-white  md:mt-[50px] ">
          Seleccione un pais
        </h1>
        {/* <p className="paragraph">                  å            </p> */}
        <div className="flex flex-wrap justify-center items-center my-8 w-full">
          <CountryLink flag={mexicoFlag} name="MÉXICO" />
          <CountryLink flag={colombiaFlag} name="COMBIA" />
          <CountryLink flag={costaricaFlag} name="COSTA RICÀ" />
          <CountryLink flag={panamaFlag} name="" />
          <CountryLink flag={venezuelaFlag} name="VENUA" />
          {/* <CountryLink flag={argentinaFlag} name="Argentina" /> */}
          
        </div>
      </div>
    </div>
  );
}

const CountryLink = ({ flag, name }) => (
  <div className="flex flex-col justify-center items-center w-1/2 sm:w-1/3 md:w-1/6 p-4">
    <Link to="/home" className="flex flex-col justify-center items-center">
      <img
        className="cursor-pointer w-2/3 h-auto"
        src={flag}
        alt={`${name} flag`}
      />
      <p className="paragraph mt-3 py-1 px-2 text-[#323233] text-[20px]">
        {name}
        
      </p>
      
    </Link>
  </div>
);
