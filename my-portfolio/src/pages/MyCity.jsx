import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';
import './MyCity.css';

function MyCity() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '2258e85ffaadd5a65b378bae99b20f1f'; // ✅ Твій актуальний API ключ
  const city = 'Rivne';
  const country = 'UA';

  useEffect(() => {
    fetchWeather(city, country, apiKey).then(data => {
      console.log('Отримані дані:', data);
      if (data) setWeatherData(data);
    });
  }, []);

  return (
    <div className="my-city-container">
       <img
    src="/images/rivne.jpg"
    alt="Рівне"
    className="city-image"
  />
      <h1>Моє місто — Рівне</h1>
      <p>
  Рівне — це затишне місто на заході України, адміністративний центр Рівненської області.
  Воно розташоване на перехресті важливих транспортних шляхів, що робить його зручним для подорожей та розвитку економіки.
</p>
<p>
  Місто має багату історію, що сягає ще княжих часів. Рівне поєднує в собі атмосферу спокою невеликого міста з активним культурним життям.
  Тут працюють театри, музеї, проводяться фестивалі та мистецькі заходи.
</p>
<p>
  Серед визначних місць — Парк ім. Тараса Шевченка, Лебединка, Рівненський зоопарк і Костел Святого Антонія.
  Місто приваблює туристів не лише архітектурою, а й гостинністю мешканців.
</p>

      {weatherData ? (
      <div className="weather-box">
      <h2>Погода зараз:</h2>
      <div className="weather-info">
        <p><strong>Температура:</strong> {weatherData.main.temp}°C</p>
        <p><strong>Опис:</strong> {weatherData.weather[0].description}</p>
        <p><strong>Координати:</strong> [{weatherData.coord.lat}, {weatherData.coord.lon}]</p>
        <p><strong>Місто:</strong> {weatherData.name}, {weatherData.sys.country}</p>
      </div>
    
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
        alt={weatherData.weather[0].description}
        className="weather-icon"
      />
    </div>
    
      ) : (
        <p>Завантаження даних про погоду...</p>
      )}
    </div>
  );
}

export default MyCity;
