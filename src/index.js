const app = require("./app");
//start no banco de dados
const db = require("./mongoosedb");

db.init();

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })