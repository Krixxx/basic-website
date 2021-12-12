//navigation, fixed navbar, smooth scroll
(function () {
  //navigation
  const toggleBtn = document.querySelector(".nav-toggle");
  const linksContainer = document.querySelector(".links-container");
  const links = document.querySelector(".links");

  toggleBtn.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });

  // ********** fixed navbar ************
  const navbar = document.getElementById("nav");
  const logo = document.querySelector(".logo");

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
      logo.classList.add("small-logo");
      links.classList.add("small-links");
    } else {
      logo.classList.remove("small-logo");
      links.classList.remove("small-links");
    }
  });
  // ********** smooth scroll ************
  // select links
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      //   prevent default behaviour
      e.preventDefault();

      // navigate to specific spot
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      // calculate the heights
      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const smallNav = logo.classList.contains("small-logo");

      let position = element.offsetTop - navHeight;

      let screenWidth = window.matchMedia("(min-width: 800px)");

      if (!smallNav) {
        if (screenWidth.matches) {
          position = position + 30; //since navbar is getting smaller by 30px, we must add this here
        } else {
          position = position;
        }
      }
      if (navHeight > 78) {
        position = position + containerHeight;
      }

      window.scrollTo({ left: 0, top: position });
      // hide navbar on small screen
      linksContainer.style.height = 0;
    });
  });
})();

// set year to footer
(function () {
  // set date
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear();
})();
