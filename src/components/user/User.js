import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skills from "../skills/Skills";
import "./User.css";

function User() {
  let { username } = useParams();
  const users = useSelector((state) => state.users);

  return (
    <div className="user-container">
      <h2>{username}</h2>
      {users
        .filter((user) => user.login.username === username)
        .map((filteredUser) => {
          return (
            <div key={filteredUser.login.uuid}>
              <img
                src={filteredUser.picture.large}
                alt={filteredUser.login.username}
                title={filteredUser.login.username}
              />
              <div className="user-details">
                <span>
                  {`Name: ${filteredUser.name.first} ${filteredUser.name.last}`}
                </span>
                <span>Phone: {filteredUser.phone}</span>
                <span>Email: {filteredUser.email}</span>
              </div>
              <Skills user={filteredUser} />
            </div>
          );
        })}
      <Link to="/">Back to Users</Link>
    </div>
  );
}

export default User;
