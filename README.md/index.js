const prompt = require("prompt-sync")();
const Cart = require("./models/cart");
const {
  addItem,
  removeItem,
  updateItem,
  displayCart
} = require("./services/cartService");
const showMenu = require("./utils/menu");

const cart = new Cart();

let option;

do {
  showMenu();
  option = prompt("Escolha uma opção: ");

  switch (option) {
    case "1":
      const name = prompt("Nome do produto: ");
      const price = parseFloat(prompt("Preço: "));
      const quantity = parseInt(prompt("Quantidade: "));

      addItem(cart, { name, price, quantity });
      break;

    case "2":
      const removeName = prompt("Produto a remover: ");
      removeItem(cart, removeName);
      break;

    case "3":
      const updateName = prompt("Produto: ");
      const newQty = parseInt(prompt("Nova quantidade: "));
      updateItem(cart, updateName, newQty);
      break;

    case "4":
      displayCart(cart);
      break;

  }

} while (option !== "5");

console.log("👋 Saindo...");
