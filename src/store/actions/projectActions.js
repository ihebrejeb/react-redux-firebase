export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
        AuthorId: uid
      })
      .then(() => {
        dispatch({
          type: "ADD_PROJECT",
          project
        });
      })
      .catch(e => {
        dispatch({
          type: "ADD_PROJECT_ERROR",
          e
        });
      });
  };
};
