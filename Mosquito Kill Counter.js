let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let total = 0;
let totalEl = document.getElementById("total-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count;
  saveEl.textContent += countStr + " - ";

  total += count; // Add the current count to the total
  totalEl.innerText = "Total: " + total;

  count = 0;
  countEl.innerText = count;
}
