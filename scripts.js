// currency of the day
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// selecting elements from HTML
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulating the input amount to retrieve only numbers
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// when form is submitted
form.onsubmit = (event) => {
  event.preventDefault()
  //console.log(currency.value)
  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

//function to convert currency
function convertCurrency(amount, price, symbol){
  try {
    // show the selected currency
    description.textContent =  `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calculate totals
    let total = amount * price

    // double check if the result is a number
    if (isNaN(total)) {
      return alert("Please, type the value correctly to convert.")
    }

    total = formatCurrencyBRL(total).replace("R$", "")

    //show the final result with the style class
    result.textContent = `${total} Reais`
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Unable to convert. Try again later.")
  }
}

// format the value to brazilian currency - Real
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}