const skillsData = [
  { name: "HTML / CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Bootstrap", level: "80%" },
  { name: "Python", level: "75%" },
  { name: "React.js", level: "65%" },
  { name: "Web3 / Blockchain", level: "60%" }
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span>{skill.name}</span>
            <div className="bar">
              <div
                className="fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
