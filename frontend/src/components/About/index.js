import "./About.css";

export const About = () => {
  return (
    <>
      <div id="about">
        <h3>Salut!</h3>
        <p>
          Loirebnb is a Loire Valley wine-focues Airbnb clone. This project was
          inspired by the developer's love of Loire wines, from the briny whites
          of Muscadet, all the way to the hidden gems of the upper Loire. The
          original seed data features real winemakers and wineries from all over
          the Loire.
        </p>
        <p>
          This project was built with Express.JS, PostgreSQL, Sequelize, and
          Javascript in the backend, and React, Javascript, and plain CSS in the
          frontend.
        </p>
      </div>
      <div id="developerCTA">
        <img src="https://res.cloudinary.com/jadecabbage/image/upload/v1642365990/loirebnb%20assets/Team_Division_2019-7_iwwxzq.jpg" />
        <div id="developerCTAtext">
          <div>
          </div>
          <div id="links">
            <a href="mailto:breencf@gmail.com">
              <button className="developerCTA">Email</button>
            </a>
            <a href="http://www.github.com/breencf">
              <button className="developerCTA">
                <i className="fab fa-github-square"></i> Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/breencf/">
              <button className="developerCTA">
                <i className="fab fa-linkedin"></i> Linkedin
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
