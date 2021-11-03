import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "./../../providers/UsersContext";

function Users() {
  const value = useContext(UsersContext);

  return (
    <div className="users-container">
      {value ? (
        <ul aria-labelledby="users-heading">
          {value.map((user) => (
            <li key={user.login.uuid}>
              <img
                src={user.picture.medium}
                alt={user.login.username}
                title={user.login.username}
              />
              <p>
                <Link to={`/user/${user.login.username}`}>
                  {user.login.username}
                </Link>
              </p>
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
