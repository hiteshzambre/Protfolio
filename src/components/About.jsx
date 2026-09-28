import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container">
        <div className="about__text">
          <p>
            I'm a motivated third-year BCA student with a strong interest in
            programming, data science, software development, and
            problem-solving. I enjoy building clean, efficient, and
            user-friendly applications.
          </p>
          <p>
            I'm seeking opportunities to apply my technical knowledge, gain
            practical industry experience, work on real-world projects, and
            continuously improve my skills. I'm currently deepening my
            knowledge in React.js and Python for Data Science.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies,
            working on personal projects, and learning about cybersecurity
            and software engineering best practices.
          </p>
        </div>

        <div className="about__cards">
          <div className="about__card">
            <FaGraduationCap className="about__card-icon" />
            <h3 className="about__card-title">Education</h3>
            <p className="about__card-info">BCA — 3rd Year</p>
            <p className="about__card-info">CGPA: 9.27</p>
          </div>
          <div className="about__card">
            <FaMapMarkerAlt className="about__card-icon" />
            <h3 className="about__card-title">Location</h3>
            <p className="about__card-info">Pune, India</p>
          </div>
          <div className="about__card">
            <FaLaptopCode className="about__card-icon" />
            <h3 className="about__card-title">Interests</h3>
            <p className="about__card-info">Web Dev, Data Science, Python</p>
          </div>
          <div className="about__card">
            <FaRocket className="about__card-icon" />
            <h3 className="about__card-title">Currently Learning</h3>
            <p className="about__card-info">React.js & Data Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
