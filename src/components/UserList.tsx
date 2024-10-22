interface User {
  name: string;
  email: string;
}
interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  if (!users || users.length === 0) {
    return <div>No users available</div>;
  }

  const renderedUsers = users.map((user) => {
    return (
      <table>
        <tr
          key={user.name}
          className="border border-red-900 w-[400px] flex justify-evenly items-center"
        >
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      </table>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr className="border border-green-600 flex justify-around items-center">
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
    </div>
  );
}

export default UserList;
