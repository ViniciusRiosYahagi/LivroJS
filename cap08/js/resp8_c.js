const frm = document.querySelector("form")
const resp1 = document.getElementById("outDiscount")
const resp2 = document.getElementById("outPay")
const agreement = document.getElementById("agreement")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const value = Number(frm.inValue.value)
  const agreement = frm.selAgreements.value

  checkDiscount(value,agreement)
})

frm.rbYes.addEventListener("click", () => {
  agreement.className = "exibe"
})

frm.rbNo.addEventListener("click", () => {
  frm.selAgreements.value = ""
  agreement.className = "oculta"

})

function checkDiscount(value, agreement) {

  if (agreement == "Animal Friendly") {
    const discount = value * 0.20
    const priceDiscount = value / 0.20
    resp1.innerText = `Discount: ${discount.toFixed(2)}`
    resp2.innerText = `Total: ${priceDiscount.toFixed(2)}`
  } else if (agreement == "Animal Health") {
    const discount = value * 0.50
    const priceDiscount = value / 0.50
    resp1.innerText = `Discount: ${discount.toFixed(2)}`
    resp2.innerText = `Total: ${priceDiscount.toFixed(2)}`
  } else {
    const discount = value * 0.10
    const priceDiscount = value / 0.10
    resp1.innerText = `Discount: ${discount.toFixed(2)}`
    resp2.innerText = `Total: ${priceDiscount.toFixed(2)}`
  }
}