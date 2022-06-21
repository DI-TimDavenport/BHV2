import styled from "styled-components";
import { Stream } from "@cloudflare/stream-react";
import { Routes, Route, Link } from "react-router-dom";
import SolSaberGameData from "../../Data/ssgamepreviews";
import SolSaberNFTData from "../../Data/ssnftpreviews";
import SiteFooter from "../Footer";

const SSPreview = () => {
  return (
    <Wrapper>
      <CollDescription>SolSaber NFT Previews</CollDescription>
      <GridWrapper>
        {SolSaberNFTData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="SolSabers NFT"
                className="gen0-collection-images"
              ></PreviewImages>
              <TextContainer class="img__description_layer">
                {/* <ImageDescription class="img__description">
                  {name}
                </ImageDescription> */}
              </TextContainer>
            </ImageContainer>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
};

const SSGamePreview = () => {
  return (
    <Wrapper>
      <CollDescription>SolSaber Game Modelling Preview</CollDescription>
      <GridWrapper>
        {SolSaberGameData.map(({ id, name, image }) => {
          return (
            <ImageContainer key={id} class="img__wrap">
              <PreviewImages
                src={image}
                alt="SolSabers Game Assets"
                className="gen0-collection-images"
              ></PreviewImages>
              <TextContainer class="img__description_layer">
                {/* <ImageDescription class="img__description">
                  {name}
                </ImageDescription> */}
              </TextContainer>
            </ImageContainer>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
};

const SSVideoPreview = () => {
  const videoIdOrSignedUrl = "fe1460b4b3784ef1d6aa9daf92ca5e85";
  return (
    <Wrapper>
      <CollDescription>3D Modelling</CollDescription>
      <ImageContainer class="img__wrap">
        <Stream controls autoplay loop muted src={videoIdOrSignedUrl}></Stream>
      </ImageContainer>
    </Wrapper>
  );
};

const CollectionsSS = () => {
  return (
    <>
      <div className="container">
        <SolSaberTitle>SolSabers</SolSaberTitle>
        <CollList>
          <Link className="LinkItem" to="/collections/solsabers/nft">
            <CollListItem> SolSabers NFT</CollListItem>
          </Link>
          <Link className="LinkItem" to="/collections/solsabers/game">
            <CollListItem> SolSabers Game Assets</CollListItem>
          </Link>
          <Link className="LinkItem" to="/collections/solsabers/video">
            <CollListItem> SolSabers Video Preview</CollListItem>
          </Link>
        </CollList>
        <main className="main">
          <Routes>
            <Route path="nft" element={<SSPreview />} />
            <Route path="game" element={<SSGamePreview />} />
            <Route path="video" element={<SSVideoPreview />} />
          </Routes>
        </main>
      </div>
      <SiteFooter />
    </>
  );
};

export default CollectionsSS;

const CollList = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  text-decoration: none;
  list-style: none;
  padding: 0;

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

const Wrapper = styled.div`
  padding: 1rem;
  min-height: 90vh;
`;

const SolSaberTitle = styled.h1`
margin-top:0rem;
  text-align:center;
  font-size:4.5rem;
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
`;

const PreviewImages = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
`;

const TextContainer = styled.div``;

// const ImageDescription = styled.p`
//   transform: translateY(1em);
//   text-align: center;
// `;
