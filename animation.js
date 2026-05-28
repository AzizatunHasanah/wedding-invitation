// AUTO TYPING
const text = 'A journey of love begins forever...';
const typingElement = document.getElementById('typingText');

let i = 0;

function typing(){

  if(i < text.length){
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80)
  }
}

typing();

// FALLING FLOWERS
function createFlower(){

  const flower = document.createElement('div');
  flower.classList.add('flower-fall');

  flower.style.left = Math.random()*window.innerWidth+'px';
  flower.style.animationDuration = (Math.random()*5+5)+'s';

  document.body.appendChild(flower);

  setTimeout(()=>{
    flower.remove();
  },10000)
}

setInterval(createFlower,400)

// 3D PARALLAX
const cards = document.querySelectorAll('.glass');

cards.forEach((card)=>{

  card.addEventListener('mousemove',(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height)-0.5)*10;
    const rotateY = ((x / rect.width)-0.5)*-10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  })

  card.addEventListener('mouseleave',()=>{
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  })
})

// TIMELINE ANIMATION
const timelineCards = document.querySelectorAll('.timeline-card');

window.addEventListener('scroll',()=>{

  timelineCards.forEach((card)=>{

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.classList.add('timeline-show');
    }
  })
})
