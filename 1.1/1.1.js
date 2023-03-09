const increamentEl = document.getElementById('increment-el')
const decreamentEl = document.getElementById('decrement-el')

const increamentElBtn = document.getElementById('increment-btn')
const decreamentElBtn = document.getElementById('decrement-btn')


let counter = 0;
increamentElBtn.addEventListener('click', function(){
  counter++;
  increamentEl.innerText = counter;
})

decreamentElBtn.addEventListener('click', function(){
  counter--;
  decreamentEl.innerText = counter;
})

