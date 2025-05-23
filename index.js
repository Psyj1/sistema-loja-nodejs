import express from "express";

const app = express();

import ProdutosController from "./controller/ProductsController.js";
import PedidosController from "./controller/PedidosController.js";
import ClientesController from "./controller/ClientesController.js";

import connection from "./config/sequelize-config.js";

connection.authenticate().then(() =>{
  console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
  console.log(error)
})

connection.query(`CREATE DATABASE IF NOT EXISTS seuZe;`).then(() => {
  console.log("O banco de dados está criado.");
}).catch((error) => {
  console.log(error);
})

app.set("view engine", "ejs");


app.use(express.static("public"));

app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", ClientesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar um servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});