let el = document.querySelector('.test');

el.innerHTML = 'Here comes ULIST!';

let str = '';

for (let i = 1; i <= 10; i ++) {
    str = `${str}<li>${i}</li>`;
}

let list = document.querySelector('.list');

list.innerHTML = str;