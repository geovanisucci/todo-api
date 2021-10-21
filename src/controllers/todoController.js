const service = require("../services/TodoService");

exports.get = async (req, res) => {
    try {
        const todo = await service.getTodoById(req.params.id);

        if (!todo) {
            return res.status(404).json("There are no todo published with current id.");
        }

        res.json(todo);
    } catch (error) {

        console.log(error);

        return res.status(500).json("Error on fetch todo");

    }
}

exports.getAll = async (req, res) => {

    try {
        const todos = await service.getTodos();

        if (!todos) {
            return res.status(404).json("There are no todos published yet.");
        }

        res.json(todos);

    } catch (error) {

        console.log(error);

        return res.status(500).json("Error on fetch todos");


    }
}

exports.add = async (req, res) => {

    try {

        const todoCreated = await service.addTodo(req.body);
        res.status(201).json(todoCreated);

    } catch (error) {
        console.log(error);

        return res.status(500).json("Error on add todo");
    }
}

exports.update = async (req, res) => {
    let id = req.params.id;
  
    try {
      const todo = {};
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo.finished = req.body.finished;
  
      const updatedTodo = await service.updateTodo(id, todo);
  
      if (updatedTodo.nModified === 0) {
        return res.status(404).json({});
      }
  
      //res.json(updatedTodo);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
  exports.delete = async (req, res) => {
    let id = req.params.id;
  
    try {
      const deleteResponse = await service.deleteTodo(id);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };