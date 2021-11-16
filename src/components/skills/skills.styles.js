import styled from "@emotion/styled";

const StyledSkills = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.25rem;
    filter: grayscale(1);
  }

  .skilled > svg {
    filter: grayscale(0);
  }
`;

export default StyledSkills;
