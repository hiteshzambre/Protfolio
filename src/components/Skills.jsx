import skills from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__header">
        <span className="section__eyebrow">Skills & Technologies</span>
        <h2 className="section__title">Technical Stack</h2>
      </div>

      <div className="skills__grid">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.category} className="skills__card">
              <div className="skills__card-head">
                <span className="skills__card-icon">
                  <Icon />
                </span>
                <h3 className="skills__card-title">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
