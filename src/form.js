import React from "react";
import { useState } from "react";

function FormToDo({AddFormToDo}) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        AddFormToDo(value);
        setValue("");
    };

return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value}
      placeholder=" (+) Add here and customize your checklist ..."
      onChange={e => setValue(e.target.value)}/>
    </form>
    
)
}

export default FormToDo;