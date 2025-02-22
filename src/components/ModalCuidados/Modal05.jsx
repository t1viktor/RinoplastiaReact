import { useState, useEffect } from "react";

import {card05} from "/src/cardsModals.js"; 

export default function Modal03() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center  justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="modalCuidados" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex justify-between flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {card05.tittle}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <div className="space-y-12 flex flex-col items-center">

            

            <img
              className="imgModalCuidados"
              src={card05.img}
              alt=""
            />

            <p className="pModalCuidados">
            {card05.h2Modal}
            </p>

            <ul className="cardAlert text-gray-100 space-y-3 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li01}</h2>
              <li>{card05.li01Desc01}</li>
              <li>{card05.li01Desc02}</li>
              <li>{card05.li01Desc03}</li>
           
            </ul>

            <ul className="cardAlert text-gray-100 space-y-3 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li02}</h2>
              <li>{card05.li02Desc01}</li>
              <li>{card05.li02Desc02}</li>
              <li>{card05.li02Desc03}</li>
           
            </ul>

            <ul className="cardAlert space-y-3 text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li03}</h2>
              <li>{card05.li03Desc01}</li>
              <li>{card05.li03Desc02}</li>
              <li>{card05.li03Desc03}</li>
           
            </ul>

            <ul className="cardAlert space-y-3 text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <h2 className="pModalCuidados">{card05.li04}</h2>
              <li>{card05.li04Desc01}</li>
              <li>{card05.li04Desc02}</li>
              <li>{card05.li04Desc03}</li>
           
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
