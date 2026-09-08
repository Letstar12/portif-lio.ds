const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Microserviço de usuários funcionando");
});

app.post("/login", (req, res) => {

    const usuario = {
        id: 1,
        nome: "Leticia"
    };

    const token = jwt.sign(usuario, "senhaSecreta", {
        expiresIn: "1h"
    });

    res.json({
        token: token
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});