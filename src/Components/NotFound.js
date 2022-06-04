import styled from "styled-components";

const NotFound = () => {
  return (
    <>
      <NotFoundTitle>The page you are looking for cannot be Found</NotFoundTitle>
    </>
  );
};

export default NotFound;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  padding-top: 10rem;
  text-align: center;
  min-height: 93.55vh;
`;
