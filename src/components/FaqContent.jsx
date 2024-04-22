import React, { useState } from "react";
const FaqContent = ({ question, answer, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item mb-4">
      <h3 className="text-[#3E3D4D] md:text-[18px] text-[16px]">{question} </h3>
      <p className="text-[#000] md:text-[16px] text-[14px] ">{answer} </p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-[#989898] text-[14px] break-all"
          rel="noopener noreferrer"
        >
          <span className="text-[16px]">CITA:</span> {link}
        </a>
      )}
    </div>
  );
};
export default FaqContent;
