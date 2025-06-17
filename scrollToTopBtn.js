// Call scrollFunction() when the user scrolls the page
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }