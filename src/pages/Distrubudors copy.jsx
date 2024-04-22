import Dist2 from "../components/Dist2";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Distribudors.css";
import { FaWhatsapp } from "react-icons/fa";
export default function Distrubudors() {
  return (
    <div>
      <div className="halfbg fixed w-full">
        <Navbar />
      </div>
      <div className="intro2 flex-center">
        <Map />
      </div>
      <div>
        <div className="mb-20">
          <h1 className="text-white text-[44px] bg-gruu py-5 text-center w-full">
            INGRESE Y PUBLIQUE SUS DATOS DE LLENE EL FORMULARIO
          </h1>
        </div>
        {/* <ul className="grid sm:grid-cols-5 grid-cols-1 flex-center gap sm:gap-32 text-[20px]"> */}

        <div>
           
        </div>
        <div className="flex-center flex-col gap-20">
             <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-16 text-[20px]  ">
            <li>MÉXICO</li>
            <li>COLOMBIA</li>
            <li>COSTA RICA</li>
            <li>PANAMA</li>
            <li>VENEZUELA</li>
          </ul>
          
          <div className="flex-center flex-col gap-10">
            <h1 className="text-center text-[24px]">CIUDAD DE MEXICO</h1>
            <div className="flex-start flex-col gap-10">
              <div className="grid grid-cols-4 flex-center gap-4 sm:gap-32">
                <ul className="flex-start flex-col gap-10">
                  <li>Ciudad de</li>
                  <li>Ciudad de</li>
                  <li>Ciudad de</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>ERIC HADDAD</li>
                  <li>PALACE VAPE SHOP</li>
                  <li>TONY’S TATTOOS</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>+52 55 2799</li>
                  <li>+52 55 2799</li> 
                  <li>+52 55 2799</li>
                </ul>
                <ul className="flex-start flex-col gap-4">
                  <li>
                      <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                  <li>
                     <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                  <li>
                      <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[24px]">QUERETARO</h1>
            <div className="flex-start flex-col ">
              <div className="grid grid-cols-4 flex-center gap-4 sm:gap-32">
                <ul className="flex-start flex-col gap-20">
                  <li>San Miguel</li>
                </ul>
                <ul className="flex-start flex-col gap-20">
                  <li>JORGE NAVARRETE</li>
                </ul>
                <ul className="flex-start flex-col gap-20">
                  <li>+52 55 2799</li>
                </ul>
                <ul className="flex-start flex-col gap-14">
                  <li>
                      <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[24px]">QUINTANA ROO</h1>
            <div className="flex-start flex-col">
              <div className="grid grid-cols-4 flex-center gap-6 sm:gap-32">
                <ul className="flex-start flex-col gap-10">
                  <li>Cancun</li>
                  <li>Playa del</li>
                  <li>Tulum</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>JORGE NAVARRETE</li>
                  <li>RAUL PACHECO</li>
                  <li>ANTONIO</li>
                </ul>
                <ul className="flex-start flex-col gap-10">
                  <li>+52 55 2799</li>
                  <li>+52 55 2799</li>
                  <li>+52 55 2799</li>
                </ul>
                <ul className="flex-start flex-col gap-4">
                  <li>
                    <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                  <li>
                     <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                  <li>
                     <button className="bg-[#323233] px-4 py-2 text-white ">
                     <span className="hidden sm:block">
                         ABRIR WHATSAPP
                     </span>
                     <FaWhatsapp className="sm:hidden" size={30} />

                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dist2 />
    </div>
  );
}
