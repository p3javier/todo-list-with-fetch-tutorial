import React from "react";

const ListElement  = (props) => {
    const { todoElement, deleteElement } = props;

    const handleClick = () => {
        deleteElement(todoElement.id);
    }
    return (
        <div>
        <div>{todoElement.label}</div>
        <button onClick={handleClick} type="button" className="btn btn-outline-danger">
            X
        </button>
        </div>
    )
}

export default ListElement;