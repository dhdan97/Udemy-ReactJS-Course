import { Fragment } from "react";
import ReactDOM from "react-dom";
import ErrorModalStyles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return (
    <div className={ErrorModalStyles.backdrop} onClick={props.errorHandler} />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={ErrorModalStyles.modal}>
      <header className={ErrorModalStyles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={ErrorModalStyles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={ErrorModalStyles.actions}>
        <Button onClick={props.errorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={props.errorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} errorHandler={props.errorHandler} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
