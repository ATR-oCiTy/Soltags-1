import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import RoadmapContent from "./RoadmapContent";

const Roadmap = () => {
  return (
    <VerticalTimeline>
      <RoadmapContent
        title={"Creation of Soltags: Your identity on the solforce multiverse"}
        paragraph={
          "Our Heads of Military shall create a collection of 8888 Soltags "
        }
      />
      <RoadmapContent
        title={"A platform to create a custom avatar NFT: Sol-diers"}
        paragraph={
          "Bind your Soltags to your custom avatar which can be claimed as an NFT to be used in the upcoming P2E game on the Solforce metaverse"
        }
      />
      <RoadmapContent
        title={"Metaverse: The Solforce Metaverse"}
        paragraph={
          "Utility within the metaverse which would be used for the P2E game released soon."
        }
      />
      <RoadmapContent
        title={"Merch Store"}
        paragraph={"Giveaway to Sol-diers"}
      />
      <RoadmapContent
        paragraph={
          "10% the public sale proceeds and all royalties to go to an NGO fund for disabled veterans – (https://www.diwave.org/)"
        }
      />
    </VerticalTimeline>
  );
};

export default Roadmap;
