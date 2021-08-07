
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const form = document.getElementById('a-form')
const formParts = document.querySelectorAll('.part')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-next')
const prevBtn = btnControl.querySelector('.btn-prev')
const cart = document.querySelector('.cart-items')
const total = document.getElementById('total')
const allItem = document.getElementById('all-item')
const items = allItem.querySelectorAll('.item')
const freight = document.querySelector('.part-courier')
let step = 0

getTotal()

function handleBtnControlClicked(e) {
    e.preventDefault()
    const nowStep = steps[step]
    if (e.target.matches('.btn-next') && e.target.innerHTML === '下一步') {
        const nextStep = steps[step + 1]
        nowStep.classList.remove('active')
        nowStep.classList.add('checked')
        nextStep.classList.add('active')
        formParts[step].classList.toggle('none')
        formParts[step + 1].classList.toggle('none')
        step += 1
    } else if (e.target.matches('.btn-prev')) {
        const prevStep = steps[step - 1]
        nowStep.classList.remove('active')
        prevStep.classList.remove('checked')
        prevStep.classList.add('active')
        formParts[step].classList.toggle('none')
        formParts[step - 1].classList.toggle('none')
        step -= 1
    }
    setbtn()
}
function setbtn() {
    if (step === 0) {
        prevBtn.classList.add('none')
    } else {
        prevBtn.classList.remove('none')
    }
    if (step === 2) {
        nextBtn.innerHTML = '確認下單'
    } else {
        nextBtn.innerHTML = '下一步'
    }
}
function getTotal() {
    let totalPrice = 0
    const totalDeliveryPrice = document.querySelector('#total-delivery-price')
    if (!isNaN(Number(totalDeliveryPrice.innerHTML))) {
        totalPrice += Number(totalDeliveryPrice.innerHTML)
    }
    items.forEach(element => {
        const amount = Number(element.querySelector('.amount').innerHTML)
        const price = Number(element.querySelector('#price').innerHTML)
        totalPrice += amount * price
    });
    total.innerHTML = totalPrice
}

function handleCircleContainerClicked(e) {
    if (e.target.matches('#add')) {
        let amount = Number(e.target.parentNode.querySelector('.amount').innerHTML)
        if (amount < 99) {
            amount += 1
            e.target.parentNode.querySelector('.amount').innerHTML = amount
        }
    } else if (e.target.matches('#subtract')) {
        let amount = Number(e.target.parentNode.querySelector('.amount').innerHTML)
        if (amount > 0) {
            amount -= 1
            e.target.parentNode.querySelector('.amount').innerHTML = amount
        }
    }
    getTotal()
}
function handleFreightLabelClicked(e) {
    if (e.target.matches('Label')) {
        if (e.target.dataset.price === '0') {
            console.log(document.querySelector('#total-delivery-price').innerHTML = '免費')
        } else if (e.target.dataset.price === '500') {
            console.log(document.querySelector('#total-delivery-price').innerHTML = '500')
        }
    }
    getTotal()
}

btnControl.addEventListener('click', handleBtnControlClicked)
cart.addEventListener('click', handleCircleContainerClicked)
freight.addEventListener('click', handleFreightLabelClicked)