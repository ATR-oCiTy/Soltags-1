import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadmapContent = (props) => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
      <h3>{props.paragraph}</h3>
    </VerticalTimelineElement>
  );
};

export default RoadmapContent;
