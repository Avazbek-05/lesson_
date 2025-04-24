import React, { useEffect, useRef, useState } from "react";
import button from "@/assets/svg/Button.svg";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState([]);
  const nameRef = useRef(null);
  const priceRef = useRef(null);

  let name = params.get("name") || "";
  let price = params.get("price") || "";

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      let filtered = res.data.filter((item) => {
        let matchName = name
          ? item.title.toLowerCase().includes(name.toLowerCase())
          : true;
        let matchPrice = price ? item.currentPrice == price : true;
        return matchName && matchPrice;
      });
      setData(filtered);
    });
  }, [name, price]);

  const submit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let price = priceRef.current.value;
    setParams({ name, price }); 


    nameRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <section className="my-5">
      <div className="container1 flex items-start gap-5">
        <div className="w-[320px] mt-[100px] ">
          <form onSubmit={submit} className="flex flex-col gap-4 border p-4 rounded-2xl">
            <input
              ref={nameRef}
              defaultValue={name}
              className="border outline-none pl-2 rounded-lg"
              type="text"
              placeholder="Name...."
            />
            <input
              ref={priceRef}
              defaultValue={price}
              className="border outline-none pl-2 rounded-lg"
              type="text"
              placeholder="Price...."
            />
            <button className="bg-blue-500 text-white rounded-lg py-0.5 cursor-pointer">
              Send
            </button>
          </form>
        </div>
        {/* card */}
        <div className="w-full">
          <div className="grid grid-cols-4 gap-5">
            {data.map((value) => (
              <div key={value.id}>
                <img
                  className="w-[320px] h-[380px] rounded-xl"
                  src={value.image}
                  alt=""
                />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1f2026] text-[14px]">
                      {value.title.slice(0, 60) + "..."}
                    </h2>
                    <div className="flex items-center gap-1">
                      <i className="fa-solid text-sm text-[#FFB54C] fa-star"></i>
                      <div className="flex items-center gap-[3px] text-[#7e818c] text-[12px] font-light">
                        <p>{value.rating}</p>
                        <p>({value.reviews} sharhlar)</p>
                      </div>
                    </div>
                    <h1 className="text-[#1f1f26] rounded-sm text-[12px] bg-[#ff0] w-fit px-1 py-[2px] cursor-pointer">
                      {value.monthlyPrice}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#7e818c] text-[11px] line-through">
                        {value.oldPrice.toLocaleString("ru-RU")}
                      </p>
                      <p className="text-[#1f2026] text-sm">
                        {value.currentPrice.toLocaleString("ru-RU") + " so'm"}
                      </p>
                    </div>
                    <img className="cursor-pointer" src={button} alt="" />
                  </div>
                </div>
              </div>
            ))}
            {data.length === 0 && (
              <p className="col-span-4 text-center text-gray-500">Hech narsa topilmadi</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
