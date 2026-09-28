import skills from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.category} className="skills__category">
              <div className="skills__category-header">
                <Icon className="skills__category-icon" />
                <h3 className="skills__category-title">{group.category}</h3>
              </div>
              <div className="skills__items">
                {group.items.map((skill) => (
                  <span key={skill} className="skills__chip">
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
