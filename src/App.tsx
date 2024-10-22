import { useState } from "react";
import "./index.css";

import UseForm from "./components/UserForm";
import UserList from "./components/UserList";

interface User {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <UseForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  );
}

export default App;
