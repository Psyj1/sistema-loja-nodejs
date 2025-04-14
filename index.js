
import express from "express";

const app = express();

import ControllerProdutos from "./controller/ControllerProducts.js";

app.set("view engine", "ejs");


app.use(express.static("public"));

app.use("/", ControllerProdutos);

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