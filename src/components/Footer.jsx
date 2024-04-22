import { FaWhatsapp } from "react-icons/fa";

export const handleWhatsapp = () => {
  window.open("whatsapp://send?phone=+573043049174");
};

export default function Footer() {
  return (
    <div className="w-full">
      <div className="flex items-center sm:flex-nowrap flex-wrap justify-center p-4 gap-3 w-full bg-black">
        <p className="tracking-[2px] text-[#CECECC] sm:text-lg text-[#CECECC] text-center">
          CONTACTONOS
        </p>
        <p className="tracking-[2px] flex gap-2 text-[#CECECC] text-lg text-[#CECECC] text-center">
          <FaWhatsapp size={30} />
          +52 55 2799 4821
        </p>
        <button
          className="tracking-[1px] text-[#323233] bg-white pt-2 pb-1 px-3"
          onClick={handleWhatsapp}
        >
          ABRIR WHATSAPP
        </button>
      </div>
    </div>
  );
}
