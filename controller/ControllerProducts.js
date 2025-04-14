import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
    const produtos = [
        {nome: "4 Queijos", preco: 40, categoria: "Pizza", image: "4_QUEIKOS.png"},
        {nome: "Mortadela", preco: 35, categoria: "Pizza", image: "MORTADELA.png"},
        {nome: "Vegetariana", preco: 42, categoria: "Pizza", image: "VEGETARIANA.png"},
        {nome: "Fígado e pé de galinha", preco: 55, categoria: "Pizza", image: "PE_DE_GALINHA.png"},
        {nome: "Milho", preco: 38, categoria: "Pizza", image:"MILHO.png"}
    ];

    res.render("produtos", {
      produtos: produtos,
    });
  });

  export default router;