import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns">All Products</button>
          <button className="btns">Refractories</button>
          <button className="btns">thermal Insulations</button>
          <button className="btns">Speciality Products</button>
          <button className="btns">Acid Proof Products</button>
          <button className="btns">Ferra Alloys</button>
          <button className="btns">Metallics</button>
          <button className="btns">Steel Products</button>
          <button className="btns">Carbon Products</button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
