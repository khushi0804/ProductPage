import React from "react";
import "./Category.css";
import Input from "../../components/Input";
const Category = (handleChange) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
    <div>
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value="" name="test"/>

      <span className="checkmark">All</span>
    </label>


<Input 
handleChange={handleChange}
value="refactories"
title="refactories"
name="test"
/>

<Input 
handleChange={handleChange}
value="Thermal Insulation"
title="Thermal Insulation"
name="test"
/>

<Input 
handleChange={handleChange}
value="Acid Proof Products"
title="Acid Proof Products"
name="test"
/>
<Input 
handleChange={handleChange}
value="Acid Proof Products"
title="Acid Proof Products"
name="test"
/>
<Input 
handleChange={handleChange}
value="Ferra Alloys"
title="Ferra Alloys"
name="test"
/>
<Input 
handleChange={handleChange}
value="Acid Proof Products"
title="Acid Proof Products"
name="test"
/>
    </div>
    </div>
  );
};

export default Category;
