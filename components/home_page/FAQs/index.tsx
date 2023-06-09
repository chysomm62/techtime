import { steps } from "@/lib/variables/steps";
import React, { useState, FC } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import styles from "./Faqs.module.css";

const Faqs: FC = () => {
  const [show, setShow] = useState(null);

  const handleClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    index: any
  ) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };
  return (
    <section className={`${styles.section}`}>
      <div className="max-w-screen-lg mx-auto font-satoshi py-5 md:py-12 relative before:content=[''] before:w-2 md:before:w-5 before:h-2 md:before:h-5 before:absolute before:right-0 before:top-5 md:before:top-14 before:rounded-full before:border-4 before:border-blue-1 ">
        <header className="px-4">
          <h2 className="font-clash_display text-2xl md:text-[54px] text-blue-3 text-center font-bold">
            Frequently Asked Questions
          </h2>
          <p className="max-w-screen-md mx-auto py-1 md:py-5 block text-gray-2 font-medium text-[8px] leading-relaxed md:text-base text-center capitalize px-8">
            high-defination video is video of higher resolution and quality than
            standard definition. while there&#39;s no standard meaning for high
            definition, generally any standard video image
          </p>
        </header>
        {steps &&
          steps.map((step, index) => {
            return (
              <div key={`${step} - ${index}`} className="rounded-lg my-2 p-5">
                <div className="font-book font-airbnbcereal text-base flex items-start justify-between gap-2 md:gap-5">
                  <div className="flex items-start gap-5">
                    <div>
                      <h6
                        className={
                          show === index
                            ? "font-black text-blue-1 text-sm md:text-2xl"
                            : "font-black text-sm md:text-2xl text-blue-3"
                        }
                      >
                        {step.header}
                      </h6>
                      <p
                        className={
                          show === index
                            ? "block mt-3 text-gray-2 font-medium text-[8px] leading-relaxed md:text-base"
                            : "hidden"
                        }
                      >
                        {step.content}
                      </p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    {show === index ? (
                      <FaMinus
                        size={14}
                        className="text-blue-1"
                        onClick={(e) => handleClick(e, index)}
                      />
                    ) : (
                      <FaPlus
                        size={14}
                        className="text-blue-3"
                        onClick={(e) => handleClick(e, index)}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Faqs;
