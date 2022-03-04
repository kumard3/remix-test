import React from "react";

export default function Todo() {
  const [todo, setTodo] = React.useState({text:""})
  console.log(todo)
  const AddTodo = () => {
    const newTodos = [...todo.text,{text:todo.text}]}];
    setTodo(newTodos);
  };
  return (
    <div className="bg-black min-h-screen text-white">
{todo?.map((n)=>{
    {n.text}
})}
      <div className="flex justify-center items-center flex-col">
        <input
          className="text-black"
          type="text"
          onChange={(e) => setTodo({text:e.target.value})}
        />
        <button onClick={() => AddTodo()}>Click Here</button>
      </div>
    </div>
  );
}
