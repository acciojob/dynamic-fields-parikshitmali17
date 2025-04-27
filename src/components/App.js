
// import React, { useState } from "react";
// import './../styles/App.css';
// import Form from "./Form";

// const App = () => {
//   const [formList,setFormList]=useState([])
//   const [formID,setFormID]=useState(0)
//   function handleAdd(){
//     console.log("Clickrd")
//    setFormList([...formList,formID])
//    setFormID(formID +1)
//   }

//   function handleRemove(idToRemove){
// setFormList(formList.filter((ele,idToRemove)=>id!==idToRemove))
//   }
//   return (
//     <div>
//         {/* Do not remove the main div */}
    
// {formList.map((ele,index)=>{
//  return <Form ele={ele} onRemove={handleRemove} key={index} ></Form>
// })}
// <button onClick={handleAdd}>Add More</button>

//     </div>
//   ) 
// }

// export default App

import React, { useState } from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const [formList, setFormList] = useState([{ id: 0, name: "", age: "" }]);
  
  const handleAdd = () => {
    setFormList([...formList, { id: Date.now(), name: "", age: "" }]);
  };

  const handleRemove = (idToRemove) => {
    setFormList(formList.filter((form) => form.id !== idToRemove));
  };

  const handleChange = (id, field, value) => {
    const updatedList = formList.map((form) => 
      form.id === id ? { ...form, [field]: value } : form
    );
    setFormList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formList);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {formList.map((form, index) => (
          <Form
            key={form.id}
            id={form.id}
            name={form.name}
            age={form.age}
            onRemove={handleRemove}
            onChange={handleChange}
          />
        ))}
        <button type="button" onClick={handleAdd}>Add More</button>
        <button type="submit">Submit All</button>
      </form>
    </div>
  );
};

export default App;
