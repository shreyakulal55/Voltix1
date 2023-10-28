import React from "react";
import "./Projects.css";
import * as Icon from "react-bootstrap-icons";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <h1 className="project-title">Project</h1>
        <h2 className="project-title">Great Design That Actually Works!</h2>
        <p className="project-description">
          Our versatile team is built og designers, developers and design
          marketers who all bring unique experience.
        </p>
      </div>
      <div className="container">
        <div className="card">
          <img
            src="https://th.bing.com/th/id/R.ea5aec3b071d84de241ba95657e6d05a?rik=pUQNBDk15QxnBQ&riu=http%3a%2f%2fstatic2.businessinsider.com%2fimage%2f54be6dc269bedd8644d27821%2fmicrosoft-may-be-working-on-a-strange-new-gadget-thats-a-mix-between-a-smartphone-and-a-laptop.jpg&ehk=obElsXElxkV5084eXHYenqgVQvEr%2fnVWyHZmwzTK5Qo%3d&risl=&pid=ImgRaw&r=0"
            alt="Cart Shop"
          />
          <div className="intro">
            <h1>Cart Shop</h1>
            <a href="/cart" className="btn btn-primary">
              <Icon.ArrowRightSquareFill color="yellow" size={40} />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://th.bing.com/th/id/R.f8cb19b22a2be32017f432d70467c7a3?rik=Sy3cpZ0LHUYLCg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fqtHXk2l.jpg&ehk=gYtagYDiAad%2fkDKkeu05eeQg9lyn0GqoFJeL72DFvrs%3d&risl=&pid=ImgRaw&r=0"
            alt="Shoe Shop"
          />
          <div className="intro">
            <h1>Shoe Shop</h1>
            <a href="/shoe" className="btn btn-primary">
              <Icon.ArrowRightSquareFill color="yellow" size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
