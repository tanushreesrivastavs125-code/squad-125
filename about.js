/* Generalized smooth scroll-based zoom for any image with class `zoom-img`
const zoomImages = Array.from(document.querySelectorAll('.zoom-img'));
const minScale = 1;
const maxScale = 1.5; // maximum zoom
const smoothness = 0.06; // interpolation speed (lower = slower)
const maxScroll = 800; // pixels of scroll that produce full zoom

// maintain state per image
const states = zoomImages.map(() => ({ current: 1, target: 1 }));

function updateTargetsOnScroll() {
  const scrollY = window.scrollY;
  zoomImages.forEach((img, i) => {
    // use the image's parent element as the reference area
    const container = img.closest('.split-left') || img.closest('.hero-section') || img.parentElement;
    const rect = container.getBoundingClientRect();
    const containerTop = scrollY + rect.top;

    // how far we've scrolled past the top of the container
    const scrolledPast = Math.max(0, scrollY - containerTop);
    let t = scrolledPast / maxScroll;
    t = Math.max(0, Math.min(1, t));
    states[i].target = minScale + t * (maxScale - minScale);
  });
}

window.addEventListener('scroll', updateTargetsOnScroll, { passive: true });
window.addEventListener('resize', updateTargetsOnScroll);

function animate() {
  zoomImages.forEach((img, i) => {
    const s = states[i];
    s.current += (s.target - s.current) * smoothness;
    img.style.transform = `scale(${s.current})`;
  });
  requestAnimationFrame(animate);
}

// Initialize
updateTargetsOnScroll();
animate();*/

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
