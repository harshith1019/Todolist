const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes: 

//GET ALL TODOS

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos")
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//GET A TODO

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(`SELECT * FROM todos WHERE todo_id = $1`, [id])
        res.json(todo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//POST A TODO
app.post("/todos", async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(`INSERT INTO todos (description) VALUES ($1) RETURNING *`, [description]);
        res.json(newTodo.rows[0]);
    } catch(err){
        console.log(err.message);
    }
})

//UPDATE A TODO
app.put("/todos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todos SET description=$1 WHERE todo_id=$2 RETURNING *", [description, id]);
        // console.log(updateTodo.rows);
        res.json(updateTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//DELETE A TODO

app.delete("/todos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id=$1 RETURNING *", [id]);
        // console.log(deleteTodo.rows);
        res.json(deleteTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//Listen in Port 5000
app.listen(5000, () => {
    console.log(`Server started on port 5000`);
})