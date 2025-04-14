
import express from "express";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js";

app.set("view engine", "ejs");


app.use(express.static("public"));

app.use("/", ProdutosController);

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