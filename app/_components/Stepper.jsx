import React from "react";
import { FaCheck } from "react-icons/fa";

function Stepper({ status }) {
  //choose stepper status
  const renderCheckmark = (index) => {
    //choose stepper color
    if (status === "DELIVERED") {
      return <FaCheck className="text-green-500" />;
    } else if (status === "CANCELLED" && index < 3) {
      return <FaCheck className="text-red-500" />;
    } else if (status === "DELIVERED_TO_SENDER" && index < 3) {
      return <FaCheck className="text-yellow-500" />;
    } else {
      return <FaCheck className="text-gray-300" />;
    }
  };

  return (
    <div className="flex items-center justify-center gap-8">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-xl"
        >
          {renderCheckmark(index)}
          <span className="block text-base">
            {index === 0 && "تم إنشاء الشحنة"}
            {index === 1 && "تم استلام الشحنة من التاجر"}
            {index === 2 && "الشحنة خرجت للتسليم"}
            {index === 3 && "تم التسليم"}
          </span>
          <span className="block text-base text-red-500">
            {status === "CANCELLED" && index === 2 && "تم إلغاء الاستلام"}
          </span>
          <span className="block text-base text-yellow-500">
            {status === "DELIVERED_TO_SENDER" &&
              index === 2 &&
              "العميل غير متوفر في العنوان"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
