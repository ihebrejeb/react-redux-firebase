const initState = {
  projects: [
    { id: "1", title: "Title 1", content: "content1" },
    { id: "2", title: "Title 2", content: "content2" },
    { id: "3", title: "Title 3", content: "content3" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("create project", action.project);
      break;
  }
  return state;
};
export default projectReducer;
