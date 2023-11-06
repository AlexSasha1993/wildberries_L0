const inputElements = document.querySelectorAll('.input_getter');
const toOrderBtn = document.querySelector('.to_order');
const mailInput = document.getElementById('mail');
const mailError = document.getElementById('mailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const innInput = document.getElementById('inn');
const innError = document.getElementById('innError');

// Добавляем обработчик события на кнопку "Оформить"
toOrderBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию
  validateInputs();
});

// Добавляем обработчик события на изменение содержимого инпутов
inputElements.forEach((input) => {
  input.addEventListener('input', function () {
    if (formSubmitted) {
      validateInput(this);
    }
  });

  // Добавляем обработчик события на потерю фокуса инпута
  input.addEventListener('blur', function () {
    if (formSubmitted) {
      validateInput(this);
    }
  });
});

function validateInputs() {
  inputElements.forEach((input) => {
    validateInput(input);
  });
}

let formSubmitted = false;

function validateInput(input) {
  const value = input.value.trim();
  const id = input.id;

  if (value === '') {
    // Пустое поле
    input.classList.remove('error');
    input.style.color = ''; // Убираем явно заданный цвет текста при ошибке
    if (id === 'mail') {
      mailError.textContent = '';
      mailError.style.display = 'none';
    } else if (id === 'phone') {
      phoneError.textContent = '';
      phoneError.style.display = 'none';
    } else if (id === 'inn') {
      innError.textContent = '';
      innError.style.display = 'none';
    }
  } else {
    // Непустое поле - проводим дополнительные проверки в зависимости от ID
    if (id === 'mail') {
      // Проверка почты
      if (!validateEmail(value)) {
        input.classList.add('error');
        input.style.color = 'var(--system-orange, #F55123)'; // Устанавливаем цвет текста при ошибке
        mailError.textContent = 'Проверьте адрес электронной почты';
        mailError.style.display = 'block';
      } else {
        input.classList.remove('error');
        input.style.color = ''; // Убираем явно заданный цвет текста при успешной валидации
        mailError.textContent = '';
        mailError.style.display = 'none';
      }
    } else if (id === 'phone') {
      // Проверка номера телефона
      if (!validatePhoneNumber(value)) {
        input.classList.add('error');
        input.style.color = 'var(--system-orange, #F55123)'; // Устанавливаем цвет текста при ошибке
        phoneError.textContent = 'Формат: +9 999 999 99 99';
        phoneError.style.display = 'block';
      } else {
        input.classList.remove('error');
        input.style.color = ''; // Убираем явно заданный цвет текста при успешной валидации
        phoneError.textContent = '';
        phoneError.style.display = 'none';
      }
    } else if (id === 'inn') {
      // Проверка ИНН
      if (!validateINN(value)) {
        input.classList.add('error');
        input.style.color = 'var(--system-orange, #F55123)'; // Устанавливаем цвет текста при ошибке
        innError.textContent = 'Проверьте ИНН';
        innError.style.display = 'block';
      } else {
        input.classList.remove('error');
        input.style.color = ''; // Убираем явно заданный цвет текста при успешной валидации
        innError.textContent = '';
        innError.style.display = 'none';
      }
    } else {
      // Остальные поля
      input.classList.remove('error');
      input.style.color = ''; // Убираем явно заданный цвет текста при успешной валидации
      if (id === 'mail') {
        mailError.textContent = '';
        mailError.style.display = 'none';
      } else if (id === 'phone') {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
      } else if (id === 'inn') {
        innError.textContent = '';
        innError.style.display = 'none';
      }
    }
  }
}

function validateEmail(email) {
  // Простая проверка адреса электронной почты
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
  // Проверка формата номера телефона: +9 999 999 99 99
  const phoneRegex = /^\+\d{1} \d{3} \d{3} \d{2} \d{2}$/;
  return phoneRegex.test(phone);
}

function validateINN(inn) {
  // Проверка ИНН (14 цифр)
  const innRegex = /^\d{14}$/;
  return innRegex.test(inn);
}

