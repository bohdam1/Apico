// Дано: написати Анонімну функцію та присвоїти 
// її значення змінній convert, функція має приймати 
// число, яке є кількістю байтів та повертати стрічку
//  із переведеними байтами в мб, з двома знаками після
//   коми в форматі "100.00 Mb" та викликати цю функцію 
//   використовуючи call
// Результат: функція приймає число (байти) та перетворює у стрічку у форматі Мб наприклад:
// 10000 -> 0.01 Mb

let convert = (bytes) => {
    megabytes = bytes * (10 ** -6)
    console.log(megabytes.toFixed(2) + "Mb");
};

convert(10_000)