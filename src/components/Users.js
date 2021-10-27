import { useState, useEffect } from "react";
import axios from "axios";

export const userURL = "https://randomuser.me/api/?results=16";

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(userURL)
      .then((response) => response.data)
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="users-container">
      {users ? (
        <ul aria-labelledby="users-heading">
          {users.map((user) => (
            <li key={user.login.uuid}>
              <img
                src={user.picture.medium}
                alt={user.login.username}
                title={user.login.username}
              />
              <p>{user.login.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <span>No users currently</span>
      )}
    </div>
  );
}

export default Users;
