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
}
const setCustomTip = (params) => {
    
}
const handleZeroError = () => {
    if(window.innerWidth < 992)
    {
        const error = document.createElement('p');
        error.textContent = "Can't be zero";
        error.classList.add('zero-error');
        error.classList.add('fail-desktop');
        peopleSection.appendChild(error);
    }
    else
    {
        zeroError.classList.toggle('fail');
    }
}
// handleZeroError()
tipBtns.forEach(btn => {
    btn.addEventListener('click', setTip);
});
customValue.addEventListener('input', setBtnTip);