let tabsBtn = document.querySelectorAll(
  '.pop_up_delivery_method_tab_to_the_point'
);
let tabsItem = document.querySelectorAll('.tabs_item');
let activeBtn = document.querySelector('.tabs_nav-btn:nth-child(2)');
let openButtonDelivery = document.getElementById('open_delivery');
let closeButtonDelivery = document.querySelector('.closeButtonDelivery');
let basket = document.querySelectorAll('.backet_img');
let popUpBackground = document.querySelector('.pop_up_background');
let popUpDelivery = document.querySelector('.main_pop_up_delivery_method');
let mainContainer = document.querySelector('.main_container');
let openButtonPayment = document.getElementById('open_payment');
let closeButtonPayment = document.querySelector('.closeButtonPayment');
let popUpPayment = document.querySelector('.main_pop_up_payment_method');
let fastPay = document.getElementById('fast_pay');
let orderText = document.querySelector('.to_order_text');
let firstCheckMobile = document.getElementById('firstCheckMobile');
let secondCheckMobile = document.getElementById('secondCheckMobile');
let thirdCheckMobile = document.getElementById('thirdCheckMobile');
let secondCheck = document.getElementById('secondCheck');
let thirdCheck = document.getElementById('thirdCheck');
let imgFirstInput = document.getElementById('imgFirstInput');
let imgSecondInput = document.getElementById('imgSecondInput');
let imgThirdInput = document.getElementById('imgThirdInput');
let imgSecondAdvanceInput = document.getElementById('imgSecondAdvanceInput');
let pencilDelivery = document.querySelector('.icon_20_mobile');
let pencilPayment = document.getElementById('open_pop_up_payment_method');
let radioMir = document.getElementById('radioMir');
let radioVisa = document.getElementById('radioVisa');
let radioMaster = document.getElementById('radioMaster');
let radioMaestro = document.getElementById('radioMaestro');
let imgCardPayment = document.querySelector('.sale_card');
let chooseButton = document.querySelector('.pop_up_payment_method_button');
let pickUp1 = document.getElementById('pickUp1');
let pickUp2 = document.getElementById('pickUp2');
let pickUp3 = document.getElementById('pickUp3');
let streetTime = document.querySelector('.street.time.mobile');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let tab2 = document.querySelector(
  '.pop_up_delivery_method_tab_to_the_point.tab2'
);
let moneyBlack = document.querySelector('.money_black');
let street = document.querySelector('.street');
let companyDesc1 = document.querySelector('.company_description1');
let companyDesc2 = document.querySelector('.company_description2');
let companyDesc3 = document.querySelector('.company_description3');
let companyIcon1 = document.querySelector('.company_icon1');
let companyIcon2 = document.querySelector('.company_icon2');
let companyIcon3 = document.querySelector('.company_icon3');
let forFree = document.querySelector('.for_free check');
let moneyGrey1 = document.querySelector('.money_grey1');
let clue1 = document.querySelector('.sale_clue1');
let moneyGrey2 = document.querySelector('.money_grey2');
let clue2 = document.querySelector('.sale_clue2');
let moneyGrey3 = document.querySelector('.money_grey3');
let clue3 = document.querySelector('.sale_clue3');
moneyGrey1.addEventListener('click', () => {
  clue1.classList.toggle('active');
});
moneyGrey2.addEventListener('click', () => {
  clue2.classList.toggle('active');
});
moneyGrey3.addEventListener('click', () => {
  clue3.classList.toggle('active');
});

companyIcon1.addEventListener('click', () => {
  companyDesc1.classList.toggle('active');
});
companyIcon2.addEventListener('click', () => {
  companyDesc2.classList.toggle('active');
});
companyIcon3.addEventListener('click', () => {
  companyDesc3.classList.toggle('active');
});
// tab2.addEventListener('click',()=>{
//   if('.pop_up_delivery_method_tab_to_the_point.tab2' === '.pop_up_delivery_method_tab_to_the_point.tab2.active' ){
//     moneyBlack.innerHTML = "Курьером"
//   }
//   else{
//     moneyBlack.innerHTML = "Доставка в пункт выдачи"
//   }
//   });
pickUp1.addEventListener('change', () => {
  if (pickUp1.checked) {
    streetTime.innerHTML =
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
    street.innerHTML =
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
  }
});
pickUp2.addEventListener('change', () => {
  if (pickUp2.checked) {
    streetTime.innerHTML =
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
    street.innerHTML =
      'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1';
  }
});
pickUp3.addEventListener('change', () => {
  if (pickUp3.checked) {
    streetTime.innerHTML = 'г. Бишкек, улица Табышалиева, д. 57';
    street.innerHTML = 'г. Бишкек, улица Табышалиева, д. 57';
  }
});
//

radio1.addEventListener('change', () => {
  if (radio1.checked) {
    streetTime.innerHTML = 'Бишкек, улица Табышалиева, 57';
    street.innerHTML = 'Бишкек, улица Табышалиева, 57';
  }
});
radio2.addEventListener('change', () => {
  if (radio2.checked) {
    streetTime.innerHTML = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
    street.innerHTML = 'Бишкек, улица Жукеева-Пудовкина, 77/1';
  }
});
radio3.addEventListener('change', () => {
  if (radio3.checked) {
    streetTime.innerHTML = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
    streetTime = 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1';
  }
});

chooseButton.addEventListener('click', () => {
  popUpDelivery.style.display = 'none';
  popUpPayment.style.display = 'none';
  popUpBackground.style.display = 'none';
});

