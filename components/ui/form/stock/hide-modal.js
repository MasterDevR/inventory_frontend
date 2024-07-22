import React from "react";

const HideModal = ({ id }) => {
  const modalHandler = () => {
    document.getElementById(`${id}`).close();
  };
  return (
    <button
      className="relative w-2/6 rounded-lg border-2 border-red-500 p-2 text-red-500 transition-all delay-75 ease-in-out hover:bg-red-500 hover:text-white lg:w-1/6"
      onClick={modalHandler}
    >
      Close
    </button>
  );
};

export default HideModal;
