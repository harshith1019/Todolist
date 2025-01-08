import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [edit, setEdit] = useState(todo.description);
  const base_url = import.meta.env.VITE_API_URL;
  const handleClick = async (event) => {
    // console.log(event.target);
    event.preventDefault();
    try {
      const body = { description: edit };
      const response = await fetch(`${base_url}/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-warning form-control"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Description
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setEdit(todo.description)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="edit-todo"
                id="edit-todo"
                className="w-100"
                value={edit}
                onChange={(event) => {
                  setEdit(event.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                onClick={(e) => handleClick(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
