import React, { useState, useEffect } from "react";
import Input from "../components/Input/Input.jsx"
import Title from "../components/Title.jsx";
import List from "../components/List.jsx";
import { updateTodoList } from "../services/updateTodoList.js";
import { getTodoList } from "../services/getTodoList.js";

// [{id: "qqe", label: "task1", done: false}]
const App = () => {
    const [ todoList, setTodoList ] = useState([]);
    
    const deleteElement = (elementId) => {
        const updateArray = (array, id) => {
            return array.filter((elem) => elem.id !== id)
           
        }
        setTodoList(currentArray => updateArray(currentArray, elementId))
    }

    const handleNewElement = (element) => {
        const updateFunction = current => [...current, element]
		setTodoList(updateFunction);
        
    }

    useEffect(() => {
        getTodoList().then(response => setTodoList(response))
    }, []);

    useEffect(() => {
        updateTodoList(todoList);
    }, [todoList])
    return (
    <div>
        <Title />
        <Input onNewElement={handleNewElement} />
        <List todoElements={todoList} deleteElement={deleteElement} /> 
    </div>
    );
}

export default App;