//pop-up
openButtonPayment.addEventListener('click', function () {
  popUpBackground.style.display = 'block';
  popUpDelivery.style.display = 'block';
  popUpPayment.style.display = 'none';
});
openButtonDelivery.addEventListener('click', function () {
  popUpBackground.style.display = 'block';
  popUpPayment.style.display = 'block';
  popUpDelivery.style.display = 'none';
});
closeButtonDelivery.addEventListener('click', function () {
  popUpDelivery.style.display = 'none';
  popUpBackground.style.display = 'none';
});
closeButtonPayment.addEventListener('click', function () {
  popUpPayment.style.display = 'none';
  popUpBackground.style.display = 'none';
});
pencilDelivery.addEventListener('click', () => {
  popUpBackground.style.display = 'block';
  popUpDelivery.style.display = 'block';
  popUpPayment.style.display = 'none';
});
pencilPayment.addEventListener('click', () => {
  popUpBackground.style.display = 'block';
  popUpPayment.style.display = 'block';
  popUpDelivery.style.display = 'none';
});

//tabs
tabsBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    let btnId = btn.getAttribute('data-tab');
    console.log(btnId);
    let currentTab = document.querySelector(btnId);
    console.log(currentTab);
    tabsBtn.forEach((item) => {
      item.classList.remove('active');
    });
    btn.classList.add('active');
    tabsItem.forEach((tab) => {
      tab.classList.remove('active');
    });
    currentTab.classList.add('active');
  });
});

//удаление элементов из блока способ доставки
firstCheck.addEventListener('change', function () {
  if (this.checked) {
    imgFirstInput.style.display = 'flex';
  } else {
    imgFirstInput.style.display = 'none';
  }
});
secondCheck.addEventListener('change', function () {
  if (this.checked) {
    imgSecondInput.style.display = 'flex';
    imgSecondAdvanceInput.style.display = 'flex';
  } else {
    imgSecondInput.style.display = 'none';
    imgSecondAdvanceInput.style.display = 'none';
  }
});
thirdCheck.addEventListener('change', function () {
  if (this.checked) {
    imgThirdInput.style.display = 'flex';
  } else {
    imgThirdInput.style.display = 'none';
  }
});
firstCheckMobile.addEventListener('change', function () {
  if (this.checked) {
    imgFirstInput.style.display = 'flex';
  } else {
    imgFirstInput.style.display = 'none';
  }
});
secondCheckMobile.addEventListener('change', function () {
  if (this.checked) {
    imgSecondInput.style.display = 'flex';
    imgSecondAdvanceInput.style.display = 'flex';
  } else {
    imgSecondInput.style.display = 'none';
    imgSecondAdvanceInput.style.display = 'none';
  }
});
thirdCheckMobile.addEventListener('change', function () {
  if (this.checked) {
    imgThirdInput.style.display = 'flex';
  } else {
    imgThirdInput.style.display = 'none';
  }
});
//checkbox в счете, изменяет текст
fastPay.addEventListener('change', function () {
  if (this.checked) {
    orderText.innerHTML = 'Оплатить 2 101 063 сом';
  } else {
    orderText.innerHTML = 'Заказать';
  }
});

//radio выбор карт
radioMir.addEventListener('change', () => {
  if (radioMir.checked) {
    imgCardPayment.style.backgroundImage = "url('./image/card_mir.svg')";
  }
});

radioVisa.addEventListener('change', () => {
  if (radioVisa.checked) {
    imgCardPayment.style.backgroundImage = "url('./image/card_visa.svg')";
  }
});

radioMaster.addEventListener('change', () => {
  if (radioMaster.checked) {
    imgCardPayment.style.backgroundImage = "url('./image/card_master.svg')";
  }
});

radioMaestro.addEventListener('change', () => {
  if (radioMaestro.checked) {
    imgCardPayment.style.backgroundImage = "url('./image/card_maestro.svg')";
  }
});
//checkbox выбрать все
document.querySelector('#main_input').addEventListener('change', (e) => {
  const checked = e.target.checked;
  console.log(e.target);
  document.querySelectorAll('.check').forEach((el) => {
    el.checked = checked;
  });
  if (firstCheck.checked || firstCheckMobile.checked) {
    imgFirstInput.style.display = 'flex';
  } else {
    imgFirstInput.style.display = 'none';
  }
  if (secondCheck.checked || secondCheckMobile.checked) {
    imgSecondInput.style.display = 'flex';
    imgSecondAdvanceInput.style.display = 'flex';
  } else {
    imgSecondInput.style.display = 'none';
    imgSecondAdvanceInput.style.display = 'none';
  }
  if (firstCheck.checked || thirdCheckMobile.checked) {
    imgThirdInput.style.display = 'flex';
  } else {
    imgThirdInput.style.display = 'none';
  }
});
document.querySelector('#main_input ~ ul').addEventListener('change', (e) => {
  const allchecksLen = document.querySelectorAll('.check').length;
  const selectedChecksLen = document.querySelectorAll('.check:checked').length;
  const main = document.querySelector('#main_input');
  main.indeterminate =
    selectedChecksLen > 0 && selectedChecksLen < allchecksLen;
  main.checked = selectedChecksLen === allchecksLen;
});
