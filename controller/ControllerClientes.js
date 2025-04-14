import express from "express";

const router = express.Router();

    const cliente = [
        {nome: "Jose Silva", preco: 40, categoria: "Pizza"},
        {nome: "Mortadela", preco: 35, categoria: "Pizza"},
        {nome: "Vegetariana", preco: 42, categoria: "Pizza"},
        {nome: "Fígado e pé de galinha", preco: 55, categoria: "Pizza"},
    ];

    res.render("products", {
      products: products,
    });
 

  export default router;