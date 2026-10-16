console.log("=== ЧАСТИНА 1: НОВИНИ (Масиви та функції) ===");

// 1. Створюємо масив з 10 новин (кожна новина - це об'єкт у фігурних дужках)
let newsArray = [
    { id: 1, title: "Виставка", chars: 500, day1: 150, day2: 200, time: new Date(2026, 9, 15, 12, 30), author: "Коваленко" },
    { id: 2, title: "Театр", chars: 800, day1: 300, day2: 250, time: new Date(2026, 9, 15, 19, 0), author: "Ткач" },
    { id: 3, title: "Кіно", chars: 300, day1: 500, day2: 100, time: new Date(2026, 9, 16, 10, 15), author: "Коваленко" },
    { id: 4, title: "Музика", chars: 450, day1: 50, day2: 60, time: new Date(2026, 9, 16, 21, 0), author: "Іваненко" },
    { id: 5, title: "Балет", chars: 600, day1: 400, day2: 380, time: new Date(2026, 9, 17, 14, 0), author: "Ткач" },
    { id: 6, title: "Живопис", chars: 200, day1: 100, day2: 120, time: new Date(2026, 9, 17, 9, 0), author: "Петренко" },
    { id: 7, title: "Скульптура", chars: 700, day1: 20, day2: 30, time: new Date(2026, 9, 18, 16, 45), author: "Коваленко" },
    { id: 8, title: "Поезія", chars: 150, day1: 10, day2: 5, time: new Date(2026, 9, 18, 23, 0), author: "Іваненко" },
    { id: 9, title: "Фестиваль", chars: 900, day1: 800, day2: 750, time: new Date(2026, 9, 19, 11, 0), author: "Ткач" },
    { id: 10, title: "Опера", chars: 550, day1: 250, day2: 300, time: new Date(2026, 9, 19, 18, 30), author: "Петренко" }
];

// Вимога 1: Впорядкування за автором (алфавітом) та середня довжина для автора "Коваленко"
// Метод sort() сортує масив[cite: 11]
newsArray.sort((a, b) => a.author.localeCompare(b.author));
console.log("Відсортовані новини за автором:", newsArray);

let kovalenkoNews = newsArray.filter(n => n.author === "Коваленко"); // filter() шукає потрібні елементи[cite: 11]
let totalChars = kovalenkoNews.reduce((sum, current) => sum + current.chars, 0);
console.log(`Середня довжина символів для Коваленко: ${totalChars / kovalenkoNews.length}`);

// Вимога 2: Знайти новину з максимальною кількістю читачів за добу_1
let maxDay1News = newsArray[0];
for (let i = 1; i < newsArray.length; i++) {
    if (newsArray[i].day1 > maxDay1News.day1) {
        maxDay1News = newsArray[i];
    }
}
console.log(`ID новини з максимумом читачів за першу добу: ${maxDay1News.id}`);

// Вимога 3: Додавання нової новини. Якщо інфо не повна -> в кінець, якщо повна -> на початок.
function addNewNews(newsObj) {
    // Перевіряємо чи є всі поля
    if (newsObj.id && newsObj.title && newsObj.chars && newsObj.day1 && newsObj.day2 && newsObj.time && newsObj.author) {
        newsArray.unshift(newsObj); // unshift() додає на початок масиву[cite: 11]
        console.log("Повна новина додана на початок.");
    } else {
        newsArray.push(newsObj); // push() додає в кінець[cite: 11]
        console.log("Неповна новина додана в кінець.");
    }
}
// Тестуємо функцію:
addNewNews({ id: 11, title: "Повна новина", chars: 100, day1: 1, day2: 2, time: new Date(), author: "Тест" });
addNewNews({ id: 12, title: "Неповна новина" }); // Відсутні інші дані

// Вимога 4: Обчислити суму оплати автору. Робочий час (10:00-18:00) = 0.5 грн/символ, решта = 0.8 грн.
function calculatePayment(news) {
    let hour = news.time.getHours(); // getHours() повертає годину (від 0 до 23)[cite: 16]
    let rate = (hour >= 10 && hour < 18) ? 0.5 : 0.8;
    let payment = news.chars * rate;
    console.log(`Новина "${news.title}" (Час: ${hour}:00). Оплата: ${payment} грн.`);
}
console.log("--- Розрахунок оплат ---");
newsArray.forEach(news => { if(news.chars) calculatePayment(news) }); // forEach() виконує функцію для кожного елемента[cite: 11]

