const express = require("express");
const app = express();
const port = 3000;
// Permite que o servidor entregue arquivos e páginas simples
app.use(express.static("public"));
// Rota que retorna uma lista de produtos
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Produto 1", price: 100 },
    { id: 2, name: "Produto 2", price: 150 },
    { id: 3, name: "Produto 3", price: 200 },
  ];
  res.json(products);
});
// Página principal da aplicação
app.get("/", (req, res) => {
  res.send(`
 <html>
 <head>
 <title>E-commerce</title>
 </head>
 <body>
 <h1>Lista de Produtos</h1>
 <p>Itens no carrinho: <span id="cart-count">0</span></p>
 <ul id="products-list"></ul>
 <script>
 let cartCount = 0;
 fetch('/products')
 .then(response => response.json())
 .then(products => {
 const list = document.getElementById('products-list');
 products.forEach(product => {
 const li = document.createElement('li');
 li.innerHTML = product.name + ' - R$ ' + product.price +
 ' <button>Adicionar ao Carrinho</button>';
 const button = li.querySelector('button');
 button.addEventListener('click', () => {
 cartCount++;
 document.getElementById('cart-count').textContent = cartCount;
 });

 list.appendChild(li);
 });
 });
 </script>
 </body>
 </html>