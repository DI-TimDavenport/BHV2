import styled from "styled-components";

const TheTeam = () => {
  return (
    <Wrapper className="container">
      <h1>BucketHead Studios Team</h1>

      <TeamList>
        <TeamMember className="TeamMember Syndicure">
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <TeamName>Syndicure</TeamName>
          <Socials href="https://www.twitter.com/syndicure" target={""}>
            <img
              src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/cef0fd51-25f6-4937-55ae-1328381c7f00/45x90"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/cef0fd51-25f6-4937-55ae-1328381c7f00/logo"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
        <TeamDetails className="syndicure-bio">
          Founder of Syndic Industries <br /> Co-Founder and developer of
          BucketHead Studios
        </TeamDetails>
        <TeamMember className="TeamMember CineNERD">
          {" "}
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <TeamName>CineNERD</TeamName>
          <Socials href="https://www.twitter.com/turock_93" target={""}>
            <img
              src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/cef0fd51-25f6-4937-55ae-1328381c7f00/logo"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
        <TeamDetails className="cinenerd-bio">
          Co-Founder and artist of BucketHead Studios
        </TeamDetails>
        <TeamMember className="TeamMember MeltedRope">
          {" "}
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <TeamName>MeltedRope</TeamName>
          <Socials href="https://www.twitter.com/meltedrope" target={""}>
            <img
              src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/cef0fd51-25f6-4937-55ae-1328381c7f00/logo"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
        <TeamDetails className="meltedrope-bio">
          Co-Founder and COO of BucketHead Studios
        </TeamDetails>
      </TeamList>
    </Wrapper>
  );
};

export default TheTeam;

const Wrapper = styled.div`
  padding: 1rem;
`;

const TeamList = styled.ul`
display: grid;
grid-template-columns: 1fr:
text-decoration: none;
list-style:none;
padding: 0;

@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}
`;

const TeamMember = styled.li`
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

const TeamDetails = styled.p`
  display: none;
  grid-column: 1/4;
  grid-row: 2;
  color: white;
  background-color: #2b282880;
  border: solid darkgrey 0.2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
  padding: 1rem;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #000;
`;

const TeamName = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Socials = styled.a`
  color: white;
`;
