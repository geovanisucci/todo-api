const mongoose = require("mongoose");

const user = "admin";
const pass = "WlUf73JPZXOnnajv";
const database = "todo_sample";
const serverName = "cluster0.yqkhs.mongodb.net";

module.exports = {
    init: () => {
        mongoose
        .connect(
            `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
            /*{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
              }*/
        )
        .then((res) => console.log(`Connection Successful ${res}`))
        .catch((err) => console.log(`Error in DB Connection ${err}`));
    }
}