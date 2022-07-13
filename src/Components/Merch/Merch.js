import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Hats from "../../Data/hats";
import HeavyTrooperData from "../../Data/heavybhpreviews";
import UniqueTrooperData from "../../Data/uniquebhpreviews";
import SiteFooter from "../Footer";

const HatImages = () => {
  return (
    <Wrapper>
      {/* <CollDescription>Total in collection: 1653</CollDescription> */}
      <GridWrapper>
        {Hats.map(({ id, name, image, link }) => {
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
                </ImageDescription><br />
                <BuyButton class="img__description" href={link} target={"_blank"}>
                  Buy Now
                </BuyButton>
              </TextContainer>
            </ImageContainer>
          );
        })}
      </GridWrapper>
    </Wrapper>
  );
};

// const HeavyTrooper = () => {
//   return (
//     <Wrapper>
//       <CollDescription>Total in collection: 815</CollDescription>
//       <GridWrapper>
//         {HeavyTrooperData.map(({ id, name, image }) => {
//           return (
//             <ImageContainer key={id} class="img__wrap">
//               <PreviewImages
//                 src={image}
//                 alt="BH"
//                 className="gen0-collection-images"
//               ></PreviewImages>
//               <TextContainer class="img__description_layer">
//                 {/* <ImageDescription class="img__description">
//                   {name}
//                 </ImageDescription> */}
//               </TextContainer>
//             </ImageContainer>
//           );
//         })}
//       </GridWrapper>
//     </Wrapper>
//   );
// };

// const Unique = () => {
//   return (
//     <Wrapper>
//       <CollDescription>Total in collection: 32</CollDescription>
//       <GridWrapper>
//         {UniqueTrooperData.map(({ id, name, image }) => {
//           return (
//             <ImageContainer key={id} class="img__wrap">
//               <PreviewImages
//                 src={image}
//                 alt="BH"
//                 className="gen0-collection-images"
//               ></PreviewImages>
//               <TextContainer class="img__description_layer">
//                 {/* <ImageDescription class="img__description">
//                   {name}
//                 </ImageDescription> */}
//               </TextContainer>
//             </ImageContainer>
//           );
//         })}
//       </GridWrapper>
//     </Wrapper>
//   );
// };

const Merch = () => {
  return (
    <>
      <div className="container">
        <BHTitle>BucketHead Studios Merch</BHTitle>
        <CollList>
          <Link className="LinkItem" to="/merch/hats">
            <CollListItem> Hats</CollListItem>
          </Link>
          {/* <Link className="LinkItem" to="/collections/Gen0/HeavyTrooper">
            <CollListItem>Heavy Trooper</CollListItem>
          </Link>
          <Link className="LinkItem" to="/collections/Gen0/Unique">
            <CollListItem> Unique 1:1</CollListItem>
          </Link> */}
        </CollList>
        <main className="main">
          <Routes>
            {/* <Route path="Unique" element={<Unique />} /> */}
            {/* <Route path="HeavyTrooper" element={<HeavyTrooper />} /> */}
            <Route path="Hats" element={<HatImages />} />
          </Routes>
        </main>
      </div>
      <SiteFooter />
    </>
  );
};

export default Merch;

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

const BHTitle = styled.h1`
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
    grid-template-columns: 1fr 1fr;
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

const TextContainer = styled.div`
margin-bottom:1rem;
`;

const ImageDescription = styled.p`
  transform: translateY(1em);
  text-align: center;
`;

const BuyButton = styled.a`
  color: #FFF;
  transform: translateY(1em);
  text-align: center;
  background-color: gray;
  border: solid lightgray 0.15rem;
  border-radius: 5px;
  padding: 0.5rem 2rem 0.8rem 2rem;

  :hover {
    color: #FFF;
    background-color: #2b282880;
  }
`;