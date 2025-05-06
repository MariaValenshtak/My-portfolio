// у файлі /api/weather.js
export async function fetchWeather(city, country, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=ua`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка при отриманні погоди');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка:', error);
    return null;
  }
}
