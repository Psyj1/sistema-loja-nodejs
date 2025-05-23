import express from "express";

const router = express.Router();

router.get("/produtos", (req, res) => {
    const produtos = [
        {nome: "Corote 51", preco: 10, categoria: "Alcóol", imagem: "item.png"},
        {nome: "Coxinha", preco: 18, categoria: "Salgado", imagem:"item.png"},
        {nome: "Guaraná Zero", preco: 8, categoria: "Refrigerante", imagem: "item.png"},
        {nome: "7 Belo", preco: 1, categoria: "Doce", imagem: "item.png"},
        {nome: "Estalinho", preco: 15, categoria: "Bomba", imagem: "item.png"} 
    ];

    res.render("produtos", {
      produtos: produtos,
    });
  });

  export default router;