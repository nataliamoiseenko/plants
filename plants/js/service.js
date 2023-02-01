const gardens = document.querySelectorAll(`[data-selector="gardenItem"]`);
const lawn = document.querySelectorAll(`[data-selector="lawnItem"]`);
const planting = document.querySelectorAll(`[data-selector="plantingItem"]`);

const gardensButton = document.getElementById('gardenButton');
const lawnButton = document.getElementById('lawnButton');
const plantingButton = document.getElementById('plantingButton');

const buttonsState = {
  gardensButtonIsClicked: false,
  lawnButtonIsClicked: false,
  plantingButtonIsClicked: false
};

gardensButton.addEventListener('click', () => {
  const numberOfClickedButtons = Object.values(buttonsState).filter(item => item === true).length;

  if (!buttonsState.gardensButtonIsClicked) {
    if (numberOfClickedButtons === 0) {
      lawn.forEach((item) => item.classList.add('service__content-item-blur'));
      planting.forEach((item) => item.classList.add('service__content-item-blur'));
      gardensButton.classList.add('service__content-title-button-active');
    } else if (numberOfClickedButtons === 1) {
      gardens.forEach((item) => item.classList.remove('service__content-item-blur'));
      gardensButton.classList.add('service__content-title-button-active');
    } else {
      return;
    }
  } else {
    if (numberOfClickedButtons < 2) {
      lawn.forEach((item) => item.classList.remove('service__content-item-blur'));
      planting.forEach((item) => item.classList.remove('service__content-item-blur'));
      gardensButton.classList.remove('service__content-title-button-active');
    } else {
      gardens.forEach((item) => item.classList.add('service__content-item-blur'));
      gardensButton.classList.remove('service__content-title-button-active');
    }
  }

  buttonsState.gardensButtonIsClicked = !buttonsState.gardensButtonIsClicked;
});

lawnButton.addEventListener('click', event => {
  const numberOfClickedButtons = Object.values(buttonsState).filter(item => item === true).length;

  if (!buttonsState.lawnButtonIsClicked) {
    if (numberOfClickedButtons === 0) {
      gardens.forEach((item) => item.classList.add('service__content-item-blur'));
      planting.forEach((item) => item.classList.add('service__content-item-blur'));
      lawnButton.classList.add('service__content-title-button-active');
    } else if (numberOfClickedButtons === 1) {
      lawn.forEach((item) => item.classList.remove('service__content-item-blur'));
      lawnButton.classList.add('service__content-title-button-active');
    } else {
      return;
    }
  } else {
    if (numberOfClickedButtons < 2) {
      gardens.forEach((item) => item.classList.remove('service__content-item-blur'));
      planting.forEach((item) => item.classList.remove('service__content-item-blur'));
      lawnButton.classList.remove('service__content-title-button-active');
    } else {
      lawn.forEach((item) => item.classList.add('service__content-item-blur'));
      lawnButton.classList.remove('service__content-title-button-active');
    }
  }

  buttonsState.lawnButtonIsClicked = !buttonsState.lawnButtonIsClicked;
});

plantingButton.addEventListener('click', event => {
  const numberOfClickedButtons = Object.values(buttonsState).filter(item => item === true).length;

  if (!buttonsState.plantingButtonIsClicked) {
    if (numberOfClickedButtons === 0) {
      gardens.forEach((item) => item.classList.add('service__content-item-blur'));
      lawn.forEach((item) => item.classList.add('service__content-item-blur'));
      plantingButton.classList.add('service__content-title-button-active');
    } else if (numberOfClickedButtons === 1) {
      planting.forEach((item) => item.classList.remove('service__content-item-blur'));
      plantingButton.classList.add('service__content-title-button-active');
    } else {
      return;
    }
  } else {
    if (numberOfClickedButtons < 2) {
      gardens.forEach((item) => item.classList.remove('service__content-item-blur'));
      lawn.forEach((item) => item.classList.remove('service__content-item-blur'));
      plantingButton.classList.remove('service__content-title-button-active');
    } else {
      planting.forEach((item) => item.classList.add('service__content-item-blur'));
      plantingButton.classList.remove('service__content-title-button-active');
    }
  }

  buttonsState.plantingButtonIsClicked = !buttonsState.plantingButtonIsClicked;
});
