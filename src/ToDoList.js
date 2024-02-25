import React from "react";
import { useState } from "react";
import FormToDo from "./form";
import ToDolist from "./todo";

function Checklist(){
    const [todos, setTodos] = useState([
      {
        text: 'Research schools that meet your needs',
        isCompleted: false,
      },
      {
        text: 'Pay your own tuition and expenses',
        isCompleted: false,
      },
      {
        text: 'Apply to a school',
        isCompleted: false,
      },
      {
        text: 'Get a student visa',
        isCompleted: false,
      },
      {
        text: 'Prepare to travel to the U.S. and to your school',
        isCompleted: false,
      },
      {
        text: 'Apply to a school',
        isCompleted: false,
      }            
    ]);
  
    const AddFormToDo = (text) => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
    };
      
    const removeTodo = index => {
        let tempList = [...todos];
        tempList.splice(index,1);
        setTodos(tempList);
      };
        
    
    
      return (
        <div className="header-two">
        <h1> Pre-Study Abroad Checklist and To-Dos </h1>
        {todos.map((todo, i) => 
        <ToDolist todo={todo} key={i} index={i} remove={removeTodo}/>)}
        <FormToDo  AddFormToDo={AddFormToDo}/>
      
      </div>
    );
  }
  
  export default Checklist;
