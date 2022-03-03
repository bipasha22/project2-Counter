let counterValueEle = document.querySelector('#counterValue');
let incBtn = document.querySelector('.customBtnInc');
let decBtn = document.querySelector('.customBtnDec');
let resetBtn = document.querySelector('.customBtnReset');

let count = 0;

updateCounter();

incBtn.addEventListener('click', () => {
  count++;
  updateCounter();
  // console.log(count)
});

decBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
  // console.log(count);
});

function updateCounter() {
  counterValueEle.textContent = count;
}
