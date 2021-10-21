const Todo = require("../models/Todo");

module.exports = class TodoService{
    static async getTodos(){

        try {

            const allList = await Todo.find();

            return allList;

        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }

    }

    static async getTodoById(id){

        try {

            const oneTodo = await Todo.findById(id);

            return oneTodo;
            
        } catch (error) {
            console.log(`Could not fetch todo ${error}`);
        }

    }

    static async addTodo(data){

        try {

            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            };

            const response = await new Todo(newTodo).save();

            return response;
            
        } catch (error) {
            console.log(error);
        }

    }

    static async updateTodo(id, todo) {
        try {
          const updateResponse = await Todo.updateOne(
            { _id: id },
            { ...todo, date: new Date() }
          );
    
          return updateResponse;
        } catch (error) {
          console.log(`Could not update Todo ${error}`);
        }
      }
    
      static async deleteTodo(todoId) {
        try {
          const deletedResponse = await Todo.findOneAndDelete({ _id: todoId });
          return deletedResponse;
        } catch (error) {
          console.log(`Could not delete todo ${error}`);
        }
      }
    };