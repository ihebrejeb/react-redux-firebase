import React from "react";

export default function ProjectDetails(props) {
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            Project Title - {props.match.params.id}
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            iusto maiores voluptatibus vel quibusdam, tenetur sed, asperiores,
            alias quasi voluptate aperiam possimus perferendis deserunt enim
            dolore nesciunt. Laboriosam, nulla aliquam?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by hot chick</div>
          <div>Today</div>
        </div>
      </div>
    </div>
  );
}
