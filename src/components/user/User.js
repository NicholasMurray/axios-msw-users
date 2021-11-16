import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skills from "../skills/Skills";
import Avatar from "./../avatar/Avatar";
import UserDetails from "../user-details/UserDetails";
import StyledUser from "./user.styles";

function User() {
  let { username } = useParams();
  const users = useSelector((state) => state.users);

  return (
    <StyledUser>
      <div>
        <h2>{username}</h2>
      </div>
      {users
        .filter((user) => user.login.username === username)
        .map((filteredUser) => {
          return (
            <React.Fragment key={filteredUser.login.uuid}>
              <Avatar user={filteredUser} />
              <Skills user={filteredUser} />
              <UserDetails user={filteredUser} />
            </React.Fragment>
          );
        })}
      <div>
        <Link to="/">Back to Users</Link>
      </div>
    </StyledUser>
  );
}

export default User;
