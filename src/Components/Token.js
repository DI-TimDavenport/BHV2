import styled from "styled-components";
import { Stream } from "@cloudflare/stream-react";

const UtilityToken = () => {
  const videoIdOrSignedUrl = "e999c90de9de869d157bda962b5adbf1";
  return (
    <Wrapper className="container">
      <TokenTitle>Overprism</TokenTitle>
      <TokenContainer>
        <VideoContainer class="img__wrap">
          <Stream
            controls
            autoplay
            loop
            muted
            src={videoIdOrSignedUrl}
          ></Stream>
        </VideoContainer>
        <TeamName>$OPrism</TeamName>
      </TokenContainer>
      <TeamDetails className="syndicure-bio">
        The currency that powers the underworld within the BucketHead ecosystem.{" "}
        <br />
        <br />
        The planet Overprism was once mined from was destroyed millenia ago
        during an uprising in the galaxy, an uprising we crushed when the
        seperatists were close to getting out of control. <br />
        <br /> Now the supply of refined $OPrism is said to
        be around 20,000,000 & you can only earn them in a small number of ways.
      </TeamDetails>
    </Wrapper>
  );
};

export default UtilityToken;

const Wrapper = styled.div`
  padding: 1rem;
`;

const TokenTitle = styled.h1`
  margin-top: 0rem;
  text-align: center;
  font-size: 4.5rem;
`;

const VideoContainer = styled.div`
  text-align: center;
  list-style: none;
  padding: 0.5rem;
`;

const TokenContainer = styled.div`
  text-align: center;
  max-width: 43rem;
  padding: 0.5rem;
  margin: 0 auto 1rem auto;
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

const TeamName = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const TeamDetails = styled.p`
  color: white;
  background-color: #2b282880;
  border: solid darkgrey 0.2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
  padding: 1rem;
`;
