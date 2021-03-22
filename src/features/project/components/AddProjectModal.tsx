import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "../../../common/components/Button";
import { useForm } from "react-hook-form";
import { Project } from "../api/types";
import { createEvent } from "../../../common/createEvent";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  addButton: {
    margin: "10px 35px 10px 35px",
  },
}));

const DialogTitle = (props: any) => {
  const { children, onClose, ...other } = props;
  const styles = useStyles();
  return (
    <MuiDialogTitle disableTypography className={styles.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    justifyContent: "center",
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface AddProjectModalI {
  onClose: () => void;
  onSubmit: (project: Project) => void;
  isOpen: boolean;
}

const AddProjectModal: React.FC<AddProjectModalI> = (props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {},
  });
  const handleClose = () => {
    props.onClose();
  };
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.isOpen}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Новый проект
        </DialogTitle>
        <Divider />
        <DialogContent>
          <form
            ref={formRef}
            onSubmit={handleSubmit((values) => {
              props.onSubmit(values);
            })}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Название"
              name="name"
              autoComplete="name"
              autoFocus
              defaultValue="Технопарк"
              inputRef={register}
            />
            <TextField
              margin="normal"
              fullWidth
              id="startDate"
              label="Дата начала проекта"
              name="startDate"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register}
            />
            <TextField
              margin="normal"
              fullWidth
              id="endDate"
              label="Дата завершения проекта"
              name="endDate"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register}
            />
            <TextField
              margin="normal"
              fullWidth
              id="manager"
              label="Руководитель проекта"
              name="manager"
              autoComplete="manager"
              defaultValue="Денис Конев"
              inputRef={register}
            />
            <TextField
              margin="normal"
              fullWidth
              id="administrator"
              label="Администратор проекта"
              name="administrator"
              autoComplete="administrator"
              defaultValue="Просолим Лимитед"
              inputRef={register}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              formRef.current?.dispatchEvent(createEvent("submit"));
            }}
            variant="contained"
            color="secondary"
            fullWidth
            className={classes.addButton}
          >
            Добавить проект
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProjectModal;
