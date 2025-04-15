import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
    const produtos = [
        {nome: "4 Queijos", preco: 40, categoria: "Pizza padrão", imagem: "4-queijos.png"},
        {nome: "Milho", preco: 38, categoria: "Pizza especial", imagem:"milho.png"},
        {nome: "Mortadela", preco: 35, categoria: "Pizza especial", imagem: "mortadela.png"},
        {nome: "Fígado e pé de galinha", preco: 55, categoria: "Pizza moda da casa", imagem: "pe-de-galinha.png"},
        {nome: "Vegetariana", preco: 42, categoria: "Pizza especial", imagem: "vegetariana.png"}
        
        
    ];

    res.render("produtos", {
      produtos: produtos,
    });
  });

  export default router;