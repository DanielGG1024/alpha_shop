
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const form = document.getElementById('a-form')
const formParts = document.querySelectorAll('.part')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-next')
const prevBtn = btnControl.querySelector('.btn-prev')
console.log(nextBtn)
console.log(prevBtn)
let step = 0

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
function setbtn(){
    if(step === 0){
        prevBtn.classList.add('none')
    }else{
        prevBtn.classList.remove('none')
    }
    if(step===2){
        nextBtn.innerHTML = '確認下單'
    }else{
        nextBtn.innerHTML = '下一步'
    }     
}

btnControl.addEventListener('click', handleBtnControlClicked)