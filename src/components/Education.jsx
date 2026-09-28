import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="education">
      <h2 className="section__title">Education</h2>
      <div className="education__container">
        <div className="education__timeline">
          <div className="education__item">
            <div className="education__icon">
              <FaGraduationCap />
            </div>
            <div className="education__details">
              <h3 className="education__degree">
                Bachelor of Computer Application (BCA)
              </h3>
              <p className="education__institution">
                Progressive Education Society's Modern College of Arts,
                Science and Commerce, Ganeshkhind, Pune
              </p>
              <p className="education__score">CGPA: 9.27</p>
              <p className="education__year">2023 — Present (3rd Year)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
