import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="section">
      <div className="section__header">
        <span className="section__eyebrow">Education</span>
        <h2 className="section__title">Academic Journey</h2>
      </div>

      <div className="education__card">
        <div className="education__icon-box">
          <FaGraduationCap />
        </div>

        <div className="education__details">
          <div className="education__headline">
            <div>
              <h3 className="education__degree">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="education__institution">
                Progressive Education Society's Modern College of Arts, Science and Commerce
              </p>
              <p className="education__location">Ganeshkhind, Pune, Maharashtra</p>
            </div>

            <div className="education__meta">
              <span className="education__badge education__badge--score">
                <FaAward /> CGPA: 9.27
              </span>
              <span className="education__badge education__badge--date">
                <FaCalendarAlt /> 2023 — Present (3rd Year)
              </span>
            </div>
          </div>

          <div className="education__focus">
            Key coursework: Object-Oriented Programming, Database Management Systems, Data Structures, Web Technology, Python, and Software Engineering.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
