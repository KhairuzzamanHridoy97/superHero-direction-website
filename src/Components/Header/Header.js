import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="header-img"
          src="http://cdn.differencebetween.net/wp-content/uploads/2010/09/Difference-Between-G8-and-G20.jpg"
          alt=""
        />
      </div>
      <div className="header-content">
        <h1>Raise Fund for Climate Change</h1>
        <h5>
          Day by day the world is going to face a danger of Global Warming! So
          G-8 has to take immidiate actions to save the world.
        </h5>
        <h2>Target Budget: 10 Billion USD</h2>
      </div>
    </div>
  );
};

export default Header;
