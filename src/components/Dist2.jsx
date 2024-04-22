import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import { FaWhatsapp } from "react-icons/fa";

function 
Dist2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="flex-center flex-col mt-20">
      <div className="flex flex-col gap-10">
        <h1 className="sm:text-[44px] text-black text-center text-xl ">
          DISTRIBUIDOR?
        </h1>
        <p className="text-[28px] text-black text-center">ÚNASE</p>
      </div>

      <div className="bg-[#323233] w-full py-3 mt-5">
        <div className="w-full h-10">
          <div className="bg-[#323233] flex-center text-white gap-4 sm:gap-20">
            <button onClick={handleShow}>CONTÁCTENOS</button>
            <button onClick={handleShow}>+52 55 2799 4821 </button>
            <button className="flex-center gap-2" onClick={handleShow}>
              <span className="hidden sm:block ">ABRIR WHATSAPP</span>
              <FaWhatsapp size={30} />
            </button>
          </div>

          <Modal show={show} onHide={handleClose} size="lg">
            <div className="bg-[#dbdbdb] h-[100vh] flex-center flex-col gap-20">
              <h1 className="text-center text-black text-7xl">Distribuidor</h1>
              <div className="flex-end flex-col gap-10">
                <div className="flex-center gap-[70px]">
                  <label
                    htmlFor="company"
                    className="block text-2xl font-semibold leading-6 text-gray-900"
                  >
                    NOMBRE O
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-[500px] px-5 py-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex-center gap-5">
                  <label
                    htmlFor="company"
                    className="block text-2xl font-semibold leading-6 text-gray-900"
                  >
                    TELEFONO COM
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-[500px] px-5 py-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex-center gap-[155px]">
                  <label
                    htmlFor="company"
                    className="block text-2xl font-semibold leading-6 text-gray-900"
                  >
                    PAIS
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-[500px] px-5 py-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex-center gap-[135px]">
                  <label
                    htmlFor="company"
                    className="block text-2xl font-semibold leading-6 text-gray-900"
                  >
                    CIUDA
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-[500px] px-5 py-4 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-end gap-10">
                <button
                  onClick={handleClose}
                  className="bg-white text-black px-4 py-3"
                >
                  SALIR
                </button>
                <button
                  onClick={handleClose}
                  className="bg-gray-200 text-black px-4 py-3"
                >
                  INGRESAR
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Dist2;
