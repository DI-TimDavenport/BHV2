import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SiteFooter from "./Footer";

const Roadmap = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #d1cfcf80" }}
          date=" Q2"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">BucketHeads Mint</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Staking Launch</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">NFT Upgrade Store</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Merch Event</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" Q3"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Game Alpha Launch</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">SolSaber Airdrop</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">SolSaber Mint</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">3D BucketHead Airdrop</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">3D BucketHead Mint</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Collectible Store Launch
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">1:1 Mini Collection</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" Q4"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Studio Ownership Event
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Game Beta Launch</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Mutation Event</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">The future</h3>
          <h2>Comics</h2>
          <h2>NFT Trophy Integration</h2>
          <h2>Multiplayer</h2>
          <h2>Game Skins</h2>
          <h2>Seasonal Gen 0 Mutations</h2>
          <h2>Gen 1 Launch</h2>
          <h2>Game: Chapter 1 full release</h2>
          <h2>+ Much more</h2>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <SiteFooter />
    </>
  );
};

export default Roadmap;
