const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
const totalImages = images.length;
let angle = 0;

for (let i = 0; i < totalImages; i++) {
  images[i].style.transform = `rotateY(${i * (900 / totalImages)}deg) translateZ(288px)`;
}

function rotateCarousel(direction) {
  angle += direction * (900 / totalImages);
  carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)`;
}
