// JavaScript Basics
let age = 20;

if (age >= 18) {
  console.log("🎉 Congrats! You’re officially an adult explorer of the web!");
  document.getElementById("message").textContent =
    "🎉 You’re officially an adult explorer of the web!";
} else {
  console.log("🚸 Oops! You’re still a young padawan in training.");
  document.getElementById("message").textContent =
    "🚸 Still a young padawan in training!";
}

//  Functions 
function calculateTotal(price, quantity) {
  let total = price * quantity;
  console.log(`🛒 Calculating total: ${quantity} items × $${price} = $${total}`);
  return total;
}

function formatGreeting(name) {
  let greeting = `👋 Hello, ${name}! Ready to conquer some JavaScript today? 🚀`;
  console.log(greeting);
  return greeting;
}

// Call functions
calculateTotal(25, 4);
formatGreeting("Joan");

//  Loops 
let colors = ["red", "green", "blue", "purple", "gold"];

// Using for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`🎨 Color #${i + 1}: ${colors[i]}`);
}

// Using forEach loop
colors.forEach((color, index) => {
  console.log(`✨ Fancy color ${index + 1}: ${color.toUpperCase()}`);
});

//  DOM Manipulation 
let btnChange = document.getElementById("btnChange");
let btnToggle = document.getElementById("btnToggle");
let btnAdd = document.getElementById("btnAdd");
let title = document.getElementById("title");
let list = document.getElementById("list");

// 1. Change text on click
btnChange.addEventListener("click", function () {
  title.textContent = "⚡ JavaScript just zapped this title!";
  console.log("⚡ Title changed by button click!");
});

// 2. Toggle CSS class
btnToggle.addEventListener("click", function () {
  title.classList.toggle("active");
  console.log("🎭 Title style toggled like magic!");
});

// 3. Add a new list item with random emoji
btnAdd.addEventListener("click", function () {
  let newItem = document.createElement("li");
  let emojis = ["🌟", "🔥", "🚀", "💡", "🎯"];
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  newItem.textContent = `${randomEmoji} New Item ${list.children.length + 1}`;
  list.appendChild(newItem);
  console.log("➕ A new item was added to the list!");
});
