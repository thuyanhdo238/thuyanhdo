import { skillGroups } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section">
      <div className="section__inner section__inner--narrow">
        <h2 className="skills__heading heading-hover">Technical Skills</h2>
        <div className="skills__list">
          {skillGroups.map((grp) => (
            <div className="skills__group" key={grp.label}>
              <div className="skills__label">{grp.label}</div>
              <div className="skills__chips">
                {grp.items.map((skill) => (
                  <div className="skills__chip" key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
