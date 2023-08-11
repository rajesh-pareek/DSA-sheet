
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20% of the viewport height
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.2) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  // You can use smooth scrolling behavior with modern browsers
  window.scrollTo({ top: 0, behavior: "smooth" });

  // For older browsers that do not support smooth scrolling
  // You can use the following line instead:
  // window.scrollTo(0, 0);
});
