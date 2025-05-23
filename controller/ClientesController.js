import express from "express";
const router = express.Router();

import Cliente from "../models/Cliente.js";

    router.get("/clientes", function (req, res){
    Cliente.findAll().then((clientes) =>{
      res.render("clientes", {
        clientes: clientes,
      });
    }).catch((error) =>{
      console.log(error);
    });
  });
  export default router;