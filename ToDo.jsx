import React from "react";
import './ToDo.css';

function ToDolist() {

    const [todoList, setTodoList] = React.useState('');
    const [todo, setTodo] = React.useState([]);

    const list_todo = (event) => {
        setTodoList(event.target.value);
    };

    const list = () => {
        setTodo((oldtodo) => {
            return [...oldtodo, todoList]
        })
        setTodoList('')
    };
    return (
        <>
            <div className="main_page">
                <div className="center_page">
                    <h1> ToDo list </h1>
                    <h3>Add Your Item</h3>
                    <input className="input_box" type="text" placeholder=" List of item " value={todoList} onChange={list_todo} />
                    <button onClick={list}> ToDo </button>
                    <div>
                        <ul>
                            {todo.map((val) => <li>{val}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ToDolist;