import styled from "@emotion/styled";

const StyledUsers = styled.div`
  width: 90vw;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }

  li {
    list-style: none;
    margin-bottom: 2rem;
  }
`;

export default StyledUsers;
