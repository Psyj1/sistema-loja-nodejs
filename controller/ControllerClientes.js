import express from "express";

const router = express.Router();

    router.get("/cliente", (req, res) =>{
    const cliente = [
        {nome: "Jose Silva", cpf: "123.456.789-09", endereco: "Rua das Acácias, 123"},
        {nome: "Rafael Costa", cpf: "987.654.321-00", endereco: "Av. Central, 4560"},
        {nome: "Juliana Martins", cpf: "111.222.333-96", endereco: "Travessa dos Ipês, 12A"},
        {nome: "Bruno Almeida", cpf: "456.789.123-88  ", endereco: "Rua Marechal Deodoro, 789"},
        {nome: "Camila Rocha", cpf: "321.654.987-01", endereco: "Alameda das Palmeiras, 99"}
    ];

    res.render("cliente", {
      cliente: cliente,
    });
  });

  export default router;