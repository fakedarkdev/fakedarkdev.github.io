const goBottomButton = document.getElementById("goBottom");
goBottomButton.addEventListener("click", () => {
  const distanceToScroll = window.innerHeight * 0.3;
  window.scrollBy({ top: distanceToScroll, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight * 0.3) {
    goBottomButton.style.bottom = "-50px";
  } else {
    goBottomButton.style.bottom = "20px";
  }
});
window.onscroll = function () {
  if (
    document.body.scrollTop > document.body.scrollHeight * 0.3 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.3
  ) {
    document.getElementById("go-top-btn").style.display = "block";
    document.getElementById("go-top-btn").style.bottom = "20px";
  } else {
    // document.getElementById("go-top-btn").style.display = "none";
    document.getElementById("go-top-btn").style.bottom = "-50px";
  }
};
document.getElementById("go-top-btn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
