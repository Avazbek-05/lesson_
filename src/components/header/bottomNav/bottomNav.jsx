import "./style.css";
import React from "react";
import bag from "@/assets/imgs/bag.png";
import nation from "@/assets/imgs/nation.png";
import school from "@/assets/svg/school.svg";

const BottomNav = () => {
  return (
    <section>
      <div className="container1">
        <nav className="">
          <input className="hidden" type="checkbox" id="check" />
          <ul className="menu-bar flex items-center justify-between">
            <label className=" hidden max-[1200px]:block" htmlFor="check">
              <i className="fa-solid hidden text-2xl  fa-circle-xmark absolute top-5 right-5"></i>
            </label>
            <li className="flex items-center gap-1  py-1.5">
              <img className="cursor-pointer" src={bag} alt="bag" />
              <a className="text-[#1f2026] text-sm font-semibold" href="#">
                Maktab bozori
              </a>
            </li>
            <li className="flex items-center gap-1  py-1.5">
              <img className="cursor-pointer" src={school} alt="percentage" />
              <a className="text-[#1f2026] text-sm font-semibold" href="#">
                Yozgi savdo
              </a>
            </li>
            <li className="flex items-center gap-1  py-1.5">
              <img className="cursor-pointer" src={nation} alt="nation" />
              <a className="text-[#1f2026] text-sm font-semibold" href="#">
                Kanselyariya
              </a>
            </li>
            <li className="flex items-center gap-1  py-1.5">
              <img className="cursor-pointer" src={school} alt="school" />
              <a className="text-[#1f2026] text-sm font-semibold" href="#">
                Nasiya
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Elektronika
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Maishiy texnika
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Kiyim
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Poyabzallar
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm" href="#">
                Aksessuarlar
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Goʻzallik va parvarish
              </a>
            </li>
            <li>
              <a className="text-[#4d4f59] text-sm " href="#">
                Salomatlik
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BottomNav;
