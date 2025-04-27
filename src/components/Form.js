// import React, { useState } from 'react'

// export const Form = ({ele,onRemove}) => {
//   const [name,setName]=useState("")
//   const [age,setAge]=useState("")
//   function handleRemove(e){
//      e.preventDefault()
//      onRemove(ele)
//   }
//     return (
//     <div>
//          <form>
//        <input name="name" onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" />
//        <input name="age" onChange={(e)=>setAge(e.target.value)} value={age} type="Number" placeholder="Age" />
//        <button onClick={handleRemove}>Remove</button>
//        <br></br>
//        <button onClick={()=>{setName(name)
//          setAge(age)}} type="submit"> submit</button>
//        <button>Add More</button>
//        </form>
      
//     </div>
//   )
// }

// export default Form;

import React from "react";

const Form = ({ id, name, age, onRemove, onChange }) => {
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => onChange(id, "name", e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => onChange(id, "age", e.target.value)}
      />
      <button type="button" onClick={() => onRemove(id)}>Remove</button>
      <br />
    </div>
  );
};

export default Form;
