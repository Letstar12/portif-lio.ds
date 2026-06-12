const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

function autenticarToken(req, res, next){

    const token = req.headers['authorization'];

    if(!token){
        return res.status(403).send("Token necessário");
    }

    jwt.verify(token, "senhaSecreta", (err, decoded) => {

        if(err){
            return res.status(401).send("Token inválido");
        }

        req.user = decoded;

        next();
    });
}

app.get("/", (req, res) => {
    res.send("Microsserviço de pedidos funcionando");
});

app.get("/pedidos", autenticarToken, (req, res) => {

    res.json([
        {
            id: 1,
            produto: "Notebook"
        },
        {
            id: 2,
            produto: "Mouse"
        }
    ]);
});

app.listen(4000, () => {
    console.log("Servidor de pedidos rodando na porta 4000");
});
