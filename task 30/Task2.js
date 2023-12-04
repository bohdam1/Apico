// Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
// Використати fetch.
// Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)

const URL = "https://jsonplaceholder.typicode.com"
const userID = 10

fetch(`${URL}/users/${userID}/albums`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    console.log(response.status)
    return response.json();
  })
  .then(userAlbums => {
    console.log(`Список альбомів користувача з id: ${userID}`);
    userAlbums.forEach(albums => {
      console.log(albums);
    });
  })
  .catch(error => {
    console.error("Сталася помилка:", error);
  });