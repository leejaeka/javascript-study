console.log('HELLO')

//console.log(window)
//alert(1);
// Grab Single element
//const form = document.getElementById('my-form')
//console.log(document.querySelector('h1'))

//// Grab Multiple element
//console.log(document.querySelectorAll('.item')) //can put id, tag, class
//console.log(document.getElementsByClassName('item')) // only class
//console.log(document.getElementsByTagName('li')) // only tag

//const items = document.querySelectorAll('.item')
//items.forEach((item) => console.log(item))

//const ul = document.querySelector('.items')


////ul.remove();
//const ul = document.querySelector('.items')
////console.log(ul)
//////ul.remove()
////ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Changed'

//ul.children[1].innerText = "Birds"
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const myForm = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.items')

myForm.addEventListener('submit', onSubmit)
function onSubmit(e) {
    e.preventDefault();
    console.log(name.value);
    if (name.value === '' || email.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        console.log(li)
        userList.appendChild(li);
        //dont forget to Clear fields
        name.value = '';
        email.value = '';
    }
}



//// BUTTON
//const btn = document.querySelector('.button')
////mouseover for hover, click for click, mouseout
//btn.addEventListener('mouseout', (e) => {
//    e.preventDefault(); // so it doesnt flash and go away
//    console.log(e)
//    document.querySelector('#my-form').style.background = '#ccc'
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>OMG</h1>'
//});

