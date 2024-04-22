import Dist2 from "../components/Dist2";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Map from "../components/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Distribudors.css";
import { FaWhatsapp } from "react-icons/fa";
import FormData from "../components/FormData";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { products } from "../context/siteStore";

export default function Distrubudors() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = (formData) => {
    // Handle form submission here, e.g., send data to server
    console.log("Form Data:", formData);
    closePopup(); // Close the popup after form submission
  };
  const handleWhatsapp = () => {
    window.open("whatsapp://send?phone=+573043049174");
  };
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
        <Navbar toggleCart={toggleCart} />
        {showCart && <Cart toggleHandle={toggleCart} products={products} />}
      <div className="intro2 relative flex-center">
        <Map />
      </div>
      <div>
        <div className="mb-20">
          <div className="flex justify-center p-2 mt-5 items-center">
            <h1 className="text-[#CACAC8] text-[24px] bg-gruu  text-center">
              INGRESE Y PUBLIQUE SUS DATOS
            </h1>
            <button
              className="bg-[#323233] text-[#CACAC8]  py-2 px-5 mx-3"
              onClick={openPopup}
            >
              LLENE EL FORMULARIO{" "}
            </button>
            {isPopupOpen && (
              <FormData onSubmit={handleSubmit} onCancel={closePopup} />
            )}
          </div>
        </div>
        {/* <ul className="grid sm:grid-cols-5 grid-cols-1 flex-center gap sm:gap-32 text-[20px]"> */}

        <div></div>
        <div className="flex-center flex-col gap-20">
          <ul className="font-[SunrollBold] country-list flex flex-wrap items-center justify-center gap-4 sm:gap-16 text-[20px]  ">
            <li>MÉXICO</li>
            <li>COMBIA</li>
            <li>COSTA RICÀ</li>
            <li></li>
            <li>VENUA</li>
          </ul>
          <div className="flex-center flex-col gap-10">
            <h1 className="text-[#CACAC8] text-center text-[30px]">
              CIUDAD DE MEXICO
            </h1>
            <div className="flex-start flex-col gap-10">
              <div className="grid gap-16 sm:gap-5">
                <ul className="number-list grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de Mexico</li>
                  <li>ERIC HADDAD KOENIG</li>
                  <li className="text-[#CACAC8] ">+52 5527994821</li>
                  <li>
                    <button className="px-4 py-2 " onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
                <ul className="number-list grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de Mexico</li>
                  <li>PALACE VAPE SHOP...</li>
                  <li className="text-[#CACAC8] ">+52 55 27998283</li>
                  <li>
                    <button className="px-4 py-2 " onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
                <ul className=" number-list grid grid-cols-4 gap-4 sm:gap-10">
                  <li>Ciudad de Mexico</li>
                  <li>TONY’S TATTOOS</li>

                  <li className="text-[#CACAC8] ">+52 55 27994821</li>
                  <li>
                    <button className="px-4 py-2" onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[#CACAC8]  text-[30px]">
              QUERETARO
            </h1>
            <div className="flex-start flex-col ">
              <div className="grid grid-cols-4 flex-center gap-4 sm:gap-32">
                <ul className="number-list number-list flex-start flex-col gap-20">
                  <li>San Miguel de Ay...</li>
                </ul>
                <ul className="number-list flex-start flex-col gap-20">
                  <li>JORGE NAVARRETE</li>
                </ul>
                <ul className="number-list flex-start flex-col gap-20">
                  <li className="text-[#CACAC8] ">+52 55 27994821</li>
                </ul>
                <ul className="number-list flex-start flex-col gap-14">
                  <li>
                    <button className="px-4 py-2" onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-center text-[#CACAC8] text-[30px]">
              QUINTANA ROO
            </h1>
            <div className="flex-start flex-col">
              <div className="grid grid-cols-4 flex-center mb-[60px] gap-6 sm:gap-32">
                <ul className="number-list flex-start flex-col gap-4">
                  <li>Cancun</li>
                  <li>Playa del Carmen</li>
                  <li>Tulum</li>
                </ul>
                <ul className="number-list flex-start flex-col gap-4">
                  <li>JORGE NAVARRETE</li>
                  <li>RAUL PACHECO</li>
                  <li>ANTONIO</li>
                </ul>
                <ul className="number-list flex-start flex-col gap-4">
                  <li className="text-[#CACAC8] "> +52 55 27994821</li>
                  <li className="text-[#CACAC8] ">+52 55 27994821</li>
                  <li className="text-[#CACAC8] ">+52 55 27994821</li>
                </ul>
                <ul className="flex-start number-list flex-col gap-3">
                  <li>
                    <button className="px-4 py-2" onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                  <li>
                    <button className="px-4 py-2 " onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                  <li>
                    <button className="px-4 py-2 " onClick={handleWhatsapp}>
                      <span className="hidden sm:block">ABRIR WHATSAPP</span>
                      <FaWhatsapp className="sm:hidden" size={30} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Dist2 /> */}
      {/* <Footer /> */}
    </div>
  );
}
