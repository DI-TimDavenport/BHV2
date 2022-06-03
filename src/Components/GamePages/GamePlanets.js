import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import ErtugralData from "../../Data/gamepreviews";

const Ertugral = () => {
  return (
    <Wrapper>
      <CollDescription>Planet environments and landscape previews</CollDescription>
      <GridWrapper>
        {ErtugralData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="Ertugral Landscapes"
                className="gen0-collection-images"
              ></PreviewImages>
              <TextContainer class="img__description_layer">
                <ImageDescription class="img__description">
                  {name}
                </ImageDescription>
              </TextContainer>
            </ImageContainer>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
};

const GamePlanets = () => {
  return (
    <div className="container">
      <CollList>
        <Link className="LinkItem" to="/planets/Ertugral">
          <CollListItem>Ertugral</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
        <Link className="LinkItem" to="/planets">
          <CollListItem>Coming Soon</CollListItem>
        </Link>
      </CollList>
      <main className="main">
        <Routes>
          <Route path="Ertugral" element={<Ertugral />} />
        </Routes>
      </main>
    </div>
  );
};

export default GamePlanets;

const Wrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

const CollList = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  text-decoration: none;
  list-style: none;
  padding: 1rem 1rem 1rem 1rem;
  margin:0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: none;
    grid-gap: 1rem;
  }
`;

const CollListItem = styled.li`
  text-align: center;
  list-style: none;
  color: white;
  background-color: #d1cfcf80;
  border: solid darkgrey 0.2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
  padding: 0.5rem;

  :hover {
    background-color: #2b282880;
  }
`;

const CollDescription = styled.h2`
  text-align: center;
  padding: 1rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  grid-gap: 1rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  list-style: none;
  color: white;
  background-color: #d1cfcf80;
  border: solid darkgrey 0.2rem;
  border-radius: 5px;
  padding: 0.5rem;

  :hover {
    transform: scale(1.5);
  }
`;

const PreviewImages = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
`;

const TextContainer = styled.div``;

const ImageDescription = styled.p`
  transform: translateY(1em);
  text-align: center;
`;
