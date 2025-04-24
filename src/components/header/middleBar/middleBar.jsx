import React from "react";
import logo from "@/assets/svg/logo.svg";
import marketImg from "@/assets/svg/uzum.svg";
import katImg from "@/assets/imgs/katalog.png";
import search from "@/assets/svg/search.svg";
import access from "@/assets/svg/access.svg";
import like from "@/assets/svg/like.svg";
import basket from "@/assets/svg/basket.svg";
const MiddleBar = () => {
  return (
    <section className="m-[18px_0_11px_0]">
      <div className="container1 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <a className="max-[780px]:hidden " href="#">
              <img className="w-[215px] h-8" src={marketImg} alt="MarketImg" />
            </a>
          </div>

          <div className="flex gap-[7px]">
            <button className="flex items-center gap-3 p-[11px_21px] bg-[#e5e5ff] hover:bg-[#c7c7f4] transition-all duration-300 rounded-sm cursor-pointer">
              <img src={katImg} alt="katImg" />
              <a className="text-[#7f4dff] text-sm font-medium " href="#">
                Katalog
              </a>
            </button>
            <div className="border border-[rgba(54,55,64,0.2)] w-[527px]  max-[1315px]:w-[430px] flex items-center justify-between rounded-sm max-[1240px]:hidden">
              <input
                className="text-[#757575] text-sm pl-6 outline-none w-full"
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
              <img
                className="bg-[#edeff2] rounded-[0px_4px_4px_0] p-[12px_27px] cursor-pointer"
                src={search}
                alt="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 max-[555px]:hidden">
            <div className="flex items-center  gap-2.5 p-[9px_8px] cursor-pointer">
              <img src={access} alt="access" />
              <p className="text-sm text-[#1f2026]">Kirish</p>
            </div>
            <div className="flex items-center  gap-2.5 p-[9px_8px] cursor-pointer">
              <img src={like} alt="like" />
              <p className="text-sm text-[#1f2026]">Saralangan</p>
            </div>
            <div className="flex items-center  gap-2.5 p-[9px_8px] cursor-pointer">
              <img src={basket} alt="basket" />
              <p className="text-sm text-[#1f2026]">Savat</p>
            </div>
          </div>
          <label className="hidden max-[1200px]:block" htmlFor="check">
           
            <i className="fa-solid text-2xl fa-bars"></i>
          </label>
        </div>
        <div className="hidden max-[1240px]:block">
          <div className=" border border-[rgba(54,55,64,0.2)] w-full mt-4 flex items-center justify-between rounded-sm">
            <input
              className="text-[#757575] text-sm pl-6 outline-none w-full"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <img
              className="bg-[#edeff2] rounded-[0px_4px_4px_0] p-[12px_27px] cursor-pointer"
              src={search}
              alt="search"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBar;
