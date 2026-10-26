window.addEventListener('scroll',()=>{
});

// Button Animation
const buttons = document.querySelectorAll('button');

buttons.forEach(button=>{
    button.addEventListener('mouseenter',()=>{
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave',()=>{
        button.style.transform = 'scale(1)';
    });
});

// Order Button Alert
const orderBtn = document.querySelector('.Order');

orderBtn.addEventListener('click',()=>{
    alert('Welcome To THE_CAFE 🍔 Your Order Section Is Ready!');
});

// Delivery Form Submit
const submit = document.querySelector('.submit');

submit.addEventListener('click',()=>{
    alert('Your Delivery Details Submitted Successfully ✅');
});

// Card Animation On Scroll
const cards = document.querySelectorAll('.img-card li, .images, .box');

window.addEventListener('scroll',()=>{
    cards.forEach(card=>{
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0px)';
        }
    });
});

cards.forEach(card=>{
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
});

// Typing Effect
const text = 'Best Food Experience In THE_CAFE';
let index = 0;

function typing(){
    if(index < text.length){
        document.querySelector('.home h1').innerHTML += text.charAt(index);
        index++;
        setTimeout(typing,100);
    }
}

// Remove Old Text
window.onload = ()=>{
    document.querySelector('.home h1').innerHTML = '';
    typing();
};