import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <div className="top-section">
        <div className="text-block">
          <h1>Про мене</h1>
          <p>
          Привіт! Я початківець-розробниця і дуже люблю створювати зручні та сучасні інтерфейси. Я — наполеглива, цікава, люблю вчитися новому та працювати в команді.
          </p>
          <p>
            Як розробник, прагну постійно вдосконалюватися. Навчаюся самостійно,
            експериментую з HTML, CSS, JavaScript і React, створюю маленькі проєкти для практики.
          </p>
        </div>
        <img src="/images/my-photo.jpg" alt="Моє фото" className="about-photo" />
      </div>

      <div className="about-columns">
        <div className="left-column">
          <h2>Мої проєкти</h2>
          <div className="project-category">
            <h3>HTML + CSS</h3>
            <div className="project-links">
              <a href="https://github.com/MariaValenshtak/Mamma-Mia.git" target="_blank" rel="noreferrer">Mamma-Mia</a>
              <a href="https://github.com/MariaValenshtak/StarBucks-BUILD.git" target="_blank" rel="noreferrer">StarBucks</a>
            </div>
          </div>

          <div className="project-category">
            <h3>JavaScript</h3>
            <div className="project-links">
              <a href="https://github.com/MariaValenshtak/js-DOM1.git" target="_blank" rel="noreferrer">Calculator</a>
              <a href="https://github.com/MariaValenshtak/js-DOM2.git" target="_blank" rel="noreferrer">Gallery</a>
            </div>
          </div>

          <div className="project-category">
            <h3>React</h3>
            <div className="project-links">
              <a href="https://github.com/MariaValenshtak/useState.git" target="_blank" rel="noreferrer">Registration form</a>
            </div>
          </div>
        </div>

        <div className="right-column">
          <h2>Мої цінності та захоплення</h2>
          <ul className="values-list">
            <li>Постійне навчання</li>
            <li>Креативність у розв’язанні задач</li>
            <li>Відповідальність та самодисципліна</li>
            <li>Дизайн, верстка, інтерактив</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
