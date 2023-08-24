import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="JQuery" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skills" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
