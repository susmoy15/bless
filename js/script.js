 
function cardClicked(cardNumber) {
     
    const card = document.getElementsByClassName('card');
    const productTitle = card[cardNumber].childNodes[3].childNodes[5].innerText
     
    const itemCartContainer = document.getElementById('item-cart');
    const count = itemCartContainer.childElementCount
     
    const p = document.createElement('p')
    p.innerHTML = `<p class="text-xl font-medium">${count + 1}. ${productTitle}</p>`
    itemCartContainer.appendChild(p)
     
    const productPriceElement = card[cardNumber].childNodes[3].childNodes[7].childNodes[1]
    const productPriceString = productPriceElement.innerText
    const productPrice = parseFloat(productPriceString)
     
    const totalPrice = elementNumber('total-price')
     
    const newTotalPrice = totalPrice + productPrice
    const totalPriceFix = newTotalPrice.toFixed(2)
    const prevBalance = element('total-price')
    prevBalance.innerText = totalPriceFix

    const pay = element('pay')
    pay.innerText = totalPriceFix




    if (newTotalPrice >= 200) {
        const cuponButton = document.getElementById('cupon-btn');
        cuponButton.removeAttribute('disabled')
    }


    if (newTotalPrice > 0) {
        const payBtn = element('pay-btn');
        payBtn.removeAttribute('disabled')
    }


}


document.getElementById('cupon-btn').addEventListener('click', function () {
    const cuponField = element('cupon-field').value;
    const cuponCode = element('cupon-code').innerText;
    if (cuponField == cuponCode) {
        const totalPrice = elementNumber('total-price')
        const discountAmount = (totalPrice * 20) / 100;
        const discount = discountAmount.toFixed(2)
        const discountElement = element('discount')
        discountElement.innerText = discount

         
        const pay = element('pay')
        const subTotal = totalPrice - discountAmount
        pay.innerText = subTotal
        console.log(pay, subTotal)
    }
})

document.getElementById('go-home').addEventListener('click', function() {
    const totalPrice = element('total-price')
    const discount = element('discount')
    const pay = element('pay')
    const itemCart = element('item-cart');
    const cuponField = element('cupon-field')

     
    totalPrice.innerText = '0.00';
    discount.innerText = '0.00';
    pay.innerText = '0.00';
    itemCart.innerText = ""
    cuponField.value = ""

    const totalPriceNumber = parseFloat(totalPrice.innerText)
    console.log(totalPriceNumber)
    if(totalPriceNumber < 1000) {
        const cuponButton = element('cupon-btn')
        cuponButton.setAttribute('disabled', true)
    }

    if(totalPriceNumber <= 0 ){
        const payButton = element('pay-btn')
        payButton.setAttribute('disabled', true)
    }
})


 
function element(id) {
    const element = document.getElementById(id)
    return element
}

function elementNumber(id) {
    const element = document.getElementById(id);
    const elementString = element.innerText
    const number = parseFloat(elementString);

    return number
}