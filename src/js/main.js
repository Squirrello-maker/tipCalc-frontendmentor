const peopleSection = document.querySelector('.app__people');
const zeroError = peopleSection.querySelector('.zero-error');
const billInput = document.querySelector('.app__bill-input');
const peopleInput = peopleSection.querySelector('.app__people-input');
const customValue = document.querySelector('.app__custom');
const resetBtn = document.querySelector('.btn-reset');
const tipValue = document.querySelector('.tip-value');
const totalValue = document.querySelector('.total-value');
const tipBtns = document.querySelectorAll('.app__tips-btn');

let currentTip;
let totalTip = 0;

const setBtnTip = e => {
    if(e.target.textContent.length <= 2)
    {
        currentTip = e.target.textContent.slice(0, 1);
    }
    else
    {
        currentTip = e.target.textContent.slice(0, 2);
    }
    currentTip = (parseInt(currentTip)/100);
    calc();
}
const setCustomTip = e => {
    if(e.target.value == "" || e.target.value > 100)
    {
        return;
    }
    currentTip = e.target.value;
    currentTip = (parseInt(currentTip)/100);
    calc();
}
const calc = () => {
    if(billInput.value == '' || currentTip == null || peopleInput.value == "")
    {
        tipValue.textContent = "0.00";
        totalValue.textContent = "0.00";
        return;
    }
    let bill = parseFloat(billInput.value);
    let tipAmount =  parseFloat((billInput.value*currentTip).toFixed(2));
    tipValue.textContent = parseFloat((tipAmount/peopleInput.value).toFixed(2)); //zaokrągla do 2 miejsc po przecinku
    totalTip = ((bill + tipAmount)/peopleInput.value).toFixed(2);
    totalValue.textContent = totalTip;
}
const handleZeroError = () => {
    if(window.innerWidth < 992)
    {

        if(peopleInput.value  < 1)
        {

            const error = document.createElement('p');
            error.textContent = "Can't be zero";
            error.classList.add('zero-error');
            error.classList.add('fail-desktop');
            peopleSection.appendChild(error);
            tipValue.textContent = "0.00";
            totalValue.textContent = "0.00";
        }
        else
        {
           peopleSection.querySelector('.zero-error').remove();     
        }
    }
    else
    {
        if(peopleInput.value < 1)
        {
            zeroError.classList.add('fail');
        }
        else
        {
            zeroError.classList.remove('fail');
        }
        
    }
}

const resetApp = () => {
    currentTip = 0;
    totalTip = 0.00;
    billInput.value = "";
    customValue.value = "";
    peopleInput.value = "";
    tipValue.textContent = "0.00";
    totalValue.textContent = "0.00";
    zeroError.classList.remove('fail');
    zeroError.classList.remove('fail-desktop');

}
tipBtns.forEach(btn => {
    btn.addEventListener('click', setBtnTip);
});
customValue.addEventListener('input', setCustomTip);
billInput.addEventListener('input', calc);
peopleInput.addEventListener('input', calc);
peopleInput.addEventListener('input', handleZeroError);
resetBtn.addEventListener('click', resetApp)