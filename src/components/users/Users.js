import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../avatar/Avatar";
import Skills from "../skills/Skills";
import StyledUsers from "./users.styles";

function Users() {
  const users = useSelector((state) => state.users);

  return (
    <StyledUsers>
      {users ? (
        <ul aria-labelledby="users-heading">
          {users.map((user) => (
            <li key={user.login.uuid}>
              <Avatar user={user} />
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
    </StyledUsers>
  );
}

export default Users;
