import './MyFuture.css';

function MyFuture() {
  return (
    <div className="future-container">
      <h1>Мій розвиток — Мій шлях у майбутнє</h1>

      <section className="future-steps">
        <h2>3 кроки до майбутнього</h2>
        <ul>
          <li>
            <strong>Крок 1:</strong> Навчитися працювати з сучасними JavaScript фреймворками (React, Vue.js).
          </li>
          <li>
            <strong>Крок 2:</strong> Опановувати серверні технології (Node.js, Express) та бази даних.
          </li>
          <li>
            <strong>Крок 3:</strong> Створити власний проєкт, який буде корисним для реальних користувачів.
          </li>
        </ul>
      </section>

      <section className="motivation">
        <h2>Мотиваційна фраза</h2>
        <blockquote>
          "Ти можеш все, якщо хочеш і працюєш над собою." — Невідомий
        </blockquote>
      </section>

      <section className="dream-job">
        <h2>Моя робота мрії</h2>
        <p>
          Моя робота мрії — це бути розробником веб-додатків у великій міжнародній компанії. Я прагну створювати корисні продукти, які допомагають людям у повсякденному житті, а також брати участь у командних проєктах та постійно розвиватися.
        </p>
      </section>

      <section className="timeline">
        <h2>Таймлайн розвитку</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="year">2025</span>
            <div className="timeline-content">
              <p>Опановую основи React, починаю працювати над невеликими проектами.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2026</span>
            <div className="timeline-content">
              <p>Вивчаю Node.js та створюю перші серверні додатки.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="year">2027</span>
            <div className="timeline-content">
              <p>Розробляю свій власний продукт, який використовують реальні користувачі.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="inspiration">
        <h2>Натхнення</h2>
        <div className="memes-container">
          <div className="meme-item">
            <img
              src="/images/meme-1.jpg" // Встав перший мем
              alt="Мем 1"
              className="inspiration-image"
            />
          </div>
          <div className="meme-item">
            <img
              src="/images/meme-2.jpg" // Встав другий мем
              alt="Мем 2"
              className="inspiration-image"
            />
          </div>
          <div className="meme-item">
            <img
              src="/images/meme-3.jpg" // Встав третій мем
              alt="Мем 3"
              className="inspiration-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyFuture;
