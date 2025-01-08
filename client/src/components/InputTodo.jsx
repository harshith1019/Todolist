import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const base_url = import.meta.env.VITE_API_URL;

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${base_url}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">PERN Todo-List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm} role="search">
        <input
          className="form-control me-2"
          type="search"
          value={description}
          placeholder="Add a New To-do"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
