import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skills from "../skills/Skills";

function Users() {
  const users = useSelector((state) => state.users);

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
              <Skills user={user} />
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
