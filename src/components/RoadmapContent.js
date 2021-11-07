import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@material-ui/core";

const RoadmapContent = (props) => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: "rgb(21, 21, 35)", color: "white" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(21, 21, 35)" }}
      iconStyle={{ background: "rgb(21, 21, 35)", color: "rgb(21, 21, 35)" }}
    >
      <h2
        style={{ color: "white" }}
        className='vertical-timeline-element-title'
      >
        {props.title}
      </h2>
      <Typography variant='body2'>{props.paragraph}</Typography>
    </VerticalTimelineElement>
  );
};

export default RoadmapContent;
