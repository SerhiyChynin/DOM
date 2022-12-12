const one = document.querySelector('.one');
one.style.width = '150px';
one.style.paddingBottom = '50px';
// one.style.backgroundColor = 'orange';
// console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle('three')
}

//data атрибуты
console.log(one.getAttribute('data')); 
console.log(document.querySelector('link').getAttribute('href')); 
one.setAttribute('data-num', 6)

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    
    gas[i].onclick = g5;
     
    
}
let total = document.querySelector('.total');

function g5() {
    
    let gallons = document.querySelector('.gallons').value;
    let amount = this.getAttribute('data');
    let sum = gallons * amount;
   
    console.log(gallons * amount);
    total.style.background = 'orange';
    total.innerHTML += sum +'  ';
    
}

 
// total.innerHTML = ;



let a = document.createElement('div');
a.innerHTML = 'Hello!';
a.classList.add('one');
document.querySelector('.test').appendChild(a);
console.log(a);

document.querySelector('.b1').onclick = function () {
    let out = document.querySelector('.out-1');
    out.style.width = '500px';
    out.style.height = '150px';
    out.style.margin = '20px', '0', '0', '0';
    out.style.background = 'orangeRed';
    
}
document.querySelector('.b2').onclick = function b() {
    let out2 = document.querySelector('.out-2');
    out2.style.background = 'green';
}
document.querySelector('.b3').onclick = function c() {
    let out3 = document.querySelector('.out-3');
    
    out3.classList.add('out-3');
    out3.classList.remove('out-3');
}



let out4 = document.querySelector('.out-4');

document.querySelector('.btn').onclick = q;
    function q(x, y) {
    // out4.innerHTML += ' 4, 6';
        
    return x * y;
    
}

out4.innerHTML = q(3, 6);
console.log(q(3, 6));


