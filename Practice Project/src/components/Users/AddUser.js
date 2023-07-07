import { useState, Fragment, useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
//import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import AddUserStyles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const nameRefValue = nameInputRef.current.value;
    const ageRefValue = ageInputRef.current.value;
    // check if input is valid
    if (nameRefValue.trim().length === 0 || ageRefValue.trim().length === 0) {
      // popup for empty input(s)
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (+ageRefValue <= 0) {
      // popup for invalid age
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    console.log(nameRefValue, ageRefValue);
    // add object into userList
    props.addUserHandler(nameRefValue, ageRefValue);
    // reset inputs
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={AddUserStyles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
