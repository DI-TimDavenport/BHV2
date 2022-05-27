import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components'

const GameProgressBar = () => {
  return (
    <Wrapper>
    <h1 className='progress-title'>Game Progress</h1>
    <p className='progress-text'>Check back frequently to see how we are tracking in our development.</p>
      <>
        <p className='progress-bar-text'><strong>Storyline </strong> - The lore and overarching story within the game.</p>
        <ProgressBar animated variant="success" now={10} />
      </>
      <>
        <p className='progress-bar-text'><strong>Concept Art</strong> - Characters, Weapons, Ships & Environments. </p>
        <ProgressBar animated variant="info" now={10} />
      </>
      <>
        <p className='progress-bar-text'><strong>3D Modelling</strong> - Characters, Weapons, Ships & Architecture.</p>
        <ProgressBar animated variant="warning" now={5} />
      </>
      <>
        <p className='progress-bar-text'><strong>Level and world design</strong> - Building out the planets </p>
        <ProgressBar animated variant="danger" now={10} />
      </>
      <>
        <p className='progress-bar-text'><strong>Core Game Mechanics</strong> - Implimenting the technical aspects to playing the game.</p>
        <ProgressBar animated variant="success" now={5} />
      </>
      <>
        <p className='progress-bar-text'><strong>Pre Alpha Testing</strong> - Initial planet environment mock up.</p>
        <ProgressBar animated variant="success" now={50} />
      </>
    </Wrapper>
  );
};

export default GameProgressBar;

const Wrapper = styled.div`
  background: lightgrey;
  border-radius: 5px;
  border: 3px solid grey;
  color: #000;
  margin: 1em 0em 0em 0em;
  padding: 0em 1em 1em 1em;

  .progress-title {
      text-align: center;
  }

  .progress-bar-text {
      margin: 1rem 0 0 0;
  }
`