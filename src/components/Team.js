import { Grid } from "@material-ui/core";

const Team = (props) => {
  return (
    <Grid container item xs={12} md={6} lg={3} style={{display:"flex", justifyContent:"center"}}>
      <Grid item>
        <img src={props.image} height='263px' width='263px' alt='sup' />
        <h4 style={{ textAlign: "center" }}>{props.imageName}</h4>
      </Grid>
    </Grid>
  );
};

export default Team;
