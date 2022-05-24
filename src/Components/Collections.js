import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CollectionsGen0 from "./CollectionsGen0";



const Collections = () => {
  const [imgSrc, setImgSrc] = useState();
//   const [imgSSSrc, setSSImgSrc] = useState();

  const BHImages = [
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/d4aa389a-0789-42db-0042-8737ddb9bf00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/ff3ed493-7596-4a65-2d17-b42f2a924e00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/62d25cff-a13f-42bd-d75f-4a1a27b98800/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/f7ec25b9-73fd-4106-c550-26cc1bc6ab00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages",
  ];

  const SSImages = [
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/d4aa389a-0789-42db-0042-8737ddb9bf00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/ff3ed493-7596-4a65-2d17-b42f2a924e00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/62d25cff-a13f-42bd-d75f-4a1a27b98800/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/f7ec25b9-73fd-4106-c550-26cc1bc6ab00/previewimages",
    "https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages",
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
    <Wrapper className="container">
      <h1>BucketHead Studios Collections</h1>
      <CollList>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/collections/Gen0/standard">
            <Thumbnail
              className="preview-thumbnail"
              src={imgSrc}
              alt="BH Preview Thumbnail"
            />
            <p>BH Gen 0</p>
          </Link>
        </CollListItem>
        <CollListItem className="ListItem">
          {" "}
          <Link to="/SolSabers"><Thumbnail
            className="preview-thumbnail"
            src={imgSSSrc}
            alt="BH Preview Thumbnail"
          /><p>SolSabers</p></Link>
        </CollListItem>
      </CollList>
      <Routes>
        <Route path="/Gen0/*" element={<CollectionsGen0 />} />
      </Routes>
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
grid-template-columns: 1fr:
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
  background-color: red;
  border-radius: 5px;
  text-decoration: none;
  list-style: none;

  :hover {
    background-color: yellow;
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
`;
