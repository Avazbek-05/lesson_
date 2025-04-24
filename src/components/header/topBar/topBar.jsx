import React from "react";
import locationImg from "@/assets/svg/location.svg";
import uzImg from "@/assets/svg/uz.svg";
const TopBar = () => {
  return (
    <section className="bg-[#f0f2f5]">
      <div className="container1 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5 ">
            <img
              className="cursor-pointer"
              src={locationImg}
              alt="locationImg"
            />
            <a className="text-[14px] text-[#1f2026]" href="#">
              Shahar:
              <span className="text-[14px] font-medium border-b">Toshkent</span>
            </a>
          </div>
          <p className="text-[#1f2026] text-[14px] font-medium  max-[585px]:hidden" >
            Topshirish punktlari
          </p>
        </div>
        <div className="flex text-sm gap-4">
          <a className="text-sm font-medium text-[#7000ff]  max-[836px]:hidden" href="#">
            Uzumda soting
          </a>
          <a className="text-sm font-medium  max-[700px]:hidden" href="#">
            Savol-javoblar
          </a>
          <a className="text-sm font-medium  max-[400px]:hidden" href="#">
            Buyurtmalarim
          </a>
          <div className="flex items-center gap-2.5 cursor-pointer">
            <img src={uzImg} alt="uzImg" />
            <p className="text-[#1f2026] text-[14px] font-medium">Оʻzbekcha</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
