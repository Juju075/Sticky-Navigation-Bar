window.addEventListener("scroll", function (e) {
  const header = document.querySelector("header");

  /* active a partir de scroll > 0 pixel */
  header.classList.toggle("sticky", window.scrollY > 205);
  console.log("dans le script");
});
