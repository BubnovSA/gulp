import * as flsFunck from './modules/function.js';

flsFunck.isWebp();

const coldListRolls = [
    {
        name: 'Ролл с сыром Дор Блю',
        weight: 268,
        description: 'Состав: лист нори, рис, сыр Дор Блю, творожный сыр, пармезан, виноград, соус терияки',
        total: 271,
        calories: 581,
        // белки
        squirrels: 19,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 75,
        img: './img/coldrolls/1.png'
    },
    {
        name: 'Калифорния с красным рисом',
        weight: 216,
        description: 'Состав: лист нори, рис, соус спайс, крабовые палочки, авокадо, огурец, тобико',
        total: 199,
        calories: 394,
        // белки
        squirrels: 9,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 66,
        img: './img/coldrolls/2.png'
    },
    {
        name: 'Фруктовый ролл',
        weight: 236,
        description: 'Состав: лист нори, рис, сыр, виноград, яблоко, ананас',
        total: 157,
        calories: 402,
        // белки
        squirrels: 7,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 72,
        img: './img/coldrolls/3.png'
    },
    {
        name: 'Ролл с мраморным сыром',
        weight: 268,
        description: 'Состав: лист нори, рис, сыр мраморный, творожный сыр, пармезан, виноград, терияки',
        total: 244,
        calories: 581,
        // белки
        squirrels: 20,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 75,
        img: './img/coldrolls/4.png'
    },
    {
        name: 'Инь-ян',
        weight: 291,
        description: 'Состав: лист нори, рис, огурец, сыр, красная икра, кунжут',
        total: 228,
        calories: 659,
        // белки
        squirrels: 15,
        // жиры
        fats: 23,
        // углеводы
        carbohydrates: 105,
        img: './img/coldrolls/5.png'
    },
    {
        name: 'Ролл курица-ананас',
        weight: 286,
        description: 'Состав: лист нори, рис, курица, ананас, сыр творожный, тобика, кунжут',
        total: 261,
        calories: 631,
        // белки
        squirrels: 21,
        // жиры
        fats: 31,
        // углеводы
        carbohydrates: 73,
        img: './img/coldrolls/6.png'
    },
    {
        name: 'Морской коктейль',
        weight: 0,
        description: 'Состав: лист нори, рис, салат чука, морской коктейль в масле',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/coldrolls/7.png'
    },
    {
        name: 'Маленькие роллы',
        weight: 151,
        description: 'Состав: лист нори, рис, майонез, тобика, краб. палочки, начинка на выбор (угорь, курица, лосось, огурец, авокадо, креветка, тунец)',
        total: 117,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/coldrolls/8.png'
    },
    {
        name: 'Имя ролла',
        weight: 0,
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/coldrolls/9.png'
    },
    {
        name: 'Цезарь',
        weight: 253,
        description: 'Состав: лист нори, рис, майонез, салат, курица, помидоры, пармезан',
        total: 208,
        calories: 452,
        // белки
        squirrels: 18,
        // жиры
        fats: 14,
        // углеводы
        carbohydrates: 67,
        img: './img/coldrolls/10.png'
    },
];

