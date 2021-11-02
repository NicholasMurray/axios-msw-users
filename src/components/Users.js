function Users({ users }) {
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
