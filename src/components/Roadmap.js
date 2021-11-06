import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import RoadmapContent from "./RoadmapContent";

const Roadmap = () => {
  return (
    <VerticalTimeline>
      <RoadmapContent
        paragraph={
          "Creation of Soltags, which would be your identity on the solforce multiverse."
        }
      />
      <RoadmapContent
        paragraph={"We gather our troops create a collection of 8888 Soltags."}
      />
      <RoadmapContent
        paragraph={
          "A platform to create a custom avatar NFT (Sol-diers) and bind your Soltags to your custom avatar which can be claimed as an NFT to be used in the upcoming P2E game on the Solforce metaverse"
        }
      />
      <RoadmapContent
        paragraph={
          "Utility within the metaverse which would be used for the P2E game released soon."
        }
      />
      <RoadmapContent paragraph={"Merch Store – Giveaway to Sol-diers"} />
      <RoadmapContent
        paragraph={
          "10% the public sale proceeds and all royalties to go to an NGO fund for disabled veterans – (https://www.diwave.org/)"
        }
      />
    </VerticalTimeline>
  );
};

export default Roadmap;
