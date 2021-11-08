import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "./../../providers/UsersContext";
import { AngularIcon, ReactIcon, VueIcon } from "./../icons/index";

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
              <div className="icons-container">
                <AngularIcon />
                <ReactIcon />
                <VueIcon />
              </div>
              <div>
                <Link to={`/user/${user.login.username}`}>
                  {user.login.username}
                </Link>
              </div>
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
