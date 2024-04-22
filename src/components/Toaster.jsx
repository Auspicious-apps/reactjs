import { useEffect, useState } from "react";

export default function Toaster({ duration, text, visible, end }) {
  const [showToast, toggleToast] = useState(visible);

  useEffect(() => {
    setTimeout(() => {
      console.log("toaster closed");
      end();
    }, 3000);
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="absolute grid place-items-center bottom-0 left-0 bg-[#000] w-full h-full p-4 rounded-md z-20 ">
          <p className=" text-white">{text}</p>
        </div>
      )}
    </>
  );
}
