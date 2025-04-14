import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
    const produtos = [
        {nome: "4 Queijos", preco: 40, categoria: "Pizza", image: "4-queijos.png"},
        {nome: "Mortadela", preco: 35, categoria: "Pizza", image: "mortadela.png"},
        {nome: "Vegetariana", preco: 42, categoria: "Pizza", image: "vegetariana.png"},
        {nome: "Fígado e pé de galinha", preco: 55, categoria: "Pizza", image: "pe-de-galinha.png"},
        {nome: "Milho", preco: 38, categoria: "Pizza", image:"milho.png"}
    ];

    res.render("produtos", {
      produtos: produtos,
    });
  });

  export default router;