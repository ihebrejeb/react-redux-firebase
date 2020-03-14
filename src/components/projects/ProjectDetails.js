import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

class ProjectDetails extends Component {
  render() {
    const { project, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin"></Redirect>;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                {project.authorFirstName} {project.authorLastName}
              </div>
              <div> {moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <div className="card">
            <p className="card-content">Loading...</p>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect(props => [{ collection: "projects" }]),
  connect(mapStateToProps)
)(ProjectDetails);
