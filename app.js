const allBtn = document.getElementsByClassName("add-btn");
let totalCost = 0;
let journeyCost = 0;

function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function budgetCalclution(value) {
  if (value > 0) {
    const budget = parseInt(document.getElementById("budget").innerText);
    const newBudget = budget - value;
    if (newBudget < 0) {
      alert("vai tk nai apner")
      return;
    }
    else {
      document.getElementById("budget").innerText = newBudget;
    }
  }
  else {
    const budget = parseInt(document.getElementById("budget").innerText);
    document.getElementById("budget").innerText = budget + Math.abs(value);
  }
}

for (const btn of allBtn){
  btn.addEventListener("click", function (e) {
    const cartDiv = e.target.parentNode;
    const title = cartDiv.querySelector("h2").innerText;
    const price = parseInt(cartDiv.querySelector(".price").innerText);

    totalCost += price;
    setElementValueById("total-cost", totalCost);
    setElementValueById("grand-total", totalCost);

    budgetCalclution(price);
  })
}

function journeyCalclution(elementName) {
  if (elementName === "bus") {
    journeyCost += 100;
    budgetCalclution(100);
  }
  else if (elementName === "train") {
    journeyCost -= 200;
    budgetCalclution(-200);
  }
  else if (elementName === "flight") {
    journeyCost += 500;
    budgetCalclution(500);
  }


  setElementValueById("grand-total", (totalCost + journeyCost));

}
