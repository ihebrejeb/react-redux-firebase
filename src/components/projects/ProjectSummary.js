import React from "react";

export default function ProjectSummary({ project }) {
  return (
    <div className="card  blue-grey project-summary">
      <div className="card-content white-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Iheb</p>
        <p className="grey-text text-darken-4">3rd September 2020</p>
      </div>
    </div>
  );
}
