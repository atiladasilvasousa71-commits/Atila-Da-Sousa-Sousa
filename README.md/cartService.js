function addItem(cart, item) {
  const existingItem = cart.items.find(p => p.name === item.name);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.items.push(item);
  }
}

function removeItem(cart, name) {
  cart.items = cart.items.filter(item => item.name !== name);
}

function updateItem(cart, name, quantity) {
  const item = cart.items.find(p => p.name === name);
  if (item) {
    item.quantity = quantity;
  }
}

function getTotal(cart) {
  return cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

function displayCart(cart) {
  console.log("\n🛒 Carrinho:");

  cart.items.forEach(item => {
    console.log(`${item.name} - R$${item.price} x ${item.quantity}`);
  });

  console.log(`\nTotal: R$${getTotal(cart)}`);
}

module.exports = {
  addItem,
  removeItem,
  updateItem,
  getTotal,
  displayCart
};
