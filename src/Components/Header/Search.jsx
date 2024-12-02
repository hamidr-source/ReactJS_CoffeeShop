import React, { useState } from "react";

const Search = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return (
    <>
      <button
        className="bg-gray-600 text-white w-10 h-10 rounded-2xl"
        onClick={() => setOpenSearchBar(true)}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      {openSearchBar && (
        <div className="bg-white p-4 rounded shadow-md text-xl">
          <div className="modal-content">
            <input type="text" className="absolute top-14 left-0 w-full h-10 outline-none pl-2" />
            <button className="absolute top-2 left-2" onClick={() => setOpenSearchBar(false)}><i className="fa-solid fa-x text-red-700 m-3 font-bold"></i></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
