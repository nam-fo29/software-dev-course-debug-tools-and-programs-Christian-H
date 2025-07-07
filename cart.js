const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) { // Bug: <= should be <
    total += cart[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}
console.log(calculateTotal(cart));

const total = calculateTotal(cart);

function applyDiscount(total, discountRate) {
  if (discountRate < 0 || discountRate > 1) {
    console.log("Invalid Discount");
    return total;
  }
    let discount = total * discountRate; // Bug: Missing validation for discountRate
    return total - discount
}
console.log(applyDiscount(total, 0.2));

function generateReceipt(cart, total) {
  if (isNaN(total)) {
    console.error("Invalid Total");
  }
  let receipt = "Items:\n";
  cart.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}
console.log(generateReceipt(cart, total));

// Debugging entry point
console.log("Starting shopping cart calculation...");
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


/*Fixed syntax in calculateTotal function in order to accurately work as intended.
Added a console.log to check how it works
Defined discountRate in order to apply discount with the applyDiscount function
Added an if statement to catch errors allowing discount to be less than 0 or more than 1.
Added and if statement in the generateReceipt function to ensure that total is a number
 */