const hotListRolls = [
    {
        name: 'Роллы с тунцом темпура',
        weight: 398,
        description: '',
        total: 302,
        calories: 982,
        // белки
        squirrels: 23,
        // жиры
        fats: 17,
        // углеводы
        carbohydrates: 190,
        img: './img/hotrolls/1.png'
    },
    {
        name: 'Роллы с копченым лососем темпура',
        weight: 383,
        description: 'Состав: лист нори, рис, копченый лосось, сыр, темпура',
        total: 290,
        calories: 980,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 190,
        img: './img/hotrolls/2.png'
    },
    {
        name: 'Ролл с копченой курицей темпура',
        weight: 413,
        description: 'Состав: лист нори, рис, соус спайс, копченая курица, тобика, огурец, авокадо, темпура, кунжут',
        total: 275,
        calories: 1031,
        // белки
        squirrels: 22,
        // жиры
        fats: 23,
        // углеводы
        carbohydrates: 191,
        img: './img/hotrolls/3.png'
    },
    {
        name: 'Корейский ролл темпура',
        weight: 408,
        description: 'Состав: лист нори, рис, сыр, копченая курица, перец маринованный, морковь по-корейски, темпура',
        total: 215,
        calories: 973,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 188,
        img: './img/hotrolls/4.png'
    },
    {
        name: 'Томаго с лососем',
        weight: 261,
        description: 'Состав: лист нори, рис, соус спайс, копченый лосось, зеленый лук, яйцо, унаги соус, авокадо',
        total: 207,
        calories: 435,
        // белки
        squirrels: 14,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 70,
        img: './img/hotrolls/5.png'
    },
    {
        name: 'Томаго с курицей',
        weight: 291,
        description: 'Состав: лист нори, рис, соус спайс, курица, огурец, зеленый лук, соус барбекю, яйцо',
        total: 166,
        calories: 432,
        // белки
        squirrels: 15,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 69,
        img: './img/hotrolls/6.png'
    },
    {
        name: 'Калифорния темпура в кляре / сухарях',
        weight: 378,
        description: 'Состав: лист нори, рис, соус спайс, авокадо, огурец, тобика, краб, темпура',
        total: 266,
        calories: 942,
        // белки
        squirrels: 17,
        // жиры
        fats: 16,
        // углеводы
        carbohydrates: 189,
        img: './img/hotrolls/7.png'
    },
    {
        name: 'Имя ролла',
        weight: 0,
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/hotrolls/8.png'
    },
    {
        name: 'Имя ролла',
        weight: 0,
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/hotrolls/9.png'
    },
    {
        name: 'Корейский темпура в кляре/сухарях',
        weight: 408,
        description: 'Состав: лист нори, рис, сыр, копченая курица, перец маринованный, морковь по-корейски, темпура',
        total: 215,
        calories: 973,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 188,
        img: './img/hotrolls/10.png'
    },
    {
        name: 'Имя ролла',
        weight: 0,
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './img/hotrolls/11.png'
    },
    {
        name: 'Сыр-сыр темпура в кляре/сухарях',
        weight: 413,
        description: 'Состав: лист нори, рис, мраморный сыр, сыр с плесенью, творожный сыр, пармезан, виноград, соус терияки, темпура',
        total: 286,
        calories: 1070,
        // белки
        squirrels: 23,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 196,
        img: './img/hotrolls/12.png'
    },
];

const sandwichList = [
    {
        name: 'Чука сэндвич',
        weight: 378,
        description: 'Состав: лист нори, рис, сыр, курица, чука, соус терияки, темпура',
        total: 266,
        calories: 942,
        // белки
        squirrels: 17,
        // жиры
        fats: 16,
        // углеводы
        carbohydrates: 189,
        img: './img/sandwich/1.png'
    },
];

const fullListDish = [
    ...coldListRolls,
    ...hotListRolls,
    ...sandwichList
]

const coldRollsListElement = document.getElementById('cold-rolls-list');
const hotRollsListElement = document.getElementById('hot-rolls-list');
const sandwichListElement = document.getElementById('sandwich-list');

const getMenuItem = (data) => {
    return data.map((item) => {
        return (`
            <div class="menu__item">
                <div class="menu__item-wrap">
                    <div class="menu__item-img">
                        <img 
                            src=${item.img}
                            class="img__cover"
                        >
                    </div>
                    <div class="menu__wrap-info">
                        <div class="menu__item-title">
                            ${item.name}
                        </div>
                        <div class="menu__item-energy">
                            ${item.weight} г / ${item.calories} кк
                        </div>
                        <div class="menu__item-description">
                            ${item.description}
                        </div>
                        <div class="menu__item-total">
                            ${item.total} ₽
                        </div>
                    </div>
                </div>
            </div>
        `);
    })
    .join('')
};

coldRollsListElement.innerHTML = `
    ${
        getMenuItem(coldListRolls)
    }
`;

hotRollsListElement.innerHTML = `
    ${
        getMenuItem(hotListRolls)
    }
`;

sandwichListElement.innerHTML = `
    ${
        getMenuItem(sandwichList)
    }
`;

