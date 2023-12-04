
// Завдання 3
//  Створити ф-ію timer, яка приймає число(секунди) та імітує поведінку таймера:
//  кожну секунду виводить в консоль стрічку Timer: ${s}, де ${s} - кількість секунд що залишилось
function timer(seconds) {
  let remainingSeconds = seconds;

  if (remainingSeconds <= 0) {
    console.log('You need to enter bigger value')
    return;
  }
  function cutDown() {
    if (remainingSeconds >= 0) {
      if (remainingSeconds === 0) {
        console.log('The timer run out');
        return;
      }
      console.log(`Timer: ${remainingSeconds}`)
      remainingSeconds--;
      setTimeout(cutDown, 1000)
    }
  }

  cutDown()
}

timer(10);