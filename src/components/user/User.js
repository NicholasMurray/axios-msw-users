import { Link, useParams } from "react-router-dom";
import "./User.css";

function User() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { username } = useParams();

  return (
    <div className="user-container">
      <h2>Selected User: {username}</h2>
      <div>
        <Link to="/">Back to Users</Link>
      </div>
    </div>
  );
}

export default User;
