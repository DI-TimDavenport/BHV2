import styled from "styled-components";

const TheTeam = () => {
  return (
    <Wrapper className="container">
      <h1>BucketHead Studios Team</h1>
      <TeamList>
        <TeamMember className="TeamMember">
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <p>Syndicure</p>
          <Socials href="https://www.twitter.com/syndicure" target={""}>
            <img
              src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png 512w"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
        <TeamMember className="TeamMember">
          {" "}
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <p>CineNERD</p>
          <Socials href="https://www.twitter.com/turock_93" target={""}>
          <img
              src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png 512w"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
        <TeamMember className="TeamMember">
          {" "}
          <Thumbnail
            className="preview-thumbnail"
            src="https://imagedelivery.net/RT_RPMu352DnmQo9WAcrJw/0f31b3bd-7971-4c85-40b9-824feb5b4200/previewimages"
            alt="BH Preview Thumbnail"
          />
          <p>MeltedRope</p>
          <Socials href="https://www.twitter.com/meltedrope" target={""}>
          <img
              src="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png"
              loading="lazy"
              width="30"
              height="30"
              srcset="https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1)-p-500.png 500w, https://uploads-ssl.webflow.com/61f2155bfe47bd05cae702bb/6215c3cb3fdf7cb3aa69dee2_twitter%20(1).png 512w"
              sizes="(max-width: 991px) 100vw, 30px"
              alt=""
            />
          </Socials>
        </TeamMember>
      </TeamList>
    </Wrapper>
  );
};

export default TheTeam;

const Wrapper = styled.div`
  padding: 1rem;
  backdrop-filter: blur(10px) opacity(90%);
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

const Socials = styled.a``;
