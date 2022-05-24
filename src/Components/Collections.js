import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import CollectionsGen0 from "./CollectionsGen0";

const Collections = () => {
  return (
    <Wrapper className="container">
      <h1>BucketHead Studios Collections</h1>
      <CollList>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/Collections/Gen0">BH Gen 0</Link>
        </CollListItem>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/Collections/SolSabers">SolSabers</Link>
        </CollListItem>
      </CollList>

      <main className="main">
        <Routes>
          <Route path="/Gen0/*" element={<CollectionsGen0 />} />
        </Routes>
      </main>
    </Wrapper>
  );
};

export default Collections;

const Wrapper = styled.div`
  padding: 1rem;
  backdrop-filter: blur(10px) opacity(90%);
`;

const CollList = styled.ul`
display: grid;
grid-template-rows: 1fr 1fr:
text-decoration: none;
list-style:none;
padding: 0;

@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
}
`;

const CollListItem = styled.li`
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: white;
  background-color: red;
  border-radius: 5px;
  text-decoration: none;
  list-style: none;

  :hover {
    background-color: yellow;
  }
`;
