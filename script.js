// 2. Пошук і виведення елементів
console.log("=== Частина 2: Пошук елементів ===");

const title = document.querySelector('#title');
const menuItems = document.querySelectorAll('.menu-item');

console.log("Заголовок:", title);
console.log("Елементи меню:", menuItems);

// Завдання для самостійного написання скрипта
const actionButton = document.querySelector('.btn');
const navList = document.querySelector('.menu');

console.log("Кнопка:", actionButton);
console.log("Список меню:", navList);
// 3. Зміна тексту та стилів
console.log("=== Частина 3: Зміна тексту та стилів ===");

title.textContent = "Привіт, студенти!";
title.style.color = "tomato";
title.style.textTransform = "uppercase";

// Завдання для самостійного написання скрипта
const secondMenuItem = document.querySelectorAll('.menu-item')[1];
secondMenuItem.style.backgroundColor = "#f0f0f0";
secondMenuItem.style.fontSize = "18px";

console.log("Другий пункт меню змінено:", secondMenuItem);
// 4. Зміна класів
console.log("=== Частина 4: Зміна класів ===");

const firstItem = document.querySelector('.menu-item');
firstItem.classList.add('active');
console.log("Перший елемент має клас active:", firstItem.classList.contains('active'));

// Завдання для самостійного написання скрипта
actionButton.classList.toggle('hidden');
console.log("Класи кнопки:", actionButton.classList);
actionButton.classList.toggle('hidden'); // Повертаємо назад
// 5. Робота з атрибутами
console.log("=== Частина 5: Робота з атрибутами ===");

const link = document.createElement('a');
link.setAttribute('href', 'https://vcnuft.vn.ua');
link.textContent = 'Перейти на сайт коледжу';
document.body.append(link);

// Завдання для самостійного написання скрипта
title.setAttribute('data-version', '1.0');
console.log("Атрибут data-version:", title.dataset.version);
// 6. Створення та видалення елементів
console.log("=== Частина 6: Створення та видалення елементів ===");

const paragraph = document.createElement('p');
paragraph.textContent = 'Цей елемент створено динамічно.';
document.body.append(paragraph);

setTimeout(() => {
    paragraph.remove();
    console.log("Елемент видалено через 5 секунд");
}, 5000);

// Завдання для самостійного написання скрипта
const footer = document.createElement('footer');
footer.textContent = "Розробник: Юрчук Дмитро"; // Замініть на своє ПІБ
document.body.append(footer);

footer.addEventListener('dblclick', function() {
    footer.remove();
    console.log("Footer видалено подвійним кліком");
});
// 7. Використання innerHTML
console.log("=== Частина 7: Використання innerHTML ===");

const list = document.querySelector('.menu');
list.innerHTML += '<li class="menu-item">Новий пункт</li>';

// Завдання для самостійного написання скрипта
actionButton.innerHTML = 'Натисніть <strong>ТУТ</strong>';
console.log("HTML кнопки:", actionButton.innerHTML);
// 8. Використання insertAdjacentHTML()
console.log("=== Частина 8: Використання insertAdjacentHTML() ===");

const titleElement = document.querySelector('#title');
titleElement.insertAdjacentHTML("afterend", "<h2>Тема заняття: DOM</h2>");

// Завдання для самостійного написання скрипта
navList.insertAdjacentHTML("beforebegin", '<p style="font-style: italic;">Список навігації:</p>');
// Творче завдання №2
console.log("=== Творче завдання №2 ===");

const items = ["Головна", "Про нас", "Послуги", "Портфоліо", "Контакти"];

// Додаємо нові пункти меню
items.forEach(item => {
    const newItem = document.createElement('li');
    newItem.className = 'menu-item';
    newItem.textContent = item;
    
    // Змінюємо колір при кліку
    newItem.addEventListener('click', function() {
        // Видаляємо активний клас у всіх
        document.querySelectorAll('.menu-item').forEach(el => {
            el.classList.remove('active');
        });
        // Додаємо активний клас до поточного
        this.classList.add('active');
        console.log("Активний пункт:", this.textContent);
    });
    
    navList.appendChild(newItem);
});

// Додаємо кнопку "Видалити"
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Видалити останній пункт';
deleteButton.style.marginTop = '10px';
document.body.appendChild(deleteButton);

deleteButton.addEventListener('click', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    if (menuItems.length > 0) {
        const lastItem = menuItems[menuItems.length - 1];
        lastItem.remove();
        console.log("Видалено пункт:", lastItem.textContent);
    }
});