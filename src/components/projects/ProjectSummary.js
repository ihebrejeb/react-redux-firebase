import React from "react";
import moment from "moment";

export default function ProjectSummary({ project }) {
  return (
    <div className="card  blue-grey project-summary">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text text-darken-4">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
}
