function changedColor() {
// создаем переменную элемент2 и находим HTML Element по id=el
let element2 = document.getElementById("el");
// выводим в консоль
console.log(element2);
// добовляем классс Car
// element2.classList.add("Car");
// удаляем класс Car
//element2.classList.remove("Car"); 
// Проверка на наличие класса (как условие выше if else)
element2.classList.toggle("Car");
element2.textContent = element2.textContent == "Lets Find!" ? "Later" : "Lets Find!";
}

// создаем переменную btn2 и находим HTML Element no id=btn1
let btn2 = document.getElementById("btn1");
// выводим в консоль
console.log(btn2);
// добовляем слушатель собыития "клик" на кнопку
// нажали на кнопку -> работает функция changedColor
btn2.addEventListener('click',changedColor);
