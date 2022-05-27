import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Roadmap = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#d1cfcf80", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #d1cfcf80" }}
        date=" Q1"
        iconStyle={{ background: "#d1cfcf80", color: "#d1cfcf" }}
      >
        <h3 className="vertical-timeline-element-title">Launch BucketHeads</h3>
        <h4 className="vertical-timeline-element-subtitle">1</h4>
        <p>
          Launch Twitter, Instagram & Discord.
          Build a solid core community around the project.
          Launch previews and future plans.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "#d1cfcf80", color: "#d1cfcf80" }}
      >
        <h3 className="vertical-timeline-element-title">1</h3>
        <h4 className="vertical-timeline-element-subtitle">
         1
        </h4>
        <p>
        
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">1</h3>
        <h4 className="vertical-timeline-element-subtitle">1</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">1</h3>
        <h4 className="vertical-timeline-element-subtitle">
          1
        </h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          1
        </h3>
        <h4 className="vertical-timeline-element-subtitle">1</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          1
        </h3>
        <h4 className="vertical-timeline-element-subtitle">1</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          1
        </h3>
        <h4 className="vertical-timeline-element-subtitle">1</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default Roadmap;
