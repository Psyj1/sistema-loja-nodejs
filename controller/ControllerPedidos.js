import express from "express";

const router = express.Router();

    router.get("/pedidos", (req, res) =>{
    const pedidos = [
        {numeroPedido: "#102348", valor: "R$35,00"},
        {numeroPedido: "#984231", valor: "R$42,00"},
        {numeroPedido: "#457812", valor: "R$55,00"},
        {numeroPedido: "#673920", valor: "R$38,00"},
        {numeroPedido: "#219034", valor: "R$40,00"}
    ];

    res.render("pedidos", {
      pedidos: pedidos,
    });
});

  export default router;