import React from "react";

function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-lg"
          src="https://imgs.search.brave.com/Ni6N2rvDStsob5TIYEPw7nbC_VsEFGsKXFIrxZxu_zY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg2MTIz/NjMuanBn"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            WLECOME TO CYBER CITY!
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Card;
