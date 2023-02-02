const basicsDiv = document.getElementById('basicsDiv');
const standardDiv = document.getElementById('standardDiv');
const proCareDiv = document.getElementById('proCareDiv');

let basicsDivIsClicked = false;
let standardDivIsClicked = false;
let proCareDivIsClicked = false;

basicsDiv.addEventListener('click', () => {
  if (!basicsDivIsClicked) {
    basicsDiv.parentElement.classList.add('prices__content-main-order-item-active');
    standardDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    proCareDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    standardDivIsClicked = false;
    proCareDivIsClicked = false;
  } else {
    basicsDiv.parentElement.classList.remove('prices__content-main-order-item-active');
  }

  basicsDivIsClicked = !basicsDivIsClicked;
});

standardDiv.addEventListener('click', () => {
  if (!standardDivIsClicked) {
    standardDiv.parentElement.classList.add('prices__content-main-order-item-active');
    basicsDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    proCareDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    basicsDivIsClicked = false;
    proCareDivIsClicked = false;
  } else {
    standardDiv.parentElement.classList.remove('prices__content-main-order-item-active');
  }

  standardDivIsClicked = !standardDivIsClicked;
});

proCareDiv.addEventListener('click', () => {
  if (!proCareDivIsClicked) {
    proCareDiv.parentElement.classList.add('prices__content-main-order-item-active');
    basicsDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    standardDiv.parentElement.classList.remove('prices__content-main-order-item-active');
    basicsDivIsClicked = false;
    standardDivIsClicked = false;
  } else {
    proCareDiv.parentElement.classList.remove('prices__content-main-order-item-active');
  }

  proCareDivIsClicked = !proCareDivIsClicked;
});