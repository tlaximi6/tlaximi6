const menuButtons = document.querySelectorAll(".menu-btn");
const submenuButtons = document.querySelectorAll(".submenu-btn");

menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = button.parentElement;
    const dropdown = parent.querySelector(".level-1");

    document.querySelectorAll(".menu-item .level-1").forEach((menu) => {
      if (menu !== dropdown) {
        menu.classList.remove("active");
      }
    });

    document.querySelectorAll(".level-2").forEach((submenu) => {
      submenu.classList.remove("active");
    });

    dropdown.classList.toggle("active");
  });
});

submenuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = button.parentElement;
    const dropdown = parent.querySelector(".level-2");

    const siblingSubmenus = parent.parentElement.querySelectorAll(".level-2");
    siblingSubmenus.forEach((menu) => {
      if (menu !== dropdown) {
        menu.classList.remove("active");
      }
    });

    dropdown.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((menu) => {
    menu.classList.remove("active");
  });
});