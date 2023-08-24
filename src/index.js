import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "React",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "JQuery",
    level: "intermediate",
    color: "orange",
  },
];

function App() {
  return (
    <div className="container">
      <ProfileImage />
      <div>
        <AboutProfile />
        <SkillList />
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <img
      className="profileImg"
      src="../profile-card_image.jpg"
      alt="profileCard"
    />
  );
}

function AboutProfile() {
  return (
    <div className="aboutProfile">
      <h2>Tobi Adeniyi</h2>
      <p>
        Software engineer and student at Holberton school, USA. I like to play
        games, solving problems and enjoy seeing movies at my leisure time.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skills" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😉"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
