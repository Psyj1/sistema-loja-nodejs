import express from "express";

const router = express.Router();

router.get("/products", (req, res) => {
    const produtos = [
        {nome: "4 Queijos", preco: 40, categoria: "Pizza", image: "4_QUEIKOS.png"},
        {nome: "Mortadela", preco: 35, categoria: "MORTADELA.png"},
        {nome: "Vegetariana", preco: 42, categoria: "VEGETARIANA.png"},
        {nome: "Fígado e pé de galinha", preco: 55, categoria: "PE_DE_GALINHA"},
    ];

    res.render("products", {
      products: products,
    });
  });


  export default router;