console.log("\n=== ЧАСТИНА 2: КОРИСТУВАЧІ (ООП) ===");

// Створюємо Клас User. Конструктор ініціалізує об'єкт початковими даними[cite: 14]
class User {
    constructor(lastName, firstName, age, education, purpose, date, time) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.education = education;
        this.purpose = purpose;
        this.date = date; // Формат 'YYYY-MM-DD'
        this.time = time; // Формат 'HH:MM'
    }
}

// Створюємо 10 користувачів за допомогою ключового слова new[cite: 14]
let users = [
    new User("Іванова", "Анна", 25, "вища", "пропозиція", "2026-10-05", "14:30"), // Жінка, вища
    new User("Петров", "Іван", 19, "без освіти", "скарга", "2026-10-12", "09:15"), // Чоловік, без освіти
    new User("Коваленко", "Марія", 30, "вища", "співпраця", "2026-09-20", "11:00"), // Жінка, вища
    new User("Сидоров", "Олег", 45, "середня", "помилка", "2026-10-05", "16:45"),
    new User("Ткачук", "Олена", 22, "неповна вища", "пропозиція", "2026-11-01", "10:20"),
    new User("Бойко", "Максим", 19, "без освіти", "скарга", "2026-10-15", "14:30"), // Чоловік, без освіти (вік співпадає з Петровим)
    new User("Мельник", "Світлана", 35, "вища", "співпраця", "2026-08-10", "12:00"), // Жінка, вища
    new User("Шевченко", "Тарас", 60, "вища", "пропозиція", "2026-10-05", "18:00"),
    new User("Гриценко", "Юлія", 28, "вища", "помилка", "2026-12-05", "08:30"), // Жінка, вища
    new User("Кравченко", "Ігор", 40, "без освіти", "скарга", "2026-10-22", "19:15") // Чоловік, без освіти
];

// Вимога 1: Користувачі за певний місяць (наприклад, 10 - жовтень) і певний час (наприклад, "14:30")
let targetMonth = "-10-";
let targetTime = "14:30";
let filteredUsers = users.filter(u => u.date.includes(targetMonth) && u.time === targetTime);
console.log("Користувачі (Жовтень, 14:30):", filteredUsers);

// Вимога 2: Знайти мінімальний вік. Якщо співпадає з кимось іншим - вивести освіту.
let minAge = Math.min(...users.map(u => u.age)); // Math.min() шукає мінімальне значення[cite: 16]
console.log(`Мінімальний вік: ${minAge}`);
let minAgeUsers = users.filter(u => u.age === minAge);
if (minAgeUsers.length > 1) {
    console.log(`Знайдено декілька користувачів з віком ${minAge}. Їх типова освіта: ${minAgeUsers[0].education}`);
}

// Вимога 3: Поділити на 3 класи (Жінки з вищою, Чоловіки без освіти, Інші) та знайти кількість
// В українській мові жіночі прізвища часто закінчуються на "а" або "я". Використаємо це для простої логіки.
let womenHigher = 0, menNoEd = 0, others = 0;

users.forEach(u => {
    let isWoman = u.lastName.endsWith("а") || u.lastName.endsWith("я") || u.firstName.endsWith("а") || u.firstName.endsWith("я");
    if (isWoman && u.education === "вища") {
        womenHigher++;
    } else if (!isWoman && u.education === "без освіти") {
        menNoEd++;
    } else {
        others++;
    }
});
console.log(`Жінки з вищою: ${womenHigher}, Чоловіки без освіти: ${menNoEd}, Інші: ${others}`);

// Вимога 4: Сортування за спаданням віку, а якщо вік однаковий - за алфавітом прізвища
users.sort((a, b) => {
    if (b.age !== a.age) {
        return b.age - a.age; // Спадання віку
    }
    return a.lastName.localeCompare(b.lastName); // Алфавітний порядок для однакового віку
});
console.log("Користувачі відсортовані за віком та алфавітом:", users);