import styled from "styled-components";

const GameLore = () => {
  return (
    <Wrapper className="container">
      <h1>GameLore</h1>
      <p>
        “How old is your home planet? <br />
        <br /> For how long has your species ruled over it, when did it prove to
        be the strongest, the fittest, and the smartest among the other
        creatures? Do you soar high, nesting above the clouds, or do you dwell
        beneath the crust of your planet?
        <br />
        <br /> Perhaps your race scuttles, silent and hidden, along the darkest
        seafloors. Maybe it stands tall above the earth, erecting proud
        buildings, challenging the cruel eye of a blinding star. It makes no
        difference. We are Vargz.
        <br />
        <br /> We are older. We are stronger. We are prouder and worthier. Yet,
        we lost.
        <br />
        <br />
        For millennia, we crossed the universe, testing the races we
        encountered, helping them reach their true potential. War was the forge
        in which we purged their weaknesses, revealing a glinting core of
        strength underneath. The flame of fear melted away their petty
        squabbles, the blows of our turbo lasers hammered them into shape.
        <br />
        <br /> Those who had spent centuries in pointless autophagy, too strong
        to fight if not among themselves, finally rediscovered unity. After our
        passage, civilizations rose stronger and healthier than ever before.
        <br />
        <br /> Most of them, at least. Some were too sick. Too corrupted.
        <br /> Too dangerous. They could not be allowed to evolve. Had they ever
        achieved interstellar travel, they would have become a menace to the
        entire universe. We left those to the Syndic.
        <br />
        <br /> We were the blacksmiths. We shaped, cleaned, and tempered. Yet,
        not everything can be saved. The Syndic were the cure for those beyond
        redemption. We were necessary. Perhaps, even complementary.
        <br />
        <br /> Or so we thought.
        <br />
        <br /> Then, they betrayed us.”
      </p>
    </Wrapper>
  );
};

export default GameLore;

const Wrapper = styled.div`
  padding: 1rem;
`;