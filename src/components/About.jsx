import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section">
      <div className="section__header">
        <span className="section__eyebrow">About Me</span>
        <h2 className="section__title">Background & Focus</h2>
      </div>

      <div className="about__layout">
        <div className="about__text">
          <p className="about__lead">
            I am a motivated third-year BCA student with a solid foundation in computer applications, software engineering principles, and data analysis.
          </p>
          <p>
            My development journey is focused on writing structured, accessible code using React.js and Python. I enjoy taking an idea from scratch and turning it into an intuitive, functional user interface.
          </p>
          <p>
            Currently, I am expanding my skills in data science workflows and scalable web architecture. I am eager to contribute my energy and technical abilities to an impactful engineering team.
          </p>
        </div>

        <div className="about__cards">
          <div className="about__card">
            <div className="about__card-icon">
              <FaGraduationCap />
            </div>
            <div className="about__card-info">
              <h3 className="about__card-title">Academics</h3>
              <p className="about__card-highlight">BCA (3rd Year)</p>
              <p className="about__card-sub">CGPA: 9.27 • Modern College Pune</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="about__card-info">
              <h3 className="about__card-title">Location</h3>
              <p className="about__card-highlight">Pune, Maharashtra</p>
              <p className="about__card-sub">Available for onsite & remote</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-icon">
              <FaCode />
            </div>
            <div className="about__card-info">
              <h3 className="about__card-title">Primary Focus</h3>
              <p className="about__card-highlight">React.js & Python</p>
              <p className="about__card-sub">Frontend, Web Apps & Data Science</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-icon">
              <FaRocket />
            </div>
            <div className="about__card-info">
              <h3 className="about__card-title">Opportunities</h3>
              <p className="about__card-highlight">Immediate Joiner</p>
              <p className="about__card-sub">Internship & Entry-level Roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
