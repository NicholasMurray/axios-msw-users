import { BrowserRouter as Router, Link } from "react-router-dom";

function Users({ users }) {
  return (
    <Router>
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
    </Router>
  );
}

export default Users;
