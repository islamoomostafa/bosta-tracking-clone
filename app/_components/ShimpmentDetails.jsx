import React from "react";
import { useAppContext } from "../_context/AppContext";
import Image from "next/image";

function ShipmentDetails() {
  //gat api data
  const { shipmentData } = useAppContext();

  //maping to arabic
  const arabicStatus = {
    CREATED: "تم إنشاء الشحنة",
    DELIVERED: "تم تسليم الشحنة",
    DELIVERED_TO_SENDER: "تم تسليم الشحنة إلى المرسل",
    CANCELLED: "تم إلغاء الشحنة",
    TICKET_CREATED: "تم إنشاء الشحنة",
    PACKAGE_RECEIVED: "تم استلام الشحنة",
    IN_TRANSIT: "في الطريق",
    NOT_YET_SHIPPED: "لم يتم الشحن بعد",
    OUT_FOR_DELIVERY: "الشحنة خرجت للتسليم",
    WAITING_FOR_CUSTOMER_ACTION: "في انتظار رد العميل",
    AVAILABLE_FOR_PICKUP: "الشحنة جاهزة للخروج",
  };

  //maping to arabic
  const arabicBranches = {
    "Cairo Sorting Facility": "مركز فرز القاهرة",
    "Tanta Hub": "فرع طنطا",
    "Haram Hub": "مركز الهرم",
  };

  // No shipment number yet?
  if (!shipmentData || !shipmentData.TransitEvents) {
    return (
      <p className="text-center mt-10 text-primary text-3xl">
        لا توجد بيانات شحنة متاحة
      </p>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-col-re md:justify-center md:items-start sm:flex-row justify-between items-center sm:items-start p-4 sm:p-20 gap-4  ">
      <div
        dir="rtl"
        className="flex flex-col justify-center items-center rounded "
      >
        <h2>عنوان التسليم</h2>
        <span className="flex bg-gray-100 sm:gap-2 items-center sm:items-center border justify-center mt-5 px-5 py-3 w-[350px] rounded">
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 23 ،
          القاهرة
        </span>
        <div className="flex flex-row-reverse gap-2 sm:gap-2 items-center sm:items-center border justify-center mt-3 px-5 py-3 w-[350px] rounded">
          <div className="flex flex-col justify-center items-center px gap-2">
            <span>هل يوجد مشكلة في شحنتك؟</span>
            <button className="bg-primary text-white rounded-lg px-8 py-1">
              إبلاغ عن مشكلة
            </button>
          </div>
          <Image src="/problem.png" href="address" width={70} height={70} />
        </div>
      </div>

      <div dir="rtl" className="flex flex-col w-full  items-center gap-3 ">
        <h2>تفاصيل الشحنة</h2>
        <table className="border border-gray-200 text-[12px] rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-2 py-1">الفرع</th>
              <th className="border border-gray-200 px-2 py-1">التاريخ</th>
              <th className="border border-gray-200 px-2 py-1">الوقت</th>
              <th className="border border-gray-200 px-2 py-2">حالة الشحنة</th>
            </tr>
          </thead>
          <tbody>
            {shipmentData.TransitEvents.map((event) => (
              <tr key={event.timestamp}>
                <td className="border border-gray-200 px-4 py-1 ">
                  {arabicBranches[event.hub] || event.hub}
                </td>
                <td className="border border-gray-200 px-8 py-1">
                  {new Date(event.timestamp).toLocaleDateString()}
                </td>
                <td className="border border-gray-200 px-8 py-1">
                  {new Date(event.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="border border-gray-200 px-6 py-1">
                  {arabicStatus[event.state] || event.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShipmentDetails;
