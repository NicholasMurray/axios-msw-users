import StyledUserDetails from "./user-details.styles";

function UserDetails({ user }) {
  return (
    <StyledUserDetails>
      <span>{`Name: ${user.name.first} ${user.name.last}`}</span>
      <span>Phone: {user.phone}</span>
      <span>Email: {user.email}</span>
    </StyledUserDetails>
  );
}

export default UserDetails;
