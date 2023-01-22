console.log(
  `  1. Вёрстка соответствует макету. Ширина экрана 768px +24\n
  2. Вёрстка соответствует макету. Ширина экрана 380px +24\n
  3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n
  4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\n
  Итоговая оценка - 75 баллов (85 максимально возможных)`
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