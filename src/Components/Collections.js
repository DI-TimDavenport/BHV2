import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CollectionsGen0 from "./Collections/CollectionsGen0";
import CollectionsSS from "./Collections/CollectionsSS";
import SiteFooter from "./Footer";

const Collections = () => {
  const [imgSrc, setImgSrc] = useState();
  const [imgSSSrc, setSSImgSrc] = useState();

  const BHImages = [
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/d4aa389a-0789-42db-0042-8737ddb9bf00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/ff3ed493-7596-4a65-2d17-b42f2a924e00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/62d25cff-a13f-42bd-d75f-4a1a27b98800/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/f7ec25b9-73fd-4106-c550-26cc1bc6ab00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages",
  ];

  const SSImages = [
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0adc7226-98a1-4639-5dce-317c7b9f7500/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/21fd306d-d251-4ff6-3388-d03494f95500/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/21fd306d-d251-4ff6-3388-d03494f95500/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/c7dd821f-de5c-44b8-9fac-a9dcd1f7f000/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/4ea3164f-e6e4-417a-2eff-2c7fbfe70500/previewimages",
  ];

  useEffect(() => {
    setImgSrc(BHImages[Math.floor(Math.random() * 5)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSSImgSrc(SSImages[Math.floor(Math.random() * 5)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Wrapper className="container">
      <CollectionTitle>BucketHead Studios Collections</CollectionTitle>
      <CollList>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/collections/Gen0/standard">
            <Thumbnail
              className="preview-thumbnail"
              src={imgSrc}
              alt="BH Preview Thumbnail"
            />
            <CollectionName>BH Gen 0</CollectionName>
          </Link>
        </CollListItem>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/collections/solsabers/nft">
            <Thumbnail
              className="preview-thumbnail"
              src={imgSSSrc}
              alt="BH Preview Thumbnail"
            />
            <CollectionName>SolSabers</CollectionName>
          </Link>
        </CollListItem>
      </CollList>
      <Routes>
        <Route path="/Gen0/*" element={<CollectionsGen0 />} />
        <Route path="/SolSabers/*" element={<CollectionsSS />} />
      </Routes>
    </Wrapper>
    <SiteFooter />
    </>
  );
};

export default Collections;

const Wrapper = styled.div`
  padding: 1rem;
  min-height: 90vh;
`;

const CollectionTitle = styled.h1`
text-align:center;
font-size:4.5rem;
`;

const CollectionName = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const CollList = styled.ul`
display: grid;
grid-template-columns: 1fr;
text-decoration: none;
list-style:none;
padding: 0;

@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
}
`;

const CollListItem = styled.li`
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: white;
  background-color: #d1cfcf80;
  border: solid darkgrey 0.2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
  text-decoration: none;
  list-style: none;

  :hover {
    background-color: #2b282880;
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
`;
