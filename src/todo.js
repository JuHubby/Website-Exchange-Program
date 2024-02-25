
function ToDolist ({todo,index,remove}){
    function handle(){
        remove(index);
    }
    
   return (
    <div type="checkbox" className="todo" onClick={handle}>{todo.text} (-)</div>); 
}

export default ToDolist;