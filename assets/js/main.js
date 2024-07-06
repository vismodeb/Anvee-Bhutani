$(document).ready(function () {
  // Mobile Nav Toggle
  $("#toggleNav-icon").click(function () {
    $(this).toggleClass("open");
    $(".menu").slideToggle();
  });
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
      console.log(link);
    }
  });
});