// Блок с якорями для навигации по категориям
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href');

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const wrapperContainer = document.querySelector('.wrapper__container');
const mainWrapper = document.querySelector('.wrapper');
const menuItems = document.querySelectorAll('.menu__item');
const modal = document.querySelector('.modal__wrap');
const modalContainer = document.querySelector('.modal__container');

modal.addEventListener('click', (e) => {
    modal.classList.remove("view-modal");
    document.body.classList.remove('bodyFix');
    wrapperContainer.classList.remove('bodyFix');
    mainWrapper.classList.remove('bodyFix');
});

const topBtn = document.querySelector('.top__btn');

topBtn.addEventListener('click', () => {
    document.getElementById('#menu-title').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Отображение или скрытие иконок справа

const basketIcon = document.querySelector('.basket__icon-wrap');

wrapperContainer.addEventListener('scroll', () => {
    const height = wrapperContainer.scrollTop;

    if (height > 200) {
        topBtn.classList.add("btn__active");
        basketIcon.classList.add("basket__image-active");
    } else {
        topBtn.classList.remove("btn__active");
        basketIcon.classList.remove("basket__image-active");
    }
});

// Корзина
let basket = [];
let customerName = '';
let customerPhone = '';
let customerComment = '';

const basketWrap = document.querySelector('.basket__wrap');
const basketMain = document.querySelector('.basket__main');
const basketControl = document.querySelector('.basket__control');
const basketModal = document.querySelector('.basket__modal');
const basketCustomer = document.querySelector('.basket__customer');
const basketCloseIcon = document.querySelector('.basket__modal-img');

basketModal.addEventListener('click', (e) => {
    e.stopPropagation()
});

const viewEmptyBasket = () => {
    basketControl.innerHTML = '';
    basketCustomer.innerHTML = '';

    basketMain.innerHTML = `
        <div class="basket__message-empty">
            <img 
                src="./img/other/emptybasket.png" 
                alt="empty"
                class="basket__img-empty"
            >
            <div class="basket__text-empty">
                Корзина пуста
            </div>
        </div>
    `;
};

const getTotal = (data) => {
    let result = 0;

    for (let i = 0; i < data.length; i++) {
        const currentItem = data[i];

        result = result + (currentItem.quantity * currentItem?.total);
    }

    return result;
};

const update = () => {
    if (!basket.length) {
        basketItemsQuantity.classList.add('empty-basket');

        return viewEmptyBasket();
    }

    basketMain.innerHTML = basket.map((item, number) => {
        return (`
            <div class="basket__item">
                <div class="basket__item-name">
                    ${item.name}
                </div>
                <div class="bask__item-quantity">
                    <div class="basket__item-btn-dec" id="basket-decrement">-</div>
                    <div class="basket__item-number">${item.quantity} шт</div>
                    <div class="basket__item-btn-inc" id="basket-increment">+</div>
                </div>
            </div>
        `);
    }).sort().join('');

    viewForm();

    const btnDec = document.querySelectorAll('.basket__item-btn-dec');

    for (let item of btnDec) {
        item.addEventListener('click', (e) => {
            const currentItem = e.currentTarget.parentElement.parentElement

            const name = currentItem.childNodes[1].innerHTML?.trim();
            const element = basket.find(el => el.name === name);

            if (element.quantity === 1) {
                basket = basket.filter(el => el.name !== name);
            } else {
                basket = [...basket.filter(el => el.name !== name), {
                    name: element.name,
                    total: element.total,
                    quantity: element.quantity - 1
                }];
            }

            update();
        })
    }

    const btnInc = document.querySelectorAll('.basket__item-btn-inc');

    for (let item of btnInc) {
        item.addEventListener('click', (e) => {
            const currentItem = e.currentTarget.parentElement.parentElement;

            const name = currentItem.childNodes[1].innerHTML?.trim();
            const element = basket.find(el => el.name === name);

            basket = [...basket.filter(el => el.name !== name), {
                name: element.name,
                total: element.total,
                quantity: element.quantity + 1
            }];

            update();
        })
    }


    basketControl.innerHTML = `
        <div class="basket__btn">
            Оформить на ${getTotal(basket)} ₽
        </div>
    `;

    let quantityItem = 0;

    for (let i = 0; i < basket.length; i++) {
        const currentElement = basket[i];

        quantityItem = quantityItem + currentElement.quantity;
    }

    basketItemsQuantity.innerHTML = `${quantityItem}`;

    const basketBtm = document.querySelector('.basket__btn');

    basketBtm?.addEventListener('click', () => {
        sendOrder();
    });
};

const viewForm = () => {
    basketControl.innerHTML = `
        <div class="basket__btn">
            Оформить на ${getTotal(basket)} ₽
        </div>
    `;

    basketCustomer.innerHTML = `
        <div class="basket__customer-row">
            <div class="basket__row-value">
                <input 
                    value=""
                    placeholder="Имя"
                    class="basket__input"
                    id="basket-name"
                />
            </div>
        </div>
        <div class="basket__customer-row">
            <div class="basket__row-value">
                <input
                    value="" 
                    placeholder="Телефон"
                    class="basket__input-phone"
                    id="basket-phone"
                />
            </div>
        </div>
        <div class="basket__customer-row">
            <div class="basket__row-value">
                <input 
                    value="" 
                    placeholder="Комментарий"
                    class="basket__input"
                    id="basket-comment"
                />
            </div>
        </div>
    `;

    const basketNameInput = document.getElementById('basket-name');
    const basketPhoneInput = document.getElementById('basket-phone');
    const basketCommentInput = document.getElementById('basket-comment');

    // Костыль, иначе добавляется лишняя цифра в конец номера
    const preparePhone = customerPhone.length === 18 ? customerPhone.slice(0, -1) : customerPhone;

    basketNameInput.value = customerName;
    basketPhoneInput.value = preparePhone;
    basketCommentInput.value = customerComment;

    basketNameInput?.addEventListener('input', (e) => {
        customerName = e.target.value;
    });

    basketPhoneInput?.addEventListener('input', (e) => {
        customerPhone = e.target.value;
    });

    basketCommentInput?.addEventListener('input', (e) => {
        customerComment = e.target.value;
    });

    [].forEach.call(document.querySelectorAll('.basket__input-phone'), function(input) {
        let keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);

            let pos = this.selectionStart;

            if (pos < 3) event.preventDefault();

            let matrix = "+7 (___) ___ ____";
            let i = 0;
            let def = matrix.replace(/\D/g, "");
            let val = this.value.replace(/\D/g, "");

            let new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? (val.charAt(i++) || def.charAt(i)) : a
            });

            i = new_value.indexOf("_");

            if (i != -1) {
                i < 5 && (i = 3);

                new_value = new_value.slice(0, i)
            }

            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }
            )
            .replace(/[+()]/g, "\\$&");

            reg = new RegExp("^" + reg + "$");

            if (
                !reg.test(this.value) || 
                this.value.length < 5 || 
                keyCode > 47 && keyCode < 58
            ) this.value = new_value;

            if (
                event.type == "blur" &&
                this.value.length < 5
            ) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
};

