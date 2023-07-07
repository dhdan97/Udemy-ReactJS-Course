import { React, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.unshift({ name: userName, age: userAge, id: Math.random().toString()});
      return updatedUsersList;
    });
  };
  return (
    <div>
      <AddUser addUserHandler={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
