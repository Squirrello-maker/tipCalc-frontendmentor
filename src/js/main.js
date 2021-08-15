const peopleSection = document.querySelector('.app__people');
const zeroError = peopleSection.querySelector('.zero-error');

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
handleZeroError()