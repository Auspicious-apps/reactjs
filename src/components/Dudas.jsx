import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export const handleWhatsapp = () => {
  window.open("whatsapp://send?phone=+573043049174");
};
const quotes = [
  {
    text: "Solté la furia de mi accidente al entender su motivo y me dijeron mis ángeles que iba a estar bien.",
    person: "aficionado de las motos",
  },
  {
    text: "Recibimos sonoterapia en el bosque con la medicina. Hermosa ceremonia.",
    person: "metro chaman",
  },

  {
    text: "Volamos a St. Tropez de CDMX con 20 y nos dió una experiencia inolvidable.",
    person: "chavito bién",
  },

  {
    text: "Nos fuimos a Acapulco y no creo volver a ver un atardecer tán espectacular.",
    person: "peluquero",
  },
  {
    text: "Peso 48kg y acostumbro 5-8g. Con 2 Zobrez siento como 5g de cubos normales.",
    person: "Inglesa punk",
  },
];
const quotes2 = [
  {
    text: "Solté el vicio de la crack con 8 semanas de microdosis y regresé con mi familia.",
    person: "vendedor de celulares",
  },

  {
    text: "Unos carajillos y unas micros me caen de maravilla echando cotorreo.",
    person: "banda pesada",
  },

  {
    text: "Estuve en llanto toda la tarde sacando mucha emocion estancada. Agradecida.",
    person: "mujer corporativa",
  },

  {
    text: "¿Qué prefieres: 6 píldoras que saben terrible o 1 sobre micro en tu cafeci-co?",
    person: "un Musulmán",
  },

  {
    text: "Mi energía está más quieta y respiro mejor. He avanzado en terapia y sí haría otro ciclo.",
    person: "paciente promedio",
  },
];

const Dudas = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4  md:pt-20">
      <div>
        <h1 className="tracking-[2px] md:text-[40px] text-[22px] text-center">
          LAS EXPERIENCIAS QUE SE PRODUCEN
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-[100%] ">
        <div className="relative  flex-col gap-4 md:gap-10 w-full  h-[300px] bg-[#CCCCCA] flex justify-center items-center">
          <p className="font-[SunrollBold] text-center text-4xl">MACR</p>
          <div className="text-center px-4">
            <h2 className="font-[AvenirLTStdLight] text-black text-[20px] md:text-3xl">
              &quot;{quotes[currentQuoteIndex].text}&quot;
            </h2>
            <span className="pt-2">- {quotes[currentQuoteIndex].person}</span>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center ">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-2 rounded-full ${
                  index === currentQuoteIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="relative flex-col gap-4 md:gap-10 w-full h-[300px] bg-[#323232] text-white flex justify-center items-center">
          <p className="font-[SunrollBold] text-[#CECECC]  text-center text-4xl">
            MICR
          </p>
          <div className="text-center px-4">
            <h2 className="text-[#CECECC] font-[AvenirLTStdLight] text-[20px] md:text-3xl">
              &quot;{quotes2[currentQuoteIndex].text}&quot;
            </h2>
            <span className="pt-2">- {quotes2[currentQuoteIndex].person}</span>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-2 rounded-full ${
                  index === currentQuoteIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center gap-2 md:gap-4">
        <h2 className="font-[SunrollBold] sm:leading-[80px] tracking-[1px] mt-[10px] text-[#323233] text-center text-[30px] sm:text-[68px]">
          DU<span className="text-gray-300">D</span>AS?
        </h2>
        <Link
          to="/Faq"
          className=" mt-3 mb-3 p-2 text-sm sm:text-xl bg-[#323233] text-[#fff] text-center "
        >
          INFÓRMESE
        </Link>
        <p className="bg-black px-4 p-2 text-lg text-[#CECECC] text-center w-full">
          ENVÍO GRATIS - ORDEN MÍNIMA DE $2,000 - OFRECEMOS TODOS LOS MÉTODOS DE
          PAGO DE MERCADOPAGO
        </p>
        <h2 className="font-[SunrollBold] sm:leading-[80px] tracking-[1px] mt-[20px] text-[#323233] text-center text-[30px] sm:text-[68px]">
          DIS<span className="text-gray-300">TRI</span>BU
          <span className="text-gray-300">DOR</span>?
        </h2>
        <Link
          to={"/distributors"}
          className=" mt-3 mb-3 p-2 text-sm sm:text-xl bg-[#323233] text-[#fff] text-center"
        >
          ÚNASE
        </Link>
    

        <Footer />
      </div>
    </div>
  );
};

export default Dudas;
