const heroBg =
document.querySelector('.hero-bg');

const images = [

  "assets/images/bg1.jpg",
  "assets/images/bg2.jpg",
  "assets/images/bg3.jpg"

];

let index = 0;

setInterval(()=>{

  heroBg.style.opacity = 0;

  setTimeout(()=>{

    index =
    (index + 1)
    % images.length;

    heroBg.style.backgroundImage =
    `url(${images[index]})`;

    heroBg.style.opacity = 1;

  },800);

},5000);