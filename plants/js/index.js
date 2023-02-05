console.log(
  `  1. При нажатии на кнопки: Gargens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n
  2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n
  3. В разделе contacts реализован select с выбором городов +25\n
  Итоговая оценка - 100 баллов (125 максимально возможных)`
);


const burgerMenu = document.querySelector(".header__burger-menu-list");
const burgerMenuTrigger = document.querySelector("#header__burger-menu-toggle");
const burgerMenuTriggerContainer = document.querySelector(".header__burger-menu-button-container");
const burgerMenuLinks = document.querySelectorAll(".header__burger-menu-list-link");

document.addEventListener('click', (e) => {
  const isBurgerMenuOpen = burgerMenuTrigger.checked;
  if (!isBurgerMenuOpen) return;

  const isBurgerMenuLinkClick = Array.from(burgerMenuLinks).some(link => link.contains(e.target));

  if (
    (burgerMenu.contains(e.target) && !isBurgerMenuLinkClick)
    || burgerMenuTriggerContainer.contains(e.target)
    || burgerMenuTrigger.contains(e.target)
  ) return;

  burgerMenuTrigger.checked = false;
});