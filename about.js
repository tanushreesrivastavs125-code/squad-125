

const img = document.getElementById("animated-img");


const maxScale = 1.3;
const minScale = 1;
const scrollDistance = 300; 

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  let scale =
    minScale +
    ((maxScale - minScale) * Math.min(scrollTop, scrollDistance)) / scrollDistance;
  img.style.transform = `scale(${scale})`;
});
