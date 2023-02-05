const contactsButton = document.getElementById('contactsButton');
const contactsButtonText = document.getElementById('contactsButtonText');
const contactDetails = document.getElementById('contactDetails');

const contactsCity = document.getElementById('contactsCity');
const contactsPhone = document.getElementById('contactsPhone');
const contactsAddress = document.getElementById('contactsAddress');

const citiesList = document.getElementById('citiesList');
const callUsBtn = document.getElementById('callUsBtn');

const CITIES_DATA = [
  {
    city: 'Canandaigua, NY',
    phone: '+1 585	393 0001',
    address: '151 Charlotte Street'
  },
  {
    city: 'New York City',
    phone: '+1 212	456 0002',
    address: '9 East 91st Street'
  },
  {
    city: 'Yonkers, NY',
    phone: '+1 914	678 0003',
    address: '511 Warburton Ave'
  },
  {
    city: 'Sherrill, NY',
    phone: '+1 315	908 0004',
    address: '14 WEST Noyes BLVD'
  }
];

let isContactsButtonClicked = false;

CITIES_DATA.forEach(item => {
  const listItem = document.createElement('li');
  listItem.className = 'contacts__content-main-block-list-item';
  const listItemContent = document.createTextNode(item.city);
  listItem.appendChild(listItemContent);
  citiesList.appendChild(listItem);
});

contactsButton.addEventListener('click', () => {
  if (!isContactsButtonClicked) {
    contactsButton.classList.add('contacts__content-main-block-button-active');
    contactsButton.classList.add('contacts__content-main-block-button-open');
    contactDetails.classList.remove('contacts__details-visible');
  } else {
    contactsButton.classList.remove('contacts__content-main-block-button-active');
    contactsButton.classList.remove('contacts__content-main-block-button-open');
  }

  isContactsButtonClicked = !isContactsButtonClicked;
});

document.querySelectorAll('.contacts__content-main-block-list-item').forEach(btn => btn.addEventListener('click', () => {
  const btnText = btn.innerText;
  contactsButtonText.innerText = btnText;
  contactsButton.classList.remove('contacts__content-main-block-button-open');
  isContactsButtonClicked = false;

  const cityData = CITIES_DATA.find(item => item.city === btnText);
  contactsCity.innerText = cityData.city;
  contactsPhone.innerText = cityData.phone;
  contactsAddress.innerText = cityData.address;
  contactDetails.classList.add('contacts__details-visible');

  callUsBtn.setAttribute('href', `tel:${cityData.phone}`);
}));
