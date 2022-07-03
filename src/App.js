import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    { userName: "Eldor", age: "38", id: "g1" },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
