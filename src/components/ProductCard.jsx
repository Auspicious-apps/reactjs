import { useSiteStore } from "../context/siteStore";
import { useToast } from "tw-noti";
import { useState } from "react";
import Toaster from "./Toaster";
const ProductCard = ({ id, img, title, detail, price, btnText }) => {
  const addToCart = useSiteStore((store) => store.addToCart);
  const [showToast, toggleToast] = useState(false);
  const { enqueueToast } = useToast();
  const add = (id) => {
    addToCart(id);
    toggleToast(true);
  };
  const cart = useSiteStore((store) => store.cart);

  console.log(cart);
  return (
    <>
      <div className="bg-[#dbdbdb] w-full sm:max-w-[550px] relative flex-col flex justify-center pt-10  ">
        <div className="flex-center flex-col h-full">
          <img
            className="px-3 mix-blend-multiply items-center"
            src={img}
            alt="lamanita image"
            width={400}
            height={400}
          />
          <h1 className="mt-3 text-center sm:text-4xl tracking-[2px] text-2xl">
            {title}
          </h1>
          <p className="px-6 text-center mt-[20px] text-black flex-1">
            {detail}
          </p>
          <div
            className="bg-[#000] mx-5 gap-3 relative w-full mt-10 py-6  flex items-center justify-between flex-col gap-x-10 cursor-pointer"
            onClick={() => {
              add(id);
            }}
          >
            <p className="text-white justify-self-center">${price}</p>
            <p className="text-[#323233] sm:text-[22px] px-5 bg-white">
              {btnText}
            </p>
            <Toaster
              duration={3000}
              visible={showToast}
              end={() => toggleToast(false)}
              text={"AÑADIDO. ACTUALIZAR CANTIDAD DESDE EL CARRITO"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
