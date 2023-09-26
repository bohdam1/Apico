// Дано: Функція яка приймає значення яке може бути будь-яким 
// типом даних = "302", null, 128, 60

// Результат: Вивести у консоль числа які є степенем двійки та не
// більші заданого значення або вивести помилку про коректний тип якщо значення не є числом

function Task1(number) {
    if (typeof number === 'number') {
        for (let i = 1; i <= number; i *= 2) {
            console.log(i)
        }
    }
    else{
        console.log("Invalid type")
    }
}

Task1(25);
Task1("25");