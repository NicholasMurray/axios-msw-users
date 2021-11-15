import StyledAvatar from "./avatar.styles";

const Avatar = ({ user }) => {
  return (
    <StyledAvatar>
      <img
        src={user.picture.medium}
        alt={user.login.username}
        title={user.login.username}
      />
    </StyledAvatar>
  );
};

export default Avatar;