const sendOrder = () => {
    const prepareBasket = basket.map(item => ({
        name: item.name,
        quantity: item.quantity
    }));

    const preparePhone =
        customerPhone
            .replaceAll('+', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll(' ', '');

    const order = {
        items: prepareBasket,
        // phone: '+799999999999',
        phone: preparePhone,
        // name: 'Test',
        name: customerName,
        date: new Date().getTime(),
        comment: customerComment
    };

    basketCustomer.innerHTML = '';
    basketControl.innerHTML = '';
    basketMain.innerHTML = `
        <div class="basket__message-empty">
            <img 
                src="./img/loader/spinner.gif" 
                alt="loading"
                class="spinner__style"
            >
            <div class="basket__message-text">
                Отправка заказа
            </div>
        </div>
    `;

    fetch('http://localhost:5000', {
    // fetch('https://telegram.serbio.online', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({order: order})
    }).then(async (res) => {
        const result = await res.json();

        if (result.compete) {
            basketMain.innerHTML = `
                <div class="basket__message-empty">
                    <img 
                        src="./img/other/complete.png" 
                        alt="complete"
                        class="basket__complete-img"
                    >
                    <div class="basket__complete-text">
                        Заказ отправлен
                    </div>
                </div>
            `;

            basket = [];
            customerName = '';
            customerPhone = '';
            customerComment = '';

            basketItemsQuantity.classList.add('empty-basket');
        } else {
            basketMain.innerHTML = `
                <div class="basket__message-empty">
                    <img 
                        src="./img/other/error.png" 
                        alt="error"
                        class="basket__error-img"
                    >
                    <div class="basket__error-text">
                        ${result?.message || 'Произошла ошибка!'}
                    </div>
                    <div class="basket__btn-again">
                        Попробовать еще раз
                    </div>
                </div>
            `;

            const tryAgainBtb = document.querySelector('.basket__btn-again');

            tryAgainBtb.addEventListener('click', () => {
                update();
            });
        }
    }).catch((err) => {
        basketMain.innerHTML = `
            <div class="basket__message-empty">
                <img 
                    src="./img/other/error.png" 
                    alt="error"
                    class="basket__error-img"
                >
                <div class="basket__error-text">
                    ${err?.message === 'Failed to fetch' ? 'Сетевая ошибка!' : 'Произошла ошибка!'}
                </div>
                <div class="basket__btn-again">
                    Попробовать еще раз
                </div>
            </div>
        `;

        const tryAgainBtb = document.querySelector('.basket__btn-again');

        tryAgainBtb.addEventListener('click', () => {
            update();
        });
    });
};

// Кол-во позиций в корзине
const basketItemsQuantity = document.querySelector('.basket__quantity-text');

basketIcon.addEventListener('click', () => {
    basketWrap.classList.add("view-basket");
    document.body.classList.add('bodyFix');
    wrapperContainer.classList.add('bodyFix');
    mainWrapper.classList.add('bodyFix');

    if (!basket.length) {
        viewEmptyBasket();
    } else {
        update();
    }
});

basketCloseIcon.addEventListener('click', () => {
    document.body.classList.remove('bodyFix');
    wrapperContainer.classList.remove('bodyFix');
    mainWrapper.classList.remove('bodyFix');

    basketWrap.classList.remove("view-basket");
});

basketWrap.addEventListener('click', () => {
    basketWrap.classList.remove("view-basket");
    document.body.classList.remove('bodyFix');
    wrapperContainer.classList.remove('bodyFix');
    mainWrapper.classList.remove('bodyFix');
});

for (let item of menuItems) {
    item.addEventListener('click', () => {
        // currentName
        const data = item.childNodes[1].childNodes[3].childNodes;
        const title = data[1].innerHTML.trim();
        const currentItem = fullListDish.find(el => el.name === title);

        const {
            calories = 0,
            carbohydrates = 0,
            description = '',
            fats = 0,
            img = '',
            name = '',
            squirrels = 0,
            total = 0,
            weight = 0,
        } = currentItem || {};

        debugger
        const caloriesPerHundredGrams = Number(((calories * 100) / weight).toFixed(0)) || 0;
        const carbohydratesPerHundredGrams = Number(((carbohydrates * 100) / weight).toFixed(0)) || 0;
        const fatsPerHundredGrams = Number(((fats * 100) / weight).toFixed(0)) || 0;
        const squirrelsPerHundredGrams = Number(((squirrels * 100) / weight).toFixed(0)) || 0;

        const isHasItem = basket.find(el => el.name === name);

        const totalValue = !isHasItem ? 
            `Добавить за ${total} ₽` 
            :
            `Добавлено ${isHasItem.quantity} шт - ${total * isHasItem.quantity} ₽`;

        modal.innerHTML = `
            <div class="modal__container">
                <div class="modal__img-container">
                    <div class="modal__top-close-container">
                        <img 
                            src="./img/other/close.png" 
                            class="modal__close-icon"
                            id="close-top"
                        >
                    </div>
                    <div class="modal__img-dish-wrap">
                        <div class="circle">
                            <img 
                                src="${img.trim()}" 
                                class="img__cover-modal"
                            >
                        </div>
                    </div>
                </div>
                <div class="modal__main-wrap">
                    <div class="modal__main-close-wrap">
                        <div class="modal__main-close-container">
                            <img 
                                src="./img/other/close.png" 
                                class="modal__close-icon"
                                id="close-default"
                            >
                        </div>
                    </div>
                    <div class="modal__title-wrap">
                        <div class="modal__title-text">
                            ${name}
                        </div>
                    </div>
                    <div class="modal__description">
                        <div class="modal__description-text">
                            <div class="description-bold">Вес: ${weight} г.</div> ${description}
                        </div>
                    </div>
                    <div class="modal__energy">
                        <div class="modal__energy-table-wrap">
                            <div class="modal__energy-name">
                                <div class="modal__energy-name-item"></div>
                                <div class="modal__energy-name-item">100 грамм</div>
                                <div class="modal__energy-name-item">Всего</div>
                            </div>
                            <div class="modal__energy-main">
                                <div class="modal__energy-main-item">
                                    <div class="modal__energy-main-text">Белки</div>
                                    <div class="modal__energy-main-text">Жиры</div>
                                    <div class="modal__energy-main-text">Углеводы</div>
                                    <div class="modal__energy-main-text">Ккал</div>
                                </div>
                                <div class="modal__energy-main-item">
                                    <div class="modal__energy-main-value">${squirrelsPerHundredGrams}</div>
                                    <div class="modal__energy-main-value">${fatsPerHundredGrams}</div>
                                    <div class="modal__energy-main-value">${carbohydratesPerHundredGrams}</div>
                                    <div class="modal__energy-main-value">${caloriesPerHundredGrams}</div>
                                </div>
                                <div class="modal__energy-main-item">
                                    <div class="modal__energy-main-value">${squirrels}</div>
                                    <div class="modal__energy-main-value">${fats}</div>
                                    <div class="modal__energy-main-value">${carbohydrates}</div>
                                    <div class="modal__energy-main-value">${calories}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal__total">
                        <div class="modal__total-btn-wrap">
                            <div class="modal__total-text">
                                ${totalValue}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add("view-modal");
        wrapperContainer.classList.add('bodyFix');
        mainWrapper.classList.add('bodyFix');
        document.body.classList.add('bodyFix');

        const modalContainer = modal.childNodes[1];

        // <-- CLOSE ICON BLOCK - start -->
        const closeIconTop = document.getElementById('close-top');
        const closeIconDefault = document.getElementById('close-default');

        closeIconTop.addEventListener('click', () => {
            document.body.classList.remove('bodyFix');
            wrapperContainer.classList.remove('bodyFix');
            mainWrapper.classList.remove('bodyFix');

            modal.classList.remove("view-modal");
        });

        closeIconDefault.addEventListener('click', () => {
            document.body.classList.remove('bodyFix');
            wrapperContainer.classList.remove('bodyFix');
            mainWrapper.classList.remove('bodyFix');

            modal.classList.remove("view-modal");
        });

        // <-- CLOSE ICON BLOCK - end -->

        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation()
        });

        const addBtn = document.querySelector('.modal__total-text');

        addBtn.addEventListener('click', () => {
            const isHasItem = basket.find(el => el.name === title);

            if (isHasItem) {
                basket = [...basket.filter(el => el.name !== title), {
                    name: title,
                    quantity: isHasItem.quantity + 1,
                    total
                }];

                addBtn.innerHTML = `Добавлено ${isHasItem.quantity + 1} шт - ${total * (isHasItem.quantity + 1)} ₽`;
            } else {
                basket.push({
                    name: title,
                    quantity: 1,
                    total
                });

                addBtn.innerHTML = `Добавлено 1 шт - ${total} ₽`;
            }
            // bodyContainer.classList.remove("background__fix");
            // modal.classList.remove("view-modal");

            if (basket.length) {
                const isHasClass = Object
                    .entries(basketItemsQuantity.classList)
                    .map(item => item[1])
                    .find(el => el === 'empty-basket');

                if (isHasClass) {
                    basketItemsQuantity.classList.remove('empty-basket');
                }

                let quantityItem = 0;

                for (let i = 0; i < basket.length; i++) {
                    const currentElement = basket[i];

                    quantityItem = quantityItem + currentElement.quantity;
                }

                basketItemsQuantity.innerHTML = `${quantityItem}`;
            }
        })
    })
}
