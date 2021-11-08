import { Grid } from "@material-ui/core";
import { useEffect } from "react";
const AOS = require("aos");

const Detail = ({ image }) => {
  useEffect(() => {
    console.log("hello");
    AOS.init({
      duration: 600,
      mirror: true,
    });
  });

  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        md={6}
        sm={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div data-aos="fade-right" style={{ paddingLeft: "20%", paddingRight: "20%" }}>
          <h2 style={{fontSize:"300%"}} className="solColor">Ten-Hut !</h2>
          <p style={{color: "rgba(255,255,255,.7)", textAlign:"justify", lineHeight:"160%", fontWeight:"bold", fontSize:"130%"}}>
          WW3 is coming up, And all are recruited for war, death is inevitable for many.
          <span className="solColor" style={{fontSize:"140%"}}> 8888 unique SolTags</span> with superior traits one over the other,The idea is to create a multiverse in which war heroes are glorified with  unique soltags.
          So without further ado... <br/><br/><span className="solColor" style={{fontSize:"140%"}}>GET YOUR SOLS ENGRAVED.</span>
          </p>
        </div>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          data-aos='fade-left'
          style={{ paddingLeft: "15%", paddingRight: "15%" }}
        >
          <img src={image} alt='...' style={{ height: "60vh" }} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Detail;
