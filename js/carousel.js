const hero = document.querySelector(".hero");

const images = [
  "images/landscape.jpg",
  "images/goa.jpg",
  "images/manali.jpg"
];

hero.style.backgroundImage = `
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url(${images[0]})
`;

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;

  hero.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${images[index]})
  `;
}, 3000);
