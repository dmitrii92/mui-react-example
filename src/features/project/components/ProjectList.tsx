import React from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/components/Button";
import { makeStyles } from "@material-ui/core/styles";
import ViewProject from "./ViewProject";
import AddProjectModal from "./AddProjectModal";
import { addProject, selectProjects } from "../state/projectSlice";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
  },
  projects: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    height: "70vh",
    overflow: "auto",
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);

  const [showModal, setShowModal] = React.useState(false);
  const handleClickOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const submitNewProject = (project) => {
    dispatch(addProject(project));
    setShowModal(false);
  };

  return (
    <>
      <div className={classes.toolbar}>
        <Typography variant="h5" component="h5">
          Список проектов
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Добавить проект
        </Button>
      </div>
      <div className={classes.projects}>
        {projects.map((project) => {
          return <ViewProject key={project.name} {...project} />;
        })}
      </div>
      <AddProjectModal onClose={handleClose} isOpen={showModal} onSubmit={submitNewProject} />
    </>
  );
};

export default ProjectList;
