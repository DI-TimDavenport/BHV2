import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import StandardTrooperData from "../Data/bhpreviews";

const StandardTrooper = () => {
  return (
    <Wrapper>
      <CollDescription>Total in collection: 1653</CollDescription>
      <GridWrapper>
        {StandardTrooperData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="BH"
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

const HeavyTrooper = () => {
  return (
    <Wrapper>
      <CollDescription>Total in collection: 815</CollDescription>
      <GridWrapper>
        {StandardTrooperData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="BH"
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

const Unique = () => {
  return (
    <Wrapper>
      <CollDescription>Total in collection: 32</CollDescription>
      <GridWrapper>
        {StandardTrooperData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="BH"
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

const CollectionsGen0 = () => {
  return (
    <div className="container">
      <h1>BucketHeads Gen 0</h1>

      <CollList>
        <CollListItem>
          <Link to="/Collections/Gen0/Standard">Standard Trooper</Link>
        </CollListItem>
        <CollListItem>
          <Link to="/Collections/Gen0/HeavyTrooper">HeavyTrooper</Link>
        </CollListItem>
        <CollListItem>
          <Link to="/Collections/Gen0/Unique">Unique 1:1</Link>
        </CollListItem>
      </CollList>
      <main className="main">
        <Routes>
          <Route path="Unique" element={<Unique />} />
          <Route path="HeavyTrooper" element={<HeavyTrooper />} />
          <Route path="Standard" element={<StandardTrooper />} />
        </Routes>
      </main>
    </div>
  );
};

export default CollectionsGen0;

const CollList = styled.ul`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-gap: 1rem;
text-decoration: none;
list-style:none;
padding: 0;

@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
`;

const CollListItem = styled.li`
text-align: center;
padding: 0.5rem;
color: white;
background-color: red;
border-radius: 5px;
text-decoration: none;
list-style:none;

:hover {
background-color:yellow;
}
`;

const Wrapper = styled.div`
  padding: 1rem;
  backdrop-filter: blur(10px) opacity(90%);
`;

const CollDescription = styled.p`
  text-align: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  grid-gap: 1rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: none;
    grid-gap: 1rem;
  }
`;

const ImageContainer = styled.div``;

const PreviewImages = styled.img`
  max-width: 100%;
`;

const TextContainer = styled.div``;

const ImageDescription = styled.p`
  transform: translateY(1em);
  text-align: center;